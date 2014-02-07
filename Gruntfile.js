/*jslint indent:2, maxlen:80, node:true*/
'use strict';

// exports

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    connect: {
      server: {
        options: {
          base: "",
          port: 9999
        }
      }
    },
    watch: {},

    jslint: {
      all: {
        src: [
          '**/*.js',
          '**/*.json',
          '!**/*.min.js',
          '!node_modules/**/*',
          '!bower_components/**/*'
        ],
        exclude: [],
        directives: {
          todo: true // TODO: eventually eliminate this exemption
        },
        options: {
          errorsOnly: true,
          failOnError: true
        }
      }
    },

    mocha: {
      all: {
        options: {
          urls: [
            'http://127.0.0.1:9999/test/unminified.html',
            'http://127.0.0.1:9999/test/minified.html'
          ],
          run: true
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: '.',
          mainConfigFile: 'examples/require-config.js',
          paths: {
            jquery: 'empty:',
            q: 'empty:',
            rsvp: 'empty:'
          },
          name: 'test/tests',
          out: 'test/tests.min.js'
        }
      }
    },

    'saucelabs-mocha': {
      all: { options: require('./saucelabs') }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('build', ['requirejs']);
  grunt.registerTask('test', ['connect', 'build', 'jslint', 'mocha']);

  grunt.registerTask('travis', ['test', 'saucelabs-mocha']);
  grunt.registerTask("dev", ["connect", "watch"]);

  // Default task.
  grunt.registerTask('default', ['build', 'test']);

};
