const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const popupAdd = document.querySelector('.popup_type_add-card');
const btnCloseEdit = popupEdit.querySelector('.popup__close-btn');
const btnCloseAdd = popupAdd.querySelector('.popup__close-btn');
const btnSaveEdit = popupEdit.querySelector('.popup__save-btn');
const btnSaveAdd = popupAdd.querySelector('.popup__save-btn');
const btnCloseImage = popupImage.querySelector('.popup__close-btn');
const authorField = document.querySelector('.profile__author');
const sublineField = document.querySelector('.profile__author-subline');
const elements = document.querySelector('.elements');
const formEdit = document.forms.edit;
const formAdd = document.forms.add;
const authorEdit = formEdit.elements.author;
const sublineEdit = formEdit.elements.subline;
const authorAdd = formAdd.elements.author;
const sublineAdd = formAdd.elements.subline;

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

function createCard(item) {
  const elementTemplate = document.querySelector('#element').content.querySelector('.element');
  const newElement = elementTemplate.cloneNode(true);
  const image = newElement.querySelector('.element__image');

  image.src = item.link;
  image.alt = item.name;
  newElement.querySelector('.element__title').textContent = item.name;

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

function formEditCallback(evt) {
  evt.preventDefault();
  setSubmitButtonState(false);

  authorField.textContent = authorEdit.value;
  sublineField.textContent = sublineEdit.value;

  popupEdit.classList.remove('popup_opened');
}

formEdit.addEventListener('submit', formEditCallback);

function formAddCallback(evt) {
  evt.preventDefault();
  setSubmitButtonState(false);
  const newCard = {};
  newCard.name = authorAdd.value;
  newCard.link = sublineAdd.value;
  addCard(newCard, elements);

  popupAdd.classList.remove('popup_opened');
  formAdd.reset();
}

formAdd.addEventListener('submit', formAddCallback);

elements.addEventListener('click', (evt) => {

  if (evt.target.classList.contains('element__like-btn')) {
    evt.target.classList.toggle('element__like-btn_active');
  }
});

elements.addEventListener('click', (evt) => {

  if (evt.target.classList.contains('element__trash-btn')) {
    evt.target.parentElement.parentElement.remove();
  }
});

function setSubmitButtonState(isFormValid, button) {

  if (isFormValid) {
    button.removeAttribute('disabled');
    button.classList.remove('popup__save-btn_disabled');
  } else {
    button.setAttribute('disabled', true);
    button.classList.add('popup__save-btn_disabled');
  }
}

function isValid(form, button) {
  const isValid = form.elements.author.value.length > 0 && form.elements.subline.value.length > 0;
  setSubmitButtonState(isValid, button);
}

formEdit.addEventListener('input', () => isValid(formEdit, btnSaveEdit));
formAdd.addEventListener('input', () => isValid(formAdd, btnSaveAdd));
