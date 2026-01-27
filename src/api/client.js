import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
  // ❌ Remove default Content-Type header
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// Attach token from localStorage
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // ✅ FIX: Remove Content-Type for FormData (let browser set it with boundary)
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    } else {
      // Set JSON content type for non-FormData requests
      config.headers['Content-Type'] = 'application/json';
    }
    
    return config;
  },
  (err) => Promise.reject(err)
);

// Response error handling
client.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('access_token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default client;