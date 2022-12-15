import './index.css';
import { btnEdit, btnAdd, popupEdit, popupAdd, elements, formEditCard, formAddCard, authorEdit, sublineEdit, name, about, avatar } from './components/data.js';
import {
  handleAddCardFormSubmit, handleProfileFormSubmit, closePopupByOverlay, closePopupByBtn
} from './components/modal.js';
import { openPopup } from './components/utils.js';

btnEdit.addEventListener('click', () => openPopup(popupEdit));
btnAdd.addEventListener('click', () => openPopup(popupAdd));

formEditCard.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handleAddCardFormSubmit);

elements.addEventListener('click', (evt) => {

  if (evt.target.classList.contains('element__like-btn')) {
    evt.target.classList.toggle('element__like-btn_active');
  }
});

elements.addEventListener('click', (evt) => {

  if (evt.target.classList.contains('element__trash-btn')) {
    evt.target.closest('.element').remove();
  }
});

closePopupByOverlay();
closePopupByBtn();

fetch('https://nomoreparties.co/v1/wbf-cohort-3/users/me', {
  headers: {
    authorization: '760e0d80-494a-4d91-971a-4eb297900ae7'
  }
})
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Что-то не так: ${res.status}`);
    }
  })
  .then(data => {
    name.textContent = data.name;
    authorEdit.value = data.name;

    about.textContent = data.about;
    sublineEdit.value = data.about;

    avatar.src = data.avatar;
  })
  .catch(err => console.log(err));





