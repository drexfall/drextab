import * as styles from  "../styles/style.scss"
import "./style.scss";
import {initialSet} from "../scripts/main";
console.log(styles)
let faqElems;
window.addEventListener("load", () => {
  initialSet(false)
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
