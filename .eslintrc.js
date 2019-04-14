module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "env": {
    "jest": true,
    "browser": true,
    "node": true,
  },
  rules: {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
};
