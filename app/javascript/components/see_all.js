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
  const title = seeAllBox.firstElementChild;
  changeTitleText(title);
  changeButtonText();
}

function changeButtonText() {
  if (seeAllButton.innerHTML === "See all") {
    seeAllButton.innerHTML = "Back to summary";
  } else {
    seeAllButton.innerHTML = "See all"
  };
};

function changeTitleText(title) {
  if (title.innerHTML === "My Recently Added Trips") {
    title.innerHTML = "My Trips";
  } else {
    title.innerHTML = "My Recently Added Trips"
  };
};
