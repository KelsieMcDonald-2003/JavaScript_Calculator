const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

require('dotenv').config();

const isProduction = (process.env.NODE_ENV === 'production');

const fileNamePrefix = isProduction ? '[chunkhash].' : '';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: './dev_modules/@ocdla/calculator/js/main.js',
    navbar: './dev_modules/@ocdla/calculator/js/navbar.js',
    directions: './dev_modules/@ocdla/calculator/js/directions.js',
    calculator: './dev_modules/@ocdla/calculator/js/calculator.js',
    controller: './src/js/controller.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: fileNamePrefix + '[name].js',
    clean: true,
  },
  target: 'web',
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      index: "home.html",
      writeToDisk: true,
    },
  },
  devtool: isProduction ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      chunks: ["main"],
      inject: "body",
      filename: "index.html",
    }),
    new htmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/calculator.html"),
        chunks: ["controller"],
        inject: "body",
        filename: "calculator.html",
      }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/commoncode/navbar.html"),
      chunks: ["main"],
      inject: "body",
      filename: "navbar.html",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/commoncode/directions.html"),
      chunks: ["directions"],
      inject: "body",
      filename: "directions.html",
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      APIKEY: JSON.stringify(process.env.APIKEY),
    }),
    new MiniCssExtractPlugin({
      filename: fileNamePrefix + "[name].css",
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
};