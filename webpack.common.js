/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */

module.exports = {
  entry: './app/index.jsx',
  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/app/index.html`, inject: 'head' }),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
  ],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader', 'stylelint-custom-processor-loader'],
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};
