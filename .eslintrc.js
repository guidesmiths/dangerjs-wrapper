module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  }
}
