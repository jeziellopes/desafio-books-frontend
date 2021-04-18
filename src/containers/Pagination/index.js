import React from 'react';
import { PrevButton, NextButton } from '../../components';
import { useBooks, useScreenSize } from '../../hooks';
import { Container, PaginationContainer, PaginationLabel, ActionContainer } from './styles';

export default function Pagination() {
  const { books } = useBooks();
  const [ width ] = useScreenSize();

  return (
    !!books?.page && (
      <Container>
        {width <= 414 &&
          <PrevButton
            disabled={!(books?.page > 1)}
          />
        }
        <PaginationContainer>
          <PaginationLabel>
            Página &nbsp;
          </PaginationLabel>
          <PaginationLabel strong>
            {books?.page ?? ''}&nbsp;
          </PaginationLabel>
          <PaginationLabel>
            de&nbsp;
          </PaginationLabel>
          <PaginationLabel strong>
            {Math.ceil(books?.totalPages)}
          </PaginationLabel>
        </PaginationContainer>
        <ActionContainer>
          {width > 414 &&
            <PrevButton
              disabled={!(books?.page > 1)}
            />
          }
          <NextButton
            disabled={!(books?.page < books?.totalPages)}  
          />
        </ActionContainer>
      </Container>
    )
  );
}