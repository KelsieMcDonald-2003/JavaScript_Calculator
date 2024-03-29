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
    main: './src/js/main.js',
    navbar: './src/js/navbar.js',
    calculator1: './src/js/calvs1.js',
    calculator2: './src/js/calvs2.js',
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
      template: path.resolve(__dirname, "./src/Index.html"),
      chunks: ["main"],
      inject: "body",
      filename: "Index.html",
    }),
    new htmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/Calculator1.html"),
        chunks: ["calculator1"],
        inject: "body",
        filename: "Calculator1.html",
      }),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/Calculator2.html"),
        chunks: ["calculator2"],
        inject: "body",
        filename: "Calculator2.html",
      }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/commoncode/Navbar.html"),
      chunks: ["main"],
      inject: "body",
      filename: "navbar.html",
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