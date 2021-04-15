import Validation from './validation';

/**
 * Email Validation Tests
 */

test('deve retornar falso na validação de email não válido', () => {
  const email = 'notvalidemail';
  const isValidEmail = Validation.isValidEmail(email);
  expect(isValidEmail).toStrictEqual(false);
});

test('deve retornar true na validação de email válido', () => {
  const email = 'ioasys@books.com';
  const isValidEmail = Validation.isValidEmail(email);
  expect(isValidEmail).toStrictEqual(true);
});

test('deve retornar true na validação de email contendo um subdomínio', () => {
  const email = 'desafio@ioasys.com.br';
  const isValidEmail = Validation.isValidEmail(email);
  expect(isValidEmail).toStrictEqual(true);
});

test('deve retornar false na validação de email contendo mais de um subdomínio', () => {
  const email = 'desafio@test.ioasys.com.br';
  const isValidEmail = Validation.isValidEmail(email);
  expect(isValidEmail).toStrictEqual(false);
});

/**
 * Password Validation Tests
 */

test('deve returnar false na validação de uma senha de 7 digitos', () => {
  const password = '1234567';
  const isValidPassword = Validation.isValidPassword(password);
  expect(isValidPassword).toStrictEqual(false);
});

test('deve retornar false na validação de uma senha de 8 dígitos não contendo números', () => {
  const password = 'ioasysss';
  const isValidPassword = Validation.isValidPassword(password);
  expect(isValidPassword).toStrictEqual(false);
});

test('deve retornar true na validação de uma senha de 8 digitos', () => {
  const password = '12345678';
  const isValidPassword = Validation.isValidPassword(password);
  expect(isValidPassword).toStrictEqual(true);
});

test('deve retornar true na validação de senha de 8 digitos contendo apenas um número', () => {
  const password = 'ioasyss8';
  const isValidPassword = Validation.isValidPassword(password);
  expect(isValidPassword).toStrictEqual(true);
});