const path = require("path"); // eslint-disable-line no-unused-vars
const HtmlWebpackPlugin = require("html-webpack-plugin"); // eslint-disable-line no-unused-vars
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // eslint-disable-line no-unused-vars


module.exports = {
    mode: "development",
    entry: "./src/index.tsx", // ✅ Correct entry point
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"), // ✅ Updated path
            filename: "index.html"
        })
    ],
    devServer: {
        static: "./dist",
        hot: true,
        open: true,
        port: 3000,
        client: {
            logging: "none",
        }
    },
    stats: "errors-warnings",
    infrastructureLogging: {
        level: "error",
    },
    mode: "development",
};