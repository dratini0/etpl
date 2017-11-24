var webpack = require('webpack');
var path = require('path')
module.exports = {
    entry: path.resolve(__dirname, "lib/amdjs/src/frontend/frontend.js"),
    output: {
        path: path.resolve(__dirname, 'build/bundle/js'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map',
    },
    devtool: "source-map",
};
