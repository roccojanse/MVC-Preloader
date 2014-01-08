    /**
     * @class
     * @constructor
     * @namespace
     */
    FW.Utils = {
        /** @lends FW.Utils */

        /**
         * returns type of variable, fixes typeof Array issue
         * @returns {string} Type of variable
         */
        typeOf: function(value) {
            var s = typeof value;
            if (s === 'object') {
                if (value) {
                    if (value instanceof Array) {
                        s = 'array';
                    }
                } else {
                    s = 'null';
                }
            }
            return s;
        }

    };

    $.extend(FW.Utils.prototype, {
        /** @lends FW.Utils */



    });
