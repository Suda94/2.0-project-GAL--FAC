const readMoreBtn = document.querySelector(".description-button");
const desc = document.querySelector(".desc");

readMoreBtn.addEventListener("click", (e) => {
  desc.classList.toggle("show-more");
  if (readMoreBtn.innerText === "+") {
    readMoreBtn.innerText = "-";
  } else {
    readMoreBtn.innerText = "+";
  }
});