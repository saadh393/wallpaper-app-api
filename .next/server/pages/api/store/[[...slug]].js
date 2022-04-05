"use strict";
(() => {
var exports = {};
exports.id = 562;
exports.ids = [562];
exports.modules = {

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* Documentation

fetchFromGoogle will get json from google server
-> blogid, postid will be taken from query for searching with the google api
-> packageName will be taken for writing the .json file in the data directory

*/ 
async function handler(req, res) {
    const { slug  } = req.query;
    const [blogId, postId, packageName] = slug;
    if (!blogId || !postId || !packageName) {
        res.json({
            status: 500,
            message: "Please provide appropriate query",
            description: "_DOMAIN_/api/store/blogID/postID/packageName"
        });
    }
    let blogspostData = await fetchFromGoogle(blogId, postId);
    const output = convertingToJson(blogspostData, packageName);
    res.send(output);
};
async function fetchFromGoogle(_blogId, _postId) {
    const fetchedData = await fetch(`https://www.googleapis.com/blogger/v2/blogs/${_blogId}/posts/${_postId}?key=AIzaSyBMTPxl1wRSKohdug8F3xRfwLiv96h1s50`);
    const response = await fetchedData.json();
    return response.content;
}
function convertingToJson(data, packageName) {
    let structuredObject = [];
    let arrayOfLinks = data.match(/https:\/\/((1\.bp\.blogspot\.com)|(blogger\.googleusercontent\.com))\S+s2048\S+webp/gim);
    // let arrayOfLinks = data.match(/https:\/\/1.bp.blogspot.com\S+s2048\S+webp/gim);
    // let arrayOfLinks = data.match(/https:\/\/((1\.bp\.blogspot\.com)|(blogger\.googleusercontent\.com))\S+s2048\S+webp/gim);
    arrayOfLinks.forEach((link)=>{
        structuredObject.push({
            imageURL: link,
            favOrNot: false
        });
    });
    writeDataFile(structuredObject, packageName);
    return {
        status: 200,
        message: "Operation Successful"
    };
}
function writeDataFile(structuredObject, packageName) {
    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(`./data/${packageName}.json`, JSON.stringify(structuredObject), function(err) {
        if (err) throw err;
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(206));
module.exports = __webpack_exports__;

})();