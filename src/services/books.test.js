import Books from './books';

test('deve recuperar os parâmetros enviados na requisição', async () => {
  const params = { page: 1, amount: 20 };
  const response = await Books.showAll(params);
  expect(response.config.params).toStrictEqual(params);
});

test('deve retornar status code 401 - Unauthorized', async () => {
  const response = await Books.show('anyid');
  expect(response.status).toStrictEqual(401);
});
