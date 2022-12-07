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
const bigImage = document.querySelector('.popup__bigImage');
const formEditCard = document.forms.edit;
const formAddCard = document.forms.add;
const authorEdit = formEditCard.elements.userName;
const sublineEdit = formEditCard.elements.about;
const authorAdd = formAddCard.elements.cardName;
const sublineAdd = formAddCard.elements.link;

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
btnEdit.addEventListener('click', () => openPopup(popupEdit));
btnAdd.addEventListener('click', () => openPopup(popupAdd));

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function formAddCardCallback(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = authorAdd.value;
  newCard.link = sublineAdd.value;
  addCard(newCard, elements);

  closePopup(popupAdd);

  formAddCard.reset();
}

btnCloseEdit.addEventListener('click', () => closePopup(popupEdit));

btnCloseAdd.addEventListener('click', () => closePopup(popupAdd));

btnCloseImage.addEventListener('click', () => closePopup(popupImage));

formEditCard.addEventListener('submit', formEditCardCallback);
formAddCard.addEventListener('submit', formAddCardCallback);

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

initialCards.forEach((item) => {
  addCard(item, elements);
});

function formEditCardCallback(evt) {
  evt.preventDefault();
  
  authorField.textContent = authorEdit.value;
  sublineField.textContent = sublineEdit.value;
  
  closePopup(popupEdit);

}

const errorMessages = {
  'empty': 'Вы пропустили это поле.',
  'wrongLength': 'Должно быть от 2 до 30 символов.',
  'wrongUrl': 'Введите адрес сайта.'
}


 function isValid(input) {
  input.setCustomValidity('');

  if (input.validity.valueMissing) {
    input.setCustomValidity(errorMessages.empty);
    
    return false;
  }

  if (input.validity.tooShort || input.validity.tooLong) {
    input.setCustomValidity(errorMessages.wrongLength);
    
    return false;
  }

  if (input.validity.typeMismatch && input.type === 'url') {
    input.setCustomValidity(errorMessages.wrongUrl);
    
    return false;
  }

  input.reportValidity();
 }
 
 
 function isInputValid(input) {
  const currentSpan = input.parentNode.querySelector(`#${input.id}-error`);
  isValid(input);

  currentSpan.textContent = input.validationMessage;
 }  

function sestButtonDesable(button, state) {
  if (state) {
    button.removeAttribute('disabled');
    button.classList.remove('popup__save-btn_disabled');
  } else {
    button.setAttribute('disabled', true);
    button.classList.add('popup__save-btn_disabled');
  }
}

 function handleInputForm(evt) {
  const currentForm = evt.currentTarget;
  const submitButton = currentForm.querySelector('.popup__save-btn');

  if (currentForm.checkValidity()) {
  sestButtonDesable(submitButton, true); 
} else {
  sestButtonDesable(submitButton, false);
}

  isInputValid(evt.target);
 }


 formEditCard.addEventListener('input', handleInputForm);

 formAddCard.addEventListener('input', handleInputForm);

 const hasInvalidInput = (evt, inputList) => {
  const currentForm = evt.CurrentTarget;
  inputList = Array.from(currentForm.querySelectorAll('popup__input'));
  return inputList.some((inputElement) => {
    
    return !inputElement.validity.valid;
  });
 }

 const toggleButtonState = (inputList, button) => {

  if (hasInvalidInput(inputList)) {

  } else {

  }
 }