/*jslint browser:true, indent:2, maxlen:80*/
/*global define, require*/ // Require.JS

/*global suite, test, setup, teardown, suiteSetup, suiteTeardown*/ // mocha
/*global assert*/ // chai

suite('jQuery Promise example', function () {
  'use strict';

  test('AMD: direct require', function (done) {
    require(['examples/jquery-amd'], function (promise) {
      assert(promise);
      assert.isObject(promise);
      assert.isFunction(promise.then);
      done();
    });
  });

  test('AMD: require with promise!', function (done) {
    require(['promise!examples/jquery-amd'], function (result) {
      assert(result);
      assert.isString(result);
      assert.equal(result, 'jquery-amd');
      done();
    });
  });

  test('CommonJS: direct require', function (done) {
    require(['examples/jquery-commonjs'], function (promise) {
      assert(promise);
      assert.isObject(promise);
      assert.isFunction(promise.then);
      done();
    });
  });

  test('CommonJS: require with promise!', function (done) {
    require(['promise!examples/jquery-commonjs'], function (result) {
      assert(result);
      assert.isString(result);
      assert.equal(result, 'jquery-commonjs');
      done();
    });
  });

});

suite('Q Promise example', function () {
  'use strict';

  test('AMD: direct require', function (done) {
    require(['examples/q-amd'], function (promise) {
      assert(promise);
      assert.isObject(promise);
      assert.isFunction(promise.then);
      done();
    });
  });

  test('AMD: require with promise!', function (done) {
    require(['promise!examples/q-amd'], function (result) {
      assert(result);
      assert.isString(result);
      assert.equal(result, 'q-amd');
      done();
    });
  });

  test('CommonJS: direct require', function (done) {
    require(['examples/q-commonjs'], function (promise) {
      assert(promise);
      assert.isObject(promise);
      assert.isFunction(promise.then);
      done();
    });
  });

  test('CommonJS: require with promise!', function (done) {
    require(['promise!examples/q-commonjs'], function (result) {
      assert(result);
      assert.isString(result);
      assert.equal(result, 'q-commonjs');
      done();
    });
  });

});

suite('RSVP Promise example', function () {
  'use strict';

  test('AMD: direct require', function (done) {
    require(['examples/rsvp-amd'], function (promise) {
      assert(promise);
      assert.isObject(promise);
      assert.isFunction(promise.then);
      done();
    });
  });

  test('AMD: require with promise!', function (done) {
    require(['promise!examples/rsvp-amd'], function (result) {
      assert(result);
      assert.isString(result);
      assert.equal(result, 'rsvp-amd');
      done();
    });
  });

  test('CommonJS: direct require', function (done) {
    require(['examples/rsvp-commonjs'], function (promise) {
      assert(promise);
      assert.isObject(promise);
      assert.isFunction(promise.then);
      done();
    });
  });

  test('CommonJS: require with promise!', function (done) {
    require(['promise!examples/rsvp-commonjs'], function (result) {
      assert(result);
      assert.isString(result);
      assert.equal(result, 'rsvp-commonjs');
      done();
    });
  });

});

suite('combination example', function () {
  'use strict';

  test('AMD: direct require', function (done) {
    require(['examples/combination'], function (promise) {
      assert(promise);
      assert.isObject(promise);
      assert.isFunction(promise.then);
      done();
    });
  });

  test('AMD: require with promise!', function (done) {
    require(['promise!examples/combination'], function (result) {
      assert(result);
      assert.isArray(result);
      assert.sameMembers(result, [
        'jquery-amd',
        'jquery-commonjs',
        'q-amd',
        'q-commonjs',
        'rsvp-amd',
        'rsvp-commonjs'
      ]);
      done();
    });
  });

});
