import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function createMarcup(arr) {
    const marcup = arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
     class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a>
      </li>`).join('')
    return marcup;
}


galleryContainer.insertAdjacentHTML("beforeend", createMarcup(galleryItems));
galleryContainer.addEventListener('click', handlerClick);
function handlerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    
    const picture = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${picture}" alt=""/>
    </div>
`,
        {
            onShow: () => {
                document.addEventListener("keydown", onEscapePress);
            }
        },

        {
            onClose: () => {
                document.removeEventListener("keydown", onEscapePress);
            }
        }
    );
    instance.show();
    

    function onEscapePress(evt) {
        if (evt.code === "Escape" || evt.code === "Esc") {
            instance.close();
        }
    }
    console.log(onEscapePress);
}
console.log(galleryItems);
