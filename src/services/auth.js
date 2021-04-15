export const TOKEN_KEY = "@app-Token";

class Auth {
  static signIn(): Promise {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Silas Carvalho',
          email: 'desafio@ioasys.com.br',
          birthdate: '2020-07-20',
          gender: 'M',
          id: '6017163afaf5de22b804a173',
        });
      });
    });
  }

  static isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
  static getToken = () => localStorage.getItem(TOKEN_KEY);
  static login = token => localStorage.setItem(TOKEN_KEY, token);
  static logout = () => localStorage.removeItem(TOKEN_KEY);
}

export default Auth;
