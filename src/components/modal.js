import {
  authorAdd, sublineAdd, elements, popupAdd, formAddCard, btnSaveAdd, popupList, popupEdit,
  authorEdit, sublineEdit, name, status, avatar, formAvatarInput, btnSaveAvatar, popupAvatar,
  formAvatar, btnSaveEdit, popupImage, settings, config
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
  postNewCard(nameCardValue, linkCardValue, config)
    .then(item => {
      addNewCard(item, elements);
    })
    .finally(() => renderLoading(false, btnSaveAdd))
    .catch(err => console.log(err));

  closePopup(popupAdd);
  formAddCard.reset();
  setButtonDesable(btnSaveAdd, true, settings);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = authorEdit.value;
  const aboutValue = sublineEdit.value;

  name.textContent = nameValue;
  status.textContent = aboutValue

  renderLoading(true, btnSaveEdit);
  updateUser(nameValue, aboutValue, config)
    .finally(() => renderLoading(false, btnSaveEdit))
    .catch(err => console.log(err));

  closePopup(popupEdit);
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const fieldAvatarValue = formAvatarInput.value;
  avatar.src = fieldAvatarValue;

  renderLoading(true, btnSaveAvatar);
  updateAvatar(fieldAvatarValue, config)
    .finally(() => renderLoading(false, btnSaveAvatar))
    .catch(err => console.log(err));

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

function OpenImagePopup(imageBig, popupCaption, item) {
  imageBig.src = item.link;
  imageBig.alt = item.name;
  popupCaption.textContent = item.name;
  openPopup(popupImage);
}

export {
  handleAddCardFormSubmit, handleProfileFormSubmit, handleEscape, closePopupByOverlay,
  closePopupByBtn, handleAvatarFormSubmit, OpenImagePopup
};


