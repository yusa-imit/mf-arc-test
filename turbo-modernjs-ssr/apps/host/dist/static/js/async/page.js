"use strict";
(self['chunk_consumer'] = self['chunk_consumer'] || []).push([["page"], {
"./src/routes/index.css?dd83": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      // 1729405766118
      var cssReload = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.0.0-alpha.5_@swc+helpers@0.5.11/node_modules/@rspack/core/dist/builtin-plugin/css-extract/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, function(__WEBPACK_OUTDATED_DEPENDENCIES__) {
(cssReload)(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
    }
  

}),
"./src/components/dynamic-remote.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DynamicRemoteSSRComponents: function() { return DynamicRemoteSSRComponents; }
});
/* harmony import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* harmony import */var _modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@module-federation+modern-js@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/modern-js/dist/esm/runtime/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.0-alpha.5_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;


(0,_modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__.registerRemotes)([
    {
        name: 'dynamic_provider',
        entry: 'http://localhost:3008/mf-manifest.json'
    }
]);
var DynamicRemoteSSRComponents = (0,_modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__.createRemoteSSRComponent)({
    loader: function() {
        return (0,_modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__.loadRemote)('dynamic_provider/Image');
    },
    loading: 'loading...',
    fallback: function(param) {
        var error = param.error;
        if (error instanceof Error && error.message.includes('not exist')) {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "fallback - not existed id"
            }, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\components\\dynamic-remote.tsx",
                lineNumber: 15,
                columnNumber: 20
            }, _this);
        }
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "fallback"
        }, void 0, false, {
            fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\components\\dynamic-remote.tsx",
            lineNumber: 17,
            columnNumber: 16
        }, _this);
    }
});

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
"./src/routes/page.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* harmony import */var _modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@module-federation+modern-js@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/modern-js/dist/esm/runtime/index.js");
/* harmony import */var _components_dynamic_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/dynamic-remote.tsx");
/* harmony import */var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/index.css?dd83");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.0-alpha.5_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;




var RemoteSSRComponent = (0,_modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__.createRemoteSSRComponent)({
    loader: function() {
        return __webpack_require__.e(/* import() */ "webpack_container_remote_remote_Image").then(__webpack_require__.t.bind(__webpack_require__, "webpack/container/remote/remote/Image", 23));
    },
    loading: 'loading...',
    export: 'default',
    fallback: function(param) {
        var error = param.error;
        if (error instanceof Error && error.message.includes('not exist')) {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "fallback - not existed id"
            }, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
                lineNumber: 11,
                columnNumber: 14
            }, _this);
        }
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "fallback"
        }, void 0, false, {
            fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, _this);
    }
});
_c = RemoteSSRComponent;
var Index = function() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-box",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RemoteSSRComponent, {}, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dynamic_remote__WEBPACK_IMPORTED_MODULE_2__.DynamicRemoteSSRComponents, {}, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, _this);
};
_c1 = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);
var _c, _c1;
$RefreshReg$(_c, "RemoteSSRComponent");
$RefreshReg$(_c1, "Index");

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
//# sourceMappingURL=page.js.map