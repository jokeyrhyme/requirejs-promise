/*jslint browser:true, indent:2, maxlen:80*/
/*global define, require*/ // Require.JS

define(['rsvp'], function (RSVP) {
  'use strict';

  var promise;
  promise = new RSVP.Promise(function (resolve) { // , reject

    setTimeout(function () {
      resolve('rsvp-amd');
    }, 0);

  });

  return promise;
});
