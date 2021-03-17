import galleryItems from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");
const divLigthbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const btnClose = document.querySelector(".lightbox__button");
const divOverlay = document.querySelector(".lightbox__overlay");

// создание разметки

galleryItems.map((el, index) => {
  galleryContainer.innerHTML += `
<li class="gallery__item">
    <a
    class="gallery__link"
    href='${el.original}'
  >
  <img
  class="gallery__image"
  src="${el.preview}"
  data-source="${el.original}"
  alt="${el.description}"
  data-index="${index}"
  />
  </a>
  </li>`;
});

galleryContainer.addEventListener("click", (evt) => {
  evt.preventDefault(); // отменяет действие браузера по умолчанию
  let modalLink = evt.target.dataset.source;
  divLigthbox.classList.add("is-open");
  lightboxImage.src = modalLink;
  lightboxImage.dataset.index = evt.target.dataset.index;
});

btnClose.addEventListener("click", closeOverlay);
divOverlay.addEventListener("click", closeOverlay);

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeOverlay();
  }
  if (evt.key === "ArrowLeft") {
    arrowLeft();
  }
  if (evt.key === "ArrowRight") {
    arrowRight();
  }
});

function closeOverlay() {
  divLigthbox.classList.remove("is-open");
  lightboxImage.src = "";
}

function newSrc(step, index) {
  lightboxImage.dataset.index = `${index + step}`;
  lightboxImage.src = galleryItems[index + step].original;
}

function arrowLeft() {
  let index = Number(lightboxImage.dataset.index);
  if (index === 0) {
    newSrc(0, galleryItems.length - 1);
    return;
  }
  //console.log(index);
  newSrc(-1, index);
}

function arrowRight() {
  let index = Number(lightboxImage.dataset.index);
  if (index === galleryItems.length - 1) {
    newSrc(0, 0);
  }
  //console.log(index);
  newSrc(1, index);
}
