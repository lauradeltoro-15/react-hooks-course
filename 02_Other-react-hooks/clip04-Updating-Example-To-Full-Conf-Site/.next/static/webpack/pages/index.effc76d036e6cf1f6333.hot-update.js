webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _static_site_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/site.css */ \"./static/site.css\");\n/* harmony import */ var _static_site_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_site_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Header */ \"./src/Header.js\");\n/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./speakersReducer */ \"./src/speakersReducer.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/lauradeltorososa/Desktop/React-hooks-course/Pluralsight-react-hooks-course/React-course/02_Other-react-hooks/clip04-Updating-Example-To-Full-Conf-Site/src/Speakers.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Speakers = function Speakers(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      speakingSaturday = _useState[0],\n      setSpeakingSaturday = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      speakingSunday = _useState2[0],\n      setSpeakingSunday = _useState2[1];\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_speakersReducer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], []),\n      speakerList = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isLoading = _useState3[0],\n      setIsLoading = _useState3[1];\n\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_App__WEBPACK_IMPORTED_MODULE_8__[\"ConfigContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setIsLoading(true);\n    new Promise(function (resolve) {\n      setTimeout(function () {\n        resolve();\n      }, 1000);\n    }).then(function () {\n      setIsLoading(false);\n      var speakerListServerFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_6__[\"default\"].filter(function (_ref2) {\n        var sat = _ref2.sat,\n            sun = _ref2.sun;\n        return speakingSaturday && sat || speakingSunday && sun;\n      });\n      dispatch({\n        type: \"setSpeakerList\",\n        data: speakerListServerFilter\n      });\n    });\n    return function () {\n      console.log(\"cleanup\");\n    };\n  }, []); // [speakingSunday, speakingSaturday]);\n\n  var handleChangeSaturday = function handleChangeSaturday() {\n    setSpeakingSaturday(!speakingSaturday);\n  };\n\n  var newSpeakerList = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(speakerList).filter(function (_ref3) {\n    var sat = _ref3.sat,\n        sun = _ref3.sun;\n    return speakingSaturday && sat || speakingSunday && sun;\n  }).sort(function (a, b) {\n    if (a.firstName < b.firstName) {\n      return -1;\n    }\n\n    if (a.firstName > b.firstName) {\n      return 1;\n    }\n\n    return 0;\n  });\n  var speakerListFiltered = isLoading ? [] : newSpeakerList;\n\n  var handleChangeSunday = function handleChangeSunday() {\n    setSpeakingSunday(!speakingSunday);\n  };\n\n  var heartFavoriteHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e, favoriteValue) {\n    e.preventDefault();\n    var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n    dispatch({\n      type: favoriteValue === true ? \"favorite\" : \"unfavorite\",\n      sessionId: sessionId\n    }); //console.log(\"changing session favorte to \" + favoriteValue);\n  }, []);\n  if (isLoading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 25\n    }\n  }, \"Loading...\");\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }), __jsx(_src_Menu__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"btn-toolbar  margintopbottom5 checkbox-bigger\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, context.showSpeakerSpeakingDays && __jsx(\"div\", {\n    className: \"hide\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"form-check-inline\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 15\n    }\n  }, __jsx(\"label\", {\n    className: \"form-check-label\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    className: \"form-check-input\",\n    onChange: handleChangeSaturday,\n    checked: speakingSaturday,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 19\n    }\n  }), \"Saturday Speakers\")), __jsx(\"div\", {\n    className: \"form-check-inline\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, __jsx(\"label\", {\n    className: \"form-check-label\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    className: \"form-check-input\",\n    onChange: handleChangeSunday,\n    checked: speakingSunday,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 19\n    }\n  }), \"Sunday Speakers\")))), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"card-deck\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, speakerListFiltered.map(function (_ref4) {\n    var id = _ref4.id,\n        firstName = _ref4.firstName,\n        lastName = _ref4.lastName,\n        bio = _ref4.bio,\n        favorite = _ref4.favorite;\n    return __jsx(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: id,\n      id: id,\n      favorite: favorite,\n      onHeartFavoriteHandler: heartFavoriteHandler,\n      firstName: firstName,\n      lastName: lastName,\n      bio: bio,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 19\n      }\n    });\n  })))));\n};\n\n_s(Speakers, \"959c3gJcGvj9HDU2DD+rttD/cB8=\");\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzI5NTIiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsInVzZVJlZHVjZXIiLCJzcGVha2Vyc1JlZHVjZXIiLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDb25maWdDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNwZWFrZXJMaXN0U2VydmVyRmlsdGVyIiwiU3BlYWtlckRhdGEiLCJmaWx0ZXIiLCJzYXQiLCJzdW4iLCJ0eXBlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsIm5ld1NwZWFrZXJMaXN0IiwidXNlTWVtbyIsInNvcnQiLCJhIiwiYiIsImZpcnN0TmFtZSIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJoYW5kbGVDaGFuZ2VTdW5kYXkiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwiZSIsImZhdm9yaXRlVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJtYXAiLCJpZCIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFTO0FBQUE7O0FBQUE7O0FBQUEsa0JBRXdCQyxzREFBUSxD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QUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLGFBQVMsRUFBQyxrQkFGWjtBQUdFLFlBQVEsRUFBRW1DLGtCQUhaO0FBSUUsV0FBTyxFQUFFakMsY0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsb0JBREYsQ0FaRixDQUZKLENBREYsRUE4QkU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dnQyxtQkFBbUIsQ0FBQ2EsR0FBcEIsQ0FDQyxpQkFBZ0Q7QUFBQSxRQUE3Q0MsRUFBNkMsU0FBN0NBLEVBQTZDO0FBQUEsUUFBekNmLFNBQXlDLFNBQXpDQSxTQUF5QztBQUFBLFFBQTlCZ0IsUUFBOEIsU0FBOUJBLFFBQThCO0FBQUEsUUFBcEJDLEdBQW9CLFNBQXBCQSxHQUFvQjtBQUFBLFFBQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUM5QyxXQUNFLE1BQUMsc0RBQUQ7QUFDRSxTQUFHLEVBQUVILEVBRFA7QUFFRSxRQUFFLEVBQUVBLEVBRk47QUFHRSxjQUFRLEVBQUVHLFFBSFo7QUFJRSw0QkFBc0IsRUFBRWYsb0JBSjFCO0FBS0UsZUFBUyxFQUFFSCxTQUxiO0FBTUUsY0FBUSxFQUFFZ0IsUUFOWjtBQU9FLFNBQUcsRUFBRUMsR0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFXRCxHQWJGLENBREgsQ0FERixDQTlCRixDQUhGLENBREY7QUF3REQsQ0E5SEQ7O0dBQU1wRCxROztLQUFBQSxRO0FBZ0lTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9TcGVha2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3RhdGljL3NpdGUuY3NzXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vc3JjL0hlYWRlclwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuLi9zcmMvTWVudVwiO1xuaW1wb3J0IFNwZWFrZXJEYXRhIGZyb20gXCIuL1NwZWFrZXJEYXRhXCI7XG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tIFwiLi9TcGVha2VyRGV0YWlsXCI7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgc3BlYWtlcnNSZWR1Y2VyIGZyb20gXCIuL3NwZWFrZXJzUmVkdWNlclwiO1xuXG5jb25zdCBTcGVha2VycyA9ICh7IH0pID0+IHtcbiAgXG4gIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gXG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgY29uc3Qgc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIgPSBTcGVha2VyRGF0YS5maWx0ZXIoKHsgc2F0LCBzdW4gfSkgPT4ge1xuICAgICAgICByZXR1cm4gKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKTtcbiAgICAgIH0pO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsXG4gICAgICAgIGRhdGE6IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNsZWFudXBcIik7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBbc3BlYWtpbmdTdW5kYXksIHNwZWFraW5nU2F0dXJkYXldKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHtcbiAgICBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcbiAgfTtcblxuICBjb25zdCBuZXdTcGVha2VyTGlzdCA9IHVzZU1lbW8oc3BlYWtlckxpc3QpXG4gICAgLmZpbHRlcihcbiAgICAgICh7IHNhdCwgc3VuIH0pID0+IChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bilcbiAgICApXG4gICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSlcbiAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZ1xuICAgID8gW11cbiAgICA6IG5ld1NwZWFrZXJMaXN0XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XG4gIH07XG5cbiAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgZmF2b3JpdGVWYWx1ZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzW1wiZGF0YS1zZXNzaW9uaWRcIl0udmFsdWUpO1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2b3JpdGVWYWx1ZSA9PT0gdHJ1ZSA/IFwiZmF2b3JpdGVcIiA6IFwidW5mYXZvcml0ZVwiLFxuICAgICAgc2Vzc2lvbklkXG4gICAgfSlcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hhbmdpbmcgc2Vzc2lvbiBmYXZvcnRlIHRvIFwiICsgZmF2b3JpdGVWYWx1ZSk7XG4gIH0sW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgIG1hcmdpbnRvcGJvdHRvbTUgY2hlY2tib3gtYmlnZ2VyXCI+XG4gICAgICAgICAge2NvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgJiYgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

})