/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    let weatherBase = "http://api.weatherapi.com/v1/";
    let giphyBase = "http://api.giphy.com/v1/gifs/";
    const callWeatherAPI = function (qType, qParam) {
        let fetch_url = `${weatherBase}${qType}.json?key=${WEATHER_API_KEY}&q=${qParam}`;
        console.log(fetch_url);
        return fetch(fetch_url, {mode : "cors"})
        .then((response) => {return response.json()});
    }
    const callGiphyAPI = function (qType, qParam) {
        let fetch_url = `${giphyBase}${qType}?api_key=${GIPHY_API_KEY}&tag=${qParam}`;
        console.log(fetch_url);
        return fetch(fetch_url, {mode : "cors"})
        .then((response) => {return response.json()});
    }
    return {callWeatherAPI, callGiphyAPI};
}



/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populatePage: () => (/* binding */ populatePage)
/* harmony export */ });
function populatePage() {
    let iconElem = document.createElement("link");
    iconElem.setAttribute("rel", "stylesheet");
    iconElem.setAttribute("href", "https://fonts.googleapis.com/" + 
    "css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
    document.querySelector("head").appendChild(iconElem);

    let bodyElem = document.querySelector("body");

    let searchDiv = document.createElement("div");
    searchDiv.classList.add("search");
    let labelElem = document.createElement("label");
    labelElem.setAttribute("for", "location");
    labelElem.textContent = "Enter location: "
    let inputElem = document.createElement("input");
    let inputAttr = {"type" : "text", "name" : "location", "id" : "location", "value" : "london"};
    for(let key in inputAttr)
        inputElem.setAttribute(key, inputAttr[key]);
    let searchBtn = document.createElement("div");
    searchBtn.classList.add("material-symbols-outlined");
    searchBtn.style.fontVariationSettings = "'FILL' 0, 'wght' 400, 'GRAD' 200, 'opsz' 48";
    searchBtn.textContent = "search";
    searchDiv.appendChild(labelElem);
    searchDiv.appendChild(inputElem);
    searchDiv.appendChild(searchBtn);
    bodyElem.appendChild(searchDiv);
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page.js");


// import "./style.css";

(0,_page__WEBPACK_IMPORTED_MODULE_1__.populatePage)();

let dataFetcher = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)();

let imgElem = document.createElement("img");
dataFetcher.callGiphyAPI("random", "cat")
.then((data) => {
    imgElem.setAttribute("src", `${data["data"]["images"]["original"]["url"]}`);
})
.catch(err => alert(err));
// document.querySelector("body").appendChild(imgElem);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZLEVBQUUsTUFBTSxZQUFZLGdCQUFnQixLQUFLLE9BQU87QUFDdkY7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQyw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVSxFQUFFLE1BQU0sV0FBVyxjQUFjLE9BQU8sT0FBTztBQUNwRjtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7OztVQzVCckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDSztBQUN0Qzs7QUFFQSxtREFBWTs7QUFFWixrQkFBa0IsOENBQU87O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQ0FBMEM7QUFDN0UsQ0FBQztBQUNEO0FBQ0EsdUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBsZXQgV0VBVEhFUl9BUElfS0VZID0gXCI5ODAyNzc3MTEwOGE0ZTM0YWU4OTU1MzMyMzI1MDZcIjtcbiAgICBsZXQgR0lQSFlfQVBJX0tFWSA9IFwiUzFvZThRbjNWeWtLdmZ4Vm5FQVRHRjI0REhQRk9heGtcIjtcbiAgICBsZXQgd2VhdGhlckJhc2UgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvXCI7XG4gICAgbGV0IGdpcGh5QmFzZSA9IFwiaHR0cDovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9cIjtcbiAgICBjb25zdCBjYWxsV2VhdGhlckFQSSA9IGZ1bmN0aW9uIChxVHlwZSwgcVBhcmFtKSB7XG4gICAgICAgIGxldCBmZXRjaF91cmwgPSBgJHt3ZWF0aGVyQmFzZX0ke3FUeXBlfS5qc29uP2tleT0ke1dFQVRIRVJfQVBJX0tFWX0mcT0ke3FQYXJhbX1gO1xuICAgICAgICBjb25zb2xlLmxvZyhmZXRjaF91cmwpO1xuICAgICAgICByZXR1cm4gZmV0Y2goZmV0Y2hfdXJsLCB7bW9kZSA6IFwiY29yc1wifSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7cmV0dXJuIHJlc3BvbnNlLmpzb24oKX0pO1xuICAgIH1cbiAgICBjb25zdCBjYWxsR2lwaHlBUEkgPSBmdW5jdGlvbiAocVR5cGUsIHFQYXJhbSkge1xuICAgICAgICBsZXQgZmV0Y2hfdXJsID0gYCR7Z2lwaHlCYXNlfSR7cVR5cGV9P2FwaV9rZXk9JHtHSVBIWV9BUElfS0VZfSZ0YWc9JHtxUGFyYW19YDtcbiAgICAgICAgY29uc29sZS5sb2coZmV0Y2hfdXJsKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKGZldGNoX3VybCwge21vZGUgOiBcImNvcnNcIn0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge3JldHVybiByZXNwb25zZS5qc29uKCl9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtjYWxsV2VhdGhlckFQSSwgY2FsbEdpcGh5QVBJfTtcbn1cblxuZXhwb3J0IHtnZXREYXRhfTsiLCJmdW5jdGlvbiBwb3B1bGF0ZVBhZ2UoKSB7XG4gICAgbGV0IGljb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgaWNvbkVsZW0uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICBpY29uRWxlbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9cIiArIFxuICAgIFwiY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpLmFwcGVuZENoaWxkKGljb25FbGVtKTtcblxuICAgIGxldCBib2R5RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgbGV0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VhcmNoRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG4gICAgbGV0IGxhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbEVsZW0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG9jYXRpb25cIik7XG4gICAgbGFiZWxFbGVtLnRleHRDb250ZW50ID0gXCJFbnRlciBsb2NhdGlvbjogXCJcbiAgICBsZXQgaW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGxldCBpbnB1dEF0dHIgPSB7XCJ0eXBlXCIgOiBcInRleHRcIiwgXCJuYW1lXCIgOiBcImxvY2F0aW9uXCIsIFwiaWRcIiA6IFwibG9jYXRpb25cIiwgXCJ2YWx1ZVwiIDogXCJsb25kb25cIn07XG4gICAgZm9yKGxldCBrZXkgaW4gaW5wdXRBdHRyKVxuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKGtleSwgaW5wdXRBdHRyW2tleV0pO1xuICAgIGxldCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgICBzZWFyY2hCdG4uc3R5bGUuZm9udFZhcmlhdGlvblNldHRpbmdzID0gXCInRklMTCcgMCwgJ3dnaHQnIDQwMCwgJ0dSQUQnIDIwMCwgJ29wc3onIDQ4XCI7XG4gICAgc2VhcmNoQnRuLnRleHRDb250ZW50ID0gXCJzZWFyY2hcIjtcbiAgICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQobGFiZWxFbGVtKTtcbiAgICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtKTtcbiAgICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKTtcbiAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChzZWFyY2hEaXYpO1xufVxuXG5leHBvcnQge3BvcHVsYXRlUGFnZX1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IHBvcHVsYXRlUGFnZSB9IGZyb20gXCIuL3BhZ2VcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbnBvcHVsYXRlUGFnZSgpO1xuXG5sZXQgZGF0YUZldGNoZXIgPSBnZXREYXRhKCk7XG5cbmxldCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmRhdGFGZXRjaGVyLmNhbGxHaXBoeUFQSShcInJhbmRvbVwiLCBcImNhdFwiKVxuLnRoZW4oKGRhdGEpID0+IHtcbiAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtkYXRhW1wiZGF0YVwiXVtcImltYWdlc1wiXVtcIm9yaWdpbmFsXCJdW1widXJsXCJdfWApO1xufSlcbi5jYXRjaChlcnIgPT4gYWxlcnQoZXJyKSk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChpbWdFbGVtKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=