const helpers = require('./helpers');
const { VueLoaderPlugin } = require('vue-loader');

const baseConfig = {
  entry: {
    bundle: helpers.root('/src/main.ts'),
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: helpers.root('dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue'],
    alias: {
      '@components': helpers.root('src/components/index.ts'),
      '@views': helpers.root('src/views'),
      '@src': helpers.root('src'),
      '@icons': helpers.root('src/assets/icons'),
      '@docs': helpers.root('src/documentation/index.ts'),
      '@images': helpers.root('src/assets/images'),
      '@classes': helpers.root('src/classes/index.ts'),
      '@services': helpers.root('src/services/index.ts'),
      '@fonts': helpers.root('src/assets/fonts'),
      '@utils': helpers.root('src/utils/index.ts'),
      '@css': helpers.root('src/styles/root.scss'),
      '@router': helpers.root('src/router/index.ts'),
      '@validators': helpers.root('src/utils/validators.ts'),
      '@methods': helpers.root('src/utils/methods.ts'),
      '@filters': helpers.root('src/utils/filters.ts'),
      '@paths': helpers.root('src/services/Api/ApiRoutes.ts'),
      '@models': helpers.root('src/models/index.ts'),
      '@store': helpers.root('src/store/index.ts'),
      '@modules': helpers.root('src/store/Modules/index.ts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        },
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|svg|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = baseConfig;
