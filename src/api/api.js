import Users from './modules/users';

class Api {
  constructor() {
    this.users = new Users(this);
  }

  request(method, URI, body) {
    const URL = `/api/${URI}`;

    return fetch(URL, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        authorization: this.token,
      },
    }).then(res => res.json());
  }

  setToken(token) {
    this.token = token;
  }

}

export default Api;
