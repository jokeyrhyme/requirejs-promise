/*jslint browser:true, indent:2, maxlen:80*/
/*global define, require*/ // Require.JS

define(['q'], function (Q) {
  'use strict';

  var dfrd;
  dfrd = Q.defer();

  setTimeout(function () {
    dfrd.resolve('q-amd');
  }, 0);

  return dfrd.promise;
});
