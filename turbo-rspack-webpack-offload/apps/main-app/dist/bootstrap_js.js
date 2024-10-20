"use strict";
(self["webpackChunkrspack_offload_main_app"] = self["webpackChunkrspack_offload_main_app"] || []).push([["bootstrap_js"],{

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var component_app_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component-app/Button */ "webpack/container/remote/component-app/Button");
/* harmony import */ var component_app_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(component_app_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var component_app_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component-app/Dialog */ "webpack/container/remote/component-app/Dialog");
/* harmony import */ var component_app_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(component_app_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var component_app_ToolTip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component-app/ToolTip */ "webpack/container/remote/component-app/ToolTip");
/* harmony import */ var component_app_ToolTip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_app_ToolTip__WEBPACK_IMPORTED_MODULE_3__);




class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSwitchVisible = this.handleSwitchVisible.bind(this);
  }
  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true
    });
  }
  handleSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Open Dev Tool And Focus On Network,checkout resources details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "react\u3001react-dom js files hosted on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "lib-app")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "components hosted on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "component-app")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Buttons:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((component_app_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      type: "primary"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((component_app_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      type: "warning"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Dialog:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: this.handleClick
    }, "click me to open Dialog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((component_app_Dialog__WEBPACK_IMPORTED_MODULE_2___default()), {
      switchVisible: this.handleSwitchVisible,
      visible: this.state.dialogVisible
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "hover me please!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((component_app_ToolTip__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "hover me please",
      message: "Hello,world!"
    }));
  }
}

/***/ }),

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib-app */ "webpack/container/remote/lib-app");
/* harmony import */ var lib_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.jsx */ "./App.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
 // should be first



react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('app'));

/***/ })

}]);