/*jslint browser:true, white:true*/
/*global define:true, require:true*/
/*global module:true, ok:true, test:true*/

require.config({
  paths: {
    'promise': '../requirejs-promise',
    'jquery': './jquery-1.7.2.min'
  }
});

function isPromise(object) {
  var result = true;
  if ($.type(object) !== 'object') {
    return false;
  }
  $.each([
      'always',
      'done',
      'fail',
      'pipe',
      'progress',
      'pipe',
      'state',
      'then'
    ], function(index, method) {
      if ($.type(object[method]) !== 'function') {
        result = false;
        return false;
      }
  });
  return result;
}

require(['jquery'], function($) {
  module('test utility functions');

  test('isPromise()', function() {
    var deferred = new $.Deferred(),
    promise = deferred.promise();
    ok(typeof isPromise === 'function', 'isPromise() function is defined');
    ok(!isPromise(123), 'number is not a Promise');
    ok(!isPromise('abc'), 'string is not a Promise');
    ok(!isPromise([]), 'array is not a Promise');
    ok(!isPromise({}), 'plain object is not a Promise');
    ok(!isPromise(true), 'boolean is not a Promise');
    ok(isPromise(deferred), 'Deferred is a Promise');
    ok(isPromise(promise), 'Promise is a Promise');
  });
});

require(['example'],
    function(payload) {
      'use strict';

      module('direct require on jQuery Promise example');

      test('jQuery Promise example', function() {
        ok(isPromise(payload), 'example returns a Promise');
      });

});

require(['promise!example'],
    function(payload) {
      'use strict';

      module('require jQuery promise example via requirejs-promise plugin');

      test('jQuery Promise example', function() {
        ok(!isPromise(payload), 'promise!example return is not a Promise');
        ok(payload.isOkay, 'promise!example return is as expected');
      });

});
