/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
/* eslint-enable import/no-extraneous-dependencies */
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: false,
      reportFilename: `${__dirname}/reports/bundle.html`,
    }),
  ],
});
