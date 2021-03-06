// This code runs in the show page, allowing the user to see full-sized photos
// on click and to delete photos as long as there is always one cover photo left.

const coverPhoto = document.querySelector("#cover-photo");
const photos = document.querySelectorAll(".photo");
const delButtons = document.querySelectorAll(".delete-v1");


if ($('body').is('.show-page')) {
  photos.forEach((photo) => {
    photo.addEventListener("click", makeCover)
  });
  if (delButtons.length == 1) {
    delButtons[0].classList.toggle("d-none")
  };
}

function makeCover(e) {
  if (e.target.className == "photo") {
    coverPhoto.style.backgroundImage = this.style.backgroundImage
  }
}
