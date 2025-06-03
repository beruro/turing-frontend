module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    ['@babel/preset-typescript', { allowDeclareFields: true }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-flow-strip-types',
        ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
      ]
    }
  }
}
