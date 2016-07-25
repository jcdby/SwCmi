module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "flowtype"
    ],
    "rules": {
        //"flowtype/require-parameter-type": 1,
        //"flowtype/require-return-type": [
        //    1,
        //    "always",
        //    {
        //        "annotateUndefined": "never"
        //    }
        //],
        "flowtype/space-after-type-colon": [
            1,
            "always"
        ],
        "flowtype/space-before-type-colon": [
            1,
            "never"
        ],
        "flowtype/type-id-match": [
            1,
            "^([A-Z][a-z0-9]+)+Type$"
        ]
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": false
        }
    },

    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },

    "installedESLint": true
};