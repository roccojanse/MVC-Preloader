    /**
     * Base framework View class. Namespace.
     * @class Creates base view objects
     * @author Rocco Janse, roccojanse@msn.com
     * @param {object} model Model data object
     * @param {object} elements Elements object containing HTMLDomElements for this view, like container, viewport etc.
     * @constructor
     */
    FW.View = function(model, elements) {
        /** @lends FW.View */

        // default vars
        this._model = model;
        this._$container = elements.container;

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

