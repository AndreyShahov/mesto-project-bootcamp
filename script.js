const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const popupAdd = document.querySelector('.popup_type_add-card');
const btnCloseEdit = popupEdit.querySelector('.popup__close-btn');
const btnCloseAdd = popupAdd.querySelector('.popup__close-btn');
const btnCloseImage = popupImage.querySelector('.popup__close-btn');
const authorInputEdit = popupEdit.querySelector('.popup__text_field_author');
const sublineInputEdit = popupEdit.querySelector('.popup__text_field_author-subline');
const authorField = document.querySelector('.profile__author');
const sublineField = document.querySelector('.profile__author-subline');
const btnSaveEdit = popupEdit.querySelector('.popup__save-btn');
const btnSaveAdd = popupAdd.querySelector('.popup__save-btn');
const authorInputAdd = popupAdd.querySelector('.popup__text_field_author');
const sublineInputAdd = popupAdd.querySelector('.popup__text_field_author-subline');
const elements = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


function openPopup(popup) {
  popup.classList.add('popup_opened');
}
 btnEdit.addEventListener('click', () => openPopup(popupEdit));
btnAdd.addEventListener('click', () => openPopup(popupAdd));

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

btnCloseEdit.addEventListener('click', () => closePopup(popupEdit));
btnCloseAdd.addEventListener('click', () => closePopup(popupAdd));
btnCloseImage.addEventListener('click', () => closePopup(popupImage));

function handleFormSubmit(evt) {
  evt.preventDefault();
  const authorValue = authorInputEdit.value;
  const sublineValue = sublineInputEdit.value;

  authorField.textContent = authorValue;
  sublineField.textContent = sublineValue;

  popupEdit.classList.remove('popup_opened')
}

btnSaveEdit.addEventListener('click', handleFormSubmit);

function createCard(item) {
  const elementTemplate = document.querySelector('#element').content.querySelector('.element');
  const newElement = elementTemplate.cloneNode(true);
  const likeBtn =  newElement.querySelector('.element__like-btn');
  const trashBtn = newElement.querySelector('.element__trash-btn');
  const image = newElement.querySelector('.element__image');

  image.src = item.link;
  image.alt = item.name;
  newElement.querySelector('.element__title').textContent = item.name,

 likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('element__like-btn_active');
});

trashBtn.addEventListener('click', () => {
  trashBtn.parentElement.parentElement.remove();
});

image.addEventListener('click', () => {
  openPopup(popupImage);
  const bigImage = document.querySelector('.popup__bigImage');
  bigImage.src = item.link;
  bigImage.alt = item.name;
  document.querySelector('.popup__caption').textContent = item.name;
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

btnSaveAdd.addEventListener('click', (evt) => {
  evt.preventDefault();
  const newCard = {};
  newCard.name = authorInputAdd.value;
  newCard.link = sublineInputAdd.value;
  addCard(newCard, elements);

  popupAdd.classList.remove('popup_opened');
  popupAdd.querySelector('form').reset();
});

