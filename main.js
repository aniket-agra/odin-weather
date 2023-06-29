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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZLEVBQUUsTUFBTSxZQUFZLGdCQUFnQixLQUFLLE9BQU87QUFDdkY7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQyw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVSxFQUFFLE1BQU0sV0FBVyxjQUFjLE9BQU8sT0FBTztBQUNwRjtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7VUNoQ3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ0s7QUFDdEM7O0FBRUEsbURBQVk7O0FBRVosa0JBQWtCLDhDQUFPOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMENBQTBDO0FBQzdFLENBQUM7QUFDRDtBQUNBLHVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgbGV0IFdFQVRIRVJfQVBJX0tFWSA9IFwiOTgwMjc3NzExMDhhNGUzNGFlODk1NTMzMjMyNTA2XCI7XG4gICAgbGV0IEdJUEhZX0FQSV9LRVkgPSBcIlMxb2U4UW4zVnlrS3ZmeFZuRUFUR0YyNERIUEZPYXhrXCI7XG4gICAgbGV0IHdlYXRoZXJCYXNlID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL1wiO1xuICAgIGxldCBnaXBoeUJhc2UgPSBcImh0dHA6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvXCI7XG4gICAgY29uc3QgY2FsbFdlYXRoZXJBUEkgPSBmdW5jdGlvbiAocVR5cGUsIHFQYXJhbSkge1xuICAgICAgICBsZXQgZmV0Y2hfdXJsID0gYCR7d2VhdGhlckJhc2V9JHtxVHlwZX0uanNvbj9rZXk9JHtXRUFUSEVSX0FQSV9LRVl9JnE9JHtxUGFyYW19YDtcbiAgICAgICAgY29uc29sZS5sb2coZmV0Y2hfdXJsKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKGZldGNoX3VybCwge21vZGUgOiBcImNvcnNcIn0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge3JldHVybiByZXNwb25zZS5qc29uKCl9KTtcbiAgICB9XG4gICAgY29uc3QgY2FsbEdpcGh5QVBJID0gZnVuY3Rpb24gKHFUeXBlLCBxUGFyYW0pIHtcbiAgICAgICAgbGV0IGZldGNoX3VybCA9IGAke2dpcGh5QmFzZX0ke3FUeXBlfT9hcGlfa2V5PSR7R0lQSFlfQVBJX0tFWX0mdGFnPSR7cVBhcmFtfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGZldGNoX3VybCk7XG4gICAgICAgIHJldHVybiBmZXRjaChmZXRjaF91cmwsIHttb2RlIDogXCJjb3JzXCJ9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtyZXR1cm4gcmVzcG9uc2UuanNvbigpfSk7XG4gICAgfVxuICAgIHJldHVybiB7Y2FsbFdlYXRoZXJBUEksIGNhbGxHaXBoeUFQSX07XG59XG5cbmV4cG9ydCB7Z2V0RGF0YX07IiwiZnVuY3Rpb24gcG9wdWxhdGVQYWdlKCkge1xuICAgIGxldCBpY29uRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGljb25FbGVtLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgaWNvbkVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vXCIgKyBcbiAgICBcImNzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKS5hcHBlbmRDaGlsZChpY29uRWxlbSk7XG5cbiAgICBsZXQgYm9keUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIGxldCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoXCIpO1xuICAgIGxldCBsYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvY2F0aW9uXCIpO1xuICAgIGxhYmVsRWxlbS50ZXh0Q29udGVudCA9IFwiRW50ZXIgbG9jYXRpb246IFwiXG4gICAgbGV0IGlucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgaW5wdXRBdHRyID0ge1widHlwZVwiIDogXCJ0ZXh0XCIsIFwibmFtZVwiIDogXCJsb2NhdGlvblwiLCBcImlkXCIgOiBcImxvY2F0aW9uXCIsIFwidmFsdWVcIiA6IFwibG9uZG9uXCJ9O1xuICAgIGZvcihsZXQga2V5IGluIGlucHV0QXR0cilcbiAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShrZXksIGlucHV0QXR0cltrZXldKTtcbiAgICBpbnB1dEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZS50YXJnZXQudmFsdWUpOyAgICAgICAgXG4gICAgfSk7XG4gICAgbGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICAgIHNlYXJjaEJ0bi5zdHlsZS5mb250VmFyaWF0aW9uU2V0dGluZ3MgPSBcIidGSUxMJyAwLCAnd2dodCcgNDAwLCAnR1JBRCcgMjAwLCAnb3BzeicgNDhcIjtcbiAgICBzZWFyY2hCdG4uc3R5bGUuZm9udFNpemUgPSBcIjEuMXJlbVwiO1xuICAgIHNlYXJjaEJ0bi50ZXh0Q29udGVudCA9IFwic2VhcmNoXCI7XG4gICAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKGxhYmVsRWxlbSk7XG4gICAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKGlucHV0RWxlbSk7XG4gICAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaEJ0bik7XG4gICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQoc2VhcmNoRGl2KTtcbn1cblxuZXhwb3J0IHtwb3B1bGF0ZVBhZ2V9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVBhZ2UgfSBmcm9tIFwiLi9wYWdlXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5wb3B1bGF0ZVBhZ2UoKTtcblxubGV0IGRhdGFGZXRjaGVyID0gZ2V0RGF0YSgpO1xuXG5sZXQgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5kYXRhRmV0Y2hlci5jYWxsR2lwaHlBUEkoXCJyYW5kb21cIiwgXCJjYXRcIilcbi50aGVuKChkYXRhKSA9PiB7XG4gICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7ZGF0YVtcImRhdGFcIl1bXCJpbWFnZXNcIl1bXCJvcmlnaW5hbFwiXVtcInVybFwiXX1gKTtcbn0pXG4uY2F0Y2goZXJyID0+IGFsZXJ0KGVycikpO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoaW1nRWxlbSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9