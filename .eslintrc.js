module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": true
  },
  "rules": {
    "react/display-name": 0,
    "react/jsx-boolean-value": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-sort-prop-types": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/wrap-multilines": 1,
    "strict": 0,
    "indent": ["error", "tab", { "SwitchCase": 1 }],
    "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "key-spacing": 0,
    "no-console": 0,
    "eqeqeq": 0,
    "semi": [2, "always"],
    "no-trailing-spaces": [2, { "skipBlankLines": false }],
    "eol-last": 2
  }
};
