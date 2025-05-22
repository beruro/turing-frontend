const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// 要替换的导入路径
const OLD_IMPORT = '@fruits-chain/react-native-xiaoshu';
const NEW_IMPORT = '@turing/react-native-ui';

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
    console.error(`处理目录 ${directory} 时出错:`, error);
  }
}

// 处理单个文件
async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // 检查文件是否包含旧的导入路径
    if (content.includes(OLD_IMPORT)) {
      console.log(`修复文件: ${filePath}`);
      
      // 替换所有匹配项
      const newContent = content.replace(new RegExp(OLD_IMPORT, 'g'), NEW_IMPORT);
      
      // 写回文件
      await writeFile(filePath, newContent, 'utf8');
    }
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
  }
}

// 主函数
async function main() {
  try {
    console.log('开始修复导入路径...');
    
    // 处理所有指定目录
    for (const directory of DIRECTORIES_TO_PROCESS) {
      console.log(`处理目录: ${directory}`);
      await processDirectory(directory);
    }
    
    console.log('修复完成!');
  } catch (error) {
    console.error('修复过程中出错:', error);
  }
}

main(); 