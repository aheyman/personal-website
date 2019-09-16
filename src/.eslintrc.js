module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [0],
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'react/prop-types': 0,
  },
  env: {
    browser: true,
    jest: true,
  },
};
