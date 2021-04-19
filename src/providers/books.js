import React, { useState, useEffect } from 'react';
import { BooksContext } from '../contexts';
import { Books } from '../services';

/**
 * Books Context Provider
 */
const BooksProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(12);
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

  // call show all books service
  const showBooks = async () => {
    const books = await Books.showAll({ page, amount });
    setBooks(books);
  };

  // call show book service
  const showBook = async (id) => {
    const book = await Books.show(id);
    setBook(book);
  };

  // return books context
  return (
    <BooksContext.Provider
      value={{
        books,
        page,
        amount,
        book,
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
