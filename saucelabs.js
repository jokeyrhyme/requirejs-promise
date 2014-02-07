/*jslint indent:2, maxlen:80, node:true*/
'use strict';

// exports

module.exports = {
  urls: [
    'http://127.0.0.1:9999/test/unminified.html',
    'http://127.0.0.1:9999/test/minified.html'
  ],
  tunnelTimeout: 5,
  build: process.env.TRAVIS_JOB_ID,
  concurrency: 3,
  browsers: [
    {
      browserName: "internet explorer",
      platform: "WIN8",
      version: "10"
    }
  ],
  testname: 'requirejs-promise',
  tags: ['master']
};
