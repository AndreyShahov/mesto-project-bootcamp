const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close-btn')



editBtn.addEventListener('click', () => popup.classList.add('popup_opened'));
closeBtn.addEventListener('click', () => popup.classList.remove('popup_opened'));
