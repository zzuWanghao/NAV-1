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
})({"images/acf.jpg":[function(require,module,exports) {
module.exports = "/acf.9b9b7a43.jpg";
},{}],"images/WeiBo.jpg":[function(require,module,exports) {
module.exports = "/WeiBo.bc83ae0b.jpg";
},{}],"images/wyy.png":[function(require,module,exports) {
module.exports = "/wyy.8ffc4bce.png";
},{}],"images/youKu.png":[function(require,module,exports) {
module.exports = "/youKu.69a8593d.png";
},{}],"images/zhiHu.png":[function(require,module,exports) {
module.exports = "/zhiHu.65bb87c6.png";
},{}],"images/tou.png":[function(require,module,exports) {
module.exports = "/tou.e36937e9.png";
},{}],"images/bi.jpg":[function(require,module,exports) {
module.exports = "/bi.ea8574b4.jpg";
},{}],"images/jd.jpg":[function(require,module,exports) {
module.exports = "/jd.f098767b.jpg";
},{}],"images/G.jpg":[function(require,module,exports) {
module.exports = "/G.af7be5f5.jpg";
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _acf = _interopRequireDefault(require("./images/acf.jpg"));

var _WeiBo = _interopRequireDefault(require("./images/WeiBo.jpg"));

var _wyy = _interopRequireDefault(require("./images/wyy.png"));

var _youKu = _interopRequireDefault(require("./images/youKu.png"));

var _zhiHu = _interopRequireDefault(require("./images/zhiHu.png"));

var _tou = _interopRequireDefault(require("./images/tou.png"));

var _bi = _interopRequireDefault(require("./images/bi.jpg"));

var _jd = _interopRequireDefault(require("./images/jd.jpg"));

var _G = _interopRequireDefault(require("./images/G.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $siteList = $('.siteList');
var $lastLi = $('.lastLi');
var xObject;
var x = localStorage.getItem('x');

if (x) {
  xObject = JSON.parse(x);
}

var hashMap = xObject || [{
  logo: _acf.default,
  logoType: 'image',
  url: 'https://www.acfun.cn/'
}, {
  logo: _bi.default,
  logoType: 'image',
  url: 'https://www.bilibili.com/'
}, {
  logo: _jd.default,
  logoType: 'image',
  url: 'https://www.jd.com/'
}, {
  logo: _G.default,
  logoType: 'image',
  url: 'https://translate.google.cn/'
}, {
  logo: _tou.default,
  logoType: 'image',
  url: 'https://www.toutiao.com/'
}, {
  logo: _WeiBo.default,
  logoType: 'image',
  url: 'https://weibo.com/'
}, {
  logo: _wyy.default,
  logoType: 'image',
  url: 'https://music.163.com/'
}, {
  logo: _youKu.default,
  logoType: 'image',
  url: 'https://www.youku.com/'
}, {
  logo: _zhiHu.default,
  logoType: 'image',
  url: 'https://www.zhihu.com/hot'
}];

var render = function render() {
  $siteList.find('Li:not(.lastLi)').remove();
  hashMap.forEach(function (node, index) {
    var $li;

    if (node.logoType === 'image') {
      $li = $("<li>\n            <div class=\"site\">\n                <div class=\"logo\">\n                <img src=\"".concat(node.logo, "\"/ alt=\"\">\n                </div>\n                <div class=\"link\">").concat(simplifyUrl(node.url), "</div>\n                <div class=\"close\">\n                <svg class=\"icon\">\n                    <use xlink:href=\"#icon-shanchu\"></use>\n                </svg>\n                </div>\n            </div>\n            </li>")).insertBefore($lastLi);
    } else {
      $li = $("<li>\n            <div class=\"site\">\n                <div class=\"logo\">\n                <div class=\"text\">\n                ".concat(node.logo, "\n                </div>\n                </div>\n                <div class=\"link\">").concat(simplifyUrl(node.url), "</div>\n                <div class=\"close\">\n                <svg class=\"icon\">\n                    <use xlink:href=\"#icon-shanchu\"></use>\n                </svg>\n                </div>\n            </div>\n            </li>")).insertBefore($lastLi);
    }

    $li.on('click', function () {
      window.open(node.url, "_self");
    });
    $li.on('click', '.close', function (e) {
      e.stopPropagation();
      console.log('我点击到了');
      hashMap.splice(index, 1);
      render();
    });
  });
};

var simplifyUrl = function simplifyUrl(url) {
  return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
};

render();
$('.addButton').on('click', function () {
  var url = window.prompt('请输入添加网址');

  if (url.indexOf('http') !== 0) {
    url = 'https://' + url;
  }

  hashMap.push({
    logo: simplifyUrl(url)[0],
    logoType: 'text',
    url: url
  });
  render();
});

window.onbeforeunload = function () {
  var string = JSON.stringify(hashMap);
  localStorage.setItem('x', string);
};

$(document).on('keypress', function (e) {
  // const key = e.key;  可简写为下行
  var key = e.key;

  for (var i = 0; i < hashMap.length; i++) {
    if (simplifyUrl(hashMap[i].url)[0].toUpperCase() === key.toUpperCase()) {
      window.open(hashMap[i].url);
    }
  }
});
/* <li>
                <a href="https://www.acfun.cn">
                    <div class="site">
                        <div class="logo">A</div>

                        <div class="link">acFun.cn</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://www.bilibili.com/">
                    <div class="site">
                        <div class="logo">
                            <img src="images/bi.jpg" alt="bi">
                        </div>
                        <div class="link">BiLiBiLi.com</div>
                    </div>
                </a>
            </li> */
},{"./images/acf.jpg":"images/acf.jpg","./images/WeiBo.jpg":"images/WeiBo.jpg","./images/wyy.png":"images/wyy.png","./images/youKu.png":"images/youKu.png","./images/zhiHu.png":"images/zhiHu.png","./images/tou.png":"images/tou.png","./images/bi.jpg":"images/bi.jpg","./images/jd.jpg":"images/jd.jpg","./images/G.jpg":"images/G.jpg"}],"C:/Users/whh/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52435" + '/');

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
},{}]},{},["C:/Users/whh/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map