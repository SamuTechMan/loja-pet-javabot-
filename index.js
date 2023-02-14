img = document.getElementById("jeff");

function setVisible() {
  if (img.classList.contains("hidden")) {
    img.classList.remove("hidden");
  } else {
    img.classList.add("hidden");
  }
}
