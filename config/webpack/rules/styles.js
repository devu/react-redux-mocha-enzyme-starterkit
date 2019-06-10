import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { NODE_MODULES, SRC } from '../paths'
import { __PROD__ } from '../globals'

export default [
  {
    test: /\.(scss)$/,
    include: SRC,
    use: [
      __PROD__ ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
          // includePaths: [NODE_MODULES]
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('autoprefixer') // eslint-disable-line
          ],
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
          // includePaths: [NODE_MODULES]
        }
      }
    ]
  },

  {
    test: /\.css$/,
    include: NODE_MODULES,
    use: [
      __PROD__ ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true
        }
      },
      'postcss-loader'
    ]
  }
]
