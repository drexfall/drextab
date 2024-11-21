import "../styles/style.scss"
import "./style.scss"
import {initialSet} from "../scripts/main";
window.addEventListener("load", () => {
    initialSet(false)
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