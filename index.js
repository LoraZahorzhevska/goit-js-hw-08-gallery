import galleryItems from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");
const cardsMarkup = createCardsGallary(galleryItems);

// создание разметки

function createCardsGallary(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
    <a
    class="gallery__link"
    href='${original}'
  >
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </li>`;
    })
    .join(" ");
}

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

const lightboxImg = document.querySelector("img.lightbox__image");

function setNewImage(counter) {
  lightboxImg.src = "";
  lightboxImg.src = galleryItems[counter].original;
}

function calculateCounter(event) {
  galleryItems.map(({ original }, i) => {
    if (event.srcElement.href === original) {
      counter = i;
      event.srcElement.href = "";
    }
  });
}
