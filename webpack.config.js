const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/js/app.js'),
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js'],
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    }
};