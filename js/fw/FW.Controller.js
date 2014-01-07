    /**
     * Base framework Controller class. Namespace.
     * @class Creates base controller objects
     * @author Rocco Janse, roccojanse@msn.com
     * @param {object} model Model data object
     * @param {object} view View daa object
     * @constructor
     */
    FW.Controller = function(model, view) {
        /** @lends FW.Controller */

        this._model = model;
        this._view = view;

    };

    $.extend(FW.Controller.prototype, {
        /** @lends FW.Controller */


    });

