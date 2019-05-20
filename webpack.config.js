const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(`mode is: ${mode}`);

  return {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name]-[hash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin({}),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src', 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ],
    devServer: {
      open: true,
      historyApiFallback: true
    }
  };
};
