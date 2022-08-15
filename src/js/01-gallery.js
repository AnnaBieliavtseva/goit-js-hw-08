// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onGalleryRefClick);

function createGallery(images) {
  const galleryImages = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');

  return galleryImages;
}

galleryRef.insertAdjacentHTML('beforeend', createGallery());

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onGalleryRefClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
}

console.log(galleryItems);
