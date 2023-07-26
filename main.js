/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 200,
  'opsz' 48
}

body.page1 {
  height: 90vh;
  display: grid;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
}

div.search {
  display: flex;
  align-self: end;
}

input#location {
  font-size: 1.2rem;
}

button.findBtn {
  /* this size is tuned to input field size */
  font-size: 1.37rem;
}

.loading {
  align-self: start;
}

body.page2 {
  display: grid;
  row-gap: 1rem;
}

.weatherInfo {
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  align-items: center;
  column-gap: 1rem;
  border-radius: 8px;
  border: 2px solid black;
  justify-self: center;
  padding-right: 1rem;
}

.weatherGIF {
  grid-row : 1 / -1;
  grid-column: 1 / 2;
  /* same radius does not seem to fit in flush with border */
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.temp {
  grid-row : 2 / 4;
  grid-column: 2 / 3;
  font-size: 2rem;
  align-self: end;
  justify-self: end;
}


.weatherInfo > .text {
  grid-row : 4 / 5;
  grid-column: 2 / 3;
  justify-self: end;
}

.humidity {
  grid-row : 5 / 6;
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  justify-self: end;
}

.aqi {
  grid-row: 6 / 7;
  grid-column: 2 / 3;
  justify-self: end;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;;;;;AAKF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,0DAA0D;EAC1D,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;AACnB;;;AAGA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":[".material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 200,\n  'opsz' 48\n}\n\nbody.page1 {\n  height: 90vh;\n  display: grid;\n  row-gap: 1rem;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.search {\n  display: flex;\n  align-self: end;\n}\n\ninput#location {\n  font-size: 1.2rem;\n}\n\nbutton.findBtn {\n  /* this size is tuned to input field size */\n  font-size: 1.37rem;\n}\n\n.loading {\n  align-self: start;\n}\n\nbody.page2 {\n  display: grid;\n  row-gap: 1rem;\n}\n\n.weatherInfo {\n  display: grid;\n  grid-template-rows: repeat(8, 1fr);\n  align-items: center;\n  column-gap: 1rem;\n  border-radius: 8px;\n  border: 2px solid black;\n  justify-self: center;\n  padding-right: 1rem;\n}\n\n.weatherGIF {\n  grid-row : 1 / -1;\n  grid-column: 1 / 2;\n  /* same radius does not seem to fit in flush with border */\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.temp {\n  grid-row : 2 / 4;\n  grid-column: 2 / 3;\n  font-size: 2rem;\n  align-self: end;\n  justify-self: end;\n}\n\n\n.weatherInfo > .text {\n  grid-row : 4 / 5;\n  grid-column: 2 / 3;\n  justify-self: end;\n}\n\n.humidity {\n  grid-row : 5 / 6;\n  grid-column: 2 / 3;\n  display: flex;\n  align-items: center;\n  justify-self: end;\n}\n\n.aqi {\n  grid-row: 6 / 7;\n  grid-column: 2 / 3;\n  justify-self: end;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
function getData() {
    let WEATHER_API_KEY = "98027771108a4e34ae895533232506";
    let GIPHY_API_KEY = "S1oe8Qn3VykKvfxVnEATGF24DHPFOaxk";
    let AQICN_API_KEY = "b948e0531f21bfdc57f17b820550ec7a01c14f4b";
    let NEWS_API_KEY = "pub_26755878d643551ced9b8ae00c63c783bcf35";
    const callWeatherAPI = function (qType, qParam) {
        let weatherBase = "https://api.weatherapi.com/v1/";
        let fetch_url = `${weatherBase}${qType}.json?key=${WEATHER_API_KEY}&q=${qParam}&aqi=yes`;
        console.log(fetch_url);
        return fetch(fetch_url, {mode : "cors"})
        .then((response) => {return response.json()});
    }
    const callGiphyAPI = function (qType, qParam) {
        let giphyBase = "https://api.giphy.com/v1/gifs/";
        let fetch_url = `${giphyBase}${qType}?api_key=${GIPHY_API_KEY}&tag=${qParam}`;
        console.log(fetch_url);
        return fetch(fetch_url, {mode : "cors"})
        .then((response) => {return response.json()});
    }
    const callAqiAPI = async function (qParam) {
        let base = "https://api.waqi.info/feed/";
        let fetch_url = base + `${qParam}?token=${AQICN_API_KEY}`;
        let response = await fetch(fetch_url, {mode: "cors"});
        let data = await response.json();
        return data;
    }
    const callNewsAPI = async function (qParams) {
        let base = "https://newsdata.io/api/1/news?";
        let fetch_url = base + `apikey=${NEWS_API_KEY}&qInTitle=${qParams}`;
        let response = await fetch(fetch_url, {mode: "cors"});
        let data = await response.json();
        return data;
    }
    const callHistoryAPI = async function () {
    }
    const callQuotesAPI = function (qParams) {
    }
    return {callWeatherAPI, callGiphyAPI, callAqiAPI, callNewsAPI, callHistoryAPI, callQuotesAPI};
}



/***/ }),

