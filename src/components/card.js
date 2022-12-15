import { elements, bigImage, popupImage, popupCaption } from "./data.js";
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
        popupCaption.textContent = item.name;
        openPopup(popupImage);
    });

    return newElement;
}

function addCard(item, container) {
    const card = createCard(item);
    container.prepend(card);
}

fetch('https://nomoreparties.co/v1/wbf-cohort-3/cards', {
  headers: {
    authorization: '760e0d80-494a-4d91-971a-4eb297900ae7'
  }
})
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promiise.reject(`Что-то не так: ${res.status}`);
    }
  })
  .then(items => {
    items.forEach(item => addCard(item, elements))
  })
  .catch(err => console.log(err));

export { addCard };

