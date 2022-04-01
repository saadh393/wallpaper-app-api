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
exports.id = "pages/api/store/[[...slug]]";
exports.ids = ["pages/api/store/[[...slug]]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/store/[[...slug]].js":
/*!****************************************!*\
  !*** ./pages/api/store/[[...slug]].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* Documentation\n\nfetchFromGoogle will get json from google server\n-> blogid, postid will be taken from query for searching with the google api\n-> packageName will be taken for writing the .json file in the data directory\n\n*/ \nasync function handler(req, res) {\n    const { slug  } = req.query;\n    const [blogId, postId, packageName] = slug;\n    if (!blogId || !postId || !packageName) {\n        res.json({\n            status: 500,\n            message: \"Please provide appropriate query\",\n            description: \"_DOMAIN_/api/store/blogID/postID/packageName\"\n        });\n    }\n    let blogspostData = await fetchFromGoogle(blogId, postId);\n    const output = convertingToJson(blogspostData, packageName);\n    res.send(output);\n};\nasync function fetchFromGoogle(_blogId, _postId) {\n    const fetchedData = await fetch(`https://www.googleapis.com/blogger/v2/blogs/${_blogId}/posts/${_postId}?key=AIzaSyBMTPxl1wRSKohdug8F3xRfwLiv96h1s50`);\n    const response = await fetchedData.json();\n    return response.content;\n}\nfunction convertingToJson(data, packageName) {\n    let structuredObject = [];\n    let arrayOfLinks = data.match(/https:\\/\\/((1\\.bp\\.blogspot\\.com)|(blogger\\.googleusercontent\\.com))\\S+s2048\\S+webp/gim);\n    arrayOfLinks.forEach((link)=>{\n        structuredObject.push({\n            imageURL: link,\n            favOrNot: false\n        });\n    });\n    writeDataFile(structuredObject, packageName);\n    return {\n        status: 200,\n        message: \"Operation Successful\"\n    };\n}\nfunction writeDataFile(structuredObject, packageName) {\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(`./data/${packageName}.json`, JSON.stringify(structuredObject), function(err) {\n        if (err) throw err;\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RvcmUvW1suLi5zbHVnXV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFNRTs7Ozs7O0FBQUEsR0FDaUI7QUFFSixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBQzFCLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFdBQVcsSUFBSUosSUFBSTtJQUMxQyxFQUFFLEdBQUdFLE1BQU0sS0FBS0MsTUFBTSxLQUFLQyxXQUFXLEVBQUUsQ0FBQztRQUN2Q0wsR0FBRyxDQUFDTSxJQUFJLENBQUMsQ0FBQztZQUNSQyxNQUFNLEVBQUUsR0FBRztZQUNYQyxPQUFPLEVBQUUsQ0FBa0M7WUFDM0NDLFdBQVcsRUFBRSxDQUE4QztRQUM3RCxDQUFDO0lBQ0gsQ0FBQztJQUNELEdBQUcsQ0FBQ0MsYUFBYSxHQUFHLEtBQUssQ0FBQ0MsZUFBZSxDQUFDUixNQUFNLEVBQUVDLE1BQU07SUFDeEQsS0FBSyxDQUFDUSxNQUFNLEdBQUdDLGdCQUFnQixDQUFDSCxhQUFhLEVBQUVMLFdBQVc7SUFDMURMLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDRixNQUFNO0FBQ2pCLENBQUM7ZUFFY0QsZUFBZSxDQUFDSSxPQUFPLEVBQUVDLE9BQU8sRUFBRSxDQUFDO0lBQ2hELEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxFQUM1Qiw0Q0FBNEMsRUFBRUgsT0FBTyxDQUFDLE9BQU8sRUFBRUMsT0FBTyxDQUFDLDRDQUE0QztJQUV0SCxLQUFLLENBQUNHLFFBQVEsR0FBRyxLQUFLLENBQUNGLFdBQVcsQ0FBQ1gsSUFBSTtJQUN2QyxNQUFNLENBQUNhLFFBQVEsQ0FBQ0MsT0FBTztBQUN6QixDQUFDO1NBRVFQLGdCQUFnQixDQUFDUSxJQUFJLEVBQUVoQixXQUFXLEVBQUUsQ0FBQztJQUM1QyxHQUFHLENBQUNpQixnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDekIsR0FBRyxDQUFDQyxZQUFZLEdBQUdGLElBQUksQ0FBQ0csS0FBSztJQUc3QkQsWUFBWSxDQUFDRSxPQUFPLEVBQUVDLElBQUksR0FBSyxDQUFDO1FBQzlCSixnQkFBZ0IsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7WUFBQ0MsUUFBUSxFQUFFRixJQUFJO1lBQUVHLFFBQVEsRUFBRSxLQUFLO1FBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0RDLGFBQWEsQ0FBQ1IsZ0JBQWdCLEVBQUVqQixXQUFXO0lBQzNDLE1BQU0sQ0FBQyxDQUFDO1FBQUNFLE1BQU0sRUFBRSxHQUFHO1FBQUVDLE9BQU8sRUFBRSxDQUFzQjtJQUFDLENBQUM7QUFDekQsQ0FBQztTQUVRc0IsYUFBYSxDQUFDUixnQkFBZ0IsRUFBRWpCLFdBQVcsRUFBRSxDQUFDO0lBQ3JEUixtREFBWSxFQUFFLE9BQU8sRUFBRVEsV0FBVyxDQUFDLEtBQUssR0FBRzJCLElBQUksQ0FBQ0MsU0FBUyxDQUFDWCxnQkFBZ0IsR0FBRyxRQUFRLENBQUVZLEdBQUcsRUFBRSxDQUFDO1FBQzNGLEVBQUUsRUFBRUEsR0FBRyxFQUFFLEtBQUssQ0FBQ0EsR0FBRztJQUNwQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhbGxwYXBlci1hcGkvLi9wYWdlcy9hcGkvc3RvcmUvW1suLi5zbHVnXV0uanM/MDVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEb2N1bWVudGF0aW9uXG5cbmZldGNoRnJvbUdvb2dsZSB3aWxsIGdldCBqc29uIGZyb20gZ29vZ2xlIHNlcnZlclxuLT4gYmxvZ2lkLCBwb3N0aWQgd2lsbCBiZSB0YWtlbiBmcm9tIHF1ZXJ5IGZvciBzZWFyY2hpbmcgd2l0aCB0aGUgZ29vZ2xlIGFwaVxuLT4gcGFja2FnZU5hbWUgd2lsbCBiZSB0YWtlbiBmb3Igd3JpdGluZyB0aGUgLmpzb24gZmlsZSBpbiB0aGUgZGF0YSBkaXJlY3RvcnlcblxuKi9cbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcbiAgY29uc3QgW2Jsb2dJZCwgcG9zdElkLCBwYWNrYWdlTmFtZV0gPSBzbHVnO1xuICBpZiAoIWJsb2dJZCB8fCAhcG9zdElkIHx8ICFwYWNrYWdlTmFtZSkge1xuICAgIHJlcy5qc29uKHtcbiAgICAgIHN0YXR1czogNTAwLFxuICAgICAgbWVzc2FnZTogXCJQbGVhc2UgcHJvdmlkZSBhcHByb3ByaWF0ZSBxdWVyeVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiX0RPTUFJTl8vYXBpL3N0b3JlL2Jsb2dJRC9wb3N0SUQvcGFja2FnZU5hbWVcIixcbiAgICB9KTtcbiAgfVxuICBsZXQgYmxvZ3Nwb3N0RGF0YSA9IGF3YWl0IGZldGNoRnJvbUdvb2dsZShibG9nSWQsIHBvc3RJZCk7XG4gIGNvbnN0IG91dHB1dCA9IGNvbnZlcnRpbmdUb0pzb24oYmxvZ3Nwb3N0RGF0YSwgcGFja2FnZU5hbWUpO1xuICByZXMuc2VuZChvdXRwdXQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEZyb21Hb29nbGUoX2Jsb2dJZCwgX3Bvc3RJZCkge1xuICBjb25zdCBmZXRjaGVkRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ibG9nZ2VyL3YyL2Jsb2dzLyR7X2Jsb2dJZH0vcG9zdHMvJHtfcG9zdElkfT9rZXk9QUl6YVN5Qk1UUHhsMXdSU0tvaGR1ZzhGM3hSZndMaXY5NmgxczUwYFxuICApO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoZWREYXRhLmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRpbmdUb0pzb24oZGF0YSwgcGFja2FnZU5hbWUpIHtcbiAgbGV0IHN0cnVjdHVyZWRPYmplY3QgPSBbXTtcbiAgbGV0IGFycmF5T2ZMaW5rcyA9IGRhdGEubWF0Y2goXG4gICAgL2h0dHBzOlxcL1xcLygoMVxcLmJwXFwuYmxvZ3Nwb3RcXC5jb20pfChibG9nZ2VyXFwuZ29vZ2xldXNlcmNvbnRlbnRcXC5jb20pKVxcUytzMjA0OFxcUyt3ZWJwL2dpbVxuICApO1xuICBhcnJheU9mTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIHN0cnVjdHVyZWRPYmplY3QucHVzaCh7IGltYWdlVVJMOiBsaW5rLCBmYXZPck5vdDogZmFsc2UgfSk7XG4gIH0pO1xuICB3cml0ZURhdGFGaWxlKHN0cnVjdHVyZWRPYmplY3QsIHBhY2thZ2VOYW1lKTtcbiAgcmV0dXJuIHsgc3RhdHVzOiAyMDAsIG1lc3NhZ2U6IFwiT3BlcmF0aW9uIFN1Y2Nlc3NmdWxcIiB9O1xufVxuXG5mdW5jdGlvbiB3cml0ZURhdGFGaWxlKHN0cnVjdHVyZWRPYmplY3QsIHBhY2thZ2VOYW1lKSB7XG4gIGZzLndyaXRlRmlsZShgLi9kYXRhLyR7cGFja2FnZU5hbWV9Lmpzb25gLCBKU09OLnN0cmluZ2lmeShzdHJ1Y3R1cmVkT2JqZWN0KSwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2x1ZyIsInF1ZXJ5IiwiYmxvZ0lkIiwicG9zdElkIiwicGFja2FnZU5hbWUiLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZSIsImRlc2NyaXB0aW9uIiwiYmxvZ3Nwb3N0RGF0YSIsImZldGNoRnJvbUdvb2dsZSIsIm91dHB1dCIsImNvbnZlcnRpbmdUb0pzb24iLCJzZW5kIiwiX2Jsb2dJZCIsIl9wb3N0SWQiLCJmZXRjaGVkRGF0YSIsImZldGNoIiwicmVzcG9uc2UiLCJjb250ZW50IiwiZGF0YSIsInN0cnVjdHVyZWRPYmplY3QiLCJhcnJheU9mTGlua3MiLCJtYXRjaCIsImZvckVhY2giLCJsaW5rIiwicHVzaCIsImltYWdlVVJMIiwiZmF2T3JOb3QiLCJ3cml0ZURhdGFGaWxlIiwid3JpdGVGaWxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/store/[[...slug]].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/store/[[...slug]].js"));
module.exports = __webpack_exports__;

})();