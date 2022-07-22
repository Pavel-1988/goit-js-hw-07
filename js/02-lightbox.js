import { galleryItems } from './gallery-items.js';
// Change code below this line


const сontainerGallary = document.querySelector('.gallery')
const marcup = creatGallary(galleryItems);
сontainerGallary.insertAdjacentHTML('beforeend', marcup)

function creatGallary (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
            
             />
        </a>
        `
    })  .join('')
}


let options = {
    captionsData: 'alt',
    captionDelay:250,
}

let gallery = new SimpleLightbox('.gallery a',  options )
gallery.on('show.simplelightbox');



//=====робіить
// let gallery = new SimpleLightbox('.gallery a', {
//   captionsData: "alt",
//   captionDelay: 250, })