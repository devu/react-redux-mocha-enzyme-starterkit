import path from 'path'

import { SRC } from '../paths'
import { __PROD__ } from '../globals'

export default [
  {
    test: /\.(gif|jpe?g|png|webp|ico|svg)$/,
    include: SRC,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: path.join(
            '[path]',
            __PROD__ ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
          limit: 10000,
        },
      },
    ],
  },
  {
    test: /\.(mp4|m4a|webm|ogv|oga|ogg|mp3|wav)$/,
    include: SRC,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: path.join(
            '[path]',
            __PROD__ ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
        },
      },
    ],
  },
]
