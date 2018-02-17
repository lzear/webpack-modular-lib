const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  target: 'node',
  entry: {
    'main': './src/index.js',
    'leftPadMap': './src/leftPadMap.js',
    'leftPadMapReverse': './src/leftPadMapReverse.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: [
    nodeExternals(),
    /mypackagename$/,
    /mypackagename\/dist/
  ],
  module: { rules: [{ test: /\.js$/, loader: 'babel-loader' }], },
  node: {
    dgram: 'empty', fs: 'empty', net: 'empty', tls: 'empty', child_process: 'empty',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false, comparisons: false },
      output: { comments: false, ascii_only: true }
    }),
    new BundleAnalyzerPlugin()
  ]
};
