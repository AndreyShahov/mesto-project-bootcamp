import {
    authorAdd, sublineAdd, elements, popupAdd, formAddCard, btnSaveAdd, popupList, popupEdit, authorEdit,
    sublineEdit, name, about, avatar, formAvatarInput, btnSaveAvatar, popupAvatar, formAvatar, btnSaveEdit, btnEdit
} from "./data.js";
import { setButtonDesable } from "./validate.js";
import { closePopup } from "./utils.js";
import { addNewCard } from "./card.js";

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = {};
    const nameCardValue = authorAdd.value;
    const linkCardValue = sublineAdd.value;
    newCard.name = nameCardValue;
    newCard.link = linkCardValue;
    addNewCard(newCard, elements);

    renderLoading(true, btnSaveAdd);
    fetch('https://nomoreparties.co/v1/wbf-cohort-3/cards', {
        method: 'POST',
        headers: {
            authorization: '760e0d80-494a-4d91-971a-4eb297900ae7',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': nameCardValue,
            'link': linkCardValue
        })
    })
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
    fetch('https://nomoreparties.co/v1/wbf-cohort-3/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '760e0d80-494a-4d91-971a-4eb297900ae7',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': nameValue,
            'about': aboutValue
        })
    })
    .finally(() => renderLoading(false, btnSaveEdit));

    closePopup(popupEdit);
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const fieldAvatarValue = formAvatarInput.value;
  avatar.src = fieldAvatarValue;

  renderLoading(true, btnSaveAvatar);
  fetch('https://nomoreparties.co/v1/wbf-cohort-3/users/me/avatar', {
        method: 'PATCH',
        headers: {
            authorization: '760e0d80-494a-4d91-971a-4eb297900ae7',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'avatar': fieldAvatarValue,
        })
    })
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


