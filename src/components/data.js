const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const popupAdd = document.querySelector('.popup_type_add-card');
const authorField = document.querySelector('.profile__author');
const sublineField = document.querySelector('.profile__author-subline');
const elements = document.querySelector('.elements');
const bigImage = document.querySelector('.popup__bigImage');
const formEditCard = document.forms.edit;
const formAddCard = document.forms.add;
const authorEdit = formEditCard.elements.userName;
const sublineEdit = formEditCard.elements.about;
const authorAdd = formAddCard.elements.cardName;
const sublineAdd = formAddCard.elements.link;
const popupList = Array.from(document.querySelectorAll('.popup'));
const btnSaveAdd = popupAdd.querySelector('.popup__save-btn');

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

export {btnEdit, btnAdd, popupEdit, popupImage, popupAdd, authorField, sublineField, elements, bigImage, formEditCard,
  formAddCard, authorEdit, sublineEdit, authorAdd, sublineAdd, popupList, btnSaveAdd, initialCards};
