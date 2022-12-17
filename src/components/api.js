export const updateProfileInfo = (config) => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(checkResponse)
}

export const getInitialCards = (config) => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkResponse)
}

export const deleteCard = (item, config) => {
  return fetch(`${config.baseUrl}/cards/${item['_id']}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(checkResponse)
}

export const postNewCard = (nameCardValue, linkCardValue, config) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      'name': nameCardValue,
      'link': linkCardValue
    })
  })
    .then(checkResponse)
}

export const updateUser = (nameValue, aboutValue, config) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      'name': nameValue,
      'about': aboutValue
    })
  })
    .then(checkResponse)
}

export const updateAvatar = (fieldAvatarValue, config) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      'avatar': fieldAvatarValue,
    })
  })
    .then(checkResponse)
}

export const addLike = (item, config) => {
  return fetch(`${config.baseUrl}/cards/likes/${item['_id']}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(checkResponse)
}


export const deleteLike = (item, config) => {
  return fetch(`${config.baseUrl}/cards/likes/${item['_id']}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(checkResponse)
}

function checkResponse(res) {

  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Что-то не так: ${res.status}`);
}


