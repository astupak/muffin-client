
class Users {
  constructor(api) {
    this.api = api;
  }

  create(displayName, email, password) {
    return this.api.request('POST', 'user', {
      email,
      displayName,
      password,
    });
  }

  login(email, password) {
    return this.api.request('POST', 'login', {
      email,
      password,
    });
  }
}

export default Users;
