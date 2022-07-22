import { galleryItems } from './gallery-items.js';
// Change code below this line


const сontainerGallary = document.querySelector('.gallery')
const marcup = creatGallary(galleryItems);
сontainerGallary.insertAdjacentHTML('beforeend', marcup)

function creatGallary () {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
            title = "${description}" />
        </a>
        `
    })  .join('')
}

let gallery = new SimpleLightbox('.gallery a');

// gallery.on('show.simplelightbox', function () {
// });




