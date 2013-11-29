/*jslint browser:true, indent:2, maxlen:80*/
/*global define, require*/ // Require.JS

define(function (require) {
  'use strict';

  var $, dfrd;
  $ = require('jquery');
  dfrd = new $.Deferred();

  setTimeout(function () {
    dfrd.resolve('jquery-commonjs');
  }, 0);

  return dfrd.promise();
});
