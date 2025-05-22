#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🚀 Turing React Native UI Release Setup 🚀\n');
console.log('This script will help you set up your environment for creating GitHub releases.\n');
console.log('You need to create a GitHub Personal Access Token (PAT) with the following scopes:');
console.log('- repo (Full control of private repositories)');
console.log('- workflow (Update GitHub Action workflows)\n');
console.log('To create a token, go to:');
console.log('https://github.com/settings/tokens/new\n');

rl.question('Please enter your GitHub Personal Access Token: ', (token) => {
  if (!token || token.trim() === '') {
    console.log('\n❌ No token provided. Setup aborted.');
    rl.close();
    return;
  }

  // Create .env file
  const envContent = `# GitHub Personal Access Token for release-it
GITHUB_TOKEN=${token.trim()}
`;

  try {
    fs.writeFileSync(path.join(process.cwd(), '.env'), envContent);
    console.log('\n✅ .env file created successfully!');
  } catch (error) {
    console.error('\n❌ Failed to create .env file:', error.message);
    console.log('\nAlternatively, you can set the token as an environment variable:');
    console.log(`export GITHUB_TOKEN=${token.trim()}`);
  }

  console.log('\n📝 Next steps:');
  console.log('1. Make sure your code is committed and pushed');
  console.log('2. Run one of the following commands to create a release:');
  console.log('   - yarn release:patch (for bug fixes)');
  console.log('   - yarn release:minor (for new features)');
  console.log('   - yarn release:major (for breaking changes)');
  console.log('   - yarn release:beta (for beta releases)\n');

  rl.close();
});

rl.on('close', () => {
  console.log('Thank you for using Turing React Native UI! 🙏\n');
  process.exit(0);
}); 