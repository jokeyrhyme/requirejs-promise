/*jslint indent:2, maxlen:80, node:true*/
'use strict';

// exports

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

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
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.registerTask('test', ['jslint', 'requirejs']);

  // Default task.
  grunt.registerTask('default', ['test']);

};
