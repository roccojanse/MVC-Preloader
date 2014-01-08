    /**
     * Preloader Controller class.
     * @class Creates Preloader object
     * @author Rocco Janse, roccojanse@msn.com
     * @param {object} model Model data object
     * @param {object} view View daa object
     * @constructor
     */
    FW.Controller.Preloader = function(model, view) {
        /** @lends FW.Controller.Preloader */

        var _this = this;

        // init superclass in current context
        FW.Controller.call(this, model, view);

        // attach view listeners
        // this._view.onNextButton.attach(function(e) {
        //     e.preventDefault();
        //     _this.gotoNext();
        // });

        // this._view.onPreviousButton.attach(function(e) {
        //     e.preventDefault();
        //     _this.gotoPrevious();
        // });

        // this._view.onNavigationButton.attach(function(e) {
        //     e.preventDefault();
        //     console.log('NAV', e);
        // });

    };

    $.extend(FW.Controller.Preloader.prototype, FW.Controller.prototype, {
        /** @lends FW.Controller.Preloader */

        // gotoNext: function() {
        //     this._model.setSelected(parseInt(this._model.getNext()));
        // },

        // gotoPrevious: function() {
        //     this._model.setSelected(parseInt(this._model.getPrevious()));
        // }
    });
