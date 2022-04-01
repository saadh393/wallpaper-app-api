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
exports.id = "pages/api/get/[packageName]";
exports.ids = ["pages/api/get/[packageName]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/get/[packageName].js":
/*!****************************************!*\
  !*** ./pages/api/get/[packageName].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    const { packageName  } = req.query;\n    fs__WEBPACK_IMPORTED_MODULE_0___default().readFile(`./data/${packageName}.json`, \"utf-8\", (err, data)=>{\n        if (err) res.send(err);\n        else res.send(data);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0L1twYWNrYWdlTmFtZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1CO0FBQ0osUUFBUSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDekMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFDLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBRWpDTCxrREFBVyxFQUFFLE9BQU8sRUFBRUksV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFPLFNBQUdHLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7UUFDakUsRUFBRSxFQUFFRCxHQUFHLEVBQUVKLEdBQUcsQ0FBQ00sSUFBSSxDQUFDRixHQUFHO2FBQ2hCSixHQUFHLENBQUNNLElBQUksQ0FBQ0QsSUFBSTtJQUNwQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhbGxwYXBlci1hcGkvLi9wYWdlcy9hcGkvZ2V0L1twYWNrYWdlTmFtZV0uanM/YTU0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgcGFja2FnZU5hbWUgfSA9IHJlcS5xdWVyeTtcblxuICBmcy5yZWFkRmlsZShgLi9kYXRhLyR7cGFja2FnZU5hbWV9Lmpzb25gLCBcInV0Zi04XCIsIChlcnIsIGRhdGEpID0+IHtcbiAgICBpZiAoZXJyKSByZXMuc2VuZChlcnIpO1xuICAgIGVsc2UgcmVzLnNlbmQoZGF0YSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBhY2thZ2VOYW1lIiwicXVlcnkiLCJyZWFkRmlsZSIsImVyciIsImRhdGEiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/get/[packageName].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get/[packageName].js"));
module.exports = __webpack_exports__;

})();