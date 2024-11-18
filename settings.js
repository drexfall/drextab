const originalSettings = {
  appearance: {
    brightness: 75,
    theme: 1,
    font: "Comfortaa",
    fontType:"cursive",
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
  let themes=[
      ["#6b85d9","#8978d1"],
      ["#b84e5a", "#572a35"],
      ["#c36872", "#d68d81"],
      ["#69676b", "#848666"],
      ["#c8dc54", "#6cdd53"],


  ]
  document.body.style.textTransform = settings.preferences.lowercase? "lowercase": "unset";
  document.body.style.transitionDuration = settings.preferences.animation
  document.body.style.fontFamily = settings.appearance.font+","+settings.appearance.fontType
  document.body.style.backgroundImage = `linear-gradient(-45deg,${themes[settings.appearance.theme-1][0]},${themes[settings.appearance.theme-1][1]})`
  console.log()
  document.getElementById("brightnessOverlay").style.opacity = 1-settings.appearance.brightness/100

}
function setSave() {
  localStorage.setItem("settings", JSON.stringify(settings));
  alert("Your settings have been saved!");
  return false;
}
