const list = document.querySelector(".events");

fetch("http://klastermedyczny.org/wp-json/wp/v2/posts?per_page=100")
  .then((resp) => resp.json())
  .then((resp) => {
    const events = resp;

    for (let event of events) {

      let eventTitle = `${event.title.rendered.toString()}`;
      let eventContent = `${event.content.rendered}`;
      let eventImage = `${
        event.better_featured_image ? event.better_featured_image.source_url : " " }`;
      let category = `${event.categories[0]}`;
      let eventTag = `${event.tags[0]}`;
      if (category == "104" && eventTag == '107' ) {
        list.innerHTML += `
<li class="event">
${
  eventImage.length > 1
    ? `
<img src="${eventImage}" alt="zdjęcie z wydarzenia o tytule ${eventTitle}" class="event__img" >

<div class="event__info">
    <h2 class="event__title content__title">
    ${eventTitle}
    </h2>
    <div class="event__description">

`
    : `
<div class="event__info event__info--full-width">
    <h2 class="event__title content__title">
    ${eventTitle}
    </h2>
    <div class="event__description"
  `
}
${eventContent}

    </div>
</div>
</li>
`;
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });
