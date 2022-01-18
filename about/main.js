let faqElems;
function bodyLoad() {
  faqElems = document.getElementsByClassName("faq-elem");
  for (let i = 0; i < faqElems.length; i++) {
    faqElems[i].getElementsByTagName("input")[0].checked = false;
  }
}

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
