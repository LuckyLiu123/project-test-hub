module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-standard-with-typescript",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.eslint.json"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        'prettier/prettier': 'error'
    }
}
