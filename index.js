module.exports = {
  parser: 'babel-eslint',
  extends: ['@practio/practio', 'plugin:react/recommended'],
  plugins: ['react-hooks'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/no-children-prop': 'off',
    'template-curly-spacing': 'off',
    'react/self-closing-comp': ['error', { component: true, html: true }],
  },
  settings: {
    react: {
      version: '16',
    },
  },
};
