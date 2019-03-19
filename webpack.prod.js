/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
/* eslint-enable import/no-extraneous-dependencies, no-unused-vars */
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'vendor', chunks: 'initial' },
      },
    },
    runtimeChunk: { name: 'manifest' },
  },
  output: { chunkFilename: '[name].[chunkhash:4].js', filename: '[name].[chunkhash:4].js' },
  plugins: [
    new CleanWebpackPlugin(),
    new LodashModuleReplacementPlugin({ unicode: true }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: `${__dirname}/reports/bundle.html`,
    }),
  ],
});
