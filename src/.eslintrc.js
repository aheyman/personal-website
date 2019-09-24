module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [0],
    'react/prop-types': 0, // I promise to re-enable this at some point
  },
  env: {
    browser: true,
    jest: true,
  },
};
