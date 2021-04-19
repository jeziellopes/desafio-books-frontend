import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { CloseButton, Row, Column, Helmet } from '../../components';
import Quotes from '../../components/Quotes';
import { useBooks } from '../../hooks';
import useBookModal from '../../hooks/useModal';
import Book from '../../services/book';
import {
  Container,
  ModalContainer,
  BookCover,
  DetailsContainer,
  InformationsContainer,
  InformationRow,
  DescriptionContainer,
  BookTitle,
  BookAuthor,
  BookLabels,
  BookDetails,
} from './styles';

/**
 * Book Modal
 *
 * @returns {React.Component}
 */
const BookModal = () => {
  const { book, setBook } = useBooks();
  const { show, handleClose } = useBookModal();

  // return modal component
  return (
    <Container show={show}>
      <CloseButton onClick={handleClose} />
      {book && (
        <ModalContainer>
          <Column>
            <BookCover src={book?.imageUrl} />
          </Column>
          <DetailsContainer>
            <Column>
              <Helmet title={`Ioasys Book - ${book?.title}`} />
              <BookTitle>{book?.title}</BookTitle>
              <BookAuthor>{Book.inlineAuthors(book?.authors ?? '')}</BookAuthor>
            </Column>
            <InformationsContainer>
              <BookLabels>{'Informações'.toUpperCase()}</BookLabels>
              <InformationRow>
                <BookLabels>Páginas</BookLabels>
                <BookDetails>{book.pageCount} páginas</BookDetails>
              </InformationRow>
              <InformationRow>
                <BookLabels>Editora</BookLabels>
                <BookDetails>Editora {book.publisher}</BookDetails>
              </InformationRow>
              <InformationRow>
                <BookLabels>Publicação</BookLabels>
                <BookDetails>{book.published}</BookDetails>
              </InformationRow>
              <InformationRow>
                <BookLabels>Idioma</BookLabels>
                <BookDetails>{book.language}</BookDetails>
              </InformationRow>
              <InformationRow>
                <BookLabels>Título Original</BookLabels>
                <BookDetails>{book.title}</BookDetails>
              </InformationRow>
              <InformationRow>
                <BookLabels>ISBN-10</BookLabels>
                <BookDetails>{book.isbn10}</BookDetails>
              </InformationRow>
              <InformationRow>
                <BookLabels>ISBN-13</BookLabels>
                <BookDetails>{book.isbn13}</BookDetails>
              </InformationRow>
            </InformationsContainer>
            <DescriptionContainer>
              <BookLabels>{'Resenha da Editora'.toUpperCase()}</BookLabels>
              <BookDetails>
                <Quotes />
                {book.description}
              </BookDetails>
            </DescriptionContainer>
          </DetailsContainer>
        </ModalContainer>
      )}
    </Container>
  );
};

export default BookModal;
