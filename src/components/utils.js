import { keyHandler } from "./modal.js";

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandler);
}

export { openPopup, closePopup };
