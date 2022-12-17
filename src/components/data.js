const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const btnAvatar = document.querySelector('.profile__overlay');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const popupAdd = document.querySelector('.popup_type_add-card');
const popupAvatar = document.querySelector('.popup_type_change-avatar');
const elements = document.querySelector('.elements');
const imageBig = document.querySelector('.popup__bigImage');
const popupCaption = document.querySelector('.popup__caption');
const formEditCard = document.forms.edit;
const formAddCard = document.forms.add;
const formAvatar = document.forms.avatar;
const authorEdit = formEditCard.elements.userName;
const sublineEdit = formEditCard.elements.about;
const authorAdd = formAddCard.elements.cardName;
const sublineAdd = formAddCard.elements.link;
const formAvatarInput = formAvatar.elements.link;
const popupList = Array.from(document.querySelectorAll('.popup'));
const btnSaveEdit = popupEdit.querySelector('.popup__save-btn');
const btnSaveAdd = popupAdd.querySelector('.popup__save-btn');
const btnSaveAvatar = popupAvatar.querySelector('.popup__save-btn');
const name = document.querySelector('.profile__author');
const status = document.querySelector('.profile__author-subline');
const avatar = document.querySelector('.profile__avatar');

const errorMessages = {
  'empty': 'Вы пропустили это поле.',
  'wrongLength': 'Должно быть от 2 до 30 символов.',
  'wrongUrl': 'Введите адрес.'
}

const settings = {
  btnStateDisabled: 'popup__save-btn_disabled',
  input: '.popup__input',
  saveBtn: '.popup__save-btn'
  };

export {
  btnEdit, btnAdd, popupEdit, popupImage, popupAdd, elements, imageBig, formEditCard,
  formAddCard, authorEdit, sublineEdit, authorAdd, sublineAdd, popupList, btnSaveAdd, errorMessages,
  popupCaption, name, status, avatar, btnAvatar, popupAvatar, formAvatarInput, btnSaveAvatar,
  formAvatar, btnSaveEdit, settings
};
