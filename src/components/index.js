import '../index.css';
import {
  btnEdit, btnAdd, popupEdit, popupAdd, formEditCard, formAddCard, authorEdit,
  sublineEdit, name, status, avatar, btnAvatar, popupAvatar, formAvatar, elements,
  settings, config
} from './data.js';
import {
  handleAddCardFormSubmit, handleProfileFormSubmit, closePopupByOverlay, closePopupByBtn,
  handleAvatarFormSubmit
} from './modal.js';
import { openPopup } from './utils.js';
import { getInitialCards, updateProfileInfo } from './api.js';
import { addCard, addStrangeCard } from './card.js';
import { enableValidation } from './validate.js';

export let userId;

btnEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  authorEdit.value = name.textContent;
  sublineEdit.value = name.textContent;
});
btnAdd.addEventListener('click', () => openPopup(popupAdd));
btnAvatar.addEventListener('click', () => openPopup(popupAvatar));

formEditCard.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handleAddCardFormSubmit);
formAvatar.addEventListener('submit', handleAvatarFormSubmit);

closePopupByOverlay();
closePopupByBtn();

enableValidation(settings);

Promise.all([updateProfileInfo(config), getInitialCards(config)])
  .then(([data, items]) => {
    name.textContent = data.name;
    authorEdit.value = data.name;

    status.textContent = data.about;
    sublineEdit.value = data.about;

    avatar.src = data.avatar;

    userId = data['_id'];

    items.forEach(item => {

      if (item['owner']['_id'] === userId) {
        addCard(item, elements);
      } else {
        addStrangeCard(item, elements);
      }
    })
  })
  .catch(err => console.log(err));

