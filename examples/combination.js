/*jslint browser:true, indent:2, maxlen:80*/
/*global define, require*/ // Require.JS

define(function (require) {
  'use strict';

  var Q, ja, qc, ra, dfrd;

  Q = require('q');
  ja = require('promise!examples/jquery-amd');
  qc = require('promise!examples/q-commonjs');
  ra = require('promise!examples/rsvp-amd');

  dfrd = Q.defer();

  setTimeout(function () {

    require([
      'promise!examples/jquery-commonjs',
      'promise!examples/q-amd',
      'promise!examples/rsvp-commonjs'
    ], function (jc, qa, rc) {
      dfrd.resolve([ja, jc, qa, qc, ra, rc]);
    });

  }, 0);

  return dfrd.promise;
});
