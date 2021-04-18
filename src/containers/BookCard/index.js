import React from 'react';
import { Column } from '../../components';
import Book from '../../services/book';

import {
  Container,
  BookCover,
  BookTile,
  BookAuthor,
  BookInformations,
  BookDetails,
 } from './styles';

export default function BookCard({ book }) {

  return (
    <Container>
      <BookCover src={book.imageUrl}/>
      <BookInformations>
        <Column>
          <BookTile useOverflow={Book.hasManyAuthors(book)}>
            {book.title}
          </BookTile>
          {Book.normalizedAuthors(book.authors)
            .map(author =>
            <BookAuthor key={btoa(author)}>{author}</BookAuthor>
          )}
        </Column>
        <Column>
          <BookDetails>{book.pageCount} páginas</BookDetails>
          <BookDetails>Editora {book.publisher}</BookDetails>
          <BookDetails>Publicado em {book.published}</BookDetails>
        </Column>
      </BookInformations>
    </Container>
  );
}