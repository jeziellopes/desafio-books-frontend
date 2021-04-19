import React, { useEffect } from 'react';
import { useBooks } from '../../hooks';
import { BookCard, Modal } from '../../containers';
import { useParams, useLocation } from 'react-router-dom';
import { Container } from './styles';

export default function BooksList() {
  const { books, showBook } = useBooks();
  const { id } = useParams();

  useEffect(() => {
    if (id) showBook(id), [id];
  });

  return (
    <Container>
      {books &&
        books.data?.length &&
        books.data.map((book) => <BookCard key={book.id} book={book} />)}
      {id && <Modal>{id}</Modal>}
    </Container>
  );
}
