webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/lauradeltorososa/Desktop/React-hooks-course/Pluralsight-react-hooks-course/React-course/02_Other-react-hooks/clip04-Updating-Example-To-Full-Conf-Site/src/SignMeUp.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar SignMeUp = function SignMeUp(_ref) {\n  _s();\n\n  var _jsx;\n\n  var signupCallback = _ref.signupCallback;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(\"SignMeUp:useEffect called\");\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      emailValid = _useState2[0],\n      setEmailValid = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      sendProcessing = _useState3[0],\n      setSendProcessing = _useState3[1];\n\n  var context = react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"];\n\n  function validateEmail(email) {\n    var re = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return re.test(email);\n  }\n\n  var notify = function notify() {\n    react_toastify__WEBPACK_IMPORTED_MODULE_3__[\"toast\"].info(\"You will be notified of upcoming events \".concat(email));\n  };\n\n  function sendEmailToBackend() {\n    setSendProcessing(true);\n    new Promise(function (resolve) {\n      setTimeout(function () {\n        setSendProcessing(false);\n        setEmail(\"\");\n        resolve();\n      }, 1000);\n    }).then(function () {\n      notify();\n      signupCallback(email);\n      setEmail(\"\");\n    });\n  }\n\n  var buttonText = sendProcessing ? \"processing...\" : \"Get Updates\"; //console.log(\"src/SignMeUp called\");\n\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__[\"ToastContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", (_jsx = {\n    value: email,\n    onChange: function onChange(e) {\n      setEmailValid(validateEmail(e.target.value));\n      return setEmail(e.target.value);\n    },\n    placeholder: \"Enter Email\",\n    type: \"email\",\n    name: \"email\",\n    required: true\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"required\", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__self\", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__source\", {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 11\n  }), _jsx)), \"\\xA0\", __jsx(\"button\", {\n    disabled: !emailValid || sendProcessing,\n    className: \"btn\",\n    onClick: sendEmailToBackend,\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, buttonText))));\n};\n\n_s(SignMeUp, \"5Iv9U+WA8+gx1yPy3ZAX4sguqy4=\");\n\n_c = SignMeUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignMeUp);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignMeUp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NpZ25NZVVwLmpzPzQwYzMiXSwibmFtZXMiOlsiU2lnbk1lVXAiLCJzaWdudXBDYWxsYmFjayIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJlbWFpbFZhbGlkIiwic2V0RW1haWxWYWxpZCIsInNlbmRQcm9jZXNzaW5nIiwic2V0U2VuZFByb2Nlc3NpbmciLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInZhbGlkYXRlRW1haWwiLCJyZSIsInRlc3QiLCJub3RpZnkiLCJ0b2FzdCIsImluZm8iLCJzZW5kRW1haWxUb0JhY2tlbmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwiYnV0dG9uVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCO0FBQ3ZDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSO0FBQ0QsR0FGUSxDQUFUOztBQUR1QyxrQkFLYkMsc0RBQVEsRUFMSztBQUFBLE1BS2hDQyxLQUxnQztBQUFBLE1BS3pCQyxRQUx5Qjs7QUFBQSxtQkFNSEYsc0RBQVEsQ0FBQyxLQUFELENBTkw7QUFBQSxNQU1oQ0csVUFOZ0M7QUFBQSxNQU1wQkMsYUFOb0I7O0FBQUEsbUJBT0tKLHNEQUFRLENBQUMsS0FBRCxDQVBiO0FBQUEsTUFPaENLLGNBUGdDO0FBQUEsTUFPaEJDLGlCQVBnQjs7QUFTdkMsTUFBTUMsT0FBTyxHQUFHQyxnREFBaEI7O0FBRUEsV0FBU0MsYUFBVCxDQUF1QlIsS0FBdkIsRUFBOEI7QUFDNUIsUUFBTVMsRUFBRSxHQUFHLDJKQUFYO0FBQ0EsV0FBT0EsRUFBRSxDQUFDQyxJQUFILENBQVFWLEtBQVIsQ0FBUDtBQUNEOztBQUVELE1BQU1XLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJDLHdEQUFLLENBQUNDLElBQU4sbURBQXNEYixLQUF0RDtBQUNELEdBRkQ7O0FBSUEsV0FBU2Msa0JBQVQsR0FBOEI7QUFDNUJULHFCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQSxRQUFJVSxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQjtBQUM1QkMsZ0JBQVUsQ0FBQyxZQUFXO0FBQ3BCWix5QkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FKLGdCQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FlLGVBQU87QUFDUixPQUpTLEVBSVAsSUFKTyxDQUFWO0FBS0QsS0FORCxFQU1HRSxJQU5ILENBTVEsWUFBTTtBQUNaUCxZQUFNO0FBQ05oQixvQkFBYyxDQUFDSyxLQUFELENBQWQ7QUFDQUMsY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNELEtBVkQ7QUFXRDs7QUFFRCxNQUFNa0IsVUFBVSxHQUFHZixjQUFjLEdBQUcsZUFBSCxHQUFxQixhQUF0RCxDQW5DdUMsQ0FxQ3ZDOztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUVKLEtBRFQ7QUFFRSxZQUFRLEVBQUUsa0JBQUFvQixDQUFDLEVBQUk7QUFDYmpCLG1CQUFhLENBQUNLLGFBQWEsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZCxDQUFiO0FBQ0EsYUFBT3JCLFFBQVEsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFDRCxLQUxIO0FBTUUsZUFBVyxFQUFDLGFBTmQ7QUFPRSxRQUFJLEVBQUMsT0FQUDtBQVFFLFFBQUksRUFBQyxPQVJQO0FBU0UsWUFBUTtBQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixVQWNFO0FBQ0UsWUFBUSxFQUFFLENBQUNwQixVQUFELElBQWVFLGNBRDNCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxXQUFPLEVBQUVVLGtCQUhYO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HSyxVQU5ILENBZEYsQ0FGRixDQURGLENBREY7QUE4QkQsQ0FyRUQ7O0dBQU16QixROztLQUFBQSxRO0FBdUVTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9TaWduTWVVcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi9BcHBcIjtcblxuY29uc3QgU2lnbk1lVXAgPSAoeyBzaWdudXBDYWxsYmFjayB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNpZ25NZVVwOnVzZUVmZmVjdCBjYWxsZWRgKTtcbiAgfSk7XG5cbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZW1haWxWYWxpZCwgc2V0RW1haWxWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZW5kUHJvY2Vzc2luZywgc2V0U2VuZFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xuICB9XG5cbiAgY29uc3Qgbm90aWZ5ID0gKCkgPT4ge1xuICAgIHRvYXN0LmluZm8oYFlvdSB3aWxsIGJlIG5vdGlmaWVkIG9mIHVwY29taW5nIGV2ZW50cyAke2VtYWlsfWApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNlbmRFbWFpbFRvQmFja2VuZCgpIHtcbiAgICBzZXRTZW5kUHJvY2Vzc2luZyh0cnVlKTtcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRTZW5kUHJvY2Vzc2luZyhmYWxzZSk7XG4gICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIG5vdGlmeSgpO1xuICAgICAgc2lnbnVwQ2FsbGJhY2soZW1haWwpO1xuICAgICAgc2V0RW1haWwoXCJcIik7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBidXR0b25UZXh0ID0gc2VuZFByb2Nlc3NpbmcgPyBcInByb2Nlc3NpbmcuLi5cIiA6IFwiR2V0IFVwZGF0ZXNcIjtcblxuICAvL2NvbnNvbGUubG9nKFwic3JjL1NpZ25NZVVwIGNhbGxlZFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHNldEVtYWlsVmFsaWQodmFsaWRhdGVFbWFpbChlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICByZXR1cm4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWxWYWxpZCB8fCBzZW5kUHJvY2Vzc2luZ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzZW5kRW1haWxUb0JhY2tlbmR9XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YnV0dG9uVGV4dH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SignMeUp.js\n");

/***/ })

})