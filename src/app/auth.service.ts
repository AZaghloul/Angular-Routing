export class AuthService {
  user = {
    id: '123',
    name: 'Ahmed',
    loggedIn: false,
  };

  logIn() {
    this.user.loggedIn = true;
  }

  logOut() {
    this.user.loggedIn = false;
  }
}
