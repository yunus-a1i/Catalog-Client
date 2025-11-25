// src/api/client.js
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
});

// attach token from localStorage
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}, (err) => Promise.reject(err));

// basic response error pass-through
client.interceptors.response.use((res) => res, (err) => Promise.reject(err));

export default client;
