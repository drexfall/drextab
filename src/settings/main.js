import "../styles/style.scss"
import "./style.scss"

import {initialSet, originalSettings, setSave, settings} from "../scripts/main";

let engines = document.getElementsByClassName("engine-row"),
	checkboxes = document.getElementsByName("engine-select"),
	checkAll = document.getElementById("allCheck"),
	editBtn = document.getElementById("engineEditBtn"),
	remBtn = document.getElementById("engineRemoveBtn"),
	defBtn = document.getElementById("engineDefBtn"),
	themeBar = document.getElementById("themeBar");

window.addEventListener("load", () => {
	initialSet(false)
	setAll()
	
})

function setAll(reset = false) {
	if (reset && confirm("Do you want to reset all settings to default?\nNo settings will be saved till you manually do so")) {
		
		settings = originalSettings;
		initialSet();
	}
	document.settings_form["set_brightness"].value = settings.appearance.brightness;
	document.getElementById("brightnessCount").innerHTML = settings.appearance.brightness + "%";
	
	document.settings_form["set_anim_duration"].value = settings.preferences.animation;
	document.getElementById("animationCount").innerHTML = settings.preferences.animation + "s";
	
	themeBar.setAttribute("active", settings.appearance.theme);
	document.settings_form["theme" + settings.appearance.theme].checked = true;
	document.settings_form["set_font"][
		settings.appearance.fontIndex
		].selected = true;
	document.settings_form["set_newtab"].checked = settings.search.newtab;
	
	document.settings_form["set_autofocus"].checked = settings.search.autofocus;
	
	refreshEngines();
	
	document.settings_form["set_lowercase"].checked =
		settings.preferences.lowercase;
}

function refreshEngines() {
	let labels = document.getElementsByClassName("engine-name");
	let names = [];
	for (let i = 0; i < labels.length; i++) {
		names.push(labels[i].innerHTML);
	}
	
	for (let e in settings.search.engines) {
		const value = settings.search.engines[e];
		if (names.includes(e)) {
			continue;
		}
		let element = `
    <tr class="engine-row ${settings.search.default === e ? "default" : ""}">
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
	settings.appearance.brightness =
		document.settings_form["set_brightness"].value;
	
	settings.preferences.animation =
		document.settings_form["set_anim_duration"].value;
	
	settings.appearance.theme = parseInt(themeBar.getAttribute("active"));
	settings.appearance.font =
		document.settings_form["set_font"].selectedOptions[0].innerHTML;
	settings.appearance.fontType = document.settings_form["set_font"].value;
	settings.appearance.fontIndex =
		document.settings_form["set_font"].selectedIndex;
	
	settings.search.newtab = document.settings_form["set_newtab"].checked;
	settings.search.autofocus = document.settings_form["set_autofocus"].checked;
	settings.preferences.lowercase =
		document.settings_form["set_lowercase"].checked;
	
	
	setSave();
	
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
			settings.search.engines[name] = {url:searchUrl, query};
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
			delete settings.search.engines[engineName];
		}
	}
}

function defEngine() {
	for (let i = 1; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			engines[i].classList.add("default");
			setEngine(checkboxes[i]);
			settings.search.default =
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