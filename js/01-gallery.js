import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesGallary = document.querySelector('.gallery')

function createGallary(images) { 
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
};

const imagesMarkup = createGallary(galleryItems);
imagesGallary.insertAdjacentHTML('beforeend',imagesMarkup)

function createBigImage(img) {
     const instance = basicLightbox.create(`<img src="${img}">`)
    instance.show()   

     if (instance.visible()) {
        window.addEventListener("keydown", onPressKeyESC);
        }

    function onPressKeyESC(e) {
        if (e.code === "Escape") {
        instance.close();
        window.removeEventListener("keydown", onPressKeyESC);
        }
    }
}

function createModal(e) {
    e.preventDefault();
    createBigImage(e.target.dataset.source);  
};

imagesGallary.addEventListener('click', createModal )


