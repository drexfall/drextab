/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/feedback/style.scss":
/*!*********************************!*\
  !*** ./src/feedback/style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialSet: () => (/* binding */ initialSet),
/* harmony export */   originalSettings: () => (/* binding */ originalSettings),
/* harmony export */   setSave: () => (/* binding */ setSave),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });



const originalSettings = {
  appearance: {
    brightness: 75,
    theme: 1,
    font: "Comfortaa",
    fontType: "cursive",
    fontIndex: 0,
  },
  search: {
    newtab: true,
    autofocus: true,
    default: "DuckDuckGo",
    engines: {
      DuckDuckGo: {
        url: "https://www.duckduckgo.com/",
        query: "q",
      },
      Google: {
        url: "https://www.google.com/search",
        query: "q",
      },
    },
  },
  preferences: {
    lowercase: true,
    animation: 0.3,
  },
};

let settings;

if (localStorage.settings) {
  settings = JSON.parse(localStorage.getItem("settings"));
} else {
  settings = originalSettings;
}

function initialSet(home) {
  let themes = [
    ["#6b85d9", "#8978d1"],
    ["#b84e5a", "#572a35"],
    ["#c36872", "#d68d81"],
    ["#69676b", "#848666"],
    ["#c8dc54", "#6cdd53"],
  
  
  ]
  document.body.style.textTransform = settings.preferences.lowercase ? "lowercase" : "unset";
  document.body.style.transitionDuration = settings.preferences.animation
  document.body.style.fontFamily = settings.appearance.font + "," + settings.appearance.fontType
  document.body.style.backgroundImage = `linear-gradient(-45deg,${themes[settings.appearance.theme - 1][0]},${themes[settings.appearance.theme - 1][1]})`
  document.getElementById("brightnessOverlay").style.opacity = 1 - settings.appearance.brightness / 100
  
}

function setSave() {
  localStorage.setItem("settings", JSON.stringify(settings));
  alert("Your settings have been saved!");
  return false;
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/feedback/main.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/feedback/style.scss");
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/main */ "./src/scripts/main.js");



