module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['import', 'jsx-a11y', 'react'],

  env: {
    browser: true,
    node: true,
    mocha: true
  },

  globals: {
    __DEV__: false,
    __PROD__: false
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['src', 'node_modules'],
            extensions: ['.js', '.json', '.jsx', '.css']
          }
        }
      }
    }
  },

  rules: {
    'no-use-before-define': 0,
    'import/no-cycle': [2, { maxDepth: 1 }],
    'import/extensions': [2, 'never'],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: ['tools/**', 'config/**', '**/*.test.js', './*.js', 'src/services/**'],
        optionalDependencies: false,
        peerDependencies: false
      }
    ],

    // jsx-a11y
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,

    // react
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-bind': 0,

    // core
    'lines-between-class-members': 0,
    'arrow-body-style': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'import/named': 0,
    'comma-dangle': 0,
    'func-names': [2, 'as-needed'],
    'import/prefer-default-export': 0,
    'arrow-parens': 0,
    semi: [2, 'never'],
    'max-len': [2, 100, 4, { ignoreUrls: true }],
    'no-unexpected-multiline': 2,
    'no-await-in-loop': 0,
    'no-unused-expressions': 0
  }
}
