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

const modal = document.querySelector(".modal");

const browserLanguage =
  window.navigator.userLanguage || window.navigator.language;
const htmlTag = document.documentElement;
const modalButtons = document.querySelector(".modal__buttons");
const buildModalButtons = () => {
  modalButtons.innerHTML = `<button class="modal__button modal__button--decline  modal__button--decline-js parallax__button">Decline</button>
  <a class="modal__button modal__button--aprove parallax__button" href="https://zdrowemiasto-org.translate.goog/?_x_tr_sl=pl&_x_tr_tl=${browserLanguage}&_x_tr_hl=${browserLanguage}&_x_tr_pto=sc" rel="noindex nofollow">Aprove</a>`;
};
const modalCloser = (e) => {
  const modalDecline = document.querySelector(".modal__button--decline-js");
  modalDecline.addEventListener("click", (e) => {
    modal.classList.add("hide");
  });
};

if (browserLanguage !== "pl") {
  const isTranslated = htmlTag.classList.contains("translated-ltr");
  if (!isTranslated) {
    modal.classList.add("showModal");
    buildModalButtons();
    modalCloser();
    }
}
