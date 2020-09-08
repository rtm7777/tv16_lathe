module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    useJSXTextNode: false,
    project: './tsconfig.json',
    tsconfigRootDir: './',
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowTypedFunctionExpressions: true,
      allowExpressions: true,
    }],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    'max-len': ['error', { code: 120 }],
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': ['error', { minProperties: 4, consistent: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-max-props-per-line': [2, { maximum: 3, when: 'always' }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
