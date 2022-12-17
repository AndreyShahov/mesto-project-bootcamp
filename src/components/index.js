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

btnEdit.addEventListener('click', () => openPopup(popupEdit));
btnAdd.addEventListener('click', () => openPopup(popupAdd));
btnAvatar.addEventListener('click', () => openPopup(popupAvatar));

formEditCard.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handleAddCardFormSubmit);
formAvatar.addEventListener('submit', handleAvatarFormSubmit);

closePopupByOverlay();
closePopupByBtn();

enableValidation(settings);

updateProfileInfo(config)
  .then(data => {
    name.textContent = data.name;
    authorEdit.value = data.name;

    status.textContent = data.about;
    sublineEdit.value = data.about;

    avatar.src = data.avatar;
  })
  .catch(err => console.log(err));

getInitialCards(config)
  .then(items => {
    items.forEach(item => {

      if (item['owner']['_id'] === "135e568bbf5b7f0594e3ab64") {
        addCard(item, elements);
      } else {
        addStrangeCard(item, elements);
      }
    })
  })
  .catch(err => console.log(err));




