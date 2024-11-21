/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/settings/style.scss":
/*!*********************************!*\
  !*** ./src/settings/style.scss ***!
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
  !*** ./src/settings/main.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/settings/style.scss");
/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/main */ "./src/scripts/main.js");





let engines = document.getElementsByClassName("engine-row"),
	checkboxes = document.getElementsByName("engine-select"),
	checkAll = document.getElementById("allCheck"),
	editBtn = document.getElementById("engineEditBtn"),
	remBtn = document.getElementById("engineRemoveBtn"),
	defBtn = document.getElementById("engineDefBtn"),
	themeBar = document.getElementById("themeBar");

window.addEventListener("load", () => {
	(0,_scripts_main__WEBPACK_IMPORTED_MODULE_2__.initialSet)(false)
	setAll()
	
})

function setAll(reset = false) {
	if (reset && confirm("Do you want to reset all settings to default?\nNo settings will be saved till you manually do so")) {
		
		_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings = _scripts_main__WEBPACK_IMPORTED_MODULE_2__.originalSettings;
		(0,_scripts_main__WEBPACK_IMPORTED_MODULE_2__.initialSet)();
	}
	document.settings_form["set_brightness"].value = _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.brightness;
	document.getElementById("brightnessCount").innerHTML = _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.brightness + "%";
	
	document.settings_form["set_anim_duration"].value = _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.preferences.animation;
	document.getElementById("animationCount").innerHTML = _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.preferences.animation + "s";
	
	themeBar.setAttribute("active", _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.theme);
	document.settings_form["theme" + _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.theme].checked = true;
	document.settings_form["set_font"][
		_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.fontIndex
		].selected = true;
	document.settings_form["set_newtab"].checked = _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.newtab;
	
	document.settings_form["set_autofocus"].checked = _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.autofocus;
	
	refreshEngines();
	
	document.settings_form["set_lowercase"].checked =
		_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.preferences.lowercase;
}

function refreshEngines() {
	let labels = document.getElementsByClassName("engine-name");
	let names = [];
	for (let i = 0; i < labels.length; i++) {
		names.push(labels[i].innerHTML);
	}
	
	for (let e in _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.engines) {
		const value = _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.engines[e];
		if (names.includes(e)) {
			continue;
		}
		let element = `
    <tr class="engine-row ${_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.default === e ? "default" : ""}">
    <td align="center">
      <div class="d-check">
        <input type="checkbox" name="engine-select" id="${e.toLowerCase()}-search"/>
        <span class="material-icons">check</span>
      </div>
    </td>
    <td class="label-wrapper">
      <label for="${e.toLowerCase()}-search" class="engine-name">${e}</label>
      <span class="material-icons def-star">star</span>
    </td>
    <td>
      <input class="engine-url" type="url" value="${value.url}" disabled/>
    </td>
  </tr>`;
		document.getElementById("engineTable").innerHTML += "\n" + element;
	}
	checkAll = document.getElementById("allCheck");
}

function save() {
	_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.brightness =
		document.settings_form["set_brightness"].value;
	
	_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.preferences.animation =
		document.settings_form["set_anim_duration"].value;
	
	_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.theme = parseInt(themeBar.getAttribute("active"));
	_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.font =
		document.settings_form["set_font"].selectedOptions[0].innerHTML;
	_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.fontType = document.settings_form["set_font"].value;
	_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.appearance.fontIndex =
		document.settings_form["set_font"].selectedIndex;
	
	_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.newtab = document.settings_form["set_newtab"].checked;
	_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.autofocus = document.settings_form["set_autofocus"].checked;
	_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.preferences.lowercase =
		document.settings_form["set_lowercase"].checked;
	
	
	(0,_scripts_main__WEBPACK_IMPORTED_MODULE_2__.setSave)();
	
	return false;
}

function themeSet() {
	for (let t = 1; t < themeBar.children.length + 1; t++) {
		let button = document.getElementById("theme" + t),
			thumbnail = document.getElementById("thumb" + t),
			theme = getComputedStyle(thumbnail).backgroundImage;
		if (button.checked) {
			themeBar.setAttribute("active", t);
			document.body.style.backgroundImage = theme;
		}
	}
}

function setBrightness() {
	let slider = document.getElementById("brightnessSlider");
	document.getElementById("brightnessOverlay").style.opacity = 1 - slider.value / 100;
	document.getElementById("brightnessCount").innerHTML = slider.value + "%";
}

function setAnimDuration() {
	let slider = document.getElementById("animationDuration");
	document.body.style.transitionDuration = slider.value + "s";
	document.getElementById("animationCount").innerHTML = slider.value + "s";
}