window.addEventListener("load", () => {
    (0,_scripts_main__WEBPACK_IMPORTED_MODULE_2__.initialSet)(false)
})
function validateForm() {
    let form  = document.getElementById("feedbackForm")
    if(!form["mobile_number"].value.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)){
        alert("Error in phone number!")
        return false;
    }
    if(!form["feedback_email"].value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        alert("Error in email!")
        return false;
    }
    alert("Your form is submitted!")
    return false;
}
function addTag(){
    let container = document.getElementById("categoryContainer")
    let index = container.childElementCount
    let addBtn = document.getElementById("addTagBtn")
    let addBtnLabel = document.getElementById("addTagLabel")
    let addBtnHTML = addBtnLabel.outerHTML
    let tagname = prompt("Enter the name of your tag: ")

    let html = ` <label class="d-tag" for="cat${index}">
    <input
      type="checkbox"
      name="tagCheck"
      id="cat${index}"
      checked="true"
    />
    <span class="btn-secondary">${tagname}</span>
  </label>`
  addBtnLabel.remove()
  container.innerHTML+=(html+addBtnHTML)
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2svbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLHlDQUF5QyxHQUFHLHlDQUF5QztBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDUjtBQUNzQjtBQUMzQztBQUNBLElBQUkseURBQVU7QUFDZCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHVEQUF1RCxJQUFJLCtCQUErQixFQUFFO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxJQUFJO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmV4dGFiLy4vc3JjL2ZlZWRiYWNrL3N0eWxlLnNjc3M/NDhjMyIsIndlYnBhY2s6Ly9kcmV4dGFiLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzPzhiY2UiLCJ3ZWJwYWNrOi8vZHJleHRhYi8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vZHJleHRhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcmV4dGFiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kcmV4dGFiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHJleHRhYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RyZXh0YWIvLi9zcmMvZmVlZGJhY2svbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcclxuXHJcblxyXG5jb25zdCBvcmlnaW5hbFNldHRpbmdzID0ge1xyXG4gIGFwcGVhcmFuY2U6IHtcclxuICAgIGJyaWdodG5lc3M6IDc1LFxyXG4gICAgdGhlbWU6IDEsXHJcbiAgICBmb250OiBcIkNvbWZvcnRhYVwiLFxyXG4gICAgZm9udFR5cGU6IFwiY3Vyc2l2ZVwiLFxyXG4gICAgZm9udEluZGV4OiAwLFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBuZXd0YWI6IHRydWUsXHJcbiAgICBhdXRvZm9jdXM6IHRydWUsXHJcbiAgICBkZWZhdWx0OiBcIkR1Y2tEdWNrR29cIixcclxuICAgIGVuZ2luZXM6IHtcclxuICAgICAgRHVja0R1Y2tHbzoge1xyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5kdWNrZHVja2dvLmNvbS9cIixcclxuICAgICAgICBxdWVyeTogXCJxXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIEdvb2dsZToge1xyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaFwiLFxyXG4gICAgICAgIHF1ZXJ5OiBcInFcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmVmZXJlbmNlczoge1xyXG4gICAgbG93ZXJjYXNlOiB0cnVlLFxyXG4gICAgYW5pbWF0aW9uOiAwLjMsXHJcbiAgfSxcclxufTtcclxuXHJcbmxldCBzZXR0aW5ncztcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpIHtcclxuICBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXR0aW5nc1wiKSk7XHJcbn0gZWxzZSB7XHJcbiAgc2V0dGluZ3MgPSBvcmlnaW5hbFNldHRpbmdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsU2V0KGhvbWUpIHtcclxuICBsZXQgdGhlbWVzID0gW1xyXG4gICAgW1wiIzZiODVkOVwiLCBcIiM4OTc4ZDFcIl0sXHJcbiAgICBbXCIjYjg0ZTVhXCIsIFwiIzU3MmEzNVwiXSxcclxuICAgIFtcIiNjMzY4NzJcIiwgXCIjZDY4ZDgxXCJdLFxyXG4gICAgW1wiIzY5Njc2YlwiLCBcIiM4NDg2NjZcIl0sXHJcbiAgICBbXCIjYzhkYzU0XCIsIFwiIzZjZGQ1M1wiXSxcclxuICBcclxuICBcclxuICBdXHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gc2V0dGluZ3MucHJlZmVyZW5jZXMubG93ZXJjYXNlID8gXCJsb3dlcmNhc2VcIiA6IFwidW5zZXRcIjtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHNldHRpbmdzLnByZWZlcmVuY2VzLmFuaW1hdGlvblxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udEZhbWlseSA9IHNldHRpbmdzLmFwcGVhcmFuY2UuZm9udCArIFwiLFwiICsgc2V0dGluZ3MuYXBwZWFyYW5jZS5mb250VHlwZVxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCgtNDVkZWcsJHt0aGVtZXNbc2V0dGluZ3MuYXBwZWFyYW5jZS50aGVtZSAtIDFdWzBdfSwke3RoZW1lc1tzZXR0aW5ncy5hcHBlYXJhbmNlLnRoZW1lIC0gMV1bMV19KWBcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyaWdodG5lc3NPdmVybGF5XCIpLnN0eWxlLm9wYWNpdHkgPSAxIC0gc2V0dGluZ3MuYXBwZWFyYW5jZS5icmlnaHRuZXNzIC8gMTAwXHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNhdmUoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXR0aW5nc1wiLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpO1xyXG4gIGFsZXJ0KFwiWW91ciBzZXR0aW5ncyBoYXZlIGJlZW4gc2F2ZWQhXCIpO1xyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBpbml0aWFsU2V0LFxyXG4gIHNldFNhdmUsXHJcbiAgc2V0dGluZ3MsXHJcbiAgb3JpZ2luYWxTZXR0aW5nc1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiXHJcbmltcG9ydCB7aW5pdGlhbFNldH0gZnJvbSBcIi4uL3NjcmlwdHMvbWFpblwiO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgaW5pdGlhbFNldChmYWxzZSlcclxufSlcclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgbGV0IGZvcm0gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVkYmFja0Zvcm1cIilcclxuICAgIGlmKCFmb3JtW1wibW9iaWxlX251bWJlclwiXS52YWx1ZS5tYXRjaCgvXig/Oig/OlxcK3wwezAsMn0pOTEoXFxzKltcXC1dXFxzKik/fFswXT8pP1s3ODldXFxkezl9JC8pKXtcclxuICAgICAgICBhbGVydChcIkVycm9yIGluIHBob25lIG51bWJlciFcIilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighZm9ybVtcImZlZWRiYWNrX2VtYWlsXCJdLnZhbHVlLm1hdGNoKC9eXFx3K0BbYS16QS1aX10rP1xcLlthLXpBLVpdezIsM30kLykpe1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgaW4gZW1haWwhXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYWxlcnQoXCJZb3VyIGZvcm0gaXMgc3VibWl0dGVkIVwiKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFRhZygpe1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlDb250YWluZXJcIilcclxuICAgIGxldCBpbmRleCA9IGNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudFxyXG4gICAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFnQnRuXCIpXHJcbiAgICBsZXQgYWRkQnRuTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhZ0xhYmVsXCIpXHJcbiAgICBsZXQgYWRkQnRuSFRNTCA9IGFkZEJ0bkxhYmVsLm91dGVySFRNTFxyXG4gICAgbGV0IHRhZ25hbWUgPSBwcm9tcHQoXCJFbnRlciB0aGUgbmFtZSBvZiB5b3VyIHRhZzogXCIpXHJcblxyXG4gICAgbGV0IGh0bWwgPSBgIDxsYWJlbCBjbGFzcz1cImQtdGFnXCIgZm9yPVwiY2F0JHtpbmRleH1cIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICBuYW1lPVwidGFnQ2hlY2tcIlxyXG4gICAgICBpZD1cImNhdCR7aW5kZXh9XCJcclxuICAgICAgY2hlY2tlZD1cInRydWVcIlxyXG4gICAgLz5cclxuICAgIDxzcGFuIGNsYXNzPVwiYnRuLXNlY29uZGFyeVwiPiR7dGFnbmFtZX08L3NwYW4+XHJcbiAgPC9sYWJlbD5gXHJcbiAgYWRkQnRuTGFiZWwucmVtb3ZlKClcclxuICBjb250YWluZXIuaW5uZXJIVE1MKz0oaHRtbCthZGRCdG5IVE1MKVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9