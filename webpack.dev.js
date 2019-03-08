/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
/* eslint-enable import/no-extraneous-dependencies */

module.exports = merge(common, {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'dist',
    hot: true,
  },
});
