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

const apiClient = {
  auth: {
    signIn: (payload) => api.post('/auth/sign-in', payload),
    refreshToken: (payload) => api.post('/auth/refresh-token', payload)
  },
  books: {
    showAll: () => api.get('/books'),
    show: (id) => api.get(`/books/${id}`)
  }
}

export default apiClient