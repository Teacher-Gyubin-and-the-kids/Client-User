import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);