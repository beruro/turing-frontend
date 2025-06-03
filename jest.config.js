module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  cacheDirectory: '.jest/cache',
  setupFiles: ['<rootDir>/jest-setup.js'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$', 'test-utils'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-native-community|react-native-gesture-handler|react-native-safe-area-context|@fruits-chain)/)',
  ],
  testEnvironment: 'node',
  // 使用我们的React Native mock
  // 先清除之前的映射
  moduleNameMapper: {
    // '^react-native$': 'react-native-web',  // 注释掉这一行
    '^react-native$': '<rootDir>/__mocks__/react-native.js',
  },
}
