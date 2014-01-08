    /**
     * Base framework View class. Namespace.
     * @class Creates base view objects. Should be extended.
     * @author Rocco Janse, roccojanse@msn.com
     * @param {object} model Model data object
     * @constructor
     */
    FW.View = function(model) {
        /** @lends FW.View */

        // default vars
        this._model = model;
        this._$container = null;

    };

    $.extend(FW.View.prototype, {
        /** @lends FW.View */

        /**
         * displays current view
         * @return void
         */
        show: function() {
            this._$container.fadeIn();
        },

        /**
         * hides current view
         * @return void
         */
        hide: function() {
            this._$container.hide();
        }

    });

