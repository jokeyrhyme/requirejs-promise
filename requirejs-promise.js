/*! see LICENCE for Simplified BSD Licence */
/*jslint browser:true, white:true*/
/*global define:true, require:true*/

define(['jquery', 'require'],
    function($, require) {
      'use strict';

      var isPromise = function(object) {
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
          var result = req(name);
          if (isPromise(result)) {
            $.when(result)
            .fail(function() {
              load.error.apply(this, arguments);
            })
            .then(function() {
              load.apply(this, arguments);
            });
          } else {
            load(result);
          }
        },
        write: function() {
          // TODO: what needs to be done for write() ??
        },
        pluginBuilder: function() {
          // TODO: what needs to be done for pluginBuilder() ??
        }
        /*
         * Note: we explicitly do NOT implement normalize(), as the simpler
         * default implementation is sufficient for current use cases.
         */
      };
});
