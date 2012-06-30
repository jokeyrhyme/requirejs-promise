/*jslint browser:true, white:true*/
/*global define:true, require:true*/

define('example', ['jquery'], function($) {
  'use strict';
  var dfrd = new $.Deferred(),
  payload = {
    isOkay: true,
    message: 'example is loaded'
  };

  setTimeout(function() {
    dfrd.resolve(payload);
  }, 0);

  return dfrd.promise();
});
