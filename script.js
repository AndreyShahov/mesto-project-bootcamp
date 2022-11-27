const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add-card');
const editCloseBtn = popupEdit.querySelector('.popup__close-btn');
const addCloseBtn = popupAdd.querySelector('.popup__close-btn');
const authorInput = document.querySelector('.popup__text_field_author');
const sublineInput = document.querySelector('.popup__text_field_author-subline');
const authorField = document.querySelector('.profile__author');
const sublineField = document.querySelector('.profile__author-subline');
const editSaveBtn = popupEdit.querySelector('.popup__save-btn');
const addSaveBtn = popupAdd.querySelector('.popup__save-btn');
const elements = document.querySelector('.elements');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

editBtn.addEventListener('click', () => openPopup(popupEdit));
addBtn.addEventListener('click', () => openPopup(popupAdd));

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

editCloseBtn.addEventListener('click', () => closePopup(popupEdit));
addCloseBtn.addEventListener('click', () => closePopup(popupAdd));

function createCard() {
  // const elementTemplate = document.querySelector('#element').content;
  let newElement = element.content.cloneNode(true);

  newElement.querySelector('element__image').setAttribute('src', 'https://images.unsplash.com/photo-1669492223198-0664d4c9d2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80')
  newElement.querySelector('element__title').textContent = authorInput.value;
  elements.prepend(newElement);

  popupAdd.classList.remove('popup_opened');
}

addSaveBtn.addEventListener('click', createCard);


function handleFormSubmit() {
  const authorValue = authorInput.value;
  const sublineValue = sublineInput.value;

  authorField.textContent = authorValue;
  sublineField.textContent = sublineValue;

  popupEdit.classList.remove('popup_opened')
}

editSaveBtn.addEventListener('click', handleFormSubmit);

// addBtn.addEventListener('click', () => {
//   const popupCopy = popup.cloneNode(true);

//   popupCopy.classList.add('popup_opened');

//   const popupHeading = querySelector('.popup__heading');
//   popupHeading.textContent = 'Новое место';
// });

