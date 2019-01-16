var path = require("path");

module.exports = {
    entry: ["./src/index.tsx"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{ loader: "ts-loader" },
                ],
                exclude: /node_modules/

            }
        ]
    }
};