/***/ "./src/page1.js":
/*!**********************!*\
  !*** ./src/page1.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populatePage1: () => (/* binding */ populatePage1)
/* harmony export */ });
function populatePage1() {
    let iconElem = document.createElement("link");
    iconElem.setAttribute("rel", "stylesheet");
    iconElem.setAttribute("href", "https://fonts.googleapis.com/" + 
    "css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
    let headElem = document.querySelector("head");
    let srcElem = document.querySelector("head > script");
    headElem.insertBefore(iconElem, srcElem);

    let bodyElem = document.querySelector("body");
    bodyElem.classList.remove("page2");
    bodyElem.classList.add("page1");
    document.querySelectorAll("body > *").forEach(e => bodyElem.removeChild(e));
    {
        let searchDiv = document.createElement("div");
        searchDiv.classList.add("search");
        let labelElem = document.createElement("label");
        labelElem.setAttribute("for", "location");
        let inputElem = document.createElement("input");
        let inputAttr = {
            "type" : "text", 
            "name" : "location", 
            "id" : "location", 
            "value" : "",
            "placeholder" : "Location"
        };
        for(let key in inputAttr)
            inputElem.setAttribute(key, inputAttr[key]);
        inputElem.addEventListener("change", function (e) {
            inputElem.setAttribute("value", e.target.value);        
        });
        let searchBtn = document.createElement("button");
        searchBtn.classList.add("findBtn");
        searchBtn.classList.add("material-symbols-outlined");
        searchBtn.textContent = "search";
        searchDiv.appendChild(labelElem);
        searchDiv.appendChild(inputElem);
        searchDiv.appendChild(searchBtn);
        bodyElem.appendChild(searchDiv);
    }    

    {
        let loadDiv = document.createElement("div");
        loadDiv.classList.add("loading");
        loadDiv.textContent = "Fetching data for your city right now...";
        loadDiv.style.color = "white";
        bodyElem.appendChild(loadDiv);
    }
}




/***/ }),

/***/ "./src/page2.js":
/*!**********************!*\
  !*** ./src/page2.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populatePage2: () => (/* binding */ populatePage2)
/* harmony export */ });
function populatePage2() {
    let bodyElem = document.querySelector("body");
    bodyElem.classList.remove("page1");
    bodyElem.classList.add("page2");
    document.querySelectorAll("body > *").forEach(e => bodyElem.removeChild(e));

    // let container = document.createElement("div");
    // container.classList.add("container");

    {
        let weatherDiv = document.createElement("div");
        weatherDiv.classList.add("weatherInfo");
        {
            let imgDiv = document.createElement("img");
            imgDiv.classList.add("weatherGIF");
            weatherDiv.appendChild(imgDiv);
        }
        {
            let tempDiv = document.createElement("div");
            tempDiv.classList.add("temp");
            weatherDiv.appendChild(tempDiv);
        }
        {
            let textDiv = document.createElement("div");
            textDiv.classList.add("text");
            weatherDiv.appendChild(textDiv);
        }
        {
            let humidDiv = document.createElement("div");
            humidDiv.classList.add("humidity");
            {
                let dropDiv = document.createElement("div");
                dropDiv.classList.add("drop", "material-symbols-outlined");
                dropDiv.textContent = "water_drop";
                humidDiv.appendChild(dropDiv);
            }
            {
                let valueDiv = document.createElement("div");
                valueDiv.classList.add("value");
                humidDiv.appendChild(valueDiv);
            }
            weatherDiv.appendChild(humidDiv);
        }
        {
            let aqiDiv = document.createElement("div");
            aqiDiv.classList.add("aqi");
            weatherDiv.appendChild(aqiDiv);
        }
        bodyElem.appendChild(weatherDiv);
    }

    {
        let stuffDiv = document.createElement("div");
        stuffDiv.classList.add("stuff");
        bodyElem.appendChild(stuffDiv);
    }

}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _page1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page1 */ "./src/page1.js");
/* harmony import */ var _page2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page2 */ "./src/page2.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_page1__WEBPACK_IMPORTED_MODULE_1__.populatePage1)();

let dataFetcher = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)();

let searchBtn = document.querySelector(".findBtn");
searchBtn.addEventListener("click", function (e) {
    let loadingDiv = document.querySelector(".loading");
    loadingDiv.style.color = "black" ;
    let weatherCondition;
    let location = document.querySelector("input#location").getAttribute("value");
    dataFetcher.callWeatherAPI("current", location)
    .then((data) => {
        (0,_page2__WEBPACK_IMPORTED_MODULE_2__.populatePage2)();
        console.log(data);
        loadingDiv.style.color = "white";
        let tempDiv = document.querySelector(".temp");
        tempDiv.textContent = `16\u00B0C`; //${data["current"]["temp_c"]} 
        let textDiv = document.querySelector(".weatherInfo > .text");
        textDiv.textContent = "Partly cloudy";//`${data["current"]["condition"]["text"]}`;
        let humidDiv = document.querySelector(".humidity > .value");
        humidDiv.textContent = "50%";//`${data["current"]["humidity"]}%`;
        // weatherCondition = `${data["current"]["condition"]["text"]}`;
    })
    .then(() => {
        dataFetcher.callAqiAPI(location)
        .then((data) => {
            let aqiDiv = document.querySelector(".aqi");
            aqiDiv.textContent = `AQI: ${data["data"]["aqi"]}`;
        });
    })
    .then(() => {
        dataFetcher.callGiphyAPI("random", "cloudy") //weatherCondition.split(" ").join("+") - for testing
        .then((data) => {
            console.log(data);
            let imgDiv = document.querySelector(".weatherGIF");
            imgDiv.setAttribute("alt", weatherCondition);
            imgDiv.setAttribute("src", `${data["data"]["images"]["fixed_height"]["url"]}`);
        });
    })
});

