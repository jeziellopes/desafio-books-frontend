import React from 'react';
import { useBooks } from '../../hooks';
import { Container } from './styles';
import { BookCard } from '../../containers';

export default function BooksList() {
  const { books } = useBooks();

  return (
    <Container>
      {books &&
        books.data?.length &&
        books.data.map(book => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))
      }
    </Container>
  )
}
