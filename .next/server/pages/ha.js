"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/ha";
exports.ids = ["pages/ha"];
exports.modules = {

/***/ "./src/pages/ha/index.js":
/*!*******************************!*\
  !*** ./src/pages/ha/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Ha() {\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            const fetchData = async ()=>{\n                const response = await fetch(\"https://api.jsonbin.io/v3/b/640ee172c0e7653a0587007a\");\n                const data = await response.json();\n                setData(data.record);\n            };\n            fetchData();\n        } catch (err) {\n            console.log(err);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: item.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\62813\\\\Documents\\\\TEFA DBT\\\\Next JS\\\\tugas1\\\\sociollow\\\\src\\\\pages\\\\ha\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\62813\\\\Documents\\\\TEFA DBT\\\\Next JS\\\\tugas1\\\\sociollow\\\\src\\\\pages\\\\ha\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ha);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaGEvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTVDLFNBQVNFLEtBQUs7SUFDVixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUVuQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUc7WUFDRCxNQUFNSyxZQUFZLFVBQVk7Z0JBQzVCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUosT0FBTyxNQUFNRyxTQUFTRSxJQUFJO2dCQUNoQ0osUUFBUUQsS0FBS00sTUFBTTtZQUNyQjtZQUNBSjtRQUNGLEVBQUUsT0FBT0ssS0FBSTtZQUNiQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDQSxHQUFHLEVBQUU7SUFDVCxxQkFDRSw4REFBQ0c7a0JBQUtWLEtBQUtXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWiw4REFBQ0Y7MEJBQUtFLEtBQUtDLElBQUk7Ozs7Ozs7Ozs7O0FBR3ZCO0FBRUEsaUVBQWVkLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Npb2xsb3cvLi9zcmMvcGFnZXMvaGEvaW5kZXguanM/ZWFmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBIYSgpIHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmpzb25iaW4uaW8vdjMvYi82NDBlZTE3MmMwZTc2NTNhMDU4NzAwN2FcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldERhdGEoZGF0YS5yZWNvcmQpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+e2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGRpdj57aXRlbS5uYW1lfTwvZGl2PlxyXG4gICAgKSl9PC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIYSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJyZWNvcmQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibWFwIiwiaXRlbSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/ha/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/ha/index.js"));
module.exports = __webpack_exports__;

})();