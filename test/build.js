/**
 * Instructions:
 * npm (-g) install requirejs
 * r.js -o path/to/test/build.js
 */

({
  mainConfigFile: 'main.js',
//  appDir: './',
//  dir: 'build/',
//  keepBuildDir: true,
  paths: {
    'jquery': 'empty:'
  },
  optimize: 'uglify',
  uglify: {
    ascii_only: true,
    max_line_length: 80
  },
  optimizeCss: 'none',
/*  modules: [
    {
      name: 'build/main',
      include: [
        'promise'
      ]
    }
  ], */
/*  stubModules: [
    'promise'
  ], */
  name: 'main',
  out: 'main.min.js'
})
