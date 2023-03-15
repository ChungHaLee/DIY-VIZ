const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    // source file location
    entry: {
        audio: path.resolve(__dirname, "src", "js", "audio.js"),
        circle: path.resolve(__dirname, "src", "js", "circle.js"),
        sparkle: path.resolve(__dirname, "src", "js", "sparkle.js"),
        starfield: path.resolve(__dirname, "src", "js", "starfield.js"),
        vanta: path.resolve(__dirname, "src", "js", "vanta.js"),
        birds: path.resolve(__dirname, "node_modules", "vanta", "src", "vanta.birds.js"),
        colorpicker: path.resolve(__dirname, "src", "js", "colorpicker.js"),
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