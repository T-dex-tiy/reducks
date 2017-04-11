const path = require('path');

const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "cheap-eval-source-map",
  watch: true,
};

module.exports = config;
