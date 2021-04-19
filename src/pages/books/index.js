import React from 'react';
import { Logo, Helmet } from '../../components';
import { LogoHeader, LogoTitle } from '../../components/Common';
import { UserHeader, BooksList, Pagination } from '../../containers';
import { BooksProvider } from '../../providers';
import { BooksContainer, BooksHeader } from './styles';

const Books = ({ props }) => {
  return (
    <BooksContainer>
      <Helmet title={'Ioasys Books'} />
      <BooksHeader>
        <LogoHeader>
          <Logo />
          <LogoTitle>Books</LogoTitle>
        </LogoHeader>

        <UserHeader />
      </BooksHeader>
      <BooksProvider>
        <BooksList />
        <Pagination />
      </BooksProvider>
    </BooksContainer>
  );
};

export default Books;
