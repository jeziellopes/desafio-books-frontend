import { useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useBooks } from '.';

/**
 * Book Modal Hook
 */
export default function useBookModal() {
  const [show, setShow] = useState(true);
  const { book, setBook } = useBooks();
  const history = useHistory();

  // ease-out close modal
  const handleClose = () => {
    // wait animation to
    setTimeout(() => {
      // redirect
      history.push('/books');
      // clear book
      setBook(null);
    }, 150);
    // trigger to animation close
    setShow(false);
  };

  return { show, handleClose };
}
