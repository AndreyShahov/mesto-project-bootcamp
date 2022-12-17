import {
  authorAdd, sublineAdd, elements, popupAdd, formAddCard, btnSaveAdd, popupList, popupEdit,
  authorEdit, sublineEdit, name, about, avatar, formAvatarInput, btnSaveAvatar, popupAvatar,
  formAvatar, btnSaveEdit, popupImage, settings
} from "./data.js";
import { setButtonDesable } from "./validate.js";
import { openPopup, closePopup } from "./utils.js";
import { addNewCard } from "./card.js";
import { postNewCard, updateAvatar, updateUser } from "./api.js";

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const nameCardValue = authorAdd.value;
  const linkCardValue = sublineAdd.value;

  renderLoading(true, btnSaveAdd);
  postNewCard(nameCardValue, linkCardValue)
    .then(item => {
      addNewCard(item, elements);
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, btnSaveAdd));

  closePopup(popupAdd);
  formAddCard.reset();
  setButtonDesable(btnSaveAdd, true, settings);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = authorEdit.value;
  const aboutValue = sublineEdit.value;

  name.textContent = nameValue;
  about.textContent = aboutValue

  renderLoading(true, btnSaveEdit);
  updateUser(nameValue, aboutValue)
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, btnSaveEdit));

  closePopup(popupEdit);
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const fieldAvatarValue = formAvatarInput.value;
  avatar.src = fieldAvatarValue;

  renderLoading(true, btnSaveAvatar);
  updateAvatar(fieldAvatarValue)
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, btnSaveAvatar));

  closePopup(popupAvatar);
  formAvatar.reset();
  setButtonDesable(btnSaveAvatar, true, settings);
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

function OpenImagePopup(bigImage, popupCaption, item) {
  bigImage.src = item.link;
  bigImage.alt = item.name;
  popupCaption.textContent = item.name;
  openPopup(popupImage);
}

export {
  handleAddCardFormSubmit, handleProfileFormSubmit, handleEscape, closePopupByOverlay,
  closePopupByBtn, handleAvatarFormSubmit, OpenImagePopup
};


