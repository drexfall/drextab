let searchbar, form, selector;
function bodyLoad() {
  searchSelector = document.getElementById("defSearch");
  searchButton = document.getElementById("btnSearch");
  searchbar = document.getElementById("mainSearch");
  form = document.getElementById("searchForm");

  searchbar.value = "";

  let engines = settings.search.engines;
  let index = 0;
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
}
function setSearch() {
  const engine = settings.search.engines[searchSelector.value];

  searchbar.name = engine.query;
  form.target = settings.search.newtab ? "_blank" : "_self";
  form.action = engine.url;
}
function onType() {
  let urlregex = /\w+(\.\w+)+/;
  let httpregex = /(http(s){0,1}:\/\/)/;
  if (searchbar.value.match(urlregex)) {
    if (searchbar.value.match(httpregex)) {
      console.log(searchbar.value);
      form.action = searchbar.value;
    } else {
      form.action = "https://" + searchbar.value;
    }
    searchButton.value = "Launch"
  } else {
    setSearch();
    searchButton.value = "Search"
  }
}
