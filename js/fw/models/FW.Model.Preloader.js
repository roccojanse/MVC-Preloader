    /**
     * Preloader Controller class.
     * @class Creates Preloader model object
     * @author Rocco Janse, roccojanse@msn.com
     * @param {object} model Model data object
     * @param {object} view View daa object
     * @constructor
     */
    FW.Model.Preloader = function(data) {
        /** @lends FW.Model */

        // init super
        FW.Model.call(this);

        // data container is an object
        this._length = 0;
        this._data = {};

        if (data) {
            this.add(data);
        }

    };

    $.extend(FW.Model.Preloader.prototype, FW.Model.prototype, {
        /** @lends FW.Model.Preloader */

        /**
         * add a data object to the model and notify listeners
         * @param {object} data Data object with properties like image, url, TODO: duration, effect etc
         * @returns {integer} int Index of added object
         */
        addData: function(data) {
            if (typeof data === 'object') {
                this._data[data.id] = data;
                this._length += 1;
                this.onDataAdded.notify({ 'data': data });
                return this._length;
            }  
        },

        /**
         * get specific data from data object
         * @param {string} id Id of data object to be retrieved
         * @returns {object} data Ojbect to be retrieved
         */
        get: function(id) {
            if (this._data[id]) {
                return this._data[id];
            } else {
                return;
            }
        },

        getTotal: function() {
            return this._length;
        }

    });