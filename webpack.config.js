const path = require('path');
const os = require('os');

module.exports = {
  context: path.join(__dirname),
  resolve: {
    modules: [
      path.join(__dirname, '/app/static'),
      'node_modules',
    ],
  },
  entry:   {
    init: path.join(__dirname, '/app/static/init.js'),
  },
  output:  {
    path: path.join(__dirname, '/app/build'),

    // libraryTarget: 'amd',
    filename: 'init.js',
  },
  devtool: '#inline-source-map',
  module:  {
    rules: [{
      test:    /\.js$/,
      exclude: /node_modules/,
      use:     [{
        loader:  'babel-loader',
        options: {
          cacheDirectory: os.tmpdir(),
        },
      }],
    }],
  },
};
