import path from 'path'
import fs from 'fs'
import capitalize from 'lodash/capitalize'
import env from 'std-env'

export default () => ({
  // Env
  dev: Boolean(env.dev),
  test: Boolean(env.test),
  debug: undefined, // = dev
  env: {},

  // Mode
  mode: 'universal',
  modern: undefined,

  // Globals
  globalName: `nuxt`,
  globals: {
    id: globalName => `__${globalName}`,
    nuxt: globalName => `$${globalName}`,
    context: globalName => `__${globalName.toUpperCase()}__`,
    pluginPrefix: globalName => globalName,
    readyCallback: globalName => `on${capitalize(globalName)}Ready`,
    loadedCallback: globalName => `_on${capitalize(globalName)}Loaded`
  },

  // Server
  serverMiddleware: [],

  // Dirs and extensions
  srcDir: undefined,
  buildDir: '.nuxt',
  nuxtDir: fs.existsSync(path.resolve(__dirname, '..', '..', 'package.js'))
    ? path.resolve(__dirname, '..', '..') // src
    : path.resolve(__dirname, '..'), // dist
  modulesDir: [
    'node_modules'
  ],
  dir: {
    assets: 'assets',
    layouts: 'layouts',
    middleware: 'middleware',
    pages: 'pages',
    static: 'static',
    store: 'store'
  },
  extensions: [],

  // Ignores
  ignorePrefix: '-',
  ignore: [
    '**/*.test.*',
    '**/*.spec.*'
  ],

  // Generate
  generate: {
    dir: 'dist',
    routes: [],
    concurrency: 500,
    interval: 0,
    subFolders: true,
    fallback: '200.html'
  },

  // Watch
  watch: [],
  watchers: {
    webpack: {},
    chokidar: {
      ignoreInitial: true
    }
  },

  // Editor
  editor: undefined,

  // Hooks
  hooks: null
})
