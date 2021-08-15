import { exportedImages } from "./app.js"

const galleryEl = document.querySelector('.gallery')
const ligthboxEl = document.querySelector('.lightbox')
const closeBtnEl = document.querySelector('[data-action="close-lightbox"]')
const ligthboxImageEl = document.querySelector('.lightbox__image')
const ligthBoxOverlayEl = document.querySelector('.lightbox__overlay')

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

function toOpenModal(event) {
    event.preventDefault()
    if (!event.target.classList.contains('gallery__image')) {
        return
    }

    ligthboxEl.classList.add('is-open')
    ligthboxImageEl.src = event.target.dataset.source
    document.addEventListener('keydown', onPressButton)
    ligthBoxOverlayEl.addEventListener('click', toCloseModal)
    closeBtnEl.addEventListener('click', toCloseModal)

}

function toCloseModal(event) {
    document.removeEventListener('keydown', onPressButton)
    ligthboxEl.classList.remove('is-open')
    ligthboxImageEl.src = ""
}

function onPressButton(event) {
    if (event.code === 'Escape') {
        toCloseModal()
    } else
        if (event.code === 'ArrowLeft') {
            onLeftArrowPressed()
        }
        else
            if (event.code === 'ArrowRight') {
                onRightLeftPressed()
            }
}

function onLeftArrowPressed(event) {
    const currentImage = document.querySelector('img[src="' + ligthboxImageEl.src + '"')

}

function onRightLeftPressed(event) {
    const currentImage = document.querySelector('img[src="' + ligthboxImageEl.src + '"')
}