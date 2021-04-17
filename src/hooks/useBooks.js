import { useContext } from 'react';
import BooksContext from '../contexts/books';

const useBooks = () => {
  const context = useContext(BooksContext)

  return context;
}

export default useBooks;