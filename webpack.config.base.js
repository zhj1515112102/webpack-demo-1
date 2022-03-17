var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: "My App",
    template: 'src/assets/index.html',
  }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
        ],
      },
      {
        test: /\.less$/i,
        loader: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.styl$/,
        loader: ['style-loader','css-loader',"stylus-loader"], // 将 Stylus 文件编译为 CSS
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
    ],
  },
};