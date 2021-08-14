import { exportedImages } from "./app.js"

const galleryEl = document.querySelector('.gallery')
const ligthboxEl = document.querySelector('.lightbox')
const closeBtnEl = document.querySelector('[data-action="close-lightbox"]')
const ligthboxImageEl = document.querySelector('.lightbox__image')

function createElements(exportedImages) {
    return exportedImages.map(({ preview, original, description }) => {
        return `
                <li class="gallery__item">
        <a
            class="gallery__link"
            href=""
        >
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>`
    })
    .join (' ')
}

galleryEl.innerHTML = createElements(exportedImages)

galleryEl.addEventListener('click', toOpenModal)
closeBtnEl.addEventListener('click', toCloseModal)

function toOpenModal(event) {
    event.preventDefault()
    if (!event.target.classList.contains('gallery__image')) {
        return
    }

    ligthboxEl.classList.add('is-open')
    ligthboxImageEl.src = event.target.dataset.source
}

function toCloseModal(event) {
    ligthboxEl.classList.remove('is-open')
    ligthboxImageEl.src = "fui"
    console.dir(ligthboxImageEl)
}

console.log(KeyboardEvent.key)