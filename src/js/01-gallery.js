import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const listRef = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemMarkup(galleryItems);

listRef.insertAdjacentHTML('afterbegin', itemsMarkup);

console.log(createGalleryItemMarkup(galleryItems));

function createGalleryItemMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      
    />
  </a>
`
}) 
.join('');
}

// // console.log(galleryItems);

// //3, 4//

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt"});
console.log(galleryItems);
