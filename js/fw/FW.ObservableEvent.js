    /**
     * Handles model/view events, notifing all attached listeners when event occurs
     * @author Rocco Janse, roccojanse@msn.com
     * @class Creates observable event objects
     * @param {object} sender Sender of current event
     * @constructor
     */
    FW.ObservableEvent = function(sender) {
        /** @lends FW.ObservableEvent */

        this._sender = sender;
        this._listeners = [];

    };

    $.extend(FW.ObservableEvent.prototype, {
        /** @lends FW.ObservableEvent */

        /**
         * attach a listener to current event object
         * @param {function} listener (Anonymous) function to execute when notified of event
         * @returns void
         */        
        attach: function(listener) {
            this._listeners.push(listener);
        },

        /**
         * notify all listeners of current event
         * @param {object} [arguments] Arguments to send with notification
         * @returns Arguments (if set), sender
         */ 
        notify: function(arguments) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (arguments) {
                    this._listeners[i](arguments, this._sender);
                } else {
                    this._listeners[i](this._sender);
                } 
            }
        }

    });