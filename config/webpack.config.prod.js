const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./webpack.config.base');
const helpers = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const env = require('../environment/prod.env');
const cssNext = require('postcss-cssnext');

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
});

const configProd = {
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [cssNext()],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'compressed',
                sourceMap: false,
                sourceMapContents: false,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env': env,
    }),
    new UglifyJsPlugin({
      include: /\.js$/,
      uglifyOptions: {
        ie8: false,
        ecma: 6,
        mangle: { keep_fnames: true },
        output: {
          comments: false,
          beautify: false,
        },
        compress: { keep_fnames: true, drop_console: true },
        warnings: false,
      },
    }),
    extractSass,
    new HtmlWebpackPlugin({
      inject: true,
      template: helpers.root('/src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      chunksSortMode: 'dependency',
      serviceWorker: 'dist/service-worker.js',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

module.exports = merge(webpackConfig, configProd);
