const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
 mode: 'production',
 entry: './src/client/index.js',
 devtool: 'source-map',
 module: {
  rules: [
   {
    test: '/\.js$/',
    exclude: /node_modules/,
    loader: "babel-loader"
   },
   {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
     {
      loader: 'file-loader',
     },
    ],
   }
  ]
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: "./src/client/views/index.html",
   filename: "./index.html"
  })

 ]
}
