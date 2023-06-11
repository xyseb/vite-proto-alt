'use strict';
/*
 * ESLINT Configuration file
 */

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-form-fields/recommended",
        "plugin:react-hook-form/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/jsx-runtime", //disalow 'import React' old needs (before react 17)
        "plugin:compat/recommended"
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
    ],
    rules: {
    },
    settings: {
        polyfills: [
            "fetch",
            "Promise",
            "WebAssembly.compile",
            "Array.prototype.push",
            "Array.prototype.includes"
        ]
    }
}
