import React, { useState, createContext, useEffect } from 'react';
import Books from '../services/books';

const BooksContext = createContext({});

export const BooksProvider = ({ children }) => {
  const [params, setParams] = useState({ page: 1, amount: 12 });
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!books) showBooks()
  })

  async function showBooks() {
    const books = await Books.showAll(params);
    setBooks(books);
  }

  async function showBook(id) {
    const book = await Books.show(id)
    setBook(book);
  }

  return (
    <BooksContext.Provider value={{ books, book, showBooks, showBook, setParams }} >
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContext;