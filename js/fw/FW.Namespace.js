    /**
     * @class
     * @constructor
     * @namespace
     */
    FW = {
        /** @lends FW */

        name: "FW - FrameWork by Rocco"

    };

    $.extend(FW.prototype, {
        /** @lends FW */

        /**
         * get framework info
         * @returns {string} Nameof Framework
         */
        getName: function() {
            return this.name;
        }

    });

