/*jslint node:true, indent:2*/

'use strict';

// 3rd-party modules

var gulp = require('gulp');
gulp.util = require('gulp-util');
var PluginError = gulp.util.PluginError;

var LintStream = require('jslint').LintStream;
var through = require('through2');

// this module

function jslint(options) {
  var toString;
  toString = function (chunk, error) {
    var filePath, output;
    filePath = chunk.file.replace(process.cwd() + '/', '');
    output = filePath + ' ' + error.line + ':' + error.character + ' ';
    output += error.reason + '\n' + error.evidence;
    return output;
  };
  return through.obj(function (file, enc, callback) {
    var stream, error;
    stream = new LintStream(options);
    error = this.emit.bind(this, 'error');
    stream.on('error', error);
    stream.on('data', function (chunk) {
      if (!chunk.linted.ok && Array.isArray(chunk.linted.errors)) {
        chunk.linted.errors.forEach(function (e) {
          error(new PluginError('gulp-jslint', toString(chunk, e)));
        });
      }
    });
    if (file.isBuffer()) {
      stream.write({ file: file.path, body: file.contents.toString(enc) });
    }
    if (file.isStream()) {
      this.emit('error', new PluginError('gulp-jslint', 'Streams not supported!'));
    }
    this.push(file);
    return callback();
  });
}

var paths = {
  scripts: [
    '**/*.js',
    '**/*.json',
    '!**/*.min.js',
    '!node_modules/**/*',
    '!bower_components/**/*'
  ]
};

gulp.task('jslint', function () {
  return gulp.src(paths.scripts)
    .pipe(jslint());
});

gulp.task('default', function () { return true; });
