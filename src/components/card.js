import { imageBig, popupCaption } from "./data.js";
import { deleteCard, addLike, deleteLike } from "./api.js";
import { OpenImagePopup } from "./modal.js";

function createCard(item) {
  const elementTemplate = document.querySelector('#element').content.querySelector('.element');
  const elementNew = elementTemplate.cloneNode(true);
  const trashBtn = elementNew.querySelector('.element__trash-btn');
  const likeBtn = elementNew.querySelector('.element__like-btn');
  const image = elementNew.querySelector('.element__image');
  const counterLikes = elementNew.querySelector('.element__likes-counter');

  image.src = item.link;
  image.alt = item.name;
  elementNew.querySelector('.element__title').textContent = item.name;

  trashBtn.addEventListener('click', () => {
    trashBtn.closest('.element').remove();
    deleteCard(item)
  });

  if (item['likes'].find(item => item['_id'] === "135e568bbf5b7f0594e3ab64")) {
    likeBtn.classList.add('element__like-btn_active');
  }

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('element__like-btn_active');

    if (likeBtn.classList.contains('element__like-btn_active')) {
      addLike(item)
        .then((item) => {
          counterLikes.textContent = item.likes.length;
        })
        .catch(err => console.log(err));
    } else {
      deleteLike(item)
        .then((item) => {
          counterLikes.textContent = item.likes.length;
        })
        .catch(err => console.log(err));
    }
  });

  counterLikes.textContent = item.likes.length;

  image.addEventListener('click', () => OpenImagePopup(imageBig, popupCaption, item));

  return elementNew;
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

export { addCard, addNewCard, addStrangeCard };






