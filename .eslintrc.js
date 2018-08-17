module.exports = {
    "extends": [
        "eslint:recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    "ecmaFeatures": {
        "modules": true
    },
    "env": {
        "mocha": true,
        "es6": true,
        "node": true,
    },
    "globals": {
        "window": true
    },
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "info", "log"]
        }]
    }
}
