const webpackBaseConfig = require('./webpack.config.base');
const env = require('../environment/dev.env');
const webpack = require('webpack');
const path = require('path');
const helpers = require('./helpers');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackDashboard = require('webpack-dashboard/plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const cssRules = require('./css.rules.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackDevConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: cssRules.devConfig,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: helpers.root('/src/index.html'),
      filename: 'index.html',
    }),
    new DefinePlugin({
      'process.env': env,
    }),
    new webpackDashboard(),
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 5000,
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: true,
    // open: true,
    quiet: true,
    inline: true,
    noInfo: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: false,
    },
  },
};

const devExport = merge(webpackBaseConfig, webpackDevConfig);

module.exports = devExport;
