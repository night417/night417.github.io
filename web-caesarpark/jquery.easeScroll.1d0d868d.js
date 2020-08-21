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
})({"js/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll/jquery.easeScroll.js":[function(require,module,exports) {
$.fn.easeScroll = function (options) {
  !function () {
    function e() {
      var e = !1;
      e && c("keydown", r), v.keyboardSupport && !e && u("keydown", r);
    }

    function t() {
      if (document.body) {
        var t = document.body,
            o = document.documentElement,
            n = window.innerHeight,
            r = t.scrollHeight;
        if (S = document.compatMode.indexOf("CSS") >= 0 ? o : t, w = t, e(), x = !0, top != self) y = !0;else if (r > n && (t.offsetHeight <= n || o.offsetHeight <= n)) {
          var a = !1,
              i = function i() {
            a || o.scrollHeight == document.height || (a = !0, setTimeout(function () {
              o.style.height = document.height + "px", a = !1;
            }, 100));
          };

          if (o.style.height = "auto", setTimeout(i, 10), S.offsetHeight <= n) {
            var l = document.createElement("div");
            l.style.clear = "both", t.appendChild(l);
          }
        }
        v.fixedBackground || b || (t.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll");
      }
    }

    function o(e, t, o, n) {
      if (n || (n = 1e3), d(t, o), 1 != v.accelerationMax) {
        var r = +new Date(),
            a = r - C;

        if (a < v.accelerationDelta) {
          var i = (1 + 30 / a) / 2;
          i > 1 && (i = Math.min(i, v.accelerationMax), t *= i, o *= i);
        }

        C = +new Date();
      }

      if (M.push({
        x: t,
        y: o,
        lastX: 0 > t ? .99 : -.99,
        lastY: 0 > o ? .99 : -.99,
        start: +new Date()
      }), !T) {
        var l = e === document.body,
            u = function u() {
          for (var r = +new Date(), a = 0, i = 0, c = 0; c < M.length; c++) {
            var s = M[c],
                d = r - s.start,
                f = d >= v.animationTime,
                h = f ? 1 : d / v.animationTime;
            v.pulseAlgorithm && (h = p(h));
            var m = s.x * h - s.lastX >> 0,
                w = s.y * h - s.lastY >> 0;
            a += m, i += w, s.lastX += m, s.lastY += w, f && (M.splice(c, 1), c--);
          }

          l ? window.scrollBy(a, i) : (a && (e.scrollLeft += a), i && (e.scrollTop += i)), t || o || (M = []), M.length ? E(u, e, n / v.frameRate + 1) : T = !1;
        };

        E(u, e, 0), T = !0;
      }
    }

    function n(e) {
      x || t();
      var n = e.target,
          r = l(n);
      if (!r || e.defaultPrevented || s(w, "embed") || s(n, "embed") && /\.pdf/i.test(n.src)) return !0;
      var a = e.wheelDeltaX || 0,
          i = e.wheelDeltaY || 0;
      return a || i || (i = e.wheelDelta || 0), !v.touchpadSupport && f(i) ? !0 : (Math.abs(a) > 1.2 && (a *= v.stepSize / 120), Math.abs(i) > 1.2 && (i *= v.stepSize / 120), o(r, -a, -i), void e.preventDefault());
    }

    function r(e) {
      var t = e.target,
          n = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== H.spacebar;
      if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) return !0;
      if (s(t, "button") && e.keyCode === H.spacebar) return !0;
      var r,
          a = 0,
          i = 0,
          u = l(w),
          c = u.clientHeight;

      switch (u == document.body && (c = window.innerHeight), e.keyCode) {
        case H.up:
          i = -v.arrowScroll;
          break;

        case H.down:
          i = v.arrowScroll;
          break;

        case H.spacebar:
          r = e.shiftKey ? 1 : -1, i = -r * c * .9;
          break;

        case H.pageup:
          i = .9 * -c;
          break;

        case H.pagedown:
          i = .9 * c;
          break;

        case H.home:
          i = -u.scrollTop;
          break;

        case H.end:
          var d = u.scrollHeight - u.scrollTop - c;
          i = d > 0 ? d + 10 : 0;
          break;

        case H.left:
          a = -v.arrowScroll;
          break;

        case H.right:
          a = v.arrowScroll;
          break;

        default:
          return !0;
      }

      o(u, a, i), e.preventDefault();
    }

    function a(e) {
      w = e.target;
    }

    function i(e, t) {
      for (var o = e.length; o--;) {
        z[N(e[o])] = t;
      }

      return t;
    }

    function l(e) {
      var t = [],
          o = S.scrollHeight;

      do {
        var n = z[N(e)];
        if (n) return i(t, n);

        if (t.push(e), o === e.scrollHeight) {
          if (!y || S.clientHeight + 10 < o) return i(t, document.body);
        } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return i(t, e);
      } while (e = e.parentNode);
    }

    function u(e, t, o) {
      window.addEventListener(e, t, o || !1);
    }

    function c(e, t, o) {
      window.removeEventListener(e, t, o || !1);
    }

    function s(e, t) {
      return (e.nodeName || "").toLowerCase() === t.toLowerCase();
    }

    function d(e, t) {
      e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (k.x !== e || k.y !== t) && (k.x = e, k.y = t, M = [], C = 0);
    }

    function f(e) {
      if (e) {
        e = Math.abs(e), D.push(e), D.shift(), clearTimeout(A);
        var t = D[0] == D[1] && D[1] == D[2],
            o = h(D[0], 120) && h(D[1], 120) && h(D[2], 120);
        return !(t || o);
      }
    }

    function h(e, t) {
      return Math.floor(e / t) == e / t;
    }

    function m(e) {
      var t, o, n;
      return e *= v.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (o = Math.exp(-1), e -= 1, n = 1 - Math.exp(-e), t = o + n * (1 - o)), t * v.pulseNormalize;
    }

    function p(e) {
      return e >= 1 ? 1 : 0 >= e ? 0 : (1 == v.pulseNormalize && (v.pulseNormalize /= m(1)), m(e));
    }

    var settings = $.extend({
      // These are the defaults.
      frameRate: 60,
      animationTime: 1000,
      stepSize: 120,
      pulseAlgorithm: !0,
      pulseScale: 8,
      pulseNormalize: 1,
      accelerationDelta: 20,
      accelerationMax: 1,
      keyboardSupport: !0,
      arrowScroll: 50,
      touchpadSupport: !0,
      fixedBackground: !0
    }, options);
    var w,
        g = {
      frameRate: settings.frameRate,
      animationTime: settings.animationTime,
      stepSize: settings.stepSize,
      pulseAlgorithm: settings.pulseAlgorithm,
      pulseScale: settings.pulseScale,
      pulseNormalize: settings.pulseNormalize,
      accelerationDelta: settings.accelerationDelta,
      accelerationMax: settings.accelerationMax,
      keyboardSupport: settings.keyboardSupport,
      arrowScroll: settings.arrowScroll,
      touchpadSupport: settings.touchpadSupport,
      fixedBackground: settings.fixedBackground,
      excluded: ""
    },
        v = g,
        b = !1,
        y = !1,
        k = {
      x: 0,
      y: 0
    },
        x = !1,
        S = document.documentElement,
        D = [120, 120, 120],
        H = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36
    },
        v = g,
        M = [],
        T = !1,
        C = +new Date(),
        z = {};
    setInterval(function () {
      z = {};
    }, 1e4);

    var A,
        N = function () {
      var e = 0;
      return function (t) {
        return t.uniqueID || (t.uniqueID = e++);
      };
    }(),
        E = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (e, t, o) {
        window.setTimeout(e, o || 1e3 / 60);
      };
    }(),
        K = /chrome|iPad/i.test(window.navigator.userAgent),
        L = ("onmousewheel" in document);

    L && K && (u("mousedown", a), u("mousewheel", n), u("load", t));
  }();
};
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
},{}]},{},["C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll/jquery.easeScroll.js"], null)
//# sourceMappingURL=/jquery.easeScroll.1d0d868d.js.map