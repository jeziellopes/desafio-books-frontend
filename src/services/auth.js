import apiClient from './api';

export const USER_KEY = 'user';
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
    try {
      const response = await apiClient.auth.signIn({ email, password })

      /**
       * Handle refrehToken with silent signIn
       */
      if (response.status === 401) {
        await Auth.refreshToken();
        Auth.signIn(email, password);
        return;
      }
      
      /**
       * Persist authentication data
       */
      if (response.status === 200) {
        Auth.setToken(response.headers.authorization);
        Auth.setRefreshToken(response.headers['refresh-token']);
        const user = Auth.getUserFrom(response.data);
        Auth.setUser(JSON.stringify(user));
        return user;
      } else {
        // handle not success response
        return response.data
      }

    } catch (err) {
      // handle error response
      return err.response
    }
  }

  /**
   * Return user with calculated attributes
   */
  static getUserFrom(data) {
    return {
      ...data,
      shortName: data.name.split(' ')[0]
    }
  }

  /**
   * Refresh user authenticated token 
   */
  static async refreshToken() {
    try {
      const refreshToken = Auth.getRefreshToken();
      const response = await apiClient.auth.refreshToken({ refreshToken });

      /**
       * Persist token refreshing data 
       */
      if (response.status === 200) {
        Auth.setToken(response.headers.authorization);
        Auth.setRefreshToken(response.headers['refresh-token']);
      } else {
        // handle not success response
        return response.data;
      }

    } catch (err) {
      // handle error response
      return err.response
    }
  }

  /**
   * Local Storage Methods
   */
  static setUser = (user) => localStorage.setItem(USER_KEY, user);
  static getUser = () => JSON.parse(localStorage.getItem(USER_KEY));
  static isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
  static getToken = () => localStorage.getItem(TOKEN_KEY);
  static setToken = token => localStorage.setItem(TOKEN_KEY, token);
  static getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
  static setRefreshToken = refreshToken => localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

  /**
   * Logout user by cleaning storage authentication data
   */
  static logout = () => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}

export default Auth;
