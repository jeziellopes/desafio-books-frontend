import axios from "axios";
import Auth from "./auth";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1"
});

api.interceptors.request.use(async config => {
  const token = Auth.getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getAxiosConfig = (params = {}) => {
  const token = Auth.getToken();
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    params
  } 
}

const apiClient = {
  auth: {
    signIn: (data) => api.post('/auth/sign-in', data),
    refreshToken: (data) => api.post('/auth/refresh-token', data)
  },
  books: {
    showAll: (params) => api.get('/books', getAxiosConfig(params)),
    show: (id) => api.get(`/books/${id}`, getAxiosConfig())
  }
}

export default apiClient