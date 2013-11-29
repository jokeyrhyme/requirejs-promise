/*jslint browser:true, indent:2, maxlen:80*/
/*global define, require*/ // Require.JS

define(function (require) {
  'use strict';

  var Q, dfrd;
  Q = require('q');
  dfrd = Q.defer();

  setTimeout(function () {
    dfrd.resolve('q-commonjs');
  }, 0);

  return dfrd.promise;
});
