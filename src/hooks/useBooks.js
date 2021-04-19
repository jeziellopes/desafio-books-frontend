import { useContext } from 'react';
import { BooksContext } from '../contexts';

const useBooks = () => {
  const context = useContext(BooksContext);

  return context;
};

export default useBooks;
