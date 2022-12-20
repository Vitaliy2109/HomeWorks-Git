"use strict";

document.addEventListener("scroll", function (e) {
  if (window.scrollY >= 30) {
    document.getElementById("header").classList.add("fixed");
  } else {
    document.getElementById("header").classList.remove("fixed");
  }
});
document.getElementById("theme-button");
checkbox.addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

function toggleMenu() {
  document.getElementById("hamburger").classList.toggle("is-active");
  document.getElementById("navigation-mobile").classList.toggle("open");
  document.getElementById("header").classList.toggle("mobile");
  document.getElementById("mobile__shadow").classList.toggle("active");
} // window.addEventListener("resize", function () {
//   if (window.innerWidth <= 768) {
//     document.getElementById("navigation").classList.add("mobile");
//   } else {
//     document.getElementById("navigation").classList.remove("mobile");
//   }
// });