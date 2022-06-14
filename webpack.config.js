// Generated using webpack-cli https://github.com/webpack/webpack-cli

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pkg from 'webpack';

const { SourceMapDevToolPlugin } = pkg;

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.jsx',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(path.resolve(), 'dist'),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: 'babel-loader', // определяем загрузчик
        options: {
          presets: ['@babel/preset-react'], // используемые плагины
        },
      },
    ],
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};
