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
    let weatherBase = "https://api.weatherapi.com/v1/";
    let giphyBase = "https://api.giphy.com/v1/gifs/";
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
    {
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
    
    {
        let weatherDiv = document.createElement("div");
        weatherDiv.classList.add("weatherText");
        bodyElem.appendChild(weatherDiv);
    }

    {
        let imgDiv = document.createElement("img");
        imgDiv.classList.add("weatherGIF");
        imgDiv.setAttribute("alt", "");
        imgDiv.setAttribute("src", "");
        bodyElem.appendChild(imgDiv);
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
    let weatherDiv = document.querySelector(".weatherText");
    let imgDiv = document.querySelector(".weatherGIF");
    let weatherCondition;
    let location = document.querySelector("input#location").getAttribute("value");
    dataFetcher.callWeatherAPI("current", location)
    .then((data) => {
        console.log(data);
        weatherCondition = data["current"]["condition"]["text"];
        let displayText = `In ${data["location"]["name"]}, it is currently ${weatherCondition}`;
        displayText += ` with a temperature of ${data["current"]["temp_c"]} degrees.\n`;
        if (data["current"]["temp_c"] > 20) {
            displayText += "Finally! No jackets!!!";
        }
        weatherDiv.textContent = displayText;
    })
    .then(() => {
        dataFetcher.callGiphyAPI("random", weatherCondition.split(" ").join("+"))
        .then((data) => {
            imgDiv.setAttribute("alt", weatherCondition);
            imgDiv.setAttribute("src", `${data["data"]["images"]["fixed_height"]["url"]}`);
            console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZLEVBQUUsTUFBTSxZQUFZLGdCQUFnQixLQUFLLE9BQU87QUFDdkY7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQyw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVSxFQUFFLE1BQU0sV0FBVyxjQUFjLE9BQU8sT0FBTztBQUNwRjtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7O1VDakRyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNLO0FBQ3RDOztBQUVBLG1EQUFZOztBQUVaLGtCQUFrQiw4Q0FBTzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUJBQXlCLG9CQUFvQixpQkFBaUI7QUFDOUYsaURBQWlELDJCQUEyQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw4Q0FBOEM7QUFDeEY7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBDQUEwQztBQUNoRixJQUFJO0FBQ0o7QUFDQSx1RCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGxldCBXRUFUSEVSX0FQSV9LRVkgPSBcIjk4MDI3NzcxMTA4YTRlMzRhZTg5NTUzMzIzMjUwNlwiO1xuICAgIGxldCBHSVBIWV9BUElfS0VZID0gXCJTMW9lOFFuM1Z5a0t2ZnhWbkVBVEdGMjRESFBGT2F4a1wiO1xuICAgIGxldCB3ZWF0aGVyQmFzZSA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvXCI7XG4gICAgbGV0IGdpcGh5QmFzZSA9IFwiaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvXCI7XG4gICAgY29uc3QgY2FsbFdlYXRoZXJBUEkgPSBmdW5jdGlvbiAocVR5cGUsIHFQYXJhbSkge1xuICAgICAgICBsZXQgZmV0Y2hfdXJsID0gYCR7d2VhdGhlckJhc2V9JHtxVHlwZX0uanNvbj9rZXk9JHtXRUFUSEVSX0FQSV9LRVl9JnE9JHtxUGFyYW19YDtcbiAgICAgICAgY29uc29sZS5sb2coZmV0Y2hfdXJsKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKGZldGNoX3VybCwge21vZGUgOiBcImNvcnNcIn0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge3JldHVybiByZXNwb25zZS5qc29uKCl9KTtcbiAgICB9XG4gICAgY29uc3QgY2FsbEdpcGh5QVBJID0gZnVuY3Rpb24gKHFUeXBlLCBxUGFyYW0pIHtcbiAgICAgICAgbGV0IGZldGNoX3VybCA9IGAke2dpcGh5QmFzZX0ke3FUeXBlfT9hcGlfa2V5PSR7R0lQSFlfQVBJX0tFWX0mdGFnPSR7cVBhcmFtfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGZldGNoX3VybCk7XG4gICAgICAgIHJldHVybiBmZXRjaChmZXRjaF91cmwsIHttb2RlIDogXCJjb3JzXCJ9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtyZXR1cm4gcmVzcG9uc2UuanNvbigpfSk7XG4gICAgfVxuICAgIHJldHVybiB7Y2FsbFdlYXRoZXJBUEksIGNhbGxHaXBoeUFQSX07XG59XG5cbmV4cG9ydCB7Z2V0RGF0YX07IiwiZnVuY3Rpb24gcG9wdWxhdGVQYWdlKCkge1xuICAgIGxldCBpY29uRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGljb25FbGVtLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgaWNvbkVsZW0uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vXCIgKyBcbiAgICBcImNzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKS5hcHBlbmRDaGlsZChpY29uRWxlbSk7XG5cbiAgICBsZXQgYm9keUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICB7XG4gICAgICAgIGxldCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWFyY2hEaXYuY2xhc3NMaXN0LmFkZChcInNlYXJjaFwiKTtcbiAgICAgICAgbGV0IGxhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWxFbGVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvY2F0aW9uXCIpO1xuICAgICAgICBsYWJlbEVsZW0udGV4dENvbnRlbnQgPSBcIkVudGVyIGxvY2F0aW9uOiBcIlxuICAgICAgICBsZXQgaW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBsZXQgaW5wdXRBdHRyID0ge1widHlwZVwiIDogXCJ0ZXh0XCIsIFwibmFtZVwiIDogXCJsb2NhdGlvblwiLCBcImlkXCIgOiBcImxvY2F0aW9uXCIsIFwidmFsdWVcIiA6IFwibG9uZG9uXCJ9O1xuICAgICAgICBmb3IobGV0IGtleSBpbiBpbnB1dEF0dHIpXG4gICAgICAgICAgICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKGtleSwgaW5wdXRBdHRyW2tleV0pO1xuICAgICAgICBpbnB1dEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGUudGFyZ2V0LnZhbHVlKTsgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKFwiZmluZEJ0blwiKTtcbiAgICAgICAgc2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICAgICAgICBzZWFyY2hCdG4uc3R5bGUuZm9udFZhcmlhdGlvblNldHRpbmdzID0gXCInRklMTCcgMCwgJ3dnaHQnIDQwMCwgJ0dSQUQnIDIwMCwgJ29wc3onIDQ4XCI7XG4gICAgICAgIHNlYXJjaEJ0bi5zdHlsZS5mb250U2l6ZSA9IFwiMS4xcmVtXCI7XG4gICAgICAgIHNlYXJjaEJ0bi50ZXh0Q29udGVudCA9IFwic2VhcmNoXCI7XG4gICAgICAgIHNlYXJjaERpdi5hcHBlbmRDaGlsZChsYWJlbEVsZW0pO1xuICAgICAgICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtKTtcbiAgICAgICAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaEJ0bik7XG4gICAgICAgIGJvZHlFbGVtLmFwcGVuZENoaWxkKHNlYXJjaERpdik7XG4gICAgfVxuICAgIFxuICAgIHtcbiAgICAgICAgbGV0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3ZWF0aGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyVGV4dFwiKTtcbiAgICAgICAgYm9keUVsZW0uYXBwZW5kQ2hpbGQod2VhdGhlckRpdik7XG4gICAgfVxuXG4gICAge1xuICAgICAgICBsZXQgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nRGl2LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyR0lGXCIpO1xuICAgICAgICBpbWdEaXYuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO1xuICAgICAgICBpbWdEaXYuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiXCIpO1xuICAgICAgICBib2R5RWxlbS5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IHtwb3B1bGF0ZVBhZ2V9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVBhZ2UgfSBmcm9tIFwiLi9wYWdlXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5wb3B1bGF0ZVBhZ2UoKTtcblxubGV0IGRhdGFGZXRjaGVyID0gZ2V0RGF0YSgpO1xuXG5sZXQgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maW5kQnRuXCIpO1xuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCB3ZWF0aGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyVGV4dFwiKTtcbiAgICBsZXQgaW1nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyR0lGXCIpO1xuICAgIGxldCB3ZWF0aGVyQ29uZGl0aW9uO1xuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNsb2NhdGlvblwiKS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcbiAgICBkYXRhRmV0Y2hlci5jYWxsV2VhdGhlckFQSShcImN1cnJlbnRcIiwgbG9jYXRpb24pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHdlYXRoZXJDb25kaXRpb24gPSBkYXRhW1wiY3VycmVudFwiXVtcImNvbmRpdGlvblwiXVtcInRleHRcIl07XG4gICAgICAgIGxldCBkaXNwbGF5VGV4dCA9IGBJbiAke2RhdGFbXCJsb2NhdGlvblwiXVtcIm5hbWVcIl19LCBpdCBpcyBjdXJyZW50bHkgJHt3ZWF0aGVyQ29uZGl0aW9ufWA7XG4gICAgICAgIGRpc3BsYXlUZXh0ICs9IGAgd2l0aCBhIHRlbXBlcmF0dXJlIG9mICR7ZGF0YVtcImN1cnJlbnRcIl1bXCJ0ZW1wX2NcIl19IGRlZ3JlZXMuXFxuYDtcbiAgICAgICAgaWYgKGRhdGFbXCJjdXJyZW50XCJdW1widGVtcF9jXCJdID4gMjApIHtcbiAgICAgICAgICAgIGRpc3BsYXlUZXh0ICs9IFwiRmluYWxseSEgTm8gamFja2V0cyEhIVwiO1xuICAgICAgICB9XG4gICAgICAgIHdlYXRoZXJEaXYudGV4dENvbnRlbnQgPSBkaXNwbGF5VGV4dDtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGF0YUZldGNoZXIuY2FsbEdpcGh5QVBJKFwicmFuZG9tXCIsIHdlYXRoZXJDb25kaXRpb24uc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaW1nRGl2LnNldEF0dHJpYnV0ZShcImFsdFwiLCB3ZWF0aGVyQ29uZGl0aW9uKTtcbiAgICAgICAgICAgIGltZ0Rpdi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7ZGF0YVtcImRhdGFcIl1bXCJpbWFnZXNcIl1bXCJmaXhlZF9oZWlnaHRcIl1bXCJ1cmxcIl19YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuLy8gbGV0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuLy8gZGF0YUZldGNoZXIuY2FsbEdpcGh5QVBJKFwicmFuZG9tXCIsIFwiY2F0XCIpXG4vLyAudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke2RhdGFbXCJkYXRhXCJdW1wiaW1hZ2VzXCJdW1wib3JpZ2luYWxcIl1bXCJ1cmxcIl19YCk7XG4vLyB9KVxuLy8gLmNhdGNoKGVyciA9PiBhbGVydChlcnIpKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGltZ0VsZW0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==