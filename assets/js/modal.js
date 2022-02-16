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
setTimeout( () => {
if (browserLanguage !== "pl") {
  const isTranslated = htmlTag.classList.contains("translated-ltr");
  if (!isTranslated) {
    modal.classList.add("showModal");
    buildModalButtons();
    modalCloser();
    }
}
}, 500)