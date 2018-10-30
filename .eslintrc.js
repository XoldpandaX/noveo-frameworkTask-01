module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //'no-param-reassign': ['error', { props: false }],
    'camelcase': 0,
    "no-param-reassign": 0,
    'no-restricted-syntax': ['error', 'WithStatement'],
    'guard-for-in': 'off',
    'array-callback-return': 'off',
    'no-return-assign': 'off',
    'semi': ['error', 'always'],
    'no-extra-semi': 'off',
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
};
