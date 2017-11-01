var webpack = require('webpack');

module.exports = {
    entry: __dirname + "/lib/amdjs/src/frontend/frontend.js",
    output: {
        path: __dirname + '/build/bundle/js',
        filename: 'bundle.js'
    }
};
