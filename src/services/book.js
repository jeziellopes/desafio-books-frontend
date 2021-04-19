/**
 * Book services
 */
class Book {
  /**
   * Normalize book data
   */
  static async normalizedFrom(book) {
    return {
      ...book,
      authors: Book.normalizedAuthors(book.authors),
    };
  }

  /**
   * Returns normalized author names
   *
   * @param {array} authors
   * @returns
   */
  static normalizedAuthors(authors: string[]) {
    const maxAuthors = authors.slice(0, 2);
    return maxAuthors.map(
      (author) =>
        `${Book.normalizedAuthor(
          author,
          maxAuthors.indexOf(author) !== maxAuthors.length - 1,
          maxAuthors.length >= 2
        )}`
    );
  }

  /**
   * Returns inline author names
   *
   * @param {array} authors
   * @returns
   */
  static inlineAuthors(authors: string[]) {
    // const maxAuthors = authors.slice(0, 3);
    return authors
      .map(
        (author) =>
          `${Book.normalizedAuthor(
            author,
            authors.indexOf(author) !== authors.length - 1,
            authors.length > 3
          )}`
      )
      .join(' ');
  }

  static normalizedAuthor(
    author: string,
    isLast: boolean,
    manyAuthors: boolean
  ) {
    if (author.length <= 2) {
      return author;
    }

    const firstName = author.split(' ')[0];
    const lastName = author.split(' ').slice(-1);

    const middleNames = author
      .split(' ')
      .slice(1, -1)
      .filter((name) => name !== 'de')
      .map((name) => name[0]);

    return `${firstName} ${middleNames}${
      middleNames.length ? '. ' : ''
    }${lastName}${isLast ? ',' : manyAuthors ? ', ...' : ''}`;
  }

  /**
   * Check if book has more then one author
   *
   * @param {string} publisher
   * @returns
   */
  static hasManyAuthors(book: object) {
    return book?.authors?.length > 1;
  }
}

export default Book;
