import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { DIST, SRC } from './paths'
import rules from './rules'

const path = require('path')

export default {
  mode: 'development',
  context: SRC,

  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    'webpack-hot-middleware/client',
    './index',
  ],

  output: {
    filename: '[name].js',
    path: DIST,
    publicPath: '/',
  },

  module: {
    rules,
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      actions: path.resolve('./src/actions'),
      components: path.resolve('./src/components'),
      api: path.resolve('./src/api'),
      services: path.resolve('./src/services'),
      utils: path.resolve('./src/utils'),
      reducers: path.resolve('./src/reducers'),
      styles: path.resolve('./src/styles'),
      model: path.resolve('./src/model')
    },
  },

  optimization: {
    minimize: false,
    namedModules: true,
    noEmitOnErrors: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`,
      favicon: 'favicon.ico',
    }),
  ],

  devtool: 'eval-source-map',
  target: 'web',

  performance: {
    hints: false
  },
}
