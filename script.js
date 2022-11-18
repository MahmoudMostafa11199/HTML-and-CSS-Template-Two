console.log("Hello world!");
///////////////////////////////////////////////////////////
// Current Year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
const submit = document.querySelector(".submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
});
