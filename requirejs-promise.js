/*! see LICENCE for Simplified BSD Licence */

define(['require'], function(require) {

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
            // TODO: call load.error() if error
            // TODO: call load(result)
        },
        /**
         * @param {String} name This is the name of the desired resource module.
         * @param {Function} normalize A function able to normalize the name.
         */
        normalize: function(name, normalize) {
        },
        write: function() {
        },
        pluginBuilder: function() {
        }
    };
});
