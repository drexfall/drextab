let searchbar, form, selector;
function bodyLoad() {
  searchSelector = document.getElementById("defSearch");
  searchbar = document.getElementById("mainSearch");
  form = document.getElementById("searchForm");

  searchbar.value = "";

  let engines = settings.search.engines;
  let index = 0;
  for (let engine in engines) {
    searchSelector.innerHTML+=`\n<option value="${engine}">${engine}</option>`

  }
  searchSelector.value = settings.search.default
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
