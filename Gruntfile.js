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
          '!test/**/*',
          '!node_modules/**/*'
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
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-jslint');

  grunt.registerTask('test', ['jslint']);

  // Default task.
  grunt.registerTask('default', ['test']);

};
