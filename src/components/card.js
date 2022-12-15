import { elements, bigImage, popupImage, popupCaption } from "./data.js";
import { openPopup } from "./utils.js";

function createCard(item) {
  const elementTemplate = document.querySelector('#element').content.querySelector('.element');
  const newElement = elementTemplate.cloneNode(true);
  const trashBtn = newElement.querySelector('.element__trash-btn');
  const likeBtn =  newElement.querySelector('.element__like-btn');
  const image = newElement.querySelector('.element__image');

  image.src = item.link;
  image.alt = item.name;
  newElement.querySelector('.element__title').textContent = item.name;

  trashBtn.addEventListener('click', () => {
    trashBtn.closest('.element').remove();
    fetch(`https://nomoreparties.co/v1/wbf-cohort-3/cards/${item['_id']}`, {
      method: 'DELETE',
      headers: {
        authorization: '760e0d80-494a-4d91-971a-4eb297900ae7'
      }
    });
  });

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('element__like-btn_active');
    if(likeBtn.classList.contains('element__like-btn_active')) {
      fetch(`https://nomoreparties.co/v1/wbf-cohort-3/cards/likes/${item['_id']}`, {
        method: 'PUT',
        headers: {
          authorization: '760e0d80-494a-4d91-971a-4eb297900ae7'
        }
      })
    } else {
      fetch(`https://nomoreparties.co/v1/wbf-cohort-3/cards/likes/${item['_id']}`, {
        method: 'DELETE',
        headers: {
          authorization: '760e0d80-494a-4d91-971a-4eb297900ae7'
        }
      })
    }
  })

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
  container.append(card);
}

function addNewCard(item, container) {
  const card = createCard(item);
  container.prepend(card);
}

function addStrangeCard(item, container) {
  const card = createCard(item);
  container.append(card);
  const trashBtn = card.querySelector('.element__trash-btn');
  trashBtn.remove();
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
    items.forEach(item => {

      if (item['owner']['_id'] === "135e568bbf5b7f0594e3ab64") {
        addCard(item, elements);
      } else {
        addStrangeCard(item, elements);
      }
    })
  })
  .catch(err => console.log(err));

export { addNewCard };

