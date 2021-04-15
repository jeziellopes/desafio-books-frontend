import Auth from './auth';
import authResponseMock from '../mocks/auth_mock';

test('deve retornar um usuário autenticado', async () => {
  const authResponse = await Auth.signIn();
  expect(authResponse).toStrictEqual(authResponseMock);
});
