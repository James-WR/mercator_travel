// This file makes changes to the trip summary box on the index page.

const seeAllButton = document.querySelector("#see-all-button");
const map = document.getElementById("map");
const buttons = document.getElementById("buttons");
const quotes = document.getElementById("quotes");
const tripsList = document.getElementById("trips-list");

if ($('body').is('.index-page')) {
  seeAllButton.addEventListener("click", makeBoxBig)
}

// This function expands the trip summary box when the user clicks
// 'see all'. It also changes the style of various buttons within the box.
function makeBoxBig(e) {

  e.preventDefault();

  this.classList.toggle("see-all-enlarged")

  const seeAllBox = this.parentElement
  seeAllBox.classList.toggle("make-box-big");
  seeAllBox.style.overflow = "scroll";
  seeAllBox.style.transition = "all 0.3s";

  tripsList.classList.toggle("two-column-trips");

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
