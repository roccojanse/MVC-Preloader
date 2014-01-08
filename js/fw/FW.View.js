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

        // events
        this.onShow = new FW.ObservableEvent(this);
        this.onHide = new FW.ObservableEvent(this);

    };

    $.extend(FW.View.prototype, {
        /** @lends FW.View */

        /**
         * displays current view
         * @return void
         */
        show: function() {
            var _this = this;
            this._$container.fadeIn(400, function() {
                _this.onShow.notify();
            });
        },

        /**
         * hides current view
         * @return void
         */
        hide: function() {
            var _this = this;
            this._$container.fadeOut(100, function() {
                _this.onHide.notify();                
            });
        }

    });

