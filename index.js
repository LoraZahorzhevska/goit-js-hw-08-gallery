import galleryItems from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");
const lightboxImg = document.querySelector(".lightbox__image");
const divLigthbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.ightbox__image');
const btnClose = document.querySelector('.lightbox__button');
const divOverlay = document.querySelector('.lightbox__overlay');
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

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup); //добавление разметки в HTML


galleryItems.addEventListener('click' , (evt) => {
  evt.preventDefault(); // отменяет действие браузера по умолчанию
  let modalLink = evt.target.dataset.source;
  divLigthbox.classList.add('is-open');
  lightboxImage.src = modalLink;
  lightboxImage.dataset.index = evt.target.dataset.index;
});


btnClose.addEventListener('click' , closeOverlay);
divOverlay.addEventListener('click' , closeOverlay);

window.addEventListener('keydown' , (evt) => {
  if (evt.key === 'Escape') {
    closeOverlay()
  }
  if (evt.key === 'ArrowLeft') {
    arrowLeft()
  }
  if (evt.key === 'ArrowRight') {
    arrowRight()
  }
});