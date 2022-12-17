export const getInitialCards = () => {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-3/cards', {
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
}

export const deleteCard = (item) => {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-3/cards/${item['_id']}`, {
    method: 'DELETE',
    headers: {
      authorization: '760e0d80-494a-4d91-971a-4eb297900ae7'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(`Что-то не так: ${res.status}`);
      }
    })
    .catch(err => console.log(err));

}

export const postNewCard = (nameCardValue, linkCardValue) => {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-3/cards', {
    method: 'POST',
    headers: {
      authorization: '760e0d80-494a-4d91-971a-4eb297900ae7',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': nameCardValue,
      'link': linkCardValue
    })
  })
}

export const updateUser = (nameValue, aboutValue) => {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-3/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '760e0d80-494a-4d91-971a-4eb297900ae7',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': nameValue,
      'about': aboutValue
    })
  })
}

export const updateAvatar = (fieldAvatarValue) => {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-3/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '760e0d80-494a-4d91-971a-4eb297900ae7',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'avatar': fieldAvatarValue,
    })
  })
}
