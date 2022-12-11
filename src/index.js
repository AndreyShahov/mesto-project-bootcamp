import './index.css';
import {btnEdit, btnAdd, popupEdit, popupImage, popupAdd, authorField, sublineField, elements, bigImage, formEditCard,
  formAddCard, authorEdit, sublineEdit, authorAdd, sublineAdd, popupList, btnSaveAdd, initialCards} from './components/data.js';
import {addCard} from './components/card.js';
import {closePopup, formAddCardCallback} from './components/modal.js';


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

btnEdit.addEventListener('click', () => openPopup(popupEdit));
btnAdd.addEventListener('click', () => openPopup(popupAdd));






function keyHandler(evt) {
  if (evt.key === 'Escape') {
   popupList.forEach((popup) => {
    closePopup(popup);
   });
  }
}

document.addEventListener('keydown', keyHandler);

function closePopupByOverlay() {
  popupList.forEach((popup) => {
    popup.querySelector('.popup__overlay').addEventListener('click', () => closePopup(popup));
  });
}

closePopupByOverlay();

function closePopupByBtn() {
  popupList.forEach((popup) => {
    popup.querySelector('.popup__close-btn').addEventListener('click', () => closePopup(popup));
  });
}

closePopupByBtn();

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

  if (!isValid(input)) {
    currentSpan.textContent = input.validationMessage;
  }
 }

function setButtonDesable(button, state) {
  if (state) {
    button.setAttribute('disabled', true);
    button.classList.add('popup__save-btn_disabled');
  } else {
    button.removeAttribute('disabled');
    button.classList.remove('popup__save-btn_disabled');
  }
}

const hasInvalidInput = (inputList) => {
  return  inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    setButtonDesable(buttonElement, true);
  } else {
    setButtonDesable(buttonElement, false);
  }
}

function setEventListeners(formElement){
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-btn');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isInputValid(inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

Array.from(document.forms).forEach(form => setEventListeners(form));


export {setButtonDesable};


