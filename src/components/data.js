const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const popupAdd = document.querySelector('.popup_type_add-card');
const elements = document.querySelector('.elements');
const bigImage = document.querySelector('.popup__bigImage');
const popupCaption = document.querySelector('.popup__caption');
const formEditCard = document.forms.edit;
const formAddCard = document.forms.add;
const authorEdit = formEditCard.elements.userName;
const sublineEdit = formEditCard.elements.about;
const authorAdd = formAddCard.elements.cardName;
const sublineAdd = formAddCard.elements.link;
const popupList = Array.from(document.querySelectorAll('.popup'));
const btnSaveAdd = popupAdd.querySelector('.popup__save-btn');
const name = document.querySelector('.profile__author');
const about = document.querySelector('.profile__author-subline');
const avatar = document.querySelector('.profile__avatar');

const errorMessages = {
    'empty': 'Вы пропустили это поле.',
    'wrongLength': 'Должно быть от 2 до 30 символов.',
    'wrongUrl': 'Введите адрес сайта.'
}

export {
    btnEdit, btnAdd, popupEdit, popupImage, popupAdd, elements, bigImage, formEditCard,
    formAddCard, authorEdit, sublineEdit, authorAdd, sublineAdd, popupList, btnSaveAdd, errorMessages,
    popupCaption, name, about, avatar
};
