// Sidebar
document.querySelector(".navbar-toggle").addEventListener("click", () => {
  document.querySelector("#main-collapse").classList.toggle("open");
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
