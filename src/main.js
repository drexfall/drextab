import "./styles/style.scss"
import "./styles/home.scss"
import {initialSet, settings} from "./scripts/main";
let searchbar, form, searchSelector, searchButton;

function setSearch() {
	const engine = settings.search.engines[searchSelector.value];
	
	searchbar.name = engine.query;
	form.target = settings.search.newtab ? "_blank" : "_self";
	form.action = engine.url;
}
function onType() {
	let urlregex = /\w+(\.\w+)+/, httpregex = /(http(s){0,1}:\/\/)/;
	if (searchbar.value.match(urlregex)) {
		if (searchbar.value.match(httpregex)) {
			form.action = searchbar.value;
			form.method = "get"
		} else {
			form.action = "https://" + searchbar.value;
			form.method = "post"
		}
		searchButton.textContent = "Launch"
	} else {
		setSearch();
		searchButton.textContent = "Search"
	}
}
window.addEventListener("load",()=>{
	initialSet(true)
	searchSelector = document.getElementById("defSearch");
	searchButton = document.getElementById("btnSearch");
	searchbar = document.getElementById("mainSearch");
	form = document.getElementById("searchForm");
	
	searchbar.value = "";
	
	let engines = settings.search.engines;
	for (let engine in engines) {
		searchSelector.innerHTML += `\n<option value="${engine}">${engine}</option>`;
	}
	searchSelector.value = settings.search.default;
	if (settings.search.autofocus) {
		searchbar.focus();
	} else {
		searchbar.blur();
	}
	setSearch();
	
	document.getElementById("mainSearch").addEventListener("input", onType);
	document.getElementById("defSearch").addEventListener("change", setSearch);
})