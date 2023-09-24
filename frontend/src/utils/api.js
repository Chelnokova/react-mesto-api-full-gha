class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
     }
    }).then((res) => this._getResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
     }
    }).then((res) => this._getResponse(res));
  }

  sendUserData(dataUser) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
     },
      body: JSON.stringify({
        name: dataUser.name,
        about: dataUser.about,
      }),
    }).then((res) => this._getResponse(res));
  }

  sendNewAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
     },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => this._getResponse(res));
  }

  sendNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
     },
      body: JSON.stringify({ name, link }),
    }).then((res) => this._getResponse(res));
  }

  sendLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
     }
    }).then((res) => this._getResponse(res));
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
     },
    }).then((res) => this._getResponse(res));
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.sendLike(cardId) : this.removeLike(cardId);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
     }
    }).then((res) => this._getResponse(res));
  }
}
const api = new Api({
  baseUrl: "http://127.0.0.1:3000",
});

export default api;
