module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "google",
        "prettier",
        "plugin:@next/next/recommended",
    ],
    parser: "@typescript-eslint/parser",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {},
    settings: {
        react: {
            version: "detect",
        },
    },
};
