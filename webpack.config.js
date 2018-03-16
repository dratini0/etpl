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

const webpack = require('webpack');
const path = require('path')

module.exports = function(env, argv){
    const dev = env && env.dev
    let result = {
        mode: dev ? "development" : "production",
        entry: {
            bundle: path.resolve(__dirname, "lib/es6/src/frontend/frontend.js"),
            evaluateWorker: path.resolve(__dirname, "lib/es6/src/frontend/evaluateWorker.js"),
        },
        output: {
            path: path.resolve(__dirname, 'build/bundle/js'),
            filename: '[name].js',
            sourceMapFilename: '[name].js.map',
        },
        devtool: dev ? "eval-source-map" : "source-map",
        resolve: {
            alias: {
                "FileSaver": path.resolve(__dirname, "node_modules/file-saver/FileSaver.js")
            },
        },
        plugins: [
        ],
        devServer: {
            contentBase: path.resolve(__dirname, "web"),
            publicPath: "/js/",
            port: 8000,
        },
    };

    return result;
}
