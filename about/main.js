/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about/style.scss":
/*!******************************!*\
  !*** ./src/about/style.scss ***!
  \******************************/
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
/*!***************************!*\
  !*** ./src/about/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/about/style.scss");
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/main */ "./src/scripts/main.js");



console.log(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__)
let faqElems;
window.addEventListener("load", () => {
  (0,_scripts_main__WEBPACK_IMPORTED_MODULE_2__.initialSet)(false)
  faqElems = document.getElementsByClassName("faq-elem");
  Array.from(faqElems).forEach(faqElem => {
    faqElem.getElementsByTagName("input")[0].checked = false;
    faqElem.getElementsByTagName("input")[0].addEventListener("click", toggleFAQ);
  });
})

function toggleFAQ() {
  for (let child = 0; child < faqElems.length; child++) {
    let input = faqElems[child].getElementsByTagName("input")[0];
    let span = faqElems[child].getElementsByTagName("span")[0];
    let content = faqElems[child].getElementsByClassName("content")[0];
    if (input.checked) {
      content.style.height = "unset";
      span.innerHTML = "expand_less";
    } else {
      content.style.height = "0";
      span.innerHTML = "expand_more";
    }
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLHlDQUF5QyxHQUFHLHlDQUF5QztBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDekI7QUFDcUI7QUFDM0MsWUFBWSwrQ0FBTTtBQUNsQjtBQUNBO0FBQ0EsRUFBRSx5REFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0Esc0JBQXNCLHlCQUF5QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZXh0YWIvLi9zcmMvYWJvdXQvc3R5bGUuc2Nzcz8wODEzIiwid2VicGFjazovL2RyZXh0YWIvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/OGJjZSIsIndlYnBhY2s6Ly9kcmV4dGFiLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9kcmV4dGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RyZXh0YWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RyZXh0YWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcmV4dGFiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHJleHRhYi8uL3NyYy9hYm91dC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxyXG5cclxuXHJcbmNvbnN0IG9yaWdpbmFsU2V0dGluZ3MgPSB7XHJcbiAgYXBwZWFyYW5jZToge1xyXG4gICAgYnJpZ2h0bmVzczogNzUsXHJcbiAgICB0aGVtZTogMSxcclxuICAgIGZvbnQ6IFwiQ29tZm9ydGFhXCIsXHJcbiAgICBmb250VHlwZTogXCJjdXJzaXZlXCIsXHJcbiAgICBmb250SW5kZXg6IDAsXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIG5ld3RhYjogdHJ1ZSxcclxuICAgIGF1dG9mb2N1czogdHJ1ZSxcclxuICAgIGRlZmF1bHQ6IFwiRHVja0R1Y2tHb1wiLFxyXG4gICAgZW5naW5lczoge1xyXG4gICAgICBEdWNrRHVja0dvOiB7XHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmR1Y2tkdWNrZ28uY29tL1wiLFxyXG4gICAgICAgIHF1ZXJ5OiBcInFcIixcclxuICAgICAgfSxcclxuICAgICAgR29vZ2xlOiB7XHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoXCIsXHJcbiAgICAgICAgcXVlcnk6IFwicVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByZWZlcmVuY2VzOiB7XHJcbiAgICBsb3dlcmNhc2U6IHRydWUsXHJcbiAgICBhbmltYXRpb246IDAuMyxcclxuICB9LFxyXG59O1xyXG5cclxubGV0IHNldHRpbmdzO1xyXG5cclxuaWYgKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykge1xyXG4gIHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNldHRpbmdzXCIpKTtcclxufSBlbHNlIHtcclxuICBzZXR0aW5ncyA9IG9yaWdpbmFsU2V0dGluZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxTZXQoaG9tZSkge1xyXG4gIGxldCB0aGVtZXMgPSBbXHJcbiAgICBbXCIjNmI4NWQ5XCIsIFwiIzg5NzhkMVwiXSxcclxuICAgIFtcIiNiODRlNWFcIiwgXCIjNTcyYTM1XCJdLFxyXG4gICAgW1wiI2MzNjg3MlwiLCBcIiNkNjhkODFcIl0sXHJcbiAgICBbXCIjNjk2NzZiXCIsIFwiIzg0ODY2NlwiXSxcclxuICAgIFtcIiNjOGRjNTRcIiwgXCIjNmNkZDUzXCJdLFxyXG4gIFxyXG4gIFxyXG4gIF1cclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLnRleHRUcmFuc2Zvcm0gPSBzZXR0aW5ncy5wcmVmZXJlbmNlcy5sb3dlcmNhc2UgPyBcImxvd2VyY2FzZVwiIDogXCJ1bnNldFwiO1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gc2V0dGluZ3MucHJlZmVyZW5jZXMuYW5pbWF0aW9uXHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5mb250RmFtaWx5ID0gc2V0dGluZ3MuYXBwZWFyYW5jZS5mb250ICsgXCIsXCIgKyBzZXR0aW5ncy5hcHBlYXJhbmNlLmZvbnRUeXBlXHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KC00NWRlZywke3RoZW1lc1tzZXR0aW5ncy5hcHBlYXJhbmNlLnRoZW1lIC0gMV1bMF19LCR7dGhlbWVzW3NldHRpbmdzLmFwcGVhcmFuY2UudGhlbWUgLSAxXVsxXX0pYFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJpZ2h0bmVzc092ZXJsYXlcIikuc3R5bGUub3BhY2l0eSA9IDEgLSBzZXR0aW5ncy5hcHBlYXJhbmNlLmJyaWdodG5lc3MgLyAxMDBcclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2F2ZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNldHRpbmdzXCIsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSk7XHJcbiAgYWxlcnQoXCJZb3VyIHNldHRpbmdzIGhhdmUgYmVlbiBzYXZlZCFcIik7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGluaXRpYWxTZXQsXHJcbiAgc2V0U2F2ZSxcclxuICBzZXR0aW5ncyxcclxuICBvcmlnaW5hbFNldHRpbmdzXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICBcIi4uL3N0eWxlcy9zdHlsZS5zY3NzXCJcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7aW5pdGlhbFNldH0gZnJvbSBcIi4uL3NjcmlwdHMvbWFpblwiO1xyXG5jb25zb2xlLmxvZyhzdHlsZXMpXHJcbmxldCBmYXFFbGVtcztcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICBpbml0aWFsU2V0KGZhbHNlKVxyXG4gIGZhcUVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZhcS1lbGVtXCIpO1xyXG4gIEFycmF5LmZyb20oZmFxRWxlbXMpLmZvckVhY2goZmFxRWxlbSA9PiB7XHJcbiAgICBmYXFFbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgZmFxRWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVGQVEpO1xyXG4gIH0pO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlRkFRKCkge1xyXG4gIGZvciAobGV0IGNoaWxkID0gMDsgY2hpbGQgPCBmYXFFbGVtcy5sZW5ndGg7IGNoaWxkKyspIHtcclxuICAgIGxldCBpbnB1dCA9IGZhcUVsZW1zW2NoaWxkXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xyXG4gICAgbGV0IHNwYW4gPSBmYXFFbGVtc1tjaGlsZF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpWzBdO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBmYXFFbGVtc1tjaGlsZF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRlbnRcIilbMF07XHJcbiAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xyXG4gICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IFwidW5zZXRcIjtcclxuICAgICAgc3Bhbi5pbm5lckhUTUwgPSBcImV4cGFuZF9sZXNzXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IFwiMFwiO1xyXG4gICAgICBzcGFuLmlubmVySFRNTCA9IFwiZXhwYW5kX21vcmVcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9