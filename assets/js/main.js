const gotoup = document.querySelector(".gotoup");

// When the user scrolls down 20px from the top of the document, show the button

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

gotoup.addEventListener("click", topFunction);

window.onscroll = function () {
  onScroll();
};

// Get the navbar
const navbar = document.querySelector(".header");
const about = document.querySelector(".about");
const content = document.querySelector(".content");
const main = document.querySelector("main");
let navbarHeight = navbar.offsetHeight;
let contentOffSet = content.offsetTop - navbarHeight;
let mobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
function onScroll() {
  if (!mobile) {
    if (window.pageYOffset >= contentOffSet - navbarHeight) {
      navbar.classList.add("dark");
      gotoup.classList.add("show");
    } else {
      navbar.classList.remove("dark");
      gotoup.classList.remove("show");
    }
  } else {
    if (window.pageYOffset >= navbarHeight) {
      main.style.paddingTop = navbarHeight + "px";
      navbar.classList.add("sticky");
    } else {
      main.style.paddingTop = 0;
      navbar.classList.remove("sticky");
    }
  }
}

const menu = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("show");
});

