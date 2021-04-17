import apiClient from './api';

/**
 * Books services
 */
class Books {

  /**
   * Sholl all books
   */
  static async showAll(params) {
    try {
      const response = await apiClient.books.showAll(params);

      if (response.status === 200) {
        return response.data
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
   * Show user by id
   * 
   * @param {string} id
   * @returns 
   */
  static async show(id: string) {
    try {
      const response = await apiClient.books.show(id);

      if (response.status === 200) {
        return response.data;
      } else {
        // handle not success response
        return response.data;
      }

    } catch (err) {
      // handle error response
      return err.response
    }
    
  }
}

export default Books;
