/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const common = require('./webpack.common.js');
/* eslint-enable import/no-extraneous-dependencies */

module.exports = merge(common, {
  mode: 'development',
  output: { filename: 'bundle.js' },
  plugins: [new webpack.HotModuleReplacementPlugin(), new DashboardPlugin()],
  resolve: { alias: { 'react-dom': '@hot-loader/react-dom' } },
  devtool: 'eval-source-map',
  devServer: { hot: true, open: true, overlay: true },
});
