const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },


  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  watch: true, // or flag in package.json
  devServer: {
    port: 3000,
    hot: true,
    open: true, // or flag in package.json
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
