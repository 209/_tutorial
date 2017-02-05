var path = require('path');

module.exports = {
    context: path.join(__dirname),
    resolve: {
        modules: [
            path.join(__dirname, '/app/static'),
            'node_modules'
        ]
    },
    entry: {
        init: path.join(__dirname, '/app/static/init.js')
    },
    output: {
        path: path.join(__dirname, '/app/build'),

        // libraryTarget: 'amd',
        filename: 'init.js'
    },
    devtool: '#inline-source-map',
    module:  {
        rules: [{
            test:    /\.js$/,
            exclude: /node_modules/,
            use:     [{
                loader:  'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: [
                        'transform-class-properties',
                        'transform-es2015-modules-simple-amd'
                    ]
                }
            }]
        }]
    }
};
