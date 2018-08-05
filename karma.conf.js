module.exports = function(config) {
    config.set({
        "browsers": config.coverage ? [ "ChromeHeadless" ] : [ "Chrome" ],
        "client": { "clearContext": false },
        "colors": true,
        "coverageReporter": {
            "dir": "reports",
            "reporters": [
                {
                    "subdir": "coverage",
                    "type": "html"
                }
            ]
        },
        "failOnEmptyTestSuite": false,
        "files": [ "tests.index.js" ],
        "frameworks": [ "jasmine" ],
        "preprocessors": {
            "tests.index.js": [ "webpack", "sourcemap" ]
        },
        "reporters": config.coverage ? [ "progress", "coverage" ] : [ "progress", "kjhtml" ],
        "webpack": {
            "cache": true,
            "devtool": "inline-source-map",
            "module": {
                "rules": [
                    {
                        "enforce": "post",
                        "exclude": /node_modules|\.spec\.js$|tests/,
                        "test": /\.js$/,
                        "use": {
                            "loader": "istanbul-instrumenter-loader",
                            "options": { "esModules": true }
                        }
                    }
                ]
            }
        }
    });
};
