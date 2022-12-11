import {
    authorAdd, sublineAdd, elements, popupAdd, formAddCard, btnSaveAdd, popupList, popupEdit, authorEdit,
    sublineEdit, authorField, sublineField
} from "./data.js";
import { setButtonDesable } from "./validate.js";
import { closePopup} from "./utils.js";
import { addCard } from "./card.js";

function formAddCardCallback(evt) {
    evt.preventDefault();
    const newCard = {};
    newCard.name = authorAdd.value;
    newCard.link = sublineAdd.value;
    addCard(newCard, elements);

    closePopup(popupAdd);

    formAddCard.reset();
    setButtonDesable(btnSaveAdd, true);
}

function formEditCardCallback(evt) {
    evt.preventDefault();

    authorField.textContent = authorEdit.value;
    sublineField.textContent = sublineEdit.value;

    closePopup(popupEdit);

}

function keyHandler(evt) {
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
export { formAddCardCallback, formEditCardCallback, keyHandler, closePopupByOverlay, closePopupByBtn };
