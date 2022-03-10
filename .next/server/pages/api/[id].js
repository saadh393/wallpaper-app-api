"use strict";
(() => {
var exports = {};
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    const { id  } = req.query;
    console.log(req.query);
    res.status(200).json([
        {
            imageURL: "https://images.pexels.com/photos/9049269/pexels-photo-9049269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            favOrNot: false
        },
        {
            imageURL: "https://images.pexels.com/photos/2737333/pexels-photo-2737333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            favOrNot: false
        },
        {
            imageURL: "https://images.pexels.com/photos/10171227/pexels-photo-10171227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            favOrNot: false
        },
        {
            imageURL: "https://images.pexels.com/photos/9359330/pexels-photo-9359330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            favOrNot: false
        }, 
    ]);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(827));
module.exports = __webpack_exports__;

})();