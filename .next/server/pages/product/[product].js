module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[product].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/product/[product].js":
/*!************************************!*\
  !*** ./pages/product/[product].js ***!
  \************************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/var/www/wp.local/wp-next-headless-main/pages/product/[product].js\";\n//import Image from 'next/image'\n\nfunction ProductPage(data) {\n  const pdata = data.product; //console.log(\"prod\",pdata) \n\n  if (pdata) {\n    var contnt = pdata[0].content.rendered;\n  } else {\n    var contnt = \"No Data\";\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: pdata ? pdata[0].title.rendered : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 10\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: pdata ? pdata[0].title.rendered : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: \" \"\n      }, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      dangerouslySetInnerHTML: {\n        __html: contnt\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\nconst getStaticPaths = async () => {\n  const res = await fetch(`http://wp.local/wp-json/wp/v2/product`);\n  const products = await res.json(); // Get the paths we want to pre-render based on posts\n\n  const paths = products.map(post => ({\n    params: {\n      product: post.id.toString()\n    }\n  })); //console.log(\"path\",paths)\n  // We'll pre-render only these paths at build time.\n  // { fallback: false } means other routes should 404.\n\n  return {\n    paths,\n    fallback: true\n  };\n}; // This also gets called at build time\n\nasync function getStaticProps({\n  params\n}) {\n  const id = params.product; // console.log(\"prod\",id)\n  // params contains the post `id`.\n  // If the route is like /posts/1, then params.id is 1\n\n  const res = await fetch(`http://wp.local/wp-json/wp/v2/product/?slug=${id}`);\n  const product = await res.json(); //console.log(\"pid\",page)\n  // Pass post data to the page via props\n\n  return {\n    props: {\n      product\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0L1twcm9kdWN0XS5qcz9jYTVhIl0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIiwiZGF0YSIsInBkYXRhIiwicHJvZHVjdCIsImNvbnRudCIsImNvbnRlbnQiLCJyZW5kZXJlZCIsInRpdGxlIiwiX19odG1sIiwiZ2V0U3RhdGljUGF0aHMiLCJyZXMiLCJmZXRjaCIsInByb2R1Y3RzIiwianNvbiIsInBhdGhzIiwibWFwIiwicG9zdCIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLFdBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBRXhDLFFBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxPQUFuQixDQUZ3QyxDQUd4Qzs7QUFDQSxNQUFHRCxLQUFILEVBQVM7QUFDWixRQUFJRSxNQUFNLEdBQUdGLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csT0FBVCxDQUFpQkMsUUFBOUI7QUFDSSxHQUZELE1BRUs7QUFDSixRQUFJRixNQUFNLEdBQUcsU0FBYjtBQUNBOztBQUdBLHNCQUNJO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRztBQUFBLGtCQUFRRixLQUFLLEdBQUdBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssS0FBVCxDQUFlRCxRQUFsQixnQkFBNkI7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtJO0FBQUEsZ0JBQUtKLEtBQUssR0FBR0EsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSyxLQUFULENBQWVELFFBQWxCLGdCQUE2QjtBQUFBO0FBQUE7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBTUk7QUFBUyw2QkFBdUIsRUFBRTtBQUFDRSxjQUFNLEVBQUVKO0FBQVQ7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7QUFFTSxNQUFNSyxjQUFjLEdBQUcsWUFBYTtBQUMzQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLHVDQUFGLENBQXZCO0FBR0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUF2QixDQUoyQyxDQU16Qzs7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csR0FBVCxDQUFjQyxJQUFELEtBQVc7QUFDcENDLFVBQU0sRUFBRTtBQUFFZCxhQUFPLEVBQUVhLElBQUksQ0FBQ0UsRUFBTCxDQUFRQyxRQUFSO0FBQVg7QUFENEIsR0FBWCxDQUFiLENBQWQsQ0FQeUMsQ0FVekM7QUFDQTtBQUNBOztBQUNBLFNBQU87QUFBRUwsU0FBRjtBQUFTTSxZQUFRLEVBQUU7QUFBbkIsR0FBUDtBQUVELENBZk0sQyxDQWtCUDs7QUFDTyxlQUFlQyxjQUFmLENBQThCO0FBQUVKO0FBQUYsQ0FBOUIsRUFBMEM7QUFDN0MsUUFBTUMsRUFBRSxHQUFHRCxNQUFNLENBQUNkLE9BQWxCLENBRDZDLENBRTlDO0FBQ0M7QUFDQTs7QUFDQSxRQUFNTyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLCtDQUE4Q08sRUFBRyxFQUFuRCxDQUF2QjtBQUNBLFFBQU1mLE9BQU8sR0FBRyxNQUFNTyxHQUFHLENBQUNHLElBQUosRUFBdEIsQ0FONkMsQ0FPN0M7QUFDQTs7QUFDQSxTQUFPO0FBQUVTLFNBQUssRUFBRTtBQUFFbkI7QUFBRjtBQUFULEdBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW3Byb2R1Y3RdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQYWdlKCBkYXRhICl7XG5cbiAgIGNvbnN0IHBkYXRhID0gZGF0YS5wcm9kdWN0O1xuICAgLy9jb25zb2xlLmxvZyhcInByb2RcIixwZGF0YSkgXG4gICBpZihwZGF0YSl7XG52YXIgY29udG50ID0gcGRhdGFbMF0uY29udGVudC5yZW5kZXJlZDtcbiAgIH1lbHNle1xuICAgIHZhciBjb250bnQgPSBcIk5vIERhdGFcIjtcbiAgIH0gXG4gIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPntwZGF0YSA/IHBkYXRhWzBdLnRpdGxlLnJlbmRlcmVkIDogPD48Lz4gfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgXG4gICAgICAgICAgICA8aDE+e3BkYXRhID8gcGRhdGFbMF0udGl0bGUucmVuZGVyZWQgOiA8PiA8Lz4gfTwvaDE+XG4gICAgICAgICAgICA8YXJ0aWNsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udG50fX0+PC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgICgpID0+IHtcbmNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3AubG9jYWwvd3AtanNvbi93cC92Mi9wcm9kdWN0YClcblxuXG5jb25zdCBwcm9kdWN0cyA9IGF3YWl0IHJlcy5qc29uKClcblxuICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiBwb3N0c1xuICBjb25zdCBwYXRocyA9IHByb2R1Y3RzLm1hcCgocG9zdCkgPT4gKHtcbiAgICBwYXJhbXM6IHsgcHJvZHVjdDogcG9zdC5pZC50b1N0cmluZygpIH0sXG4gIH0pKVxuICAvL2NvbnNvbGUubG9nKFwicGF0aFwiLHBhdGhzKVxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cbiAgLy8geyBmYWxsYmFjazogZmFsc2UgfSBtZWFucyBvdGhlciByb3V0ZXMgc2hvdWxkIDQwNC5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiB0cnVlIH1cblxufVxuXG5cbi8vIFRoaXMgYWxzbyBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IGlkID0gcGFyYW1zLnByb2R1Y3Q7XG4gICAvLyBjb25zb2xlLmxvZyhcInByb2RcIixpZClcbiAgICAvLyBwYXJhbXMgY29udGFpbnMgdGhlIHBvc3QgYGlkYC5cbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgbGlrZSAvcG9zdHMvMSwgdGhlbiBwYXJhbXMuaWQgaXMgMVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3AubG9jYWwvd3AtanNvbi93cC92Mi9wcm9kdWN0Lz9zbHVnPSR7aWR9YClcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIC8vY29uc29sZS5sb2coXCJwaWRcIixwYWdlKVxuICAgIC8vIFBhc3MgcG9zdCBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICAgIHJldHVybiB7IHByb3BzOiB7IHByb2R1Y3QgfSB9XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[product].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });