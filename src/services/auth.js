import apiClient from './api';

export const TOKEN_KEY = 'token';
export const REFRESH_TOKEN_KEY = 'refresh_token'

/**
 * Authentication services
 */
class Auth {

  /**
   * Authenticate a user with email and password
   */
  static async signIn(email, password) {
    const response = await apiClient.auth.signIn({ email, password })

    if (response.status === 401) {
      await Auth.refreshToken();
      Auth.signIn(email, password);
      return;
    }

    if (response.status === 200) {
      Auth.setToken(response.headers.authorization);
      Auth.setRefreshToken(response.headers['refresh-token']);
      return response.data;
    } else {
      console.log(response);
    }
  }
  /**
   * Refresh user authenticated token 
   */
  static async refreshToken() {
    const refreshToken = Auth.getRefreshToken();
    const response = await apiClient.auth.refreshToken({ refreshToken });

    if (response.status === 200) {
      Auth.setToken(response.headers.authorization);
      Auth.setRefreshToken(response.headers['refresh-token']);
    } else {
      console.log(response)
    }
  }

  static isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
  static getToken = () => localStorage.getItem(TOKEN_KEY);
  static setToken = token => localStorage.setItem(TOKEN_KEY, token);
  static getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
  static setRefreshToken = refreshToken => localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

  static logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}

export default Auth;
