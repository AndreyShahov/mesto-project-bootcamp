import {
  authorAdd, sublineAdd, elements, popupAdd, formAddCard, btnSaveAdd, popupList, popupEdit, authorEdit,
  sublineEdit, name, about, avatar, formAvatarInput, btnSaveAvatar, popupAvatar, formAvatar, btnSaveEdit, btnEdit
} from "./data.js";
import { setButtonDesable } from "./validate.js";
import { closePopup } from "./utils.js";
import { addNewCard } from "./card.js";
import { postNewCard, updateAvatar, updateUser } from "./api.js";

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {};
  const nameCardValue = authorAdd.value;
  const linkCardValue = sublineAdd.value;
  newCard.name = nameCardValue;
  newCard.link = linkCardValue;
  addNewCard(newCard, elements);

  renderLoading(true, btnSaveAdd);
  postNewCard(nameCardValue, linkCardValue)
    .finally(() => renderLoading(false, btnSaveAdd));

  closePopup(popupAdd);
  formAddCard.reset();
  setButtonDesable(btnSaveAdd, true);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = authorEdit.value;
  const aboutValue = sublineEdit.value;

  name.textContent = nameValue;
  about.textContent = aboutValue

  renderLoading(true, btnSaveEdit);
  updateUser(nameValue, aboutValue)
    .finally(() => renderLoading(false, btnSaveEdit));

  closePopup(popupEdit);
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const fieldAvatarValue = formAvatarInput.value;
  avatar.src = fieldAvatarValue;

  renderLoading(true, btnSaveAvatar);
  updateAvatar(fieldAvatarValue)
    .finally(() => renderLoading(false, btnSaveAvatar));

  closePopup(popupAvatar);
  formAvatar.reset();
  setButtonDesable(btnSaveAvatar, true);
}

function handleEscape(evt) {
  if (evt.key === 'Escape') {
    popupList.forEach((popup) => {
      closePopup(popup);
    });
  }
}

function closePopupByOverlay() {
  popupList.forEach((popup) => {
    popup.querySelector('.popup__overlay').addEventListener('click', () => closePopup(popup));
  });
}

function closePopupByBtn() {
  popupList.forEach((popup) => {
    popup.querySelector('.popup__close-btn').addEventListener('click', () => closePopup(popup));
  });
}

function renderLoading(isLoading, btn) {

  if (isLoading) {
    btn.textContent = 'Сохранение...';
  } else {
    btn.textContent = 'Сохранение';
  }
}

export {
  handleAddCardFormSubmit, handleProfileFormSubmit, handleEscape, closePopupByOverlay,
  closePopupByBtn, handleAvatarFormSubmit
};


