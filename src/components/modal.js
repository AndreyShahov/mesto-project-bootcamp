import {
    authorAdd, sublineAdd, elements, popupAdd, formAddCard, btnSaveAdd, popupList, popupEdit, authorEdit,
    sublineEdit, name, about
} from "./data.js";
import { setButtonDesable } from "./validate.js";
import { closePopup } from "./utils.js";
import { addCard } from "./card.js";

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = {};
    newCard.name = authorAdd.value;
    newCard.link = sublineAdd.value;
    addCard(newCard, elements);

    closePopup(popupAdd);

    formAddCard.reset();
    setButtonDesable(btnSaveAdd, true);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const nameValue = authorEdit.value;
    const aboutValue = sublineEdit.value;

   name.textContent = nameValue;
   about.textContent = aboutValue;

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
    });

    closePopup(popupEdit);
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
export { handleAddCardFormSubmit, handleProfileFormSubmit, handleEscape, closePopupByOverlay, closePopupByBtn };
