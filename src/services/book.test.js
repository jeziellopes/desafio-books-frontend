import Book from './book';

test('deve retornar um nome de autor normalizado', async () => {
  const author = 'Robert Cecil Martin';
  const normalized = 'Robert C. Martin';
  const result = Book.normalizedAuthor(author);
  expect(result).toStrictEqual(normalized);
});

test('deve retornar um nome de autor sem alteração', async () => {
  const author = 'Erick Evans';
  const normalized = 'Erick Evans';
  const result = Book.normalizedAuthor(author);
  expect(result).toStrictEqual(normalized);
});

test('deve retornar um nome de autor com nomes abreviados', async () => {
  const author = 'Sr. Florian Armstrong';
  const normalized = 'Sr. F. Armstrong';
  const result = Book.normalizedAuthor(author);
  expect(result).toStrictEqual(normalized);
});

test('deve retornar uma lista de nomes de autores normalizados', async () => {
  const authors = [
    'Robert Cecil Martin',
    'Erick Evans',
    'Brendan Eich',
    'Sr. Florian Armstrong'
  ];
  const normalized = [
    'Robert C. Martin,',
    'Erick Evans, ...',
  ];
  const result = Book.normalizedAuthors(authors);
  expect(result).toStrictEqual(normalized);
});


