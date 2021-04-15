import { booksResponseMock } from '../mocks/books_mock';

class Books {
  static showAll(): Promise {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(booksResponseMock);
      }, 1000);
    });
  }

  static show(id: string): Promise {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            booksResponseMock.data.find(
              (book) => book.id === '60171639faf5de22b804a054'
            ) ?? {}
          ),
        1000
      );
    });
  }
}

export default Books;
