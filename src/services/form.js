import Validation from './validation';

class Form {
  /**
   * Validate email and password form inputs
   *
   * @param {string} email
   * @param {string} password
   * @returns {boolen}
   */
  static validate = ({ email, password }) => {
    const isValidEmail = Validation.isValidEmail(email);
    const isValidPassword = Validation.isValidPassword(password);

    return {
      isValidated: isValidEmail && isValidPassword,
      errors: {
        message:
          !isValidEmail || !isValidPassword
            ? 'Email e/ou senha inválidos.'
            : null,
      },
    };
  };
}

export default Form;
