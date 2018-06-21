import { SRC } from '../paths'
import { __PROD__ } from '../globals'

const rules = [
  {
    test: /\.js[x]?$/,
    include: SRC,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader'
    }
  },
]

if (__PROD__) {
  const eslintRule = {
    test: /\.js[x]?$/,
    include: SRC,
    enforce: 'pre',
    use: [
      {
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  }

  rules.push(eslintRule)
}


export default rules
