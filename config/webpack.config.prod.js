const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./webpack.config.base');
const helpers = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const env = require('../environment/prod.env');
const cssRules = require('./css.rules.config');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const configProd = {
  mode: 'production',
  output: {
    filename: '[name].[hash].min.js',
    chunkFilename: '[name].[hash].min.js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: cssRules.prodConfig,
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /^(bundle\.).+(\.min\.js)$/,
        cache: true,
        parallel: true,
        uglifyOptions: {
          ie8: false,
          ecma: 5,
          mangle: true,
          output: {
            comments: false,
            beautify: false,
          },
          compress: { drop_console: true },
          warnings: false,
          keep_fnames: true,
        },
      }),
      new UglifyJsPlugin({
        include: /^(vendors~bundle\.).+(\.min\.js)$/,
        cache: true,
        parallel: true,
        uglifyOptions: {
          ie8: false,
          ecma: 5,
          mangle: true,
          output: {
            comments: false,
            beautify: false,
          },
          compress: { drop_console: true },
          warnings: false,
        },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new DefinePlugin({
      'process.env': env,
    }),

    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new FaviconsWebpackPlugin({
      logo: helpers.root('src/assets/images/logo.png'),
      persistentCache: true,
      inject: true,
      background: '#fff',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
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
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

module.exports = merge(webpackConfig, configProd);
