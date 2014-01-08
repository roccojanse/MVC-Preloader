    /**
     * Preloader View class
     * @class Creates preloader view objects
     * @author Rocco Janse, roccojanse@msn.com
     * @param {object} model Model data object
     * @param {object} elements Elements object containing HTMLDomElements for this view, like container, viewport etc.
     * @constructor
     */
    FW.View.Preloader = function(model, elements) {
        /** @lends FW.View.Preloader */

        // init super
        FW.View.call(this, model);

        // default vars
        this._$container = elements.container;

        this.init();

    };

    $.extend(FW.View.Preloader.prototype, FW.View.prototype, {
        /** @lends FW.View.Preloader */

        init: function() {
            this.hide();
        }

    });

