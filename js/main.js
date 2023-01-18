const images = document.querySelectorAll("#gallery img");
let currentImage = 0;

function updateGallery() {
  images.forEach(img => (img.style.display = "none"));
  images[currentImage].style.display = "block";
}

updateGallery();

document.querySelector("#prev").addEventListener("click", function() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  updateGallery();
});

document.querySelector("#next").addEventListener("click", function() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  updateGallery();
});