function setFont() {
	let dropBtn = document.getElementById("fontSelect");
	
	let fontName = dropBtn.selectedOptions[0].innerHTML;
	let fontType = dropBtn.value;
	document.body.style.fontFamily = fontName + "," + fontType;
}

function setEngine(engine) {
	let enabledCount = 0,
		defChecked = false;
	for (let e = 1; e < engines.length; e++) {
		let checkbox = checkboxes[e];
		if (engines[e].classList.contains("default") && checkbox.checked) {
			defChecked = true;
		}
		if (engine === "all") {
			checkbox.checked = checkAll.checked;
		} else if (!engine.checked) {
			engines[e].getElementsByClassName("engine-url")[0].disabled = true;
		}
		if (checkbox.checked) {
			enabledCount += 1;
		}
	}
	if (enabledCount > 0) {
		remBtn.disabled = false;
		if (enabledCount === 1) {
			editBtn.disabled = false;
			defBtn.disabled = false;
			remBtn.innerHTML = "delete";
		} else {
			editBtn.disabled = true;
			defBtn.disabled = true;
			remBtn.innerHTML = "delete_sweep";
		}
	} else {
		if (enabledCount === 0) {
			checkAll.checked = false;
		}
		defBtn.disabled = true;
		remBtn.disabled = true;
		editBtn.disabled = true;
		remBtn.innerHTML = "delete";
	}
	if (defChecked) {
		remBtn.disabled = true;
		defBtn.disabled = true;
		remBtn.innerHTML = "delete";
	}
}

function addEngine() {
	let url = prompt(
			"Search for drexfall on your favourite search engine and paste the URL here: "
		).toLowerCase(),
		name = prompt("Enter name of the engine here: "),
		query,
		searchUrl;
	if (url) {
		let urlParams = new URLSearchParams(url);
		urlParams.entries().forEach(entry => {
			if (entry[1] === "drexfall") {
				query = entry[0];
			}
		})
		if (query) {
			searchUrl = url.match(/^https:\/\/[a-z]*[.]\D+[.][a-z]*(\/[a-z]*)*/i)[0];
			_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.engines[name] = {url:searchUrl, query};
		}
	} else {
		alert("Please enter a proper URL\nhttps://www.example.com/?q=drexfall");
	}
	refreshEngines();
}

function remEngine() {
	let engineName;
	
	for (let i = 1; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			
			engineName = engines[i].getElementsByClassName("engine-name")[0].innerHTML
			checkboxes[i].checked = false;
			setEngine(checkboxes[i]);
			engines[i].remove();
			delete _scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.engines[engineName];
		}
	}
}

function defEngine() {
	for (let i = 1; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			engines[i].classList.add("default");
			setEngine(checkboxes[i]);
			_scripts_main__WEBPACK_IMPORTED_MODULE_2__.settings.search.default =
				engines[i].getElementsByClassName("engine-name")[0].innerHTML;
		} else {
			engines[i].classList.remove("default");
		}
	}
}

function editEngine() {
	for (let e = 1; e < engines.length; e++) {
		let checkbox = checkboxes[e];
		
		if (checkbox.checked) {
			engines[e].getElementsByClassName("engine-url")[0].disabled = false;
		}
	}
}

function setLowercase() {
	let button = document.getElementById("lowercaseBtn");
	if (button.checked) {
		document.body.style.textTransform = "lowercase";
	} else {
		document.body.style.textTransform = "unset";
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const brightnessSlider = document.getElementById('brightnessSlider');
	const brightnessCount = document.getElementById('brightnessCount');
	const fontSelect = document.getElementById('fontSelect');
	const newTabBtn = document.getElementById('newTabBtn');
	const autofocusBtn = document.getElementById('autofocusBtn');
	const animationDuration = document.getElementById('animationDuration');
	const animationCount = document.getElementById('animationCount');
	const resetBtn = document.getElementById('resetBtn');
	const saveBtn = document.getElementById('saveBtn');
	const themeRadios = document.querySelectorAll('input[name="theme_radio"]');
	const engineAddBtn = document.getElementById('engineAddBtn');
	const engineEditBtn = document.getElementById('engineEditBtn');
	const engineRemoveBtn = document.getElementById('engineRemoveBtn');
	const lowercaseBtn = document.getElementById('lowercaseBtn');
	brightnessSlider.addEventListener('input', function () {
		brightnessCount.textContent = `${this.value}%`;
		setBrightness();
	});
	
	fontSelect.addEventListener('change', function () {
		setFont(this);
	});
	
	newTabBtn.addEventListener('change', function () {
		// Handle new tab setting
	});
	
	autofocusBtn.addEventListener('change', function () {
		// Handle autofocus setting
	});
	
	animationDuration.addEventListener('input', function () {
		animationCount.textContent = `${this.value}s`;
		setAnimDuration();
	});
	
	resetBtn.addEventListener('click', function () {
		setAll(true);
	});
	
	saveBtn.addEventListener('click', function () {
		save();
	});
	
	themeRadios.forEach(radio => {
		radio.addEventListener('change', function () {
			themeSet(this);
		});
	});
	engineAddBtn.addEventListener('click', function () {
			addEngine();
		}
	);
	engineEditBtn.addEventListener('click', function () {
			editEngine();
		}
	);
	engineRemoveBtn.addEventListener('click', function () {
			remEngine();
		}
	);
	defBtn.addEventListener('click', function () {
		defEngine();
	});
	lowercaseBtn.addEventListener('change', function () {
		setLowercase();
	});
	
});

