/*jslint browser:true, indent:2, maxlen:80*/
/*global define, require*/ // Require.JS

define([
  'q',
  'promise!examples/jquery-amd',
  'promise!examples/q-commonjs',
  'promise!examples/rsvp-amd'
], function (Q, ja, qc, ra) {
  'use strict';

  var dfrd;

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
