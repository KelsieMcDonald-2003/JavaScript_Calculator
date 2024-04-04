"use strict";
self["webpackHotUpdaterecipesearchapp"]("calculator1",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/calculator1.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/calculator1.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#calc {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4d4d4d; /* Dark gray background */
    border-radius: 25px;
    padding: 20px;
    width: 300px; /* Adjust as needed */
    margin: 0 auto; /* Center the calculator */
}

#result {
    width: 100%;
    height: 50px; /* Adjust as needed */
    margin-bottom: 20px;
    text-align: right;
    padding-right: 10px;
    font-size: 2em;
    border: none;
    outline: none;
    color: white;
    background-color: #333333; /* Darker gray background */
}

#clear {
    width: 100%;
    height: 50px; /* Adjust as needed */
    margin-bottom: 20px;
    font-size: 2em;
    color: white;
    background-color: #ff5050; /* Red background */
    border: none;
    outline: none;
    cursor: pointer;
}

#buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 100%;
}

#buttons input[type="button"] {
    height: 60px; /* Adjust as needed */
    font-size: 2em;
    color: white;
    background-color: #1a1a1a; /* Black background */
    border: none;
    outline: none;
    cursor: pointer;
}

#buttons input[type="button"]:hover {
    background-color: #4d4d4d; /* Dark gray background on hover */
}`, "",{"version":3,"sources":["webpack://./src/css/calculator1.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB,EAAE,yBAAyB;IACpD,mBAAmB;IACnB,aAAa;IACb,YAAY,EAAE,qBAAqB;IACnC,cAAc,EAAE,0BAA0B;AAC9C;;AAEA;IACI,WAAW;IACX,YAAY,EAAE,qBAAqB;IACnC,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,yBAAyB,EAAE,2BAA2B;AAC1D;;AAEA;IACI,WAAW;IACX,YAAY,EAAE,qBAAqB;IACnC,mBAAmB;IACnB,cAAc;IACd,YAAY;IACZ,yBAAyB,EAAE,mBAAmB;IAC9C,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,SAAS;IACT,WAAW;AACf;;AAEA;IACI,YAAY,EAAE,qBAAqB;IACnC,cAAc;IACd,YAAY;IACZ,yBAAyB,EAAE,qBAAqB;IAChD,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,yBAAyB,EAAE,kCAAkC;AACjE","sourcesContent":["#calc {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: #4d4d4d; /* Dark gray background */\r\n    border-radius: 25px;\r\n    padding: 20px;\r\n    width: 300px; /* Adjust as needed */\r\n    margin: 0 auto; /* Center the calculator */\r\n}\r\n\r\n#result {\r\n    width: 100%;\r\n    height: 50px; /* Adjust as needed */\r\n    margin-bottom: 20px;\r\n    text-align: right;\r\n    padding-right: 10px;\r\n    font-size: 2em;\r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    background-color: #333333; /* Darker gray background */\r\n}\r\n\r\n#clear {\r\n    width: 100%;\r\n    height: 50px; /* Adjust as needed */\r\n    margin-bottom: 20px;\r\n    font-size: 2em;\r\n    color: white;\r\n    background-color: #ff5050; /* Red background */\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttons {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 10px;\r\n    width: 100%;\r\n}\r\n\r\n#buttons input[type=\"button\"] {\r\n    height: 60px; /* Adjust as needed */\r\n    font-size: 2em;\r\n    color: white;\r\n    background-color: #1a1a1a; /* Black background */\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttons input[type=\"button\"]:hover {\r\n    background-color: #4d4d4d; /* Dark gray background on hover */\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("62dfe7107b13fa6f133a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=calculator1.dd91eb10f3c2ad54501f.hot-update.js.map