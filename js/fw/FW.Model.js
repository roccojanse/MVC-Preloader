    /**
     * Base framework Model class. Namespace.
     * @class Creates base model data objects
     * @author Rocco Janse, roccojanse@msn.com
     * @constructor
     */
    FW.Model = function() {
        /** @lends FW.Model */

        // data container
        this._data = [];

        // events
        this.onDataAdded = new FW.ObservableEvent(this);

    };

    $.extend(FW.Model.prototype, {
        /** @lends FW.Model */

        /**
         * add multiple data objects to the model
         * @param {array} data Array of data objects
         * @see FW.Model#addData
         * @returns void
         */
        add: function(data) {

            console.log(data, FW.Utils.typeOf(data));

            if (FW.Utils.typeOf(data) === 'array') {
                for (var i = 0; i < data.length; i++) {
                    this.addData(data[i]);
                }
            }
        },

        /**
         * add a data object to the model and notify listeners
         * @param {object} data Data object with properties like image, url, TODO: duration, effect etc
         * @returns {integer} int Index of added object
         */
        addData: function(data) {
            if (typeof data === 'object') {
                this._data.push(data);
                this.onDataAdded.notify({ 'data': data });
                return this._data.length;
            }  
        },

        /**
         * returns current data of model
         * @returns {array} Data
         */
        getData: function() {
            return this._data;
        }

    });

