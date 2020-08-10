module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/imageChangeOnScroll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/imageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/imageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\nvar _jsxFileName = \"/Users/lauradeltorososa/Desktop/React-hooks-course/Pluralsight-react-hooks-course/01_Basic-react-hooks/use-state/pages/imageChangeOnScroll.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst ImageChangeOnScroll = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, [1124, 187, 823, 1269, 1530].map(speakerId => {\n    return __jsx(\"div\", {\n      key: speakerId,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 21\n      }\n    }, __jsx(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      primaryImg: `../static/speakers/bw/Speaker-${speakerId}.jpg`,\n      secondaryImg: `../static/speakers/Speaker-${speakerId}.jpg`,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 25\n      }\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbWFnZUNoYW5nZU9uU2Nyb2xsLmpzPzE2NjIiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsIm1hcCIsInNwZWFrZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxNQUFNQSxtQkFBbUIsR0FBRyxNQUFNO0FBQzlCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCQyxHQUE3QixDQUFpQ0MsU0FBUyxJQUFJO0FBQzNDLFdBQ0k7QUFBSyxTQUFHLEVBQUVBLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0VBQUQ7QUFBcUIsZ0JBQVUsRUFBRyxpQ0FBZ0NBLFNBQVUsTUFBNUU7QUFBbUYsa0JBQVksRUFBRyw4QkFBNkJBLFNBQVUsTUFBekk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREo7QUFLSCxHQU5BLENBREwsQ0FESjtBQVdILENBWkQ7O0FBYWVGLGtGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW1hZ2VDaGFuZ2VPblNjcm9sbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gXCIuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbFwiXG5jb25zdCBJbWFnZUNoYW5nZU9uU2Nyb2xsID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7WzExMjQsIDE4NywgODIzLCAxMjY5LCAxNTMwXS5tYXAoc3BlYWtlcklkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3BlYWtlcklkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIHByaW1hcnlJbWc9e2AuLi9zdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0ke3NwZWFrZXJJZH0uanBnYH0gc2Vjb25kYXJ5SW1nPXtgLi4vc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uU2Nyb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/imageChangeOnScroll.js\n");

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/lauradeltorososa/Desktop/React-hooks-course/Pluralsight-react-hooks-course/01_Basic-react-hooks/use-state/src/ImageToggleOnScroll.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ImageToggleOnScroll = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.addEventListener(\"scroll\", scrollHandler);\n    setInView(isInView());\n    setIsLoading(false);\n    return () => {\n      window.removeEventListener(\"scroll\", scrollHandler);\n    };\n  }, [isLoading]);\n  const {\n    0: inView,\n    1: setInView\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const isInView = () => {\n    if (imageRef.current) {\n      const rect = imageRef.current.getBoundingClientRect();\n      return rect.top >= 0 && rect.bottom <= window.innerHeight;\n    }\n\n    return false;\n  };\n\n  const scrollHandler = () => setInView(() => isInView());\n\n  return !isLoading && __jsx(\"img\", {\n    src: inView ? secondaryImg : primaryImg,\n    alt: \"\",\n    ref: imageRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcz85NjYyIl0sIm5hbWVzIjpbIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwic2V0SW5WaWV3IiwiaXNJblZpZXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5WaWV3IiwiY3VycmVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJpbm5lckhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxtQkFBbUIsR0FBRyxDQUFDO0FBQUVDLFlBQUY7QUFBY0M7QUFBZCxDQUFELEtBQWtDO0FBRTFELFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBQ0MsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFDREMseURBQVMsQ0FBQyxNQUFNO0FBQ1pDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBQ0FDLGFBQVMsQ0FBQ0MsUUFBUSxFQUFULENBQVQ7QUFDQVAsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQSxXQUFRLE1BQU07QUFDVkcsWUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0gsYUFBckM7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9OLENBQUNOLFNBQUQsQ0FQTSxDQUFUO0FBU0EsUUFBTTtBQUFBLE9BQUNVLE1BQUQ7QUFBQSxPQUFTSDtBQUFULE1BQXNCTCxzREFBUSxDQUFDLEtBQUQsQ0FBcEM7O0FBRUEsUUFBTU0sUUFBUSxHQUFHLE1BQU07QUFDbkIsUUFBSVYsUUFBUSxDQUFDYSxPQUFiLEVBQXNCO0FBQ2xCLFlBQU1DLElBQUksR0FBR2QsUUFBUSxDQUFDYSxPQUFULENBQWlCRSxxQkFBakIsRUFBYjtBQUNBLGFBQU9ELElBQUksQ0FBQ0UsR0FBTCxJQUFZLENBQVosSUFBaUJGLElBQUksQ0FBQ0csTUFBTCxJQUFlWCxNQUFNLENBQUNZLFdBQTlDO0FBQ0g7O0FBQ0QsV0FBTyxLQUFQO0FBQ0gsR0FORDs7QUFRQSxRQUFNVixhQUFhLEdBQUcsTUFBTUMsU0FBUyxDQUFDLE1BQU1DLFFBQVEsRUFBZixDQUFyQzs7QUFFQSxTQUNJLENBQUNSLFNBQUQsSUFDQTtBQUNJLE9BQUcsRUFBRVUsTUFBTSxHQUFHYixZQUFILEdBQWtCRCxVQURqQztBQUVJLE9BQUcsRUFBQyxFQUZSO0FBRVcsT0FBRyxFQUFFRSxRQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRko7QUFNSCxDQS9CRDs7QUFpQ2VILGtGQUFmIiwiZmlsZSI6Ii4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xuXG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbClcbiAgICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcilcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKVxuICAgICAgICB9KVxuICAgIH0sIFtpc0xvYWRpbmddKVxuXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHNldEluVmlldygoKSA9PiBpc0luVmlldygpKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgIWlzTG9hZGluZyAmJlxuICAgICAgICA8aW1nIFxuICAgICAgICAgICAgc3JjPXtpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nfVxuICAgICAgICAgICAgYWx0PVwiXCIgcmVmPXtpbWFnZVJlZn1cbiAgICAgICAgLz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });