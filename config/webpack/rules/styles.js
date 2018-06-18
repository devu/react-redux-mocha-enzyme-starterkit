import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { NODE_MODULES, SRC } from '../paths'
import { __PROD__ } from '../globals'

export default [
  {
    test: /(\.css|\.scss|\.sass)$/,
    include: SRC,
    use: [
      __PROD__ ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][local]',
          importLoaders: 1,
        },
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('autoprefixer') // eslint-disable-line
          ],
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ],
  },

  {
    test: /\.css$/,
    include: NODE_MODULES,
    use: [
      __PROD__ ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ],
  },
]
