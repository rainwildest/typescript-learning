const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js"
  },
  resolve: {
    // 存放文件后缀，启动自动解析文件的拓展
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: "./dist",
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: 8080
  },
  plugins: [
    new CleanWebpackPlugin({
      // 编译之前清除该文件夹下的内容
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ]
}