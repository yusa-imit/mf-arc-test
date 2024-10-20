exports.ids = ['page'];
exports.modules = {
"../../node_modules/.pnpm/@module-federation+modern-js@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/modern-js/dist/esm/runtime/createRemoteSSRComponent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  collectSSRAssets: function() { return collectSSRAssets; },
  createRemoteSSRComponent: function() { return createRemoteSSRComponent; }
});
/* harmony import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@swc+helpers@0.5.11/node_modules/@swc/helpers/esm/_async_to_generator.js");
/* harmony import */var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@swc+helpers@0.5.11/node_modules/@swc/helpers/esm/_object_spread.js");
/* harmony import */var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@swc+helpers@0.5.11/node_modules/@swc/helpers/esm/_object_spread_props.js");
/* harmony import */var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@swc+helpers@0.5.11/node_modules/@swc/helpers/esm/_to_consumable_array.js");
/* harmony import */var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/tslib@2.8.0/node_modules/tslib/tslib.es6.mjs");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?9d87");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var _module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@module-federation+enhanced@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/enhanced/dist/src/runtime.js");
/* harmony import */var _module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */var react_error_boundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/react-error-boundary@4.0.13_react@18.3.1/node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js");









function getLoadedRemoteInfos(instance, id) {
  var _ref = instance.remoteHandler.idToRemoteMap[id] || {}, name = _ref.name, expose = _ref.expose;
  if (!name) {
    return;
  }
  var module = instance.moduleCache.get(name);
  if (!module) {
    return;
  }
  var remoteSnapshot = instance.snapshotHandler.getGlobalRemoteInfo(module.remoteInfo).remoteSnapshot;
  return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, module.remoteInfo), {
    snapshot: remoteSnapshot,
    expose
  });
}
function getTargetModuleInfo(id) {
  var instance = (0,_module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_2__.getInstance)();
  if (!instance) {
    return;
  }
  var loadedRemoteInfo = getLoadedRemoteInfos(instance, id);
  if (!loadedRemoteInfo) {
    return;
  }
  var snapshot = loadedRemoteInfo.snapshot;
  if (!snapshot) {
    return;
  }
  var publicPath = "publicPath" in snapshot ? snapshot.publicPath : "getPublicPath" in snapshot ? new Function(snapshot.getPublicPath)() : "";
  if (!publicPath) {
    return;
  }
  var modules = "modules" in snapshot ? snapshot.modules : [];
  var targetModule = modules.find(function(m) {
    return m.modulePath === loadedRemoteInfo.expose;
  });
  if (!targetModule) {
    return;
  }
  var remoteEntry = "remoteEntry" in snapshot ? snapshot.remoteEntry : "";
  if (!remoteEntry) {
    return;
  }
  return {
    module: targetModule,
    publicPath,
    remoteEntry
  };
}
function collectSSRAssets(options) {
  var _ref = typeof options === "string" ? {
    id: options
  } : options, id = _ref.id, _ref_injectLink = _ref.injectLink, injectLink = _ref_injectLink === void 0 ? true : _ref_injectLink, _ref_injectScript = _ref.injectScript, injectScript = _ref_injectScript === void 0 ? true : _ref_injectScript;
  var links = [];
  var scripts = [];
  var instance = (0,_module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_2__.getInstance)();
  if (!instance || !injectLink && !injectScript) {
    return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(scripts).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(links));
  }
  var moduleAndPublicPath = getTargetModuleInfo(id);
  if (!moduleAndPublicPath) {
    return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(scripts).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(links));
  }
  var targetModule = moduleAndPublicPath.module, publicPath = moduleAndPublicPath.publicPath, remoteEntry = moduleAndPublicPath.remoteEntry;
  if (injectLink) {
    (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(targetModule.assets.css.sync).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(targetModule.assets.css.async)).forEach(function(file, index) {
      links.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
        href: "".concat(publicPath).concat(file),
        rel: "stylesheet",
        type: "text/css"
      }, "".concat(file.split(".")[0], "_").concat(index)));
    });
  }
  if (injectScript) {
    scripts.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("script", {
      async: true,
      src: "".concat(publicPath).concat(remoteEntry),
      crossOrigin: "anonymous"
    }, remoteEntry.split(".")[0]));
    (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(targetModule.assets.js.sync).forEach(function(file, index) {
      scripts.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("script", {
        async: true,
        src: "".concat(publicPath).concat(file),
        crossOrigin: "anonymous"
      }, "".concat(file.split(".")[0], "_").concat(index)));
    });
  }
  return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(scripts).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(links));
}
function createRemoteSSRComponent(info) {
  return function(props) {
    var exportName = (info === null || info === void 0 ? void 0 : info.export) || "default";
    var LazyComponent = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(/* @__PURE__ */ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function() {
      var m, moduleId, assets, Com, err, FallbackFunctionComponent, FallbackNode;
      return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function(_state) {
        switch (_state.label) {
          case 0:
            _state.trys.push([
              0,
              2,
              ,
              3
            ]);
            return [
              4,
              info.loader()
            ];
          case 1:
            m = _state.sent();
            if (!m) {
              throw new Error("load remote failed");
            }
            moduleId = m && m[Symbol.for("mf_module_id")];
            assets = collectSSRAssets({
              id: moduleId
            });
            Com = m[exportName];
            if (exportName in m && typeof Com === "function") {
              return [
                2,
                {
                  default: function() {
                    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                      children: [
                        assets,
                        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Com, (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, props))
                      ]
                    });
                  }
                }
              ];
            } else {
              throw Error("Make sure that ".concat(moduleId, " has the correct export when export is ").concat(String(exportName)));
            }
            return [
              3,
              3
            ];
          case 2:
            err = _state.sent();
            if (!info.fallback) {
              throw err;
            }
            FallbackFunctionComponent = info.fallback;
            FallbackNode = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FallbackFunctionComponent, {
              error: err,
              resetErrorBoundary: function() {
                console.log('SSR mode not support "resetErrorBoundary" !');
              }
            });
            return [
              2,
              {
                default: function() {
                  return FallbackNode;
                }
              }
            ];
          case 3:
            return [
              2
            ];
        }
      });
    }));
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__.ErrorBoundary, {
      FallbackComponent: info.fallback,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Suspense), {
        fallback: info.loading,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LazyComponent, {})
      })
    });
  };
}



}),
"../../node_modules/.pnpm/@module-federation+modern-js@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/modern-js/dist/esm/runtime/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createRemoteSSRComponent: function() { return /* reexport safe */ _createRemoteSSRComponent__WEBPACK_IMPORTED_MODULE_1__.createRemoteSSRComponent; }
});
/* harmony import */var _module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@module-federation+enhanced@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/enhanced/dist/src/runtime.js");
/* harmony import */var _module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for( var __WEBPACK_IMPORT_KEY__ in _module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_0__) if(["createRemoteSSRComponent","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] =function(key) { return _module_federation_enhanced_runtime__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */var _createRemoteSSRComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@module-federation+modern-js@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/modern-js/dist/esm/runtime/createRemoteSSRComponent.js");





}),
"../../node_modules/.pnpm/@module-federation+runtime-tools@0.6.10/node_modules/@module-federation/runtime-tools/dist/runtime.cjs.js": (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";


var runtime = __webpack_require__("../../node_modules/.pnpm/@module-federation+runtime@0.6.10/node_modules/@module-federation/runtime/dist/index.cjs.js");



Object.keys(runtime).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return runtime[k]; }
	});
});


}),
"../../node_modules/.pnpm/react-error-boundary@4.0.13_react@18.3.1/node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ErrorBoundary: function() { return ErrorBoundary; },
  ErrorBoundaryContext: function() { return ErrorBoundaryContext; },
  useErrorBoundary: function() { return useErrorBoundary; },
  withErrorBoundary: function() { return withErrorBoundary; }
});
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?36f3");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
'use client';


const ErrorBoundaryContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

const initialState = {
  didCatch: false,
  error: null
};
class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    this.state = initialState;
  }
  static getDerivedStateFromError(error) {
    return {
      didCatch: true,
      error
    };
  }
  resetErrorBoundary() {
    const {
      error
    } = this.state;
    if (error !== null) {
      var _this$props$onReset, _this$props;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_this$props$onReset = (_this$props = this.props).onReset) === null || _this$props$onReset === void 0 ? void 0 : _this$props$onReset.call(_this$props, {
        args,
        reason: "imperative-api"
      });
      this.setState(initialState);
    }
  }
  componentDidCatch(error, info) {
    var _this$props$onError, _this$props2;
    (_this$props$onError = (_this$props2 = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props2, error, info);
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      didCatch
    } = this.state;
    const {
      resetKeys
    } = this.props;

    // There's an edge case where if the thing that triggered the error happens to *also* be in the resetKeys array,
    // we'd end up resetting the error boundary immediately.
    // This would likely trigger a second error to be thrown.
    // So we make sure that we don't check the resetKeys on the first call of cDU after the error is set.

    if (didCatch && prevState.error !== null && hasArrayChanged(prevProps.resetKeys, resetKeys)) {
      var _this$props$onReset2, _this$props3;
      (_this$props$onReset2 = (_this$props3 = this.props).onReset) === null || _this$props$onReset2 === void 0 ? void 0 : _this$props$onReset2.call(_this$props3, {
        next: resetKeys,
        prev: prevProps.resetKeys,
        reason: "keys"
      });
      this.setState(initialState);
    }
  }
  render() {
    const {
      children,
      fallbackRender,
      FallbackComponent,
      fallback
    } = this.props;
    const {
      didCatch,
      error
    } = this.state;
    let childToRender = children;
    if (didCatch) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof fallbackRender === "function") {
        childToRender = fallbackRender(props);
      } else if (FallbackComponent) {
        childToRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FallbackComponent, props);
      } else if (fallback === null || (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(fallback)) {
        childToRender = fallback;
      } else {
        {
          console.error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
        }
        throw error;
      }
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundaryContext.Provider, {
      value: {
        didCatch,
        error,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, childToRender);
  }
}
function hasArrayChanged() {
  let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));
}

