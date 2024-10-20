"use strict";
(self['chunk_provider'] = self['chunk_provider'] || []).push([["__federation_expose_Image"], {
"../../node_modules/.pnpm/@rspack+core@1.0.0-alpha.5_@swc+helpers@0.5.11/node_modules/@rspack/core/dist/builtin-plugin/css-extract/hmr/hotModuleReplacement.js": (function (module, __unused_webpack_exports, __webpack_require__) {

/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/
/** @typedef {any} TODO */
const normalizeUrl = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.0.0-alpha.5_@swc+helpers@0.5.11/node_modules/@rspack/core/dist/builtin-plugin/css-extract/hmr/normalize-url.js");
const srcByModuleId = Object.create(null);
const noDocument = typeof document === "undefined";
const { forEach } = Array.prototype;
/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
    let timeout = 0;
    return function () {
        // @ts-ignore
        const self = this;
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        const functionCall = function functionCall() {
            return fn.apply(self, args);
        };
        clearTimeout(timeout);
        // @ts-ignore
        timeout = setTimeout(functionCall, time);
    };
}
function noop() { }
/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
    let src = srcByModuleId[moduleId];
    if (!src) {
        if (document.currentScript) {
            ({ src } = /** @type {HTMLScriptElement} */ (document.currentScript));
        }
        else {
            const scripts = document.getElementsByTagName("script");
            const lastScriptTag = scripts[scripts.length - 1];
            if (lastScriptTag) {
                ({ src } = lastScriptTag);
            }
        }
        srcByModuleId[moduleId] = src;
    }
    /**
     * @param {string} fileMap
     * @returns {null | string[]}
     */
    return function (fileMap) {
        if (!src) {
            return null;
        }
        const splitResult = src.split(/([^\\/]+)\.js$/);
        const filename = splitResult && splitResult[1];
        if (!filename) {
            return [src.replace(".js", ".css")];
        }
        if (!fileMap) {
            return [src.replace(".js", ".css")];
        }
        return fileMap.split(",").map(mapRule => {
            const reg = new RegExp(`${filename}\\.js$`, "g");
            return normalizeUrl(src.replace(reg, `${mapRule.replace(/{fileName}/g, filename)}.css`));
        });
    };
}
/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
    if (!url) {
        if (!el.href) {
            return;
        }
        // eslint-disable-next-line
        url = el.href.split("?")[0];
    }
    if (!isUrlRequest(/** @type {string} */ (url))) {
        return;
    }
    if (el.isLoaded === false) {
        // We seem to be about to replace a css link that hasn't loaded yet.
        // We're probably changing the same file more than once.
        return;
    }
    if (!url || !(url.indexOf(".css") > -1)) {
        return;
    }
    // eslint-disable-next-line no-param-reassign
    el.visited = true;
    const newEl = el.cloneNode();
    newEl.isLoaded = false;
    newEl.addEventListener("load", () => {
        if (newEl.isLoaded) {
            return;
        }
        newEl.isLoaded = true;
        el.parentNode.removeChild(el);
    });
    newEl.addEventListener("error", () => {
        if (newEl.isLoaded) {
            return;
        }
        newEl.isLoaded = true;
        el.parentNode.removeChild(el);
    });
    newEl.href = `${url}?${Date.now()}`;
    if (el.nextSibling) {
        el.parentNode.insertBefore(newEl, el.nextSibling);
    }
    else {
        el.parentNode.appendChild(newEl);
    }
}
/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
    let ret;
    // eslint-disable-next-line no-param-reassign
    href = normalizeUrl(href);
    src.some(
    /**
     * @param {string} url
     */
    // eslint-disable-next-line array-callback-return
    url => {
        if (href.indexOf(src) > -1) {
            ret = url;
        }
    });
    return ret;
}
/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
    if (!src) {
        return false;
    }
    const elements = document.querySelectorAll("link");
    let loaded = false;
    forEach.call(elements, el => {
        if (!el.href) {
            return;
        }
        const url = getReloadUrl(el.href, src);
        if (!isUrlRequest(url)) {
            return;
        }
        if (el.visited === true) {
            return;
        }
        if (url) {
            updateCss(el, url);
            loaded = true;
        }
    });
    return loaded;
}
function reloadAll() {
    const elements = document.querySelectorAll("link");
    forEach.call(elements, el => {
        if (el.visited === true) {
            return;
        }
        updateCss(el);
    });
}
/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
    // An URL is not an request if
    // It is not http or https
    if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
        return false;
    }
    return true;
}
/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
    if (noDocument) {
        console.log("no window.document found, will not HMR CSS");
        return noop;
    }
    const getScriptSrc = getCurrentScriptUrl(moduleId);
    function update() {
        const src = getScriptSrc(options.filename);
        const reloaded = reloadStyle(src);
        if (options.locals) {
            console.log("[HMR] Detected local css modules. Reload all css");
            reloadAll();
            return;
        }
        if (reloaded) {
            console.log("[HMR] css reload %s", src.join(" "));
        }
        else {
            console.log("[HMR] Reload all css");
            reloadAll();
        }
    }
    return debounce(update, 50);
};


}),
"../../node_modules/.pnpm/@rspack+core@1.0.0-alpha.5_@swc+helpers@0.5.11/node_modules/@rspack/core/dist/builtin-plugin/css-extract/hmr/normalize-url.js": (function (module) {

/* eslint-disable */
/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
    return pathComponents
        .reduce(function (accumulator, item) {
        switch (item) {
            case "..":
                accumulator.pop();
                break;
            case ".":
                break;
            default:
                accumulator.push(item);
        }
        return accumulator;
    }, /** @type {string[]} */ ([]))
        .join("/");
}
/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
    urlString = urlString.trim();
    if (/^data:/i.test(urlString)) {
        return urlString;
    }
    var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
    var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
    var host = components[0].toLowerCase().replace(/\.$/, "");
    components[0] = "";
    var path = normalizeUrl(components);
    return protocol + host + path;
};


}),
"./src/components/Image.module.css?9ac5": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"button":"src-components-Image-module__button-OWp6g3"});
    if(true) {
      // 1729405766050
      var cssReload = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.0.0-alpha.5_@swc+helpers@0.5.11/node_modules/@rspack/core/dist/builtin-plugin/css-extract/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

}),
"./src/components/Image.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?6853");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var _Image_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Image.module.css?9ac5");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.0-alpha.5_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "remote-components",
        style: {
            backgroundColor: '#1ee9c1',
            color: 'lightgrey',
            padding: '1rem'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                        children: "remote"
                    }, void 0, false, {
                        fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\provider\\src\\components\\Image.tsx",
                        lineNumber: 14,
                        columnNumber: 7
                    }, _this),
                    "\xa0image"
                ]
            }, void 0, true, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\provider\\src\\components\\Image.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                id: "remote-components-button",
                style: {
                    marginBottom: '1rem'
                },
                onClick: function() {
                    return alert('[remote-components] Client side Javascript works!');
                },
                children: "Click me to test i'm interactive!"
            }, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\provider\\src\\components\\Image.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                id: "remote-components-image",
                src: "https://module-federation.io/module-federation-logo.svg",
                style: {
                    width: '100px'
                },
                alt: "serge"
            }, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\provider\\src\\components\\Image.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: _Image_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].button,
                children: "Button from remote"
            }, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\provider\\src\\components\\Image.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\provider\\src\\components\\Image.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, _this);
};

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

}]);
//# sourceMappingURL=__federation_expose_Image.js.map