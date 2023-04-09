const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    // source file location
    entry: {
        audio: path.resolve(__dirname, "src", "js", "audio.js"),
        circle: path.resolve(__dirname, "src", "js", "circle.js"),
        colorpicker: path.resolve(__dirname, "src", "js", "colorpicker.js"),
        ui: path.resolve(__dirname, "src", "js", "ui.js"),
        identity: path.resolve(__dirname, "src", "js", "identity.js"),
    },
    mode: "development",
    target: "web",
    devServer: {hot: false},
    output: {
        path: path.resolve(__dirname, "src", "js", "dist"),
        filename: '[name].js'
    },
   
    plugins: [new HTMLWebpackPlugin({})]
};