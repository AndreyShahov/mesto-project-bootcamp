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
const addAuthorInput = popupAdd.querySelector('.popup__text_field_author');
const addSublineInput = popupAdd.querySelector('.popup__text_field_author-subline');
const element = document.querySelector('.element');
const image = document.querySelector('.element__image');
const elements = document.querySelector('.elements');



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let newCard = {
  name: addAuthorInput.value,
  link: addSublineInput.value 
};

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
imageCloseBtn.addEventListener('click', () => closePopup(popupImage));

function handleFormSubmit() {
  const authorValue = editAuthorInput.value;
  const sublineValue = editSublineInput.value;
  
  authorField.textContent = authorValue;
  sublineField.textContent = sublineValue;

  popupEdit.classList.remove('popup_opened')
}

editSaveBtn.addEventListener('click', handleFormSubmit);

// function addCard() {
//   const elementTemplate = document.querySelector('#element').content;
//   const newElement = elementTemplate.cloneNode(true);

//   newElement.querySelector('.element__image').src = addSublineInput.value;
//   newElement.querySelector('.element__title').textContent = addAuthorInput.value;

//   return  elements.prepend(newElement);

//   popupAdd.classList.remove('popup_opened');
//   popupAdd.querySelector('form').reset();
// }



function createCard(item) {
  const elementTemplate = document.querySelector('#element').content.querySelector('.element');
  const newElement = elementTemplate.cloneNode(true);
  const likeBtn =  newElement.querySelector('.element__like-btn');  
  const trashBtn = newElement.querySelector('.element__trash-btn');
  const image = newElement.querySelector('.element__image');

  image.src = item.link;
  newElement.querySelector('.element__title').textContent = item.name,

 likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('element__like-btn_active');
});

trashBtn.addEventListener('click', () => {
  trashBtn.parentElement.parentElement.remove();
});

image.addEventListener('click', () => {
  openPopup(popupImage);
  document.querySelector('.element__imaged').src = item.link;
  document.querySelector('.popup__caption').textContent = item.name;
});

 return newElement;
}

function addCard(item, container) {
  const card = createCard(item);
  container.prepend(card);
}

initialCards.forEach((item) => {
  addCard(item, elements);
});


addSaveBtn.addEventListener('click', () => {
  addCard(newCard, elements);
  
  popupAdd.classList.remove('popup_opened');
  popupAdd.querySelector('form').reset();
});