window.addEventListener("load",()=>{
	document.querySelectorAll("input[type='checkbox'][name='engine-select']").forEach(checkbox => {
		checkbox.addEventListener('change', function () {
			setEngine(this);
		});
	})
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmV4dGFiLy4vc3JjL3NldHRpbmdzL3N0eWxlLnNjc3M/NDAyZiIsIndlYnBhY2s6Ly9kcmV4dGFiLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzPzhiY2UiLCJ3ZWJwYWNrOi8vZHJleHRhYi8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vZHJleHRhYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcmV4dGFiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kcmV4dGFiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHJleHRhYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RyZXh0YWIvLi9zcmMvc2V0dGluZ3MvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcclxuXHJcblxyXG5jb25zdCBvcmlnaW5hbFNldHRpbmdzID0ge1xyXG4gIGFwcGVhcmFuY2U6IHtcclxuICAgIGJyaWdodG5lc3M6IDc1LFxyXG4gICAgdGhlbWU6IDEsXHJcbiAgICBmb250OiBcIkNvbWZvcnRhYVwiLFxyXG4gICAgZm9udFR5cGU6IFwiY3Vyc2l2ZVwiLFxyXG4gICAgZm9udEluZGV4OiAwLFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBuZXd0YWI6IHRydWUsXHJcbiAgICBhdXRvZm9jdXM6IHRydWUsXHJcbiAgICBkZWZhdWx0OiBcIkR1Y2tEdWNrR29cIixcclxuICAgIGVuZ2luZXM6IHtcclxuICAgICAgRHVja0R1Y2tHbzoge1xyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5kdWNrZHVja2dvLmNvbS9cIixcclxuICAgICAgICBxdWVyeTogXCJxXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIEdvb2dsZToge1xyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaFwiLFxyXG4gICAgICAgIHF1ZXJ5OiBcInFcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmVmZXJlbmNlczoge1xyXG4gICAgbG93ZXJjYXNlOiB0cnVlLFxyXG4gICAgYW5pbWF0aW9uOiAwLjMsXHJcbiAgfSxcclxufTtcclxuXHJcbmxldCBzZXR0aW5ncztcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpIHtcclxuICBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXR0aW5nc1wiKSk7XHJcbn0gZWxzZSB7XHJcbiAgc2V0dGluZ3MgPSBvcmlnaW5hbFNldHRpbmdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsU2V0KGhvbWUpIHtcclxuICBsZXQgdGhlbWVzID0gW1xyXG4gICAgW1wiIzZiODVkOVwiLCBcIiM4OTc4ZDFcIl0sXHJcbiAgICBbXCIjYjg0ZTVhXCIsIFwiIzU3MmEzNVwiXSxcclxuICAgIFtcIiNjMzY4NzJcIiwgXCIjZDY4ZDgxXCJdLFxyXG4gICAgW1wiIzY5Njc2YlwiLCBcIiM4NDg2NjZcIl0sXHJcbiAgICBbXCIjYzhkYzU0XCIsIFwiIzZjZGQ1M1wiXSxcclxuICBcclxuICBcclxuICBdXHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gc2V0dGluZ3MucHJlZmVyZW5jZXMubG93ZXJjYXNlID8gXCJsb3dlcmNhc2VcIiA6IFwidW5zZXRcIjtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHNldHRpbmdzLnByZWZlcmVuY2VzLmFuaW1hdGlvblxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udEZhbWlseSA9IHNldHRpbmdzLmFwcGVhcmFuY2UuZm9udCArIFwiLFwiICsgc2V0dGluZ3MuYXBwZWFyYW5jZS5mb250VHlwZVxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCgtNDVkZWcsJHt0aGVtZXNbc2V0dGluZ3MuYXBwZWFyYW5jZS50aGVtZSAtIDFdWzBdfSwke3RoZW1lc1tzZXR0aW5ncy5hcHBlYXJhbmNlLnRoZW1lIC0gMV1bMV19KWBcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyaWdodG5lc3NPdmVybGF5XCIpLnN0eWxlLm9wYWNpdHkgPSAxIC0gc2V0dGluZ3MuYXBwZWFyYW5jZS5icmlnaHRuZXNzIC8gMTAwXHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNhdmUoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXR0aW5nc1wiLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpO1xyXG4gIGFsZXJ0KFwiWW91ciBzZXR0aW5ncyBoYXZlIGJlZW4gc2F2ZWQhXCIpO1xyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBpbml0aWFsU2V0LFxyXG4gIHNldFNhdmUsXHJcbiAgc2V0dGluZ3MsXHJcbiAgb3JpZ2luYWxTZXR0aW5nc1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiXHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiXHJcblxyXG5pbXBvcnQge2luaXRpYWxTZXQsIG9yaWdpbmFsU2V0dGluZ3MsIHNldFNhdmUsIHNldHRpbmdzfSBmcm9tIFwiLi4vc2NyaXB0cy9tYWluXCI7XHJcblxyXG5sZXQgZW5naW5lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmUtcm93XCIpLFxyXG5cdGNoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImVuZ2luZS1zZWxlY3RcIiksXHJcblx0Y2hlY2tBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbENoZWNrXCIpLFxyXG5cdGVkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZ2luZUVkaXRCdG5cIiksXHJcblx0cmVtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmdpbmVSZW1vdmVCdG5cIiksXHJcblx0ZGVmQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmdpbmVEZWZCdG5cIiksXHJcblx0dGhlbWVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lQmFyXCIpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRpbml0aWFsU2V0KGZhbHNlKVxyXG5cdHNldEFsbCgpXHJcblx0XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzZXRBbGwocmVzZXQgPSBmYWxzZSkge1xyXG5cdGlmIChyZXNldCAmJiBjb25maXJtKFwiRG8geW91IHdhbnQgdG8gcmVzZXQgYWxsIHNldHRpbmdzIHRvIGRlZmF1bHQ/XFxuTm8gc2V0dGluZ3Mgd2lsbCBiZSBzYXZlZCB0aWxsIHlvdSBtYW51YWxseSBkbyBzb1wiKSkge1xyXG5cdFx0XHJcblx0XHRzZXR0aW5ncyA9IG9yaWdpbmFsU2V0dGluZ3M7XHJcblx0XHRpbml0aWFsU2V0KCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LnNldHRpbmdzX2Zvcm1bXCJzZXRfYnJpZ2h0bmVzc1wiXS52YWx1ZSA9IHNldHRpbmdzLmFwcGVhcmFuY2UuYnJpZ2h0bmVzcztcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyaWdodG5lc3NDb3VudFwiKS5pbm5lckhUTUwgPSBzZXR0aW5ncy5hcHBlYXJhbmNlLmJyaWdodG5lc3MgKyBcIiVcIjtcclxuXHRcclxuXHRkb2N1bWVudC5zZXR0aW5nc19mb3JtW1wic2V0X2FuaW1fZHVyYXRpb25cIl0udmFsdWUgPSBzZXR0aW5ncy5wcmVmZXJlbmNlcy5hbmltYXRpb247XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltYXRpb25Db3VudFwiKS5pbm5lckhUTUwgPSBzZXR0aW5ncy5wcmVmZXJlbmNlcy5hbmltYXRpb24gKyBcInNcIjtcclxuXHRcclxuXHR0aGVtZUJhci5zZXRBdHRyaWJ1dGUoXCJhY3RpdmVcIiwgc2V0dGluZ3MuYXBwZWFyYW5jZS50aGVtZSk7XHJcblx0ZG9jdW1lbnQuc2V0dGluZ3NfZm9ybVtcInRoZW1lXCIgKyBzZXR0aW5ncy5hcHBlYXJhbmNlLnRoZW1lXS5jaGVja2VkID0gdHJ1ZTtcclxuXHRkb2N1bWVudC5zZXR0aW5nc19mb3JtW1wic2V0X2ZvbnRcIl1bXHJcblx0XHRzZXR0aW5ncy5hcHBlYXJhbmNlLmZvbnRJbmRleFxyXG5cdFx0XS5zZWxlY3RlZCA9IHRydWU7XHJcblx0ZG9jdW1lbnQuc2V0dGluZ3NfZm9ybVtcInNldF9uZXd0YWJcIl0uY2hlY2tlZCA9IHNldHRpbmdzLnNlYXJjaC5uZXd0YWI7XHJcblx0XHJcblx0ZG9jdW1lbnQuc2V0dGluZ3NfZm9ybVtcInNldF9hdXRvZm9jdXNcIl0uY2hlY2tlZCA9IHNldHRpbmdzLnNlYXJjaC5hdXRvZm9jdXM7XHJcblx0XHJcblx0cmVmcmVzaEVuZ2luZXMoKTtcclxuXHRcclxuXHRkb2N1bWVudC5zZXR0aW5nc19mb3JtW1wic2V0X2xvd2VyY2FzZVwiXS5jaGVja2VkID1cclxuXHRcdHNldHRpbmdzLnByZWZlcmVuY2VzLmxvd2VyY2FzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaEVuZ2luZXMoKSB7XHJcblx0bGV0IGxhYmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmUtbmFtZVwiKTtcclxuXHRsZXQgbmFtZXMgPSBbXTtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0bmFtZXMucHVzaChsYWJlbHNbaV0uaW5uZXJIVE1MKTtcclxuXHR9XHJcblx0XHJcblx0Zm9yIChsZXQgZSBpbiBzZXR0aW5ncy5zZWFyY2guZW5naW5lcykge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBzZXR0aW5ncy5zZWFyY2guZW5naW5lc1tlXTtcclxuXHRcdGlmIChuYW1lcy5pbmNsdWRlcyhlKSkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdGxldCBlbGVtZW50ID0gYFxyXG4gICAgPHRyIGNsYXNzPVwiZW5naW5lLXJvdyAke3NldHRpbmdzLnNlYXJjaC5kZWZhdWx0ID09PSBlID8gXCJkZWZhdWx0XCIgOiBcIlwifVwiPlxyXG4gICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkLWNoZWNrXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJlbmdpbmUtc2VsZWN0XCIgaWQ9XCIke2UudG9Mb3dlckNhc2UoKX0tc2VhcmNoXCIvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVjazwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3RkPlxyXG4gICAgPHRkIGNsYXNzPVwibGFiZWwtd3JhcHBlclwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwiJHtlLnRvTG93ZXJDYXNlKCl9LXNlYXJjaFwiIGNsYXNzPVwiZW5naW5lLW5hbWVcIj4ke2V9PC9sYWJlbD5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkZWYtc3RhclwiPnN0YXI8L3NwYW4+XHJcbiAgICA8L3RkPlxyXG4gICAgPHRkPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJlbmdpbmUtdXJsXCIgdHlwZT1cInVybFwiIHZhbHVlPVwiJHt2YWx1ZS51cmx9XCIgZGlzYWJsZWQvPlxyXG4gICAgPC90ZD5cclxuICA8L3RyPmA7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZ2luZVRhYmxlXCIpLmlubmVySFRNTCArPSBcIlxcblwiICsgZWxlbWVudDtcclxuXHR9XHJcblx0Y2hlY2tBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbENoZWNrXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlKCkge1xyXG5cdHNldHRpbmdzLmFwcGVhcmFuY2UuYnJpZ2h0bmVzcyA9XHJcblx0XHRkb2N1bWVudC5zZXR0aW5nc19mb3JtW1wic2V0X2JyaWdodG5lc3NcIl0udmFsdWU7XHJcblx0XHJcblx0c2V0dGluZ3MucHJlZmVyZW5jZXMuYW5pbWF0aW9uID1cclxuXHRcdGRvY3VtZW50LnNldHRpbmdzX2Zvcm1bXCJzZXRfYW5pbV9kdXJhdGlvblwiXS52YWx1ZTtcclxuXHRcclxuXHRzZXR0aW5ncy5hcHBlYXJhbmNlLnRoZW1lID0gcGFyc2VJbnQodGhlbWVCYXIuZ2V0QXR0cmlidXRlKFwiYWN0aXZlXCIpKTtcclxuXHRzZXR0aW5ncy5hcHBlYXJhbmNlLmZvbnQgPVxyXG5cdFx0ZG9jdW1lbnQuc2V0dGluZ3NfZm9ybVtcInNldF9mb250XCJdLnNlbGVjdGVkT3B0aW9uc1swXS5pbm5lckhUTUw7XHJcblx0c2V0dGluZ3MuYXBwZWFyYW5jZS5mb250VHlwZSA9IGRvY3VtZW50LnNldHRpbmdzX2Zvcm1bXCJzZXRfZm9udFwiXS52YWx1ZTtcclxuXHRzZXR0aW5ncy5hcHBlYXJhbmNlLmZvbnRJbmRleCA9XHJcblx0XHRkb2N1bWVudC5zZXR0aW5nc19mb3JtW1wic2V0X2ZvbnRcIl0uc2VsZWN0ZWRJbmRleDtcclxuXHRcclxuXHRzZXR0aW5ncy5zZWFyY2gubmV3dGFiID0gZG9jdW1lbnQuc2V0dGluZ3NfZm9ybVtcInNldF9uZXd0YWJcIl0uY2hlY2tlZDtcclxuXHRzZXR0aW5ncy5zZWFyY2guYXV0b2ZvY3VzID0gZG9jdW1lbnQuc2V0dGluZ3NfZm9ybVtcInNldF9hdXRvZm9jdXNcIl0uY2hlY2tlZDtcclxuXHRzZXR0aW5ncy5wcmVmZXJlbmNlcy5sb3dlcmNhc2UgPVxyXG5cdFx0ZG9jdW1lbnQuc2V0dGluZ3NfZm9ybVtcInNldF9sb3dlcmNhc2VcIl0uY2hlY2tlZDtcclxuXHRcclxuXHRcclxuXHRzZXRTYXZlKCk7XHJcblx0XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aGVtZVNldCgpIHtcclxuXHRmb3IgKGxldCB0ID0gMTsgdCA8IHRoZW1lQmFyLmNoaWxkcmVuLmxlbmd0aCArIDE7IHQrKykge1xyXG5cdFx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWVcIiArIHQpLFxyXG5cdFx0XHR0aHVtYm5haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRodW1iXCIgKyB0KSxcclxuXHRcdFx0dGhlbWUgPSBnZXRDb21wdXRlZFN0eWxlKHRodW1ibmFpbCkuYmFja2dyb3VuZEltYWdlO1xyXG5cdFx0aWYgKGJ1dHRvbi5jaGVja2VkKSB7XHJcblx0XHRcdHRoZW1lQmFyLnNldEF0dHJpYnV0ZShcImFjdGl2ZVwiLCB0KTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGVtZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEJyaWdodG5lc3MoKSB7XHJcblx0bGV0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJpZ2h0bmVzc1NsaWRlclwiKTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyaWdodG5lc3NPdmVybGF5XCIpLnN0eWxlLm9wYWNpdHkgPSAxIC0gc2xpZGVyLnZhbHVlIC8gMTAwO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJpZ2h0bmVzc0NvdW50XCIpLmlubmVySFRNTCA9IHNsaWRlci52YWx1ZSArIFwiJVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBbmltRHVyYXRpb24oKSB7XHJcblx0bGV0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uRHVyYXRpb25cIik7XHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBzbGlkZXIudmFsdWUgKyBcInNcIjtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvbkNvdW50XCIpLmlubmVySFRNTCA9IHNsaWRlci52YWx1ZSArIFwic1wiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGb250KCkge1xyXG5cdGxldCBkcm9wQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250U2VsZWN0XCIpO1xyXG5cdFxyXG5cdGxldCBmb250TmFtZSA9IGRyb3BCdG4uc2VsZWN0ZWRPcHRpb25zWzBdLmlubmVySFRNTDtcclxuXHRsZXQgZm9udFR5cGUgPSBkcm9wQnRuLnZhbHVlO1xyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udEZhbWlseSA9IGZvbnROYW1lICsgXCIsXCIgKyBmb250VHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RW5naW5lKGVuZ2luZSkge1xyXG5cdGxldCBlbmFibGVkQ291bnQgPSAwLFxyXG5cdFx0ZGVmQ2hlY2tlZCA9IGZhbHNlO1xyXG5cdGZvciAobGV0IGUgPSAxOyBlIDwgZW5naW5lcy5sZW5ndGg7IGUrKykge1xyXG5cdFx0bGV0IGNoZWNrYm94ID0gY2hlY2tib3hlc1tlXTtcclxuXHRcdGlmIChlbmdpbmVzW2VdLmNsYXNzTGlzdC5jb250YWlucyhcImRlZmF1bHRcIikgJiYgY2hlY2tib3guY2hlY2tlZCkge1xyXG5cdFx0XHRkZWZDaGVja2VkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmIChlbmdpbmUgPT09IFwiYWxsXCIpIHtcclxuXHRcdFx0Y2hlY2tib3guY2hlY2tlZCA9IGNoZWNrQWxsLmNoZWNrZWQ7XHJcblx0XHR9IGVsc2UgaWYgKCFlbmdpbmUuY2hlY2tlZCkge1xyXG5cdFx0XHRlbmdpbmVzW2VdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmUtdXJsXCIpWzBdLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcblx0XHRcdGVuYWJsZWRDb3VudCArPSAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAoZW5hYmxlZENvdW50ID4gMCkge1xyXG5cdFx0cmVtQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRpZiAoZW5hYmxlZENvdW50ID09PSAxKSB7XHJcblx0XHRcdGVkaXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0ZGVmQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdHJlbUJ0bi5pbm5lckhUTUwgPSBcImRlbGV0ZVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWRpdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdGRlZkJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdHJlbUJ0bi5pbm5lckhUTUwgPSBcImRlbGV0ZV9zd2VlcFwiO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRpZiAoZW5hYmxlZENvdW50ID09PSAwKSB7XHJcblx0XHRcdGNoZWNrQWxsLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGRlZkJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRyZW1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0ZWRpdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRyZW1CdG4uaW5uZXJIVE1MID0gXCJkZWxldGVcIjtcclxuXHR9XHJcblx0aWYgKGRlZkNoZWNrZWQpIHtcclxuXHRcdHJlbUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRkZWZCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0cmVtQnRuLmlubmVySFRNTCA9IFwiZGVsZXRlXCI7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFbmdpbmUoKSB7XHJcblx0bGV0IHVybCA9IHByb21wdChcclxuXHRcdFx0XCJTZWFyY2ggZm9yIGRyZXhmYWxsIG9uIHlvdXIgZmF2b3VyaXRlIHNlYXJjaCBlbmdpbmUgYW5kIHBhc3RlIHRoZSBVUkwgaGVyZTogXCJcclxuXHRcdCkudG9Mb3dlckNhc2UoKSxcclxuXHRcdG5hbWUgPSBwcm9tcHQoXCJFbnRlciBuYW1lIG9mIHRoZSBlbmdpbmUgaGVyZTogXCIpLFxyXG5cdFx0cXVlcnksXHJcblx0XHRzZWFyY2hVcmw7XHJcblx0aWYgKHVybCkge1xyXG5cdFx0bGV0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcclxuXHRcdHVybFBhcmFtcy5lbnRyaWVzKCkuZm9yRWFjaChlbnRyeSA9PiB7XHJcblx0XHRcdGlmIChlbnRyeVsxXSA9PT0gXCJkcmV4ZmFsbFwiKSB7XHJcblx0XHRcdFx0cXVlcnkgPSBlbnRyeVswXTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdGlmIChxdWVyeSkge1xyXG5cdFx0XHRzZWFyY2hVcmwgPSB1cmwubWF0Y2goL15odHRwczpcXC9cXC9bYS16XSpbLl1cXEQrWy5dW2Etel0qKFxcL1thLXpdKikqL2kpWzBdO1xyXG5cdFx0XHRzZXR0aW5ncy5zZWFyY2guZW5naW5lc1tuYW1lXSA9IHt1cmw6c2VhcmNoVXJsLCBxdWVyeX07XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgcHJvcGVyIFVSTFxcbmh0dHBzOi8vd3d3LmV4YW1wbGUuY29tLz9xPWRyZXhmYWxsXCIpO1xyXG5cdH1cclxuXHRyZWZyZXNoRW5naW5lcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1FbmdpbmUoKSB7XHJcblx0bGV0IGVuZ2luZU5hbWU7XHJcblx0XHJcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoY2hlY2tib3hlc1tpXS5jaGVja2VkKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRlbmdpbmVOYW1lID0gZW5naW5lc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5naW5lLW5hbWVcIilbMF0uaW5uZXJIVE1MXHJcblx0XHRcdGNoZWNrYm94ZXNbaV0uY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRzZXRFbmdpbmUoY2hlY2tib3hlc1tpXSk7XHJcblx0XHRcdGVuZ2luZXNbaV0ucmVtb3ZlKCk7XHJcblx0XHRcdGRlbGV0ZSBzZXR0aW5ncy5zZWFyY2guZW5naW5lc1tlbmdpbmVOYW1lXTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZkVuZ2luZSgpIHtcclxuXHRmb3IgKGxldCBpID0gMTsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChjaGVja2JveGVzW2ldLmNoZWNrZWQpIHtcclxuXHRcdFx0ZW5naW5lc1tpXS5jbGFzc0xpc3QuYWRkKFwiZGVmYXVsdFwiKTtcclxuXHRcdFx0c2V0RW5naW5lKGNoZWNrYm94ZXNbaV0pO1xyXG5cdFx0XHRzZXR0aW5ncy5zZWFyY2guZGVmYXVsdCA9XHJcblx0XHRcdFx0ZW5naW5lc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5naW5lLW5hbWVcIilbMF0uaW5uZXJIVE1MO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZW5naW5lc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiZGVmYXVsdFwiKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRFbmdpbmUoKSB7XHJcblx0Zm9yIChsZXQgZSA9IDE7IGUgPCBlbmdpbmVzLmxlbmd0aDsgZSsrKSB7XHJcblx0XHRsZXQgY2hlY2tib3ggPSBjaGVja2JveGVzW2VdO1xyXG5cdFx0XHJcblx0XHRpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG5cdFx0XHRlbmdpbmVzW2VdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmdpbmUtdXJsXCIpWzBdLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMb3dlcmNhc2UoKSB7XHJcblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93ZXJjYXNlQnRuXCIpO1xyXG5cdGlmIChidXR0b24uY2hlY2tlZCkge1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gXCJsb3dlcmNhc2VcIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gXCJ1bnNldFwiO1xyXG5cdH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBicmlnaHRuZXNzU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyaWdodG5lc3NTbGlkZXInKTtcclxuXHRjb25zdCBicmlnaHRuZXNzQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJpZ2h0bmVzc0NvdW50Jyk7XHJcblx0Y29uc3QgZm9udFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250U2VsZWN0Jyk7XHJcblx0Y29uc3QgbmV3VGFiQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1RhYkJ0bicpO1xyXG5cdGNvbnN0IGF1dG9mb2N1c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvZm9jdXNCdG4nKTtcclxuXHRjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRpb25EdXJhdGlvbicpO1xyXG5cdGNvbnN0IGFuaW1hdGlvbkNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuaW1hdGlvbkNvdW50Jyk7XHJcblx0Y29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRCdG4nKTtcclxuXHRjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVCdG4nKTtcclxuXHRjb25zdCB0aGVtZVJhZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJ0aGVtZV9yYWRpb1wiXScpO1xyXG5cdGNvbnN0IGVuZ2luZUFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmdpbmVBZGRCdG4nKTtcclxuXHRjb25zdCBlbmdpbmVFZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZ2luZUVkaXRCdG4nKTtcclxuXHRjb25zdCBlbmdpbmVSZW1vdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5naW5lUmVtb3ZlQnRuJyk7XHJcblx0Y29uc3QgbG93ZXJjYXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvd2VyY2FzZUJ0bicpO1xyXG5cdGJyaWdodG5lc3NTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRicmlnaHRuZXNzQ291bnQudGV4dENvbnRlbnQgPSBgJHt0aGlzLnZhbHVlfSVgO1xyXG5cdFx0c2V0QnJpZ2h0bmVzcygpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGZvbnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0c2V0Rm9udCh0aGlzKTtcclxuXHR9KTtcclxuXHRcclxuXHRuZXdUYWJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8gSGFuZGxlIG5ldyB0YWIgc2V0dGluZ1xyXG5cdH0pO1xyXG5cdFxyXG5cdGF1dG9mb2N1c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBIYW5kbGUgYXV0b2ZvY3VzIHNldHRpbmdcclxuXHR9KTtcclxuXHRcclxuXHRhbmltYXRpb25EdXJhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGFuaW1hdGlvbkNvdW50LnRleHRDb250ZW50ID0gYCR7dGhpcy52YWx1ZX1zYDtcclxuXHRcdHNldEFuaW1EdXJhdGlvbigpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0c2V0QWxsKHRydWUpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRzYXZlKCk7XHJcblx0fSk7XHJcblx0XHJcblx0dGhlbWVSYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcblx0XHRyYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoZW1lU2V0KHRoaXMpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0ZW5naW5lQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRhZGRFbmdpbmUoKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdGVuZ2luZUVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGVkaXRFbmdpbmUoKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdGVuZ2luZVJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmVtRW5naW5lKCk7XHJcblx0XHR9XHJcblx0KTtcclxuXHRkZWZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRkZWZFbmdpbmUoKTtcclxuXHR9KTtcclxuXHRsb3dlcmNhc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0c2V0TG93ZXJjYXNlKCk7XHJcblx0fSk7XHJcblx0XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PntcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVtuYW1lPSdlbmdpbmUtc2VsZWN0J11cIikuZm9yRWFjaChjaGVja2JveCA9PiB7XHJcblx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHNldEVuZ2luZSh0aGlzKTtcclxuXHRcdH0pO1xyXG5cdH0pXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9