import { initialCards,elements, bigImage, popupImage } from "./data.js";
import { openPopup } from "./utils.js";

function createCard(item) {
    const elementTemplate = document.querySelector('#element').content.querySelector('.element');
    const newElement = elementTemplate.cloneNode(true);
    const image = newElement.querySelector('.element__image');

    image.src = item.link;
    image.alt = item.name;
    newElement.querySelector('.element__title').textContent = item.name;

    image.addEventListener('click', () => {
        bigImage.src = item.link;
        bigImage.alt = item.name;
        document.querySelector('.popup__caption').textContent = item.name;
        openPopup(popupImage);
    });

    return newElement;
}

function addCard(item, container) {
    const card = createCard(item);
    container.prepend(card);
}

initialCards.forEach((item) => {
    addCard(item, elements);
});

export { addCard };
