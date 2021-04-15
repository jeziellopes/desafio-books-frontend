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
    const isValidEmail = Validation.isValidEmail(email)
    const isValidPassword = Validation.isValidPassword(password)

    return (isValidEmail && isValidPassword)
  }
}

export default Form