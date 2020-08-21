// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
$(".loading").addClass("show");
$("body").addClass("noScroll");
setTimeout(function () {
  $(".loading").removeClass("show");
  $("body").removeClass("noScroll");

  if ($(window).width() > 1230) {
    // setTimeout(function () {
    $(".featureList .item .img").addClass("animation2"); // }, 500);
  }
}, 2000);
$(document).keydown(function (event) {
  if (event.which == 37 || event.which == 39) {
    event.preventDefault();
  }
}); // easeScroll

$("html").easeScroll(); // header start

if ($(window).width() < 1230) {
  $(".headerBooking-header").on("click", function (e) {
    e.preventDefault;
    $("ul.headerBooking-header").toggleClass("show");
  });
} else {
  $(".headerBooking-header").on("mouseenter", function () {
    $("ul.headerBooking-header").addClass("show");
  }).on("mouseleave", function () {
    $("ul.headerBooking-header").removeClass("show");
  });
}

$(".languageBox-header span").on("click", function () {
  $(".language-header").toggleClass("show");
}); // header end
// ytbg start
// jQuery("[data-youtube]").youtube_background();

jQuery(function () {
  jQuery("#ytbg").YTPlayer();
}); // ytbg end
//  newsArea start

$(".slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
    breakpoint: 1280,
    settings: {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false
    }
  }, {
    breakpoint: 767,
    settings: {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false
    }
  }, {
    breakpoint: 500,
    settings: {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true
    }
  }]
});
$(".sliderBtnPrev").on("click", function () {
  $(".slider").slick("slickPrev");
});
$(".sliderBtnNext").on("click", function () {
  $(".slider").slick("slickNext");
});
$(".newsArea .dotBox a").click(function () {
  var cardShow = 4;

  if ($(window).width() < 767) {
    cardShow = 2;
  } else if ($(window).width() < 1420) {
    cardShow = 3;
  }

  if (!$(this).hasClass("current")) {
    var index = $(".newsArea .dotBox a").index(this);
    $(this).addClass("current").siblings().removeClass("current");
    $(".slider").slick("slickGoTo", index * cardShow);
    console.log(index * cardShow);
  }
}); //  newsArea end
// linkArea start

if ($(window).width() > 1230) {
  $(window).scroll(function () {
    offsetTop = $(window).scrollTop();

    if (offsetTop < $(".featureArea").offset().top) {
      TweenLite.to(".linkArea .link-leftBox", 1, {
        y: -offsetTop / 20
      }); // TweenLite.to(".linkArea .rings", 1, { y : -offsetTop/20 });

      TweenLite.to(".linkArea .link-rightBox", 1, {
        y: offsetTop / 150
      });
      TweenLite.to(".linkArea .link-txt", 1, {
        y: -offsetTop / 8
      });
    }
  });
} // linkArea end
// featureArea start


$(".featureList").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: false,
  responsive: [{
    breakpoint: 1230,
    settings: {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: true,
      swipe: true,
      // lazyLoad: "ondemand",
      fade: true,
      speed: 1000
    }
  }]
});
$(".featureArea .dotBox a").click(function () {
  var index = $(".featureArea .dotBox a").index(this);

  if ($(window).width() < 1230) {
    if (!$(this).hasClass("current")) {
      $(this).addClass("current").siblings().removeClass("current");
      $(".featureList").slick("slickGoTo", index);
    }
  } else {
    if (!$(this).hasClass("current")) {
      $(".featureList .item .img").addClass("animation1");
      $(".featureList .item").addClass("change");
      $(this).addClass("current").siblings().removeClass("current");
      setTimeout(function () {
        $(".featureList .item .img").removeClass("animation2");
      }, 500);
      setTimeout(function () {
        $(".featureList").slick("slickGoTo", index, true);
        $(".featureList .item .img").removeClass("animation1");
        $(".featureList .item").removeClass("change"); // $(".featureList .item .img").removeClass("animation2");

        $(".featureList .item .img").addClass("animation2");
      }, 700);
    }
  }
}); // featureArea end
// map start

