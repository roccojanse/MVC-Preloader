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

        this._progress = 0;
        this._loaded = 0;
        this._total = this._model.getTotal();

        this._direction = 'width';

        this._$indicator = this._view._$indicator;
        this._$pbar = this._view._$progressbar;

    };

    $.extend(FW.Controller.Preloader.prototype, FW.Controller.prototype, {
        /** @lends FW.Controller.Preloader */

        startLoading: function() {

            this.update();
            this._view.show();

            var _this = this;
            var assets = this._model.getData();

            for (id in assets) {

                var asset = assets[id];

                // image
                if (asset.type == 'image') {
                    var img = new Image();
                    img.src = asset.path;

                    img.addEventListener('load', function() {    
                        _this._loaded += 1;
                        _this.update();
                    }, false);

                };

                // audio
                if (asset.type == 'audio') {

                    var audio = document.createElement('audio');
                    var srcMp3 = document.createElement('source');
                    var srcOgg = document.createElement('source');
        
                    audio.id = asset.id;
                    audio.autoplay = false;
                    audio.preload = false;

                    audio.addEventListener('progress', function() {
                        _this._loaded += 1;
                        _this.update();
                        audio.removeEventListener('progress');
                    });

                    srcMp3.src = asset.path;
                    srcMp3.type = 'audio/mpeg';

                    srcOgg.src = asset.path.replace('.mp3', '.ogg');
                    srcOgg.type = 'audio/ogg';

                    audio.appendChild(srcOgg);
                    audio.appendChild(srcMp3);

                    $(document.body).append(audio);

                };

            }


        },

        show: function() {

            this._view.show();
            
        },

        hide: function() {
            
            this._view.hide();
        },

        update: function() {

            this._progress = (this._loaded / this._total)*100;

            if (this._$pbar) {
                if (this._direction == 'height') {
                    this._$pbar.css({
                        'height': this._progress + '%'
                    });
                } else {
                    this._$pbar.css({
                        'width': this._progress + '%'
                    });
                }               
            }

            if (this._$indicator) {
                this._$indicator.html(Math.round(this._progress, 2) + '%');
            }

            if (this._loaded === this._total) {
                this.onComplete();
            }
        },

        onComplete: function() {
            this._view.hide();
        },

        setDirection: function(dir) {
            this._direction = (dir && dir == 'height') ? dir : 'width';
        }
    });
