/*jslint browser:true, indent:2, maxlen:80*/
/*global define, require*/ // Require.JS

define(['jquery'], function ($) {
  'use strict';

  var dfrd;
  dfrd = new $.Deferred();

  setTimeout(function () {
    dfrd.resolve('jquery-amd');
  }, 0);

  return dfrd.promise();
});
