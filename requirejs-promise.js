/*! see LICENCE for Simplified BSD Licence */
/*jslint browser:true, white:true*/
/*global define:true, require:true*/

define(['require'], function(require) {
  'use strict';

  /**
   * Is this object a Function?
   * Test code basically ripped from jQuery.
   */
  var isFunction = function(object) {
    if (!object) {
      return false;
    }
    return Object.prototype.toString.call(object) === '[object Function]';
  },
  /**
   * Does this object expose the basic read-only interface for a Promise?
   */
  isPromise = function(object) {
    var result = true,
    properties = [
      'always',
      'done',
      'fail',
      'pipe',
      'progress',
      'pipe',
      'state',
      'then'
    ],
    p, pLength = properties.length;

    if (!object || typeof object !== 'object') {
      return false;
    }
    for (p = 0; p < pLength; p++) {
      if (!isFunction(object[properties[p]])) {
        result = false;
        break;
      }
    }
    return result;
  };

  return {
    /**
     * @param {String} name This is the name of the desired resource module.
     * @param {Function} req Provides a "require" to load other modules.
     * @param {Function} load Pass the module's result to this function.
     * @param {Object} config Provides the optimizer's configuration.
     */
    load: function(name, req, load, config) {
      // TODO: check config.isBuild\
      // TODO: call load.fromText() if necessary to eval JavaScript text
      req([name], function(result) {
        if (isPromise(result)) {
          result.fail(function() {
            load.error.apply(this, arguments);
          });
          result.then(function() {
            load.apply(this, arguments);
          });
        } else {
          load(result);
        }
      });
    }/*,
    write: function() {
      // TODO: what needs to be done for write() ??
    }, */
/*        pluginBuilder: function() {
      // TODO: what needs to be done for pluginBuilder() ??
    } */
    /*
     * Note: we explicitly do NOT implement normalize(), as the simpler
     * default implementation is sufficient for current use cases.
     */
  };
});
