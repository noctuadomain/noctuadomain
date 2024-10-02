import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  responseType: 'json',
  withCredentials: true
});

export default apiClient;