function assertErrorBoundaryContext(value) {
  if (value == null || typeof value.didCatch !== "boolean" || typeof value.resetErrorBoundary !== "function") {
    throw new Error("ErrorBoundaryContext not found");
  }
}

function useErrorBoundary() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ErrorBoundaryContext);
  assertErrorBoundaryContext(context);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    error: null,
    hasError: false
  });
  const memoized = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    resetBoundary: () => {
      context.resetErrorBoundary();
      setState({
        error: null,
        hasError: false
      });
    },
    showBoundary: error => setState({
      error,
      hasError: true
    })
  }), [context.resetErrorBoundary]);
  if (state.hasError) {
    throw state.error;
  }
  return memoized;
}

function withErrorBoundary(component, errorBoundaryProps) {
  const Wrapped = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundary, errorBoundaryProps, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, {
    ...props,
    ref
  })));

  // Format for display in DevTools
  const name = component.displayName || component.name || "Unknown";
  Wrapped.displayName = "withErrorBoundary(".concat(name, ")");
  return Wrapped;
}




}),
"./src/components/dynamic-remote.tsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DynamicRemoteSSRComponents: function() { return DynamicRemoteSSRComponents; }
});
/* harmony import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* harmony import */var _modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@module-federation+modern-js@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/modern-js/dist/esm/runtime/index.js");


(0,_modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__.registerRemotes)([
    {
        name: 'dynamic_provider',
        entry: 'http://localhost:3008/mf-manifest.json'
    }
]);
const DynamicRemoteSSRComponents = (0,_modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__.createRemoteSSRComponent)({
    loader: ()=>(0,_modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__.loadRemote)('dynamic_provider/Image'),
    loading: 'loading...',
    fallback: ({ error })=>{
        if (error instanceof Error && error.message.includes('not exist')) {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "fallback - not existed id"
            }, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\components\\dynamic-remote.tsx",
                lineNumber: 15,
                columnNumber: 20
            }, undefined);
        }
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "fallback"
        }, void 0, false, {
            fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\components\\dynamic-remote.tsx",
            lineNumber: 17,
            columnNumber: 16
        }, undefined);
    }
});


}),
"./src/routes/page.tsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* harmony import */var _modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@module-federation+modern-js@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/modern-js/dist/esm/runtime/index.js");
/* harmony import */var _components_dynamic_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/dynamic-remote.tsx");
/* harmony import */var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/index.css");
/* harmony import */var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);




const RemoteSSRComponent = (0,_modern_js_runtime_mf__WEBPACK_IMPORTED_MODULE_1__.createRemoteSSRComponent)({
    loader: ()=>__webpack_require__.e(/* import() */ "webpack_container_remote_remote_Image").then(__webpack_require__.t.bind(__webpack_require__, "webpack/container/remote/remote/Image", 23)),
    loading: 'loading...',
    export: 'default',
    fallback: ({ error })=>{
        if (error instanceof Error && error.message.includes('not exist')) {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "fallback - not existed id"
            }, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
                lineNumber: 11,
                columnNumber: 14
            }, undefined);
        }
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "fallback"
        }, void 0, false, {
            fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, undefined);
    }
});
const Index = ()=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-box",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RemoteSSRComponent, {}, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dynamic_remote__WEBPACK_IMPORTED_MODULE_2__.DynamicRemoteSSRComponents, {}, void 0, false, {
                fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "F:\\codespace\\mf-arc-test\\modernjs-ssr\\apps\\host\\src\\routes\\page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


}),
"./src/routes/index.css": (function () {


}),
"../../node_modules/.pnpm/@module-federation+enhanced@0.6.10_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@4.9.5_webpack@5.95.0/node_modules/@module-federation/enhanced/dist/src/runtime.js": (function (__unused_webpack_module, exports, __webpack_require__) {
"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__("../../node_modules/.pnpm/@module-federation+runtime-tools@0.6.10/node_modules/@module-federation/runtime-tools/dist/runtime.cjs.js"), exports);
//# sourceMappingURL=runtime.js.map

}),

};
;
//# sourceMappingURL=pageconsumer-64b236eeb1b65bb4.js.map