const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// 要替换的导入路径
const OLD_IMPORT = '@turing/react-native-ui';
const NEW_IMPORT = 'turing-react-native-ui';

// 要处理的目录
const DIRECTORIES_TO_PROCESS = ['./src', './.dumi', './docs'];

// 递归处理目录
async function processDirectory(directory) {
  try {
    const files = await readdir(directory);
    
    for (const file of files) {
      const fullPath = path.join(directory, file);
      const stats = await stat(fullPath);
      
      if (stats.isDirectory()) {
        await processDirectory(fullPath);
      } else if (stats.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
        await processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// 处理单个文件
async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8');
    
    if (content.includes(OLD_IMPORT)) {
      const updatedContent = content.replace(new RegExp(OLD_IMPORT, 'g'), NEW_IMPORT);
      await writeFile(filePath, updatedContent, 'utf-8');
      console.log(`Updated imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// 开始处理所有目录
async function main() {
  for (const directory of DIRECTORIES_TO_PROCESS) {
    await processDirectory(directory);
  }
  console.log('Import path replacement completed!');
}

main().catch(console.error); 