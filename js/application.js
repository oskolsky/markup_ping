// yepnope.js
// http://yepnopejs.com/
// ----------------------------------------------------------------------------------------------------
yepnope([
  // jQuery
  // http://jquery.com/
  // ----------------------------------------------------------------------------------------------------
  {
    load: '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',
    complete: function() {
      if (!window.jQuery) {
        yepnope('/js/vendor/jquery-1.8.3.min.js');
      }
    }
  },
  
  // jQuery UI
  // http://jqueryui.com/
  // ----------------------------------------------------------------------------------------------------
  {
    load: '//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js',
    complete: function() {
      if (!window.jQuery) {
        yepnope('/js/vendor/jquery-ui-1.9.1.min.js');
      }
    }
  },

  // Underscore.js
  // http://underscorejs.org/
  // ----------------------------------------------------------------------------------------------------
  '/js/vendor/underscore-min.js',

  // Backbone.js
  // http://backbonejs.org/
  // ----------------------------------------------------------------------------------------------------
  '/js/vendor/backbone-min.js',

  // Debounced resize()
  // http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
  // ----------------------------------------------------------------------------------------------------
  '/js/vendor/smartresize.js',

  // matchMedia() polyfill
  // https://github.com/paulirish/matchMedia.js/
  // ----------------------------------------------------------------------------------------------------
  {
    test: window.matchMedia,
    nope: '/js/polyfill/vendor/matchMedia.js'
  },

  // addEventListener() polyfill
  // https://github.com/paulirish/matchMedia.js/
  // ----------------------------------------------------------------------------------------------------
  {
    test: document.addEventListener,
    nope: '/js/polyfill/vendor/matchMedia.addListener.js'
  },

  // enquire.js
  // http://wickynilliams.github.com/enquire.js/
  // ----------------------------------------------------------------------------------------------------
  '/js/vendor/enquire.min.js',

  // jquery.placeholder.js
  // https://github.com/serby/jquery.placeholder.js
  // ----------------------------------------------------------------------------------------------------
  {
    test: Modernizr.input.placeholder,
    nope: '/js/polyfill/vendor/jquery.placeholder.js',
    callback: function(url, result, key) {
      if (result === false) {
        $("input, textarea").placeholder();
      }
    }
  },

  // explorercanvas
  // http://code.google.com/p/explorercanvas/
  // ----------------------------------------------------------------------------------------------------
  {
    test: Modernizr.canvas,
    nope: '/js/polyfill/vendor/excanvas.compiled.js'
  },

  // iosSlider
  // http://iosscripts.com/iosslider/
  // ----------------------------------------------------------------------------------------------------
  '/js/vendor/jquery.iosslider.min.js',

  '/js/jquery.extensions.js',
  '/js/project.js'
]);