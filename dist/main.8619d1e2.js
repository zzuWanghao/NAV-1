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
})({"stNw":[function(require,module,exports) {
module.exports = "acf.8945916a.jpg";
},{}],"HhjD":[function(require,module,exports) {
module.exports = "WeiBo.0131f378.jpg";
},{}],"pyVY":[function(require,module,exports) {
module.exports = "wyy.950caab9.png";
},{}],"B4IS":[function(require,module,exports) {
module.exports = "youKu.7110de0f.png";
},{}],"htuh":[function(require,module,exports) {
module.exports = "zhiHu.703448a8.png";
},{}],"CaZV":[function(require,module,exports) {
module.exports = "tou.c86617ed.png";
},{}],"Xxt0":[function(require,module,exports) {
module.exports = "bi.33c7cd4c.jpg";
},{}],"iTzN":[function(require,module,exports) {
module.exports = "jd.2a5e7ad4.jpg";
},{}],"Bx9E":[function(require,module,exports) {
module.exports = "G.b17453b5.jpg";
},{}],"epB2":[function(require,module,exports) {
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
    logo: url + '/favicon.ico',
    logoType: 'image',
    url: url
  });
  render();
});

window.onbeforeunload = function () {
  var string = JSON.stringify(hashMap);
  localStorage.setItem('x', string);
}; // $(document).on('keypress', (e) => {
//     // const key = e.key;  可简写为下行
//     const { key } = e
//     for (let i = 0; i < hashMap.length; i++) {
//         if (simplifyUrl(hashMap[i].url)[0].toUpperCase() === key.toUpperCase()) {
//             window.open(hashMap[i].url)
//         }
//     }
// })

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
},{"./images/acf.jpg":"stNw","./images/WeiBo.jpg":"HhjD","./images/wyy.png":"pyVY","./images/youKu.png":"B4IS","./images/zhiHu.png":"htuh","./images/tou.png":"CaZV","./images/bi.jpg":"Xxt0","./images/jd.jpg":"iTzN","./images/G.jpg":"Bx9E"}]},{},["epB2"], null)
//# sourceMappingURL=main.8619d1e2.js.map