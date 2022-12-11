import './index.css';
import { btnEdit, btnAdd, popupEdit, popupAdd, elements, formEditCard, formAddCard } from './components/data.js';
import {
  formAddCardCallback, formEditCardCallback, keyHandler, closePopupByOverlay, closePopupByBtn
} from './components/modal.js';
import { openPopup } from './components/utils.js';

btnEdit.addEventListener('click', () => openPopup(popupEdit));
btnAdd.addEventListener('click', () => openPopup(popupAdd));

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

closePopupByOverlay();
closePopupByBtn();



