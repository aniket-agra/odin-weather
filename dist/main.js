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
    inputElem.addEventListener("change", function (e) {
        inputElem.setAttribute("value", e.target.value);        
    });
    let searchBtn = document.createElement("div");
    searchBtn.classList.add("findBtn");
    searchBtn.classList.add("material-symbols-outlined");
    searchBtn.style.fontVariationSettings = "'FILL' 0, 'wght' 400, 'GRAD' 200, 'opsz' 48";
    searchBtn.style.fontSize = "1.1rem";
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

let searchBtn = document.querySelector(".findBtn");
searchBtn.addEventListener("click", function (e) {
    dataFetcher.callWeatherAPI("current", document.querySelector("input#location").getAttribute("value"))
    .then((data) => {
        console.log(data);
    })
})

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZLEVBQUUsTUFBTSxZQUFZLGdCQUFnQixLQUFLLE9BQU87QUFDdkY7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQyw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVSxFQUFFLE1BQU0sV0FBVyxjQUFjLE9BQU8sT0FBTztBQUNwRjtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7OztVQ2pDckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDSztBQUN0Qzs7QUFFQSxtREFBWTs7QUFFWixrQkFBa0IsOENBQU87O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMENBQTBDO0FBQzdFLENBQUM7QUFDRDtBQUNBLHVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgbGV0IFdFQVRIRVJfQVBJX0tFWSA9IFwiOTgwMjc3NzExMDhhNGUzNGFlODk1NTMzMjMyNTA2XCI7XG4gICAgbGV0IEdJUEhZX0FQSV9LRVkgPSBcIlMxb2U4UW4zVnlrS3ZmeFZuRUFUR0YyNERIUEZPYXhrXCI7XG4gICAgbGV0IHdlYXRoZXJCYXNlID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL1wiO1xuICAgIGxldCBnaXBoeUJhc2UgPSBcImh0dHA6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvXCI7XG4gICAgY29uc3QgY2FsbFdlYXRoZXJBUEkgPSBmdW5jdGlvbiAocVR5cGUsIHFQYXJhbSkge1xuICAgICAgICBsZXQgZmV0Y2hfdXJsID0gYCR7d2VhdGhlckJhc2V9JHtxVHlwZX0uanNvbj9rZXk9JHtXRUFUSEVSX0FQSV9LRVl9JnE9JHtxUGFyYW19YDtcbiAgICAgICAgY29uc29sZS5sb2coZmV0Y2hfdXJsKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKGZldGNoX3VybCwge21vZGUgOiBcImNvcnNcIn0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge3JldHVybiByZXNwb25zZS5qc29uKCl9KTtcbiAgICB9XG4gICAgY29uc3QgY2FsbEdpcGh5QVBJID0gZnVuY3Rpb24gKHFUeXBlLCBxUGFyYW0pIHtcbiAgICAgICAgbGV0IGZldGNoX3VybCA9IGAke2dpcGh5QmFzZX0ke3FUeXBlfT9hcGlfa2V5PSR7R0lQSFlfQVBJX0tFWX0mdGFnPSR7cVBhcmFtfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGZldGNoX3VybCk7XG4gICAgICAgIHJldHVybiBmZXRjaChmZXRjaF91cmwsIHttb2RlIDogXCJjb3JzXCJ9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtyZXR1cm4gcmVzcG9uc2UuanNvbigpfSk7XG4gICAgfVxuICAgIHJldHVybiB7Y2FsbFdlYXRoZXJBUEksIGNhbGxHaXBoeUFQSX07XG59XG5cbmV4cG9ydCB7Z2V0RGF0YX07IiwiZnVuY3Rpb24gcG9wdWxhdGVQYWdlKCkge1xuICAgIGxldCBpY29uRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGljb25FbGVtLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgaWNvbkVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vXCIgKyBcbiAgICBcImNzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKS5hcHBlbmRDaGlsZChpY29uRWxlbSk7XG5cbiAgICBsZXQgYm9keUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIGxldCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoXCIpO1xuICAgIGxldCBsYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvY2F0aW9uXCIpO1xuICAgIGxhYmVsRWxlbS50ZXh0Q29udGVudCA9IFwiRW50ZXIgbG9jYXRpb246IFwiXG4gICAgbGV0IGlucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgaW5wdXRBdHRyID0ge1widHlwZVwiIDogXCJ0ZXh0XCIsIFwibmFtZVwiIDogXCJsb2NhdGlvblwiLCBcImlkXCIgOiBcImxvY2F0aW9uXCIsIFwidmFsdWVcIiA6IFwibG9uZG9uXCJ9O1xuICAgIGZvcihsZXQga2V5IGluIGlucHV0QXR0cilcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShrZXksIGlucHV0QXR0cltrZXldKTtcbiAgICBpbnB1dEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZS50YXJnZXQudmFsdWUpOyAgICAgICAgXG4gICAgfSk7XG4gICAgbGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoXCJmaW5kQnRuXCIpO1xuICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgICBzZWFyY2hCdG4uc3R5bGUuZm9udFZhcmlhdGlvblNldHRpbmdzID0gXCInRklMTCcgMCwgJ3dnaHQnIDQwMCwgJ0dSQUQnIDIwMCwgJ29wc3onIDQ4XCI7XG4gICAgc2VhcmNoQnRuLnN0eWxlLmZvbnRTaXplID0gXCIxLjFyZW1cIjtcbiAgICBzZWFyY2hCdG4udGV4dENvbnRlbnQgPSBcInNlYXJjaFwiO1xuICAgIHNlYXJjaERpdi5hcHBlbmRDaGlsZChsYWJlbEVsZW0pO1xuICAgIHNlYXJjaERpdi5hcHBlbmRDaGlsZChpbnB1dEVsZW0pO1xuICAgIHNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hCdG4pO1xuICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKHNlYXJjaERpdik7XG59XG5cbmV4cG9ydCB7cG9wdWxhdGVQYWdlfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVQYWdlIH0gZnJvbSBcIi4vcGFnZVwiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxucG9wdWxhdGVQYWdlKCk7XG5cbmxldCBkYXRhRmV0Y2hlciA9IGdldERhdGEoKTtcblxubGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmluZEJ0blwiKTtcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBkYXRhRmV0Y2hlci5jYWxsV2VhdGhlckFQSShcImN1cnJlbnRcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2xvY2F0aW9uXCIpLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pXG59KVxuXG5sZXQgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5kYXRhRmV0Y2hlci5jYWxsR2lwaHlBUEkoXCJyYW5kb21cIiwgXCJjYXRcIilcbi50aGVuKChkYXRhKSA9PiB7XG4gICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7ZGF0YVtcImRhdGFcIl1bXCJpbWFnZXNcIl1bXCJvcmlnaW5hbFwiXVtcInVybFwiXX1gKTtcbn0pXG4uY2F0Y2goZXJyID0+IGFsZXJ0KGVycikpO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoaW1nRWxlbSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9