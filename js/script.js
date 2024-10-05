const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const heroImage = document.getElementById("hero-image");
let imageIndex = 0;

function changeImage() {
  heroImage.classList.add("fade-out");

  setTimeout(() => {
    heroImage.src = images[imageIndex];
    heroImage.classList.remove("fade-out");
    heroImage.classList.add("fade-in");

    imageIndex = (imageIndex + 1) % images.length;
  }, 500);
}

setInterval(changeImage, 3000);
