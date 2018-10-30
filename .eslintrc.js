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
    noConsole: process.env.NODE_ENV === 'production' ? 'error' : 'off',
    noDebugger: process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //'no-param-reassign': ['error', { props: false }],
    camelcase: 0,
    noParamReassign: 0,
    guardForIn: 'off',
    arrayCallbackReturn: 'off',
    noReturnAssign: 'off',
    semi: ['error', 'always'],
    noExtraSemi: 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-var': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'import/no-useless-path-segments': 'error',
    'import/newline-after-import': 'error',
    'import/extensions': ['error', 'never', { vue: 'always' }],
    'import/no-self-import': 'error',
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
};
