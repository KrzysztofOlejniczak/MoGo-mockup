"use strict";

const body = document.querySelector("body");
const mobileMenu = document.querySelector(".nav__mobileMenu");
const menuButton = document.querySelector(".nav__mobileMenuBtn");

function escToClose(event) {
  if (event.key === "Escape") {
    mobileMenu.classList.remove("active");
    body.classList.remove("no-scroll");
    document.removeEventListener("keydown", escToClose);
  }
}

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
  document.addEventListener("keydown", escToClose);
});

mobileMenu.addEventListener("click", (event) => {
  if (event.target.matches(".nav__mobileMenuBtn--close")) {
    mobileMenu.classList.remove("active");
    body.classList.remove("no-scroll");
    document.removeEventListener("keydown", escToClose);
  }
});
