import './index.css';
import {
  btnEdit, btnAdd, popupEdit, popupAdd, formEditCard, formAddCard, authorEdit,
  sublineEdit, name, about, avatar, btnAvatar, popupAvatar, formAvatar, elements
} from './components/data.js';
import {
  handleAddCardFormSubmit, handleProfileFormSubmit, closePopupByOverlay, closePopupByBtn,
  handleAvatarFormSubmit
} from './components/modal.js';
import { openPopup } from './components/utils.js';
import { getInitialCards, updateProfileInfo } from './components/api';
import { addCard, addStrangeCard } from './components/card';

btnEdit.addEventListener('click', () => openPopup(popupEdit));
btnAdd.addEventListener('click', () => openPopup(popupAdd));
btnAvatar.addEventListener('click', () => openPopup(popupAvatar));

formEditCard.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handleAddCardFormSubmit);
formAvatar.addEventListener('submit', handleAvatarFormSubmit);

closePopupByOverlay();
closePopupByBtn();

updateProfileInfo()
  .then(data => {
    name.textContent = data.name;
    authorEdit.value = data.name;

    about.textContent = data.about;
    sublineEdit.value = data.about;

    avatar.src = data.avatar;
  })
  .catch(err => console.log(err));

getInitialCards()
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




