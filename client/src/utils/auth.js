// import jwt decode
import decode from 'jwt-decode';

// authentication class 
class AuthService {
  // read profile
  getProfile() {
    return decode(this.getToken());
  }

  // check if user logged in 
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // check if token expired
  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  // get saved tokens 
  getToken() {
    return localStorage.getItem('id_token');
  }

  // login user 
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/dashboard');
  }

  // logout user
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

// export authentication service 
export default new AuthService();
