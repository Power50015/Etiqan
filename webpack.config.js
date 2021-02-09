// required files
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// vars for project
let htmlpages = [];
const pages = ["index"];

//load multi html pages
pages.forEach((element) => {
  htmlpages.push(
    new HtmlWebpackPlugin({
      filename: element + ".html",
      template: "src/template/" + element + ".pug",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    })
  );
});

// Template rules
const template = {
  test: /\.pug$/,
  use: ["html-loader", "pug-html-loader"],
};
const style = {
  test: /\.scss$/,
  use: [
    // MiniCssExtractPlugin.loader, //3. Extract css into files
    "style-loader",
    "css-loader", //2. Turns css into commonjs
    "sass-loader", //1. Turns sass into css
  ],
};
const images = {
  test: /\.(svg|png|jpg|gif)$/,
  use: {
    loader: "img-optimize-loader",
    options: {
      compress: {
        mode: "high",
      },
      name: "[name].[hash].[ext]",
      outputPath: "images",
    },
  },
};
const fonts = {
  test: /\.(otf|eot|ttf|woff|woff2)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: "fonts",
    },
  },
};
// configuration
const config = {
  entry: {
    main: "./src/script/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [template, style, images, fonts],
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({
      options: {
        minimize: true,
        sourceMap: true,
      },
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
    ...htmlpages,
  ],
};

// export module
module.exports = {
  ...config,
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
  },
};
