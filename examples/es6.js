/*jslint browser:true, indent:2, maxlen:80*/
/*global define, require*/ // Require.JS

/*global Promise*/ // ES6 native Promise

define(function () {
  'use strict';

  var promise;
  promise = new Promise(function (resolve) { // , reject

    setTimeout(function () {
      resolve('es6');
    }, 0);

  });

  return promise;
});
