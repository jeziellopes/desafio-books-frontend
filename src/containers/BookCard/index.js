import React from 'react';
import { useHistory } from 'react-router-dom';
import { Column } from '../../components';
import Book from '../../services/book';

import {
  Container,
  CoverContainer,
  BookCover,
  BookTitle,
  BookAuthor,
  BookInformations,
  BookDetails,
} from './styles';

export default function BookCard({ book }) {
  const history = useHistory();

  return (
    <Container onClick={() => history.push(`/book/${book.id}`)}>
      <CoverContainer>
        <BookCover src={book.imageUrl} />
      </CoverContainer>
      <BookInformations>
        <Column>
          <BookTitle useOverflow={Book.hasManyAuthors(book)}>
            {book.title}
          </BookTitle>
          {Book.normalizedAuthors(book.authors).map((author) => (
            <BookAuthor key={btoa(author)}>{author}</BookAuthor>
          ))}
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
