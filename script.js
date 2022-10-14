const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
btn.addEventListener("click", Click);
function Click() {
  console.log(content.classList);
  if (content.classList.contains("hidden")) {
    btn.textContent = "Hide text";
  } else {
    btn.textContent = "Show text";
  }
  content.classList.toggle("hidden");
}