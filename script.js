const popups = document.querySelectorAll('popup');
const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const popupAdd = document.querySelector('.popup_type_add-card');
const editCloseBtn = popupEdit.querySelector('.popup__close-btn');
const addCloseBtn = popupAdd.querySelector('.popup__close-btn');
const imageCloseBtn = popupImage.querySelector('.popup__close-btn');
const editAuthorInput = popupEdit.querySelector('.popup__text_field_author');
const editSublineInput = popupEdit.querySelector('.popup__text_field_author-subline');
const authorField = document.querySelector('.profile__author');
const sublineField = document.querySelector('.profile__author-subline');
const editSaveBtn = popupEdit.querySelector('.popup__save-btn');
const addSaveBtn = popupAdd.querySelector('.popup__save-btn');
const elements = document.querySelector('.elements');
const addAuthorInput = popupAdd.querySelector('.popup__text_field_author');
const addSublineInput = popupAdd.querySelector('.popup__text_field_author-subline');
const likeBtn = document.querySelector('.element__like-btn');
const trash = document.querySelector('.element__trash-btn');
const element = document.querySelector('.element');
const image = document.querySelector('.element__image');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

editBtn.addEventListener('click', () => openPopup(popupEdit));
addBtn.addEventListener('click', () => openPopup(popupAdd));
image.addEventListener('click', () => openPopup(popupImage) );

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

editCloseBtn.addEventListener('click', () => closePopup(popupEdit));
addCloseBtn.addEventListener('click', () => closePopup(popupAdd));
imageCloseBtn.addEventListener('click', () => closePopup(popupImage));

function handleFormSubmit() {
  const authorValue = editAuthorInput.value;
  const sublineValue = editSublineInput.value;

  authorField.textContent = authorValue;
  sublineField.textContent = sublineValue;

  popupEdit.classList.remove('popup_opened')
}

editSaveBtn.addEventListener('click', handleFormSubmit);

function addCard() {
  const elementTemplate = document.querySelector('#element').content;
  const newElement = elementTemplate.cloneNode(true);

  newElement.querySelector('.element__image').src = addSublineInput.value;
  newElement.querySelector('.element__title').textContent = addAuthorInput.value;

  elements.prepend(newElement);

  popupAdd.classList.remove('popup_opened');
  popupAdd.querySelector('form').reset();
}

addSaveBtn.addEventListener('click', addCard);

function like() {
  likeBtn.classList.toggle('element__like-btn_active');
}

likeBtn.addEventListener('click', like);

trash.addEventListener('click', deleteCard);

function deleteCard() {
  trash.parentElement.parentElement.remove();
}


