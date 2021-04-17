import React, { useState, createContext } from 'react';
import Books from '../services/books';

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);

  async function showBooks(params) {
    const response = await Books.showAll(params);
    setBooks(response);
  }

  async function showBook(id) {
    const response = await Books.show(id)
    setBook(response);
  }

  return (
    <BooksContext.Provider value={{ books, book, showBooks, showBook }}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContext;