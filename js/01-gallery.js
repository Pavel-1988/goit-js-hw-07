import { galleryItems } from './gallery-items.js';
// Change code below this line


const imagesGallary = document.querySelector('.gallery')
const imagesMarkup = creatGallary(galleryItems);
imagesGallary.insertAdjacentHTML('beforeend',imagesMarkup)

// imagesGallary.addEventListener('click', onImagesGallaryClick)

function creatGallary(images) { // разметка
    return galleryItems.map(({preview, original, description }) => {
        return `
     <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    })
        .join('')
}



function createBigImage(img) {
     const instance = basicLightbox.create(`<img src="${img}">`)
     instance.show()
}

function createModal(e) {
    e.preventDefault();
    createBigImage(e.target.dataset.source);
    // lightboxImage.show()
};

imagesGallary.addEventListener('click', createModal )



// imagesGallary.addEventListener('click', createBigImage)

// function createBigImage() {
//      const instance = basicLightbox.create(`
//     <img src="${original}">
//     `)
//     instance.show()
// }






// imagesGallary.addEventListener('click', function (e) {
//     e.preventDefault();
//     lightboxImage = createBigImage(e.target.dataset.source);
//     lightboxImage.show()

// });
