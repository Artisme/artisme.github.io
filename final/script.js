// Sidebar
document.querySelector(".navbar-toggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});
// Active page
let x = document.querySelector('nav li a[href=".' + location.pathname.slice(6) + '"]');
if (x) {
  x.classList.add("active");
} else {
  document
    .querySelector('nav li a[href="./index.html"]')
    .classList.add("active");
}

let imgContent = document.querySelectorAll(".img-content li");
imgContent.forEach((img) => {
  img.addEventListener("mouseover", () => {
    let titleElement = document.querySelector(".img-title h3");
    titleElement.textContent = img.childNodes[1].getAttribute("data-title");
  });
  img.addEventListener("click", () => {
    document.querySelector("#main-collapse > ul").classList.toggle("activeimg");
    img.classList.toggle("activeimg");
    let otherImgs = document.querySelectorAll(".img-content li:not(.activeimg)");
    otherImgs.forEach((othImg) => {
      othImg.classList.toggle("hidden");
    });
  });
});
