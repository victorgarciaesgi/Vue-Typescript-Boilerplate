const cssNext = require("postcss-cssnext");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postCss = [
  {
    loader: "postcss-loader",
    options: {
      plugins: () => [cssNext()],
      sourceMap: true,
    },
  },
];

module.exports = {
  devConfig: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        minimize: false,
        sourceMap: true,
        importLoaders: 2,
      },
    },
    ...postCss,

    {
      loader: "sass-loader",
      options: {
        outputStyle: "expanded",
        sourceMap: true,
        sourceMapContents: true,
        data: `
          @import "src/styles/colors.scss";
          @import "src/styles/variables.scss";
          @import "src/styles/mixins.scss";
        `,
        esModule: true,
      },
    },
  ],
  prodConfig: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        minimize: true,
        sourceMap: false,
        importLoaders: 2,
      },
    },
    ...postCss,

    {
      loader: "sass-loader",
      options: {
        outputStyle: "compressed",
        sourceMap: false,
        sourceMapContents: false,
        data: `
          @import "src/styles/colors.scss";
          @import "src/styles/variables.scss";
          @import "src/styles/mixins.scss";
        `,
        esModule: true,
      },
    },
  ],
};
