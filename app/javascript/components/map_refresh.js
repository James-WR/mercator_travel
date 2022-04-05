// // This code is a fix to a mapbox bug that causes the canvas to display only partially
// // upon inital page load when 'my trips' is clicked.

window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
}
