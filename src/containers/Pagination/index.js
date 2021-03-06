import React from 'react';
import { PrevButton, NextButton } from '../../components';
import { useBooks, useScreenSize } from '../../hooks';
import {
  Container,
  PaginationContainer,
  PaginationLabel,
  ActionContainer,
} from './styles';

export default function Pagination() {
  const {
    books,
    page,
    canGoBack,
    canGoNext,
    increasePage,
    decreasePage,
  } = useBooks();
  const [width] = useScreenSize();

  return (
    !!books?.page && (
      <Container>
        {width <= 768 && (
          <PrevButton onClick={decreasePage} disabled={!canGoBack()} />
        )}
        <PaginationContainer>
          <PaginationLabel>Página &nbsp;</PaginationLabel>
          <PaginationLabel strong>{books?.page ?? ''}&nbsp;</PaginationLabel>
          <PaginationLabel>de&nbsp;</PaginationLabel>
          <PaginationLabel strong>
            {Math.ceil(books?.totalPages)}
          </PaginationLabel>
        </PaginationContainer>
        <ActionContainer>
          {width > 768 && (
            <PrevButton disabled={!canGoBack()} onClick={decreasePage} />
          )}
          <NextButton onClick={increasePage} disabled={!canGoNext()} />
        </ActionContainer>
      </Container>
    )
  );
}
