const photos = document.querySelectorAll(".photo");
const coverPhoto = document.querySelector("#cover-photo")

if ($('body').is('.show-page')) {
  photos.forEach((photo) => {
    photo.addEventListener("click", makeCover)
  })
}

function makeCover() {
  coverPhoto.style.backgroundImage = this.style.backgroundImage
}
