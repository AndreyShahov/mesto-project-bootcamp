import { authorAdd, sublineAdd, elements, popupAdd, formAddCard, btnSaveAdd } from "./data.js";
import { setButtonDesable } from "../index.js";
import { addCard } from "./card.js";

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
    setButtonDesable(btnSaveAdd, true);
  }

export {closePopup, formAddCardCallback};
