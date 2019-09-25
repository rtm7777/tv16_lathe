module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  "env": {
    "browser": true,
    "node": true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    useJSXTextNode: false,
    tsconfigRootDir: "./",
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": ["error", {
      "allowTypedFunctionExpressions": true,
      "allowExpressions": true,
    }],
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
          "delimiter": "none",
          "requireLast": false,
      },
      "singleline": {
          "delimiter": "comma",
          "requireLast": false,
      },
    }],
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-max-props-per-line": [2, {"maximum": 3, "when": "always" }],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}