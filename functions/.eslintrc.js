module.exports = {
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    "ecmaVersion": 2018
  },
  extends: [
    "eslint:recommended",
    "google"
  ],
  rules: {
    "max-len": ["error", {"code": 255}],
    "no-console": "off",
    "indent": "off",
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
    "no-regex-spaces": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",
    "no-mixed-spaces-and-tabs": "off",
    "comma-dangle": ["error", "never"],
    "prefer-const": ["error", {"ignoreReadBeforeAssign": true}]
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true
      },
      rules: {}
    }
  ],
  globals: {}
};
