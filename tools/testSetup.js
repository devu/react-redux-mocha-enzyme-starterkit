
require('babel-register')()
require('raf').polyfill()

const Adapter = require('enzyme-adapter-react-16')
require('enzyme').configure({ adapter: new Adapter() })

const ignoredExtensions = [
  '.css', '.scss',
  '.gif', '.jpg', '.jpeg', '.png', '.webp', '.svg',
  '.mp4', '.m4a', '.webm', '.ogv', '.oga', '.ogg', '.mp3', '.wav',
]

ignoredExtensions.forEach((ext) => {
  require.extensions[ext] = () => null
})

const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {})
  Object.defineProperties(target, props)
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}

copyProps(window, global)
