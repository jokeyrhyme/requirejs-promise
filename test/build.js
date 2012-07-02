/**
 * Instructions:
 * npm (-g) install requirejs
 * r.js -o path/to/test/build.js
 */

({
  mainConfigFile: 'main.js',
  appDir: './',
  dir: 'build/',
  keepBuildDir: true,
  paths: {
    'jquery': 'empty:'
  },
  optimize: 'none', //'uglify',
  uglify: {
    ascii_only: true,
    max_line_length: 80
  },
  optimizeCss: 'none',
  modules: [
    {
      name: 'main',
      include: [
        'promise'
      ],
      exclude: [
        'jquery'
      ]
    }
  ],
  stubModules: [
    'promise'
  ]
//  name: 'main'
//  out: './build/main.min.js'
})
