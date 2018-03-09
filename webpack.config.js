/*
 * webpack.config.js
 * Copyright 2017-2018 Balint Kovacs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    resolve: {
        alias: {
            "FileSaver": path.resolve(__dirname, "node_modules/file-saver/FileSaver.js")
        },
    },
};
