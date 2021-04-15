import Books from './books';
import { booksResponseMock, bookResponseMock } from '../mocks/books_mock';

test('deve retornar uma lista de livros', async () => {
  const booksResponse = await Books.showAll();
  expect(booksResponse).toStrictEqual(booksResponseMock);
});


test('deve retornar um livro', async () => {
  const booksResponse = await Books.show('60171639faf5de22b804a054');
  expect(booksResponse).toStrictEqual(bookResponseMock);
});