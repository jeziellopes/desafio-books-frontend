import React from 'react';
import { Logo } from '../../components';
import { LogoHeader, LogoTitle } from '../../components/Common';
import { UserHeader, BooksList, Pagination } from '../../containers';
import { BooksProvider } from '../../contexts/books';
import { BooksContainer, BooksHeader } from './styles';

const Books = () => (
  <BooksContainer>
    <BooksHeader>
      <LogoHeader>
        <Logo/>
        <LogoTitle>Books</LogoTitle>
      </LogoHeader>
  
      <UserHeader/>

    </BooksHeader>
    <BooksProvider>
      <BooksList/>
      <Pagination/>
    </BooksProvider>
  </BooksContainer>
)

export default Books