// let imgElem = document.createElement("img");
// dataFetcher.callGiphyAPI("random", "cat")
// .then((data) => {
//     imgElem.setAttribute("src", `${data["data"]["images"]["original"]["url"]}`);
// })
// .catch(err => alert(err));
// document.querySelector("body").appendChild(imgElem);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFDTztBQUNBO0FBQ25COztBQUVyQixxREFBYTs7QUFFYixrQkFBa0IsOENBQU87O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxJQUFJO0FBQy9DO0FBQ0EsOENBQThDLEtBQUsscUNBQXFDO0FBQ3hGO0FBQ0EscUNBQXFDLEtBQUssNEJBQTRCO0FBQ3RFLGlDQUFpQyxxQ0FBcUM7QUFDdEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9CQUFvQjtBQUM3RCxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw4Q0FBOEM7QUFDeEYsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywwQ0FBMEM7QUFDaEYsSUFBSTtBQUNKO0FBQ0EsdUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3BhZ2UxLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9wYWdlMi5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XG4gICdGSUxMJyAwLFxuICAnd2dodCcgNDAwLFxuICAnR1JBRCcgMjAwLFxuICAnb3BzeicgNDhcbn1cblxuYm9keS5wYWdlMSB7XG4gIGhlaWdodDogOTB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdi5zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBlbmQ7XG59XG5cbmlucHV0I2xvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmJ1dHRvbi5maW5kQnRuIHtcbiAgLyogdGhpcyBzaXplIGlzIHR1bmVkIHRvIGlucHV0IGZpZWxkIHNpemUgKi9cbiAgZm9udC1zaXplOiAxLjM3cmVtO1xufVxuXG4ubG9hZGluZyB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG5ib2R5LnBhZ2UyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogMXJlbTtcbn1cblxuLndlYXRoZXJJbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi53ZWF0aGVyR0lGIHtcbiAgZ3JpZC1yb3cgOiAxIC8gLTE7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgLyogc2FtZSByYWRpdXMgZG9lcyBub3Qgc2VlbSB0byBmaXQgaW4gZmx1c2ggd2l0aCBib3JkZXIgKi9cbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbi50ZW1wIHtcbiAgZ3JpZC1yb3cgOiAyIC8gNDtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBmb250LXNpemU6IDJyZW07XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cblxuLndlYXRoZXJJbmZvID4gLnRleHQge1xuICBncmlkLXJvdyA6IDQgLyA1O1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uaHVtaWRpdHkge1xuICBncmlkLXJvdyA6IDUgLyA2O1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uYXFpIHtcbiAgZ3JpZC1yb3c6IDYgLyA3O1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOzs7OztBQUtGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwREFBMEQ7RUFDMUQsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAnRklMTCcgMCxcXG4gICd3Z2h0JyA0MDAsXFxuICAnR1JBRCcgMjAwLFxcbiAgJ29wc3onIDQ4XFxufVxcblxcbmJvZHkucGFnZTEge1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuaW5wdXQjbG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJ1dHRvbi5maW5kQnRuIHtcXG4gIC8qIHRoaXMgc2l6ZSBpcyB0dW5lZCB0byBpbnB1dCBmaWVsZCBzaXplICovXFxuICBmb250LXNpemU6IDEuMzdyZW07XFxufVxcblxcbi5sb2FkaW5nIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG5ib2R5LnBhZ2UyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG4ud2VhdGhlckluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ud2VhdGhlckdJRiB7XFxuICBncmlkLXJvdyA6IDEgLyAtMTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIC8qIHNhbWUgcmFkaXVzIGRvZXMgbm90IHNlZW0gdG8gZml0IGluIGZsdXNoIHdpdGggYm9yZGVyICovXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi50ZW1wIHtcXG4gIGdyaWQtcm93IDogMiAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuXFxuLndlYXRoZXJJbmZvID4gLnRleHQge1xcbiAgZ3JpZC1yb3cgOiA0IC8gNTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgZ3JpZC1yb3cgOiA1IC8gNjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5hcWkge1xcbiAgZ3JpZC1yb3c6IDYgLyA3O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGxldCBXRUFUSEVSX0FQSV9LRVkgPSBcIjk4MDI3NzcxMTA4YTRlMzRhZTg5NTUzMzIzMjUwNlwiO1xuICAgIGxldCBHSVBIWV9BUElfS0VZID0gXCJTMW9lOFFuM1Z5a0t2ZnhWbkVBVEdGMjRESFBGT2F4a1wiO1xuICAgIGxldCBBUUlDTl9BUElfS0VZID0gXCJiOTQ4ZTA1MzFmMjFiZmRjNTdmMTdiODIwNTUwZWM3YTAxYzE0ZjRiXCI7XG4gICAgbGV0IE5FV1NfQVBJX0tFWSA9IFwicHViXzI2NzU1ODc4ZDY0MzU1MWNlZDliOGFlMDBjNjNjNzgzYmNmMzVcIjtcbiAgICBjb25zdCBjYWxsV2VhdGhlckFQSSA9IGZ1bmN0aW9uIChxVHlwZSwgcVBhcmFtKSB7XG4gICAgICAgIGxldCB3ZWF0aGVyQmFzZSA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvXCI7XG4gICAgICAgIGxldCBmZXRjaF91cmwgPSBgJHt3ZWF0aGVyQmFzZX0ke3FUeXBlfS5qc29uP2tleT0ke1dFQVRIRVJfQVBJX0tFWX0mcT0ke3FQYXJhbX0mYXFpPXllc2A7XG4gICAgICAgIGNvbnNvbGUubG9nKGZldGNoX3VybCk7XG4gICAgICAgIHJldHVybiBmZXRjaChmZXRjaF91cmwsIHttb2RlIDogXCJjb3JzXCJ9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtyZXR1cm4gcmVzcG9uc2UuanNvbigpfSk7XG4gICAgfVxuICAgIGNvbnN0IGNhbGxHaXBoeUFQSSA9IGZ1bmN0aW9uIChxVHlwZSwgcVBhcmFtKSB7XG4gICAgICAgIGxldCBnaXBoeUJhc2UgPSBcImh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL1wiO1xuICAgICAgICBsZXQgZmV0Y2hfdXJsID0gYCR7Z2lwaHlCYXNlfSR7cVR5cGV9P2FwaV9rZXk9JHtHSVBIWV9BUElfS0VZfSZ0YWc9JHtxUGFyYW19YDtcbiAgICAgICAgY29uc29sZS5sb2coZmV0Y2hfdXJsKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKGZldGNoX3VybCwge21vZGUgOiBcImNvcnNcIn0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge3JldHVybiByZXNwb25zZS5qc29uKCl9KTtcbiAgICB9XG4gICAgY29uc3QgY2FsbEFxaUFQSSA9IGFzeW5jIGZ1bmN0aW9uIChxUGFyYW0pIHtcbiAgICAgICAgbGV0IGJhc2UgPSBcImh0dHBzOi8vYXBpLndhcWkuaW5mby9mZWVkL1wiO1xuICAgICAgICBsZXQgZmV0Y2hfdXJsID0gYmFzZSArIGAke3FQYXJhbX0/dG9rZW49JHtBUUlDTl9BUElfS0VZfWA7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoX3VybCwge21vZGU6IFwiY29yc1wifSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgY29uc3QgY2FsbE5ld3NBUEkgPSBhc3luYyBmdW5jdGlvbiAocVBhcmFtcykge1xuICAgICAgICBsZXQgYmFzZSA9IFwiaHR0cHM6Ly9uZXdzZGF0YS5pby9hcGkvMS9uZXdzP1wiO1xuICAgICAgICBsZXQgZmV0Y2hfdXJsID0gYmFzZSArIGBhcGlrZXk9JHtORVdTX0FQSV9LRVl9JnFJblRpdGxlPSR7cVBhcmFtc31gO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaF91cmwsIHttb2RlOiBcImNvcnNcIn0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNvbnN0IGNhbGxIaXN0b3J5QVBJID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIH1cbiAgICBjb25zdCBjYWxsUXVvdGVzQVBJID0gZnVuY3Rpb24gKHFQYXJhbXMpIHtcbiAgICB9XG4gICAgcmV0dXJuIHtjYWxsV2VhdGhlckFQSSwgY2FsbEdpcGh5QVBJLCBjYWxsQXFpQVBJLCBjYWxsTmV3c0FQSSwgY2FsbEhpc3RvcnlBUEksIGNhbGxRdW90ZXNBUEl9O1xufVxuXG5leHBvcnQge2dldERhdGF9OyIsImZ1bmN0aW9uIHBvcHVsYXRlUGFnZTEoKSB7XG4gICAgbGV0IGljb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgaWNvbkVsZW0uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICBpY29uRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9cIiArIFxuICAgIFwiY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwXCIpO1xuICAgIGxldCBoZWFkRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuICAgIGxldCBzcmNFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWQgPiBzY3JpcHRcIik7XG4gICAgaGVhZEVsZW0uaW5zZXJ0QmVmb3JlKGljb25FbGVtLCBzcmNFbGVtKTtcblxuICAgIGxldCBib2R5RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlMlwiKTtcbiAgICBib2R5RWxlbS5jbGFzc0xpc3QuYWRkKFwicGFnZTFcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgPiAqXCIpLmZvckVhY2goZSA9PiBib2R5RWxlbS5yZW1vdmVDaGlsZChlKSk7XG4gICAge1xuICAgICAgICBsZXQgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VhcmNoRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG4gICAgICAgIGxldCBsYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsRWxlbS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb2NhdGlvblwiKTtcbiAgICAgICAgbGV0IGlucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbGV0IGlucHV0QXR0ciA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJ0ZXh0XCIsIFxuICAgICAgICAgICAgXCJuYW1lXCIgOiBcImxvY2F0aW9uXCIsIFxuICAgICAgICAgICAgXCJpZFwiIDogXCJsb2NhdGlvblwiLCBcbiAgICAgICAgICAgIFwidmFsdWVcIiA6IFwiXCIsXG4gICAgICAgICAgICBcInBsYWNlaG9sZGVyXCIgOiBcIkxvY2F0aW9uXCJcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gaW5wdXRBdHRyKVxuICAgICAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShrZXksIGlucHV0QXR0cltrZXldKTtcbiAgICAgICAgaW5wdXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBlLnRhcmdldC52YWx1ZSk7ICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzZWFyY2hCdG4uY2xhc3NMaXN0LmFkZChcImZpbmRCdG5cIik7XG4gICAgICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgICAgICAgc2VhcmNoQnRuLnRleHRDb250ZW50ID0gXCJzZWFyY2hcIjtcbiAgICAgICAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKGxhYmVsRWxlbSk7XG4gICAgICAgIHNlYXJjaERpdi5hcHBlbmRDaGlsZChpbnB1dEVsZW0pO1xuICAgICAgICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKTtcbiAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQoc2VhcmNoRGl2KTtcbiAgICB9ICAgIFxuXG4gICAge1xuICAgICAgICBsZXQgbG9hZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvYWREaXYuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIik7XG4gICAgICAgIGxvYWREaXYudGV4dENvbnRlbnQgPSBcIkZldGNoaW5nIGRhdGEgZm9yIHlvdXIgY2l0eSByaWdodCBub3cuLi5cIjtcbiAgICAgICAgbG9hZERpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQobG9hZERpdik7XG4gICAgfVxufVxuXG5leHBvcnQge3BvcHVsYXRlUGFnZTF9XG4iLCJmdW5jdGlvbiBwb3B1bGF0ZVBhZ2UyKCkge1xuICAgIGxldCBib2R5RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlMVwiKTtcbiAgICBib2R5RWxlbS5jbGFzc0xpc3QuYWRkKFwicGFnZTJcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgPiAqXCIpLmZvckVhY2goZSA9PiBib2R5RWxlbS5yZW1vdmVDaGlsZChlKSk7XG5cbiAgICAvLyBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgIHtcbiAgICAgICAgbGV0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3ZWF0aGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mb1wiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJHSUZcIik7XG4gICAgICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGVtcERpdi5jbGFzc0xpc3QuYWRkKFwidGVtcFwiKTtcbiAgICAgICAgICAgIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICAgICAgICAgIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGh1bWlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGh1bWlkRGl2LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eVwiKTtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgZHJvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZHJvcERpdi5jbGFzc0xpc3QuYWRkKFwiZHJvcFwiLCBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gICAgICAgICAgICAgICAgZHJvcERpdi50ZXh0Q29udGVudCA9IFwid2F0ZXJfZHJvcFwiO1xuICAgICAgICAgICAgICAgIGh1bWlkRGl2LmFwcGVuZENoaWxkKGRyb3BEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuY2xhc3NMaXN0LmFkZChcInZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIGh1bWlkRGl2LmFwcGVuZENoaWxkKHZhbHVlRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoaHVtaWREaXYpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBhcWlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYXFpRGl2LmNsYXNzTGlzdC5hZGQoXCJhcWlcIik7XG4gICAgICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGFxaURpdik7XG4gICAgICAgIH1cbiAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQod2VhdGhlckRpdik7XG4gICAgfVxuXG4gICAge1xuICAgICAgICBsZXQgc3R1ZmZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdHVmZkRpdi5jbGFzc0xpc3QuYWRkKFwic3R1ZmZcIik7XG4gICAgICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKHN0dWZmRGl2KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtwb3B1bGF0ZVBhZ2UyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVQYWdlMSB9IGZyb20gXCIuL3BhZ2UxXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVBhZ2UyIH0gZnJvbSBcIi4vcGFnZTJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbnBvcHVsYXRlUGFnZTEoKTtcblxubGV0IGRhdGFGZXRjaGVyID0gZ2V0RGF0YSgpO1xuXG5sZXQgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maW5kQnRuXCIpO1xuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCBsb2FkaW5nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nXCIpO1xuICAgIGxvYWRpbmdEaXYuc3R5bGUuY29sb3IgPSBcImJsYWNrXCIgO1xuICAgIGxldCB3ZWF0aGVyQ29uZGl0aW9uO1xuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNsb2NhdGlvblwiKS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcbiAgICBkYXRhRmV0Y2hlci5jYWxsV2VhdGhlckFQSShcImN1cnJlbnRcIiwgbG9jYXRpb24pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcG9wdWxhdGVQYWdlMigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgbG9hZGluZ0Rpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgbGV0IHRlbXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBcIik7XG4gICAgICAgIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgMTZcXHUwMEIwQ2A7IC8vJHtkYXRhW1wiY3VycmVudFwiXVtcInRlbXBfY1wiXX0gXG4gICAgICAgIGxldCB0ZXh0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVySW5mbyA+IC50ZXh0XCIpO1xuICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gXCJQYXJ0bHkgY2xvdWR5XCI7Ly9gJHtkYXRhW1wiY3VycmVudFwiXVtcImNvbmRpdGlvblwiXVtcInRleHRcIl19YDtcbiAgICAgICAgbGV0IGh1bWlkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eSA+IC52YWx1ZVwiKTtcbiAgICAgICAgaHVtaWREaXYudGV4dENvbnRlbnQgPSBcIjUwJVwiOy8vYCR7ZGF0YVtcImN1cnJlbnRcIl1bXCJodW1pZGl0eVwiXX0lYDtcbiAgICAgICAgLy8gd2VhdGhlckNvbmRpdGlvbiA9IGAke2RhdGFbXCJjdXJyZW50XCJdW1wiY29uZGl0aW9uXCJdW1widGV4dFwiXX1gO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBkYXRhRmV0Y2hlci5jYWxsQXFpQVBJKGxvY2F0aW9uKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGFxaURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXFpXCIpO1xuICAgICAgICAgICAgYXFpRGl2LnRleHRDb250ZW50ID0gYEFRSTogJHtkYXRhW1wiZGF0YVwiXVtcImFxaVwiXX1gO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGF0YUZldGNoZXIuY2FsbEdpcGh5QVBJKFwicmFuZG9tXCIsIFwiY2xvdWR5XCIpIC8vd2VhdGhlckNvbmRpdGlvbi5zcGxpdChcIiBcIikuam9pbihcIitcIikgLSBmb3IgdGVzdGluZ1xuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBsZXQgaW1nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyR0lGXCIpO1xuICAgICAgICAgICAgaW1nRGl2LnNldEF0dHJpYnV0ZShcImFsdFwiLCB3ZWF0aGVyQ29uZGl0aW9uKTtcbiAgICAgICAgICAgIGltZ0Rpdi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7ZGF0YVtcImRhdGFcIl1bXCJpbWFnZXNcIl1bXCJmaXhlZF9oZWlnaHRcIl1bXCJ1cmxcIl19YCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG59KTtcblxuLy8gbGV0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuLy8gZGF0YUZldGNoZXIuY2FsbEdpcGh5QVBJKFwicmFuZG9tXCIsIFwiY2F0XCIpXG4vLyAudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke2RhdGFbXCJkYXRhXCJdW1wiaW1hZ2VzXCJdW1wib3JpZ2luYWxcIl1bXCJ1cmxcIl19YCk7XG4vLyB9KVxuLy8gLmNhdGNoKGVyciA9PiBhbGVydChlcnIpKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGltZ0VsZW0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==