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
}

.location {
  grid-row : 7 / 8;
  grid-column: 2 / 3;
  justify-self: end;
  display : flex;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;;;;;AAKF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,0DAA0D;EAC1D,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;AACnB;;;AAGA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,mBAAmB;AACrB","sourcesContent":[".material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 200,\n  'opsz' 48\n}\n\nbody.page1 {\n  height: 90vh;\n  display: grid;\n  row-gap: 1rem;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.search {\n  display: flex;\n  align-self: end;\n}\n\ninput#location {\n  font-size: 1.2rem;\n}\n\nbutton.findBtn {\n  /* this size is tuned to input field size */\n  font-size: 1.37rem;\n}\n\n.loading {\n  align-self: start;\n}\n\nbody.page2 {\n  display: grid;\n  row-gap: 1rem;\n}\n\n.weatherInfo {\n  display: grid;\n  grid-template-rows: repeat(8, 1fr);\n  align-items: center;\n  column-gap: 1rem;\n  border-radius: 8px;\n  border: 2px solid black;\n  justify-self: center;\n  padding-right: 1rem;\n}\n\n.weatherGIF {\n  grid-row : 1 / -1;\n  grid-column: 1 / 2;\n  /* same radius does not seem to fit in flush with border */\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.temp {\n  grid-row : 2 / 4;\n  grid-column: 2 / 3;\n  font-size: 2rem;\n  align-self: end;\n  justify-self: end;\n}\n\n\n.weatherInfo > .text {\n  grid-row : 4 / 5;\n  grid-column: 2 / 3;\n  justify-self: end;\n}\n\n.humidity {\n  grid-row : 5 / 6;\n  grid-column: 2 / 3;\n  display: flex;\n  align-items: center;\n  justify-self: end;\n}\n\n.aqi {\n  grid-row: 6 / 7;\n  grid-column: 2 / 3;\n  justify-self: end;\n}\n\n.location {\n  grid-row : 7 / 8;\n  grid-column: 2 / 3;\n  justify-self: end;\n  display : flex;\n  align-items: center;\n}"],"sourceRoot":""}]);
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
    let NEWS_API_KEY = "d0bde101400b31138dcc1b588877ba1b";
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
        let base = "http://api.mediastack.com/v1/news?";
        let fetch_url = base + `access_key=${NEWS_API_KEY}&keywords=${qParams}` +
                        `&date=${new Date().toISOString().split('T')[0]}&sort=popularity`+
                        `&languages=en`;
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
        {
            let locationDiv = document.createElement("div");
            locationDiv.classList.add("location");
            {
                let locationPin = document.createElement("div");
                locationPin.classList.add("pin", "material-symbols-outlined");
                locationPin.textContent = "location_on";
                locationDiv.appendChild(locationPin);
            }
            {
                let locationText = document.createElement("div");
                locationText.classList.add("value");
                locationDiv.appendChild(locationText);
            }
            weatherDiv.appendChild(locationDiv);
        }
        bodyElem.appendChild(weatherDiv);
    }

    {
        let stuff = document.createElement("fieldset");
        stuff.classList.add("stuff");
        {
            let newsLegend = document.createElement("legend");
            newsLegend.classList.add("headlines");
            newsLegend.textContent = "Top Headlines";
            stuff.appendChild(newsLegend);
        }
        {
            let newsDiv = document.createElement("div");
            newsDiv.classList.add("news");
            stuff.appendChild(newsDiv);
        }
        bodyElem.appendChild(stuff);
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
        let locationDiv = document.querySelector(".location > .value");
        locationDiv.textContent = `${data["location"]["name"]}, ${data["location"]["country"]}`;
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
    .then(() => {
        dataFetcher.callNewsAPI(location)
        .then(function (data) {
            console.log(data["data"].length);
            let numResults = Math.min(10, data["data"].length);
            console.log(numResults);
            let newsDiv = document.querySelector(".news");
            for (let i = 0; i < numResults; i++) {
                let headline = document.createElement("a");
                headline.classList.add(`headline#${i + 1}`);
                headline.setAttribute("href", data["data"][i]["url"]);
                headline.textContent = data["data"][i]["title"];
                newsDiv.appendChild(headline);
            }
        });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0JBQW9CO0FBQzdELFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDhDQUE4QztBQUN4RixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBLG1EQUFtRCxNQUFNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywwQ0FBMEM7QUFDaEYsSUFBSTtBQUNKO0FBQ0EsdUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3BhZ2UxLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9wYWdlMi5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XG4gICdGSUxMJyAwLFxuICAnd2dodCcgNDAwLFxuICAnR1JBRCcgMjAwLFxuICAnb3BzeicgNDhcbn1cblxuYm9keS5wYWdlMSB7XG4gIGhlaWdodDogOTB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdi5zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBlbmQ7XG59XG5cbmlucHV0I2xvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmJ1dHRvbi5maW5kQnRuIHtcbiAgLyogdGhpcyBzaXplIGlzIHR1bmVkIHRvIGlucHV0IGZpZWxkIHNpemUgKi9cbiAgZm9udC1zaXplOiAxLjM3cmVtO1xufVxuXG4ubG9hZGluZyB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG5ib2R5LnBhZ2UyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogMXJlbTtcbn1cblxuLndlYXRoZXJJbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi53ZWF0aGVyR0lGIHtcbiAgZ3JpZC1yb3cgOiAxIC8gLTE7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgLyogc2FtZSByYWRpdXMgZG9lcyBub3Qgc2VlbSB0byBmaXQgaW4gZmx1c2ggd2l0aCBib3JkZXIgKi9cbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbi50ZW1wIHtcbiAgZ3JpZC1yb3cgOiAyIC8gNDtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBmb250LXNpemU6IDJyZW07XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cblxuLndlYXRoZXJJbmZvID4gLnRleHQge1xuICBncmlkLXJvdyA6IDQgLyA1O1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uaHVtaWRpdHkge1xuICBncmlkLXJvdyA6IDUgLyA2O1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uYXFpIHtcbiAgZ3JpZC1yb3c6IDYgLyA3O1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4ubG9jYXRpb24ge1xuICBncmlkLXJvdyA6IDcgLyA4O1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBkaXNwbGF5IDogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Ozs7QUFLRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMERBQTBEO0VBQzFELDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICdGSUxMJyAwLFxcbiAgJ3dnaHQnIDQwMCxcXG4gICdHUkFEJyAyMDAsXFxuICAnb3BzeicgNDhcXG59XFxuXFxuYm9keS5wYWdlMSB7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2LnNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG5pbnB1dCNsb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuYnV0dG9uLmZpbmRCdG4ge1xcbiAgLyogdGhpcyBzaXplIGlzIHR1bmVkIHRvIGlucHV0IGZpZWxkIHNpemUgKi9cXG4gIGZvbnQtc2l6ZTogMS4zN3JlbTtcXG59XFxuXFxuLmxvYWRpbmcge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbmJvZHkucGFnZTIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDFyZW07XFxufVxcblxcbi53ZWF0aGVySW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi53ZWF0aGVyR0lGIHtcXG4gIGdyaWQtcm93IDogMSAvIC0xO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgLyogc2FtZSByYWRpdXMgZG9lcyBub3Qgc2VlbSB0byBmaXQgaW4gZmx1c2ggd2l0aCBib3JkZXIgKi9cXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRlbXAge1xcbiAgZ3JpZC1yb3cgOiAyIC8gNDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5cXG4ud2VhdGhlckluZm8gPiAudGV4dCB7XFxuICBncmlkLXJvdyA6IDQgLyA1O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICBncmlkLXJvdyA6IDUgLyA2O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmFxaSB7XFxuICBncmlkLXJvdzogNiAvIDc7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGdyaWQtcm93IDogNyAvIDg7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGRpc3BsYXkgOiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgbGV0IFdFQVRIRVJfQVBJX0tFWSA9IFwiOTgwMjc3NzExMDhhNGUzNGFlODk1NTMzMjMyNTA2XCI7XG4gICAgbGV0IEdJUEhZX0FQSV9LRVkgPSBcIlMxb2U4UW4zVnlrS3ZmeFZuRUFUR0YyNERIUEZPYXhrXCI7XG4gICAgbGV0IEFRSUNOX0FQSV9LRVkgPSBcImI5NDhlMDUzMWYyMWJmZGM1N2YxN2I4MjA1NTBlYzdhMDFjMTRmNGJcIjtcbiAgICBsZXQgTkVXU19BUElfS0VZID0gXCJkMGJkZTEwMTQwMGIzMTEzOGRjYzFiNTg4ODc3YmExYlwiO1xuICAgIGNvbnN0IGNhbGxXZWF0aGVyQVBJID0gZnVuY3Rpb24gKHFUeXBlLCBxUGFyYW0pIHtcbiAgICAgICAgbGV0IHdlYXRoZXJCYXNlID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9cIjtcbiAgICAgICAgbGV0IGZldGNoX3VybCA9IGAke3dlYXRoZXJCYXNlfSR7cVR5cGV9Lmpzb24/a2V5PSR7V0VBVEhFUl9BUElfS0VZfSZxPSR7cVBhcmFtfSZhcWk9eWVzYDtcbiAgICAgICAgY29uc29sZS5sb2coZmV0Y2hfdXJsKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKGZldGNoX3VybCwge21vZGUgOiBcImNvcnNcIn0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge3JldHVybiByZXNwb25zZS5qc29uKCl9KTtcbiAgICB9XG4gICAgY29uc3QgY2FsbEdpcGh5QVBJID0gZnVuY3Rpb24gKHFUeXBlLCBxUGFyYW0pIHtcbiAgICAgICAgbGV0IGdpcGh5QmFzZSA9IFwiaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvXCI7XG4gICAgICAgIGxldCBmZXRjaF91cmwgPSBgJHtnaXBoeUJhc2V9JHtxVHlwZX0/YXBpX2tleT0ke0dJUEhZX0FQSV9LRVl9JnRhZz0ke3FQYXJhbX1gO1xuICAgICAgICBjb25zb2xlLmxvZyhmZXRjaF91cmwpO1xuICAgICAgICByZXR1cm4gZmV0Y2goZmV0Y2hfdXJsLCB7bW9kZSA6IFwiY29yc1wifSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7cmV0dXJuIHJlc3BvbnNlLmpzb24oKX0pO1xuICAgIH1cbiAgICBjb25zdCBjYWxsQXFpQVBJID0gYXN5bmMgZnVuY3Rpb24gKHFQYXJhbSkge1xuICAgICAgICBsZXQgYmFzZSA9IFwiaHR0cHM6Ly9hcGkud2FxaS5pbmZvL2ZlZWQvXCI7XG4gICAgICAgIGxldCBmZXRjaF91cmwgPSBiYXNlICsgYCR7cVBhcmFtfT90b2tlbj0ke0FRSUNOX0FQSV9LRVl9YDtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmV0Y2hfdXJsLCB7bW9kZTogXCJjb3JzXCJ9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjb25zdCBjYWxsTmV3c0FQSSA9IGFzeW5jIGZ1bmN0aW9uIChxUGFyYW1zKSB7XG4gICAgICAgIGxldCBiYXNlID0gXCJodHRwOi8vYXBpLm1lZGlhc3RhY2suY29tL3YxL25ld3M/XCI7XG4gICAgICAgIGxldCBmZXRjaF91cmwgPSBiYXNlICsgYGFjY2Vzc19rZXk9JHtORVdTX0FQSV9LRVl9JmtleXdvcmRzPSR7cVBhcmFtc31gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAmZGF0ZT0ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdfSZzb3J0PXBvcHVsYXJpdHlgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCZsYW5ndWFnZXM9ZW5gO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaF91cmwsIHttb2RlOiBcImNvcnNcIn0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNvbnN0IGNhbGxIaXN0b3J5QVBJID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIH1cbiAgICBjb25zdCBjYWxsUXVvdGVzQVBJID0gZnVuY3Rpb24gKHFQYXJhbXMpIHtcbiAgICB9XG4gICAgcmV0dXJuIHtjYWxsV2VhdGhlckFQSSwgY2FsbEdpcGh5QVBJLCBjYWxsQXFpQVBJLCBjYWxsTmV3c0FQSSwgY2FsbEhpc3RvcnlBUEksIGNhbGxRdW90ZXNBUEl9O1xufVxuXG5leHBvcnQge2dldERhdGF9OyIsImZ1bmN0aW9uIHBvcHVsYXRlUGFnZTEoKSB7XG4gICAgbGV0IGljb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgaWNvbkVsZW0uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICBpY29uRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9cIiArIFxuICAgIFwiY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwXCIpO1xuICAgIGxldCBoZWFkRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuICAgIGxldCBzcmNFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWQgPiBzY3JpcHRcIik7XG4gICAgaGVhZEVsZW0uaW5zZXJ0QmVmb3JlKGljb25FbGVtLCBzcmNFbGVtKTtcblxuICAgIGxldCBib2R5RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlMlwiKTtcbiAgICBib2R5RWxlbS5jbGFzc0xpc3QuYWRkKFwicGFnZTFcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgPiAqXCIpLmZvckVhY2goZSA9PiBib2R5RWxlbS5yZW1vdmVDaGlsZChlKSk7XG4gICAge1xuICAgICAgICBsZXQgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VhcmNoRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG4gICAgICAgIGxldCBsYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsRWxlbS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb2NhdGlvblwiKTtcbiAgICAgICAgbGV0IGlucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbGV0IGlucHV0QXR0ciA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJ0ZXh0XCIsIFxuICAgICAgICAgICAgXCJuYW1lXCIgOiBcImxvY2F0aW9uXCIsIFxuICAgICAgICAgICAgXCJpZFwiIDogXCJsb2NhdGlvblwiLCBcbiAgICAgICAgICAgIFwidmFsdWVcIiA6IFwiXCIsXG4gICAgICAgICAgICBcInBsYWNlaG9sZGVyXCIgOiBcIkxvY2F0aW9uXCJcbiAgICAgICAgfTtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gaW5wdXRBdHRyKVxuICAgICAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShrZXksIGlucHV0QXR0cltrZXldKTtcbiAgICAgICAgaW5wdXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBlLnRhcmdldC52YWx1ZSk7ICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzZWFyY2hCdG4uY2xhc3NMaXN0LmFkZChcImZpbmRCdG5cIik7XG4gICAgICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgICAgICAgc2VhcmNoQnRuLnRleHRDb250ZW50ID0gXCJzZWFyY2hcIjtcbiAgICAgICAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKGxhYmVsRWxlbSk7XG4gICAgICAgIHNlYXJjaERpdi5hcHBlbmRDaGlsZChpbnB1dEVsZW0pO1xuICAgICAgICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKTtcbiAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQoc2VhcmNoRGl2KTtcbiAgICB9ICAgIFxuXG4gICAge1xuICAgICAgICBsZXQgbG9hZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvYWREaXYuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIik7XG4gICAgICAgIGxvYWREaXYudGV4dENvbnRlbnQgPSBcIkZldGNoaW5nIGRhdGEgZm9yIHlvdXIgY2l0eSByaWdodCBub3cuLi5cIjtcbiAgICAgICAgbG9hZERpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQobG9hZERpdik7XG4gICAgfVxufVxuXG5leHBvcnQge3BvcHVsYXRlUGFnZTF9XG4iLCJmdW5jdGlvbiBwb3B1bGF0ZVBhZ2UyKCkge1xuICAgIGxldCBib2R5RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlMVwiKTtcbiAgICBib2R5RWxlbS5jbGFzc0xpc3QuYWRkKFwicGFnZTJcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgPiAqXCIpLmZvckVhY2goZSA9PiBib2R5RWxlbS5yZW1vdmVDaGlsZChlKSk7XG5cbiAgICAvLyBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgIHtcbiAgICAgICAgbGV0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3ZWF0aGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mb1wiKTtcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJHSUZcIik7XG4gICAgICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGVtcERpdi5jbGFzc0xpc3QuYWRkKFwidGVtcFwiKTtcbiAgICAgICAgICAgIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICAgICAgICAgIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGh1bWlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGh1bWlkRGl2LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eVwiKTtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgZHJvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZHJvcERpdi5jbGFzc0xpc3QuYWRkKFwiZHJvcFwiLCBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gICAgICAgICAgICAgICAgZHJvcERpdi50ZXh0Q29udGVudCA9IFwid2F0ZXJfZHJvcFwiO1xuICAgICAgICAgICAgICAgIGh1bWlkRGl2LmFwcGVuZENoaWxkKGRyb3BEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuY2xhc3NMaXN0LmFkZChcInZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIGh1bWlkRGl2LmFwcGVuZENoaWxkKHZhbHVlRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoaHVtaWREaXYpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBhcWlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYXFpRGl2LmNsYXNzTGlzdC5hZGQoXCJhcWlcIik7XG4gICAgICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGFxaURpdik7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGxvY2F0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25QaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uUGluLmNsYXNzTGlzdC5hZGQoXCJwaW5cIiwgXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uUGluLnRleHRDb250ZW50ID0gXCJsb2NhdGlvbl9vblwiO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uUGluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvblRleHQuY2xhc3NMaXN0LmFkZChcInZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcbiAgICAgICAgfVxuICAgICAgICBib2R5RWxlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGl2KTtcbiAgICB9XG5cbiAgICB7XG4gICAgICAgIGxldCBzdHVmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgc3R1ZmYuY2xhc3NMaXN0LmFkZChcInN0dWZmXCIpO1xuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbmV3c0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgICAgICAgICBuZXdzTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJoZWFkbGluZXNcIik7XG4gICAgICAgICAgICBuZXdzTGVnZW5kLnRleHRDb250ZW50ID0gXCJUb3AgSGVhZGxpbmVzXCI7XG4gICAgICAgICAgICBzdHVmZi5hcHBlbmRDaGlsZChuZXdzTGVnZW5kKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbmV3c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXdzRGl2LmNsYXNzTGlzdC5hZGQoXCJuZXdzXCIpO1xuICAgICAgICAgICAgc3R1ZmYuYXBwZW5kQ2hpbGQobmV3c0Rpdik7XG4gICAgICAgIH1cbiAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQoc3R1ZmYpO1xuICAgIH1cblxufVxuXG5leHBvcnQge3BvcHVsYXRlUGFnZTJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVBhZ2UxIH0gZnJvbSBcIi4vcGFnZTFcIjtcbmltcG9ydCB7IHBvcHVsYXRlUGFnZTIgfSBmcm9tIFwiLi9wYWdlMlwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxucG9wdWxhdGVQYWdlMSgpO1xuXG5sZXQgZGF0YUZldGNoZXIgPSBnZXREYXRhKCk7XG5cbmxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmRCdG5cIik7XG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IGxvYWRpbmdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmdcIik7XG4gICAgbG9hZGluZ0Rpdi5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIiA7XG4gICAgbGV0IHdlYXRoZXJDb25kaXRpb247XG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2xvY2F0aW9uXCIpLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuICAgIGRhdGFGZXRjaGVyLmNhbGxXZWF0aGVyQVBJKFwiY3VycmVudFwiLCBsb2NhdGlvbilcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBwb3B1bGF0ZVBhZ2UyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBsb2FkaW5nRGl2LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBsZXQgdGVtcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcbiAgICAgICAgdGVtcERpdi50ZXh0Q29udGVudCA9IGAxNlxcdTAwQjBDYDsgLy8ke2RhdGFbXCJjdXJyZW50XCJdW1widGVtcF9jXCJdfSBcbiAgICAgICAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJJbmZvID4gLnRleHRcIik7XG4gICAgICAgIHRleHREaXYudGV4dENvbnRlbnQgPSBcIlBhcnRseSBjbG91ZHlcIjsvL2Ake2RhdGFbXCJjdXJyZW50XCJdW1wiY29uZGl0aW9uXCJdW1widGV4dFwiXX1gO1xuICAgICAgICBsZXQgaHVtaWREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5ID4gLnZhbHVlXCIpO1xuICAgICAgICBodW1pZERpdi50ZXh0Q29udGVudCA9IFwiNTAlXCI7Ly9gJHtkYXRhW1wiY3VycmVudFwiXVtcImh1bWlkaXR5XCJdfSVgO1xuICAgICAgICBsZXQgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uID4gLnZhbHVlXCIpO1xuICAgICAgICBsb2NhdGlvbkRpdi50ZXh0Q29udGVudCA9IGAke2RhdGFbXCJsb2NhdGlvblwiXVtcIm5hbWVcIl19LCAke2RhdGFbXCJsb2NhdGlvblwiXVtcImNvdW50cnlcIl19YDtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGF0YUZldGNoZXIuY2FsbEFxaUFQSShsb2NhdGlvbilcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBhcWlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFxaVwiKTtcbiAgICAgICAgICAgIGFxaURpdi50ZXh0Q29udGVudCA9IGBBUUk6ICR7ZGF0YVtcImRhdGFcIl1bXCJhcWlcIl19YDtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRhdGFGZXRjaGVyLmNhbGxHaXBoeUFQSShcInJhbmRvbVwiLCBcImNsb3VkeVwiKSAvL3dlYXRoZXJDb25kaXRpb24uc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpIC0gZm9yIHRlc3RpbmdcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgbGV0IGltZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlckdJRlwiKTtcbiAgICAgICAgICAgIGltZ0Rpdi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgd2VhdGhlckNvbmRpdGlvbik7XG4gICAgICAgICAgICBpbWdEaXYuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke2RhdGFbXCJkYXRhXCJdW1wiaW1hZ2VzXCJdW1wiZml4ZWRfaGVpZ2h0XCJdW1widXJsXCJdfWApO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGF0YUZldGNoZXIuY2FsbE5ld3NBUEkobG9jYXRpb24pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW1wiZGF0YVwiXS5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IG51bVJlc3VsdHMgPSBNYXRoLm1pbigxMCwgZGF0YVtcImRhdGFcIl0ubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG51bVJlc3VsdHMpO1xuICAgICAgICAgICAgbGV0IG5ld3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld3NcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJlc3VsdHM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgICAgICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoYGhlYWRsaW5lIyR7aSArIDF9YCk7XG4gICAgICAgICAgICAgICAgaGVhZGxpbmUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBkYXRhW1wiZGF0YVwiXVtpXVtcInVybFwiXSk7XG4gICAgICAgICAgICAgICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBkYXRhW1wiZGF0YVwiXVtpXVtcInRpdGxlXCJdO1xuICAgICAgICAgICAgICAgIG5ld3NEaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4vLyBsZXQgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4vLyBkYXRhRmV0Y2hlci5jYWxsR2lwaHlBUEkoXCJyYW5kb21cIiwgXCJjYXRcIilcbi8vIC50aGVuKChkYXRhKSA9PiB7XG4vLyAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7ZGF0YVtcImRhdGFcIl1bXCJpbWFnZXNcIl1bXCJvcmlnaW5hbFwiXVtcInVybFwiXX1gKTtcbi8vIH0pXG4vLyAuY2F0Y2goZXJyID0+IGFsZXJ0KGVycikpO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoaW1nRWxlbSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9