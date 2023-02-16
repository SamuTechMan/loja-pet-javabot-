function setVisible() {
  var images = document.querySelectorAll("img:not(#middle-image, #logo)");

  for (var i = 0; i < images.length; i++) {
    images[i].classList.toggle("hidden");
  }
}