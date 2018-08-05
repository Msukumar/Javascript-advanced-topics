const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const entry = JSON.parse(fs.readFileSync("./package.json")).main;

module.exports = {
    "devServer": {
        "hot": true,
        "inline": true,
        "stats": "errors-only"
    },
    entry,
    "mode": "development",
    "module": {
        "rules": [
            {
                "exclude": /node_modules/,
                "include": [ path.join(__dirname, "src") ],
                "test": /\.js$/,
                "use": [
                    {
                        "loader": "babel-loader"
                    }
                ]
            }
        ]
    },
    "output": {
        "filename": "bundle.js",
        "path": path.join(__dirname, "dist"),
        "publicPath" : "/"
    },
    "plugins": [
        new webpack.SourceMapDevToolPlugin({
            "filename": "[file].map"
        })
    ]
};
