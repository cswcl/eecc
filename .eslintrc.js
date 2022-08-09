module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [ 'eslint:recommended', '@csw/base' ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
};
