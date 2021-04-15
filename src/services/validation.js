import { EMAIL_PATTERN, PASSWORD_PATTERN } from "../utils/regex"

class Validation {

  /**
   * Email Validation
   * 
   * @param {string} value email for regex pattern test
   * @returns {boolean}
   */
  static isValidEmail = (value: string) => EMAIL_PATTERN.test(value)

  /**
   * Password Validation
   * 
   * @param {string} value password for regex pattern test
   * @returns {boolen}
   */
  static isValidPassword = (value) => PASSWORD_PATTERN.test(value)

}

export default Validation