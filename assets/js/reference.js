import Reference from "./referenceBook";
const list = document.querySelector(".events");

const printReference = () => {
  for (let referencePosition of Reference) {
    const { title, photo } = referencePosition;
    if (photo) {
      photo = require(photo);

      list.innerHTML += `
    <li class="event">
    <img src="${photo})" alt="zdjęcie z wydarzenia o tytule ${title}" class="event__img" >

    <div class="event__info">
        <h2 class="event__title content__title">
        ${title}
        </h2>


    </div>
    </li>
    `;
    }
  }
};
printReference();
