import React, { useState, useEffect } from 'react';
import { BooksContext } from '../contexts';
import { Books } from '../services';

/**
 * Books Context Provider
 */
const BooksProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(20);
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);

  // check if pagination can go back
  const canGoBack = () => books?.page > 1;

  // check if pagination can go next
  const canGoNext = () => books?.page < Math.ceil(books?.totalPages);

  // increase page based on actual and max pages
  const increasePage = () => {
    if (canGoNext()) setPage(page + 1);
  };

  // decrease page based on actual and max pages
  const decreasePage = () => {
    if (canGoBack()) setPage(page - 1);
  };

  // update books on page changes
  useEffect(() => showBooks(), [page]);

  // load books if there is no books on context
  useEffect(() => {
    if (!books) showBooks();
  });

  // show all books from api service
  const showBooks = async () => {
    const books = await Books.showAll({ page, amount });
    setBooks(books);
  };

  // show book from context books
  const showBook = (id) => {
    if (book?.id !== id) {
      const book = books?.data.find((book) => book.id === id);
      setBook(book);
    }
  };

  // return books context
  return (
    <BooksContext.Provider
      value={{
        books,
        page,
        amount,
        book,
        setBook,
        showBooks,
        showBook,
        setPage,
        setAmount,
        canGoBack,
        canGoNext,
        decreasePage,
        increasePage,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
