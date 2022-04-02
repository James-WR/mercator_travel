const seeAllButton = document.querySelector("#see-all-button");
const map = document.getElementById("map");
const buttons = document.getElementById("buttons");
const quotes = document.getElementById("quotes");

seeAllButton.addEventListener("click", makeBoxBig)

function makeBoxBig(e) {
  e.preventDefault();
  const seeAllBox = this.parentElement
  seeAllBox.classList.toggle("make-box-big");
  map.style.zIndex = "0";
  buttons.classList.toggle("d-none");
  quotes.classList.toggle("d-none");
  seeAllBox.style.transition = "all 0.3s";
  changeButtonText();
}

function changeButtonText() {
  if (seeAllButton.innerHTML === "See all") {
    seeAllButton.innerHTML = "See Summary";
  } else {
    seeAllButton.innerHTML = "See all"
  };
}
