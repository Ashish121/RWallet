
module.exports = {
    extends: ["react-app", "react-app/jest","eslint:recommended"],
    "rules": {
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "indent": ["error", "tab"],
        "no-console": ["error"],
        'no-duplicate-imports': 2,
        'indent': [2,  2],
        'semi': [2, 'always'],
        'quotes': [2, 'single'],
        'no-trailing-spaces': [1, {
            ignoreComments: true,
            skipBlankLines: true
        }],
        'max-len': [2, {
            code: 100,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          }],
    }
}
