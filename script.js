const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close-btn')
const authorInput = document.querySelector('.popup__text_field_author');
const sublineInput = document.querySelector('.popup__text_field_author-subline');
const authorField = document.querySelector('.profile__author');
const sublineField = document.querySelector('.profile__author-subline');
const saveBtn = document.querySelector('.popup__save-btn');


editBtn.addEventListener('click', () => {
  popup.classList.add('popup_opened');

  authorInput.value = authorField.textContent;
  sublineInput.value = sublineField.textContent;
});

closeBtn.addEventListener('click', () => popup.classList.remove('popup_opened'));

 function handleFormSubmit() {
  const authorValue = authorInput.value;
  const sublineValue = sublineInput.value;

  authorField.textContent = authorValue;
  sublineField.textContent = sublineValue;

  popup.classList.remove('popup_opened')
}

saveBtn.addEventListener('click', handleFormSubmit);
