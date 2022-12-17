import { imageBig, popupCaption, config, elementTemplate } from "./data.js";
import { deleteCard, addLike, deleteLike } from "./api.js";
import { openImagePopup } from "./modal.js";
import { userId } from "./index.js";

function createCard(item) {
  const elementNew = elementTemplate.cloneNode(true);
  const trashBtn = elementNew.querySelector('.element__trash-btn');
  const likeBtn = elementNew.querySelector('.element__like-btn');
  const image = elementNew.querySelector('.element__image');
  const counterLikes = elementNew.querySelector('.element__likes-counter');

  image.src = item.link;
  image.alt = item.name;
  elementNew.querySelector('.element__title').textContent = item.name;

  trashBtn.addEventListener('click', () => {
    deleteCard(item, config)
    .then(() => {
      trashBtn.closest('.element').remove();
    })
    .catch(err => console.log(err));
  });

  if (item['likes'].find(item => item['_id'] === userId)) {
    likeBtn.classList.add('element__like-btn_active');
  }

  likeBtn.addEventListener('click', () => {


    if (!likeBtn.classList.contains('element__like-btn_active')) {
      addLike(item, config)
        .then((item) => {
          counterLikes.textContent = item.likes.length;
          likeBtn.classList.toggle('element__like-btn_active');
        })
        .catch(err => console.log(err));
    } else {
      deleteLike(item, config)
        .then((item) => {
          counterLikes.textContent = item.likes.length;
          likeBtn.classList.toggle('element__like-btn_active');
        })
        .catch(err => console.log(err));
    }
  });

  counterLikes.textContent = item.likes.length;

  image.addEventListener('click', () => openImagePopup(imageBig, popupCaption, item));

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