var map = L.map("map").setView([25.011717, 121.461704], 20);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker = L.marker([25.011717, 121.462704]).addTo(map); // map end
// book start

function fun1() {
  $("#to").focus();
}

$(function () {
  var Today = new Date();
  var dateFormat = "mm/dd/yy";
  $("#from").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    changeYear: true,
    yearRange: "2020:2021",
    numberOfMonths: 1,
    minDate: new Date(),
    onClose: fun1
  }).on("change", function () {
    $("#to").datepicker("option", "minDate", $("#from").datepicker("getDate"));
  });
  $("#to").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    changeYear: true,
    yearRange: "2020:2021",
    numberOfMonths: 1,
    minDate: new Date()
  });
});
$(".bookBox .text input").on("focus", function () {
  $(this).parent().parent().addClass("show");
});

if ($(".bookBox .text").hasClass("show")) {}

$(".bookBox .text input").on("blur", function () {
  $(this).parent().parent().removeClass("show");
});
$(".book-btn").on("click", function (e) {
  e.preventDefault();

  if ($("#from").val() == "" || $("#to").val() == "") {
    var txt = "";

    if ($("#from").val() == "") {
      txt += "請選擇入住日期\n";
    }

    if ($("#to").val() == "") {
      txt += "請選擇退房日期\n";
    }

    alert(txt);
  }
}); // book end
// scroll to top start

$(".scroll").click(function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}); // scroll to top end
// menu start

function menuShow() {
  $(".menuArea").toggleClass("menu-show");
  $(".menu-btn > span:nth-child(2) > span:nth-child(1)").toggleClass("rotate45");
  $(".menu-btn > span:nth-child(2) > span:nth-child(2)").toggleClass("rotate-45");
  $(".menu-btn > span:nth-child(1)").toggleClass("opacity0");
  $(".menu-btn > span:nth-child(3)").toggleClass("opacity0");
  $(".menu-btn").toggleClass("btn-show");
  $("body").toggleClass("noScroll");
  $(".headerBookingBox").toggleClass("menuShow");
  $(".languageBox").toggleClass("menuShow");
  $(".menuBox h2").toggleClass("menuShow");
  $(".menuBox .menu-item").toggleClass("menuShow");
  $(".menu-bottom").toggleClass("menuShow");

  if ($(".language-menu").hasClass("show")) {
    $(".language-menu").removeClass("show");
  }
}

$(".menu-btn").on("click", function () {
  menuShow();
});
$(".menu-block").on("click", function () {
  menuShow();
});
$(".headerBooking-menu").on("mouseenter", function () {
  $("ul.headerBooking-menu").addClass("show");
}).on("mouseleave", function () {
  $("ul.headerBooking-menu").removeClass("show");
});
$(".languageBox-menu span").on("click", function () {
  $(".language-menu").toggleClass("show");
}); // menu end
// header

function headerChange() {
  if ($(window).scrollTop() >= 100) {
    $("header").addClass("change");
    $(".menu-btn").addClass("btn-change");
  } else if ($(window).scrollTop() < 100) {
    $("header").removeClass("change");
    $(".menu-btn").removeClass("btn-change");
  }
}

function scrollChange() {
  if ($(window).scrollTop() >= 500) {
    $(".scroll").addClass("show");
  } else if ($(window).scrollTop() < 500) {
    $(".scroll").removeClass("show");
  }
}

headerChange();
scrollChange(); // menu-down

var scroll = $(window).scrollTop();
$(window).on("scroll", function () {
  headerChange();
  scrollChange();

  if ($(window).width() < 960) {
    if ($(window).scrollTop() < scroll) {
      $(".menu-down").removeClass('hide');
    } else if ($(window).scrollTop() > scroll) {
      $(".menu-down").addClass('hide');
    }
  } else {
    $(".menu-down").removeClass('hide');
  }

  scroll = $(window).scrollTop();
}); // resize

$(window).resize(function () {
  if ($(window).width() < 960) {
    $(".menu-down").removeClass('hide');
  }
});
},{}],"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59715" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map