const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: { 'test': './index.js' },
  output: {
    filename: 'test.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }],
  },
  plugins: [new BundleAnalyzerPlugin()]
};
