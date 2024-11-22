import axios from "axios";

const backendURL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: `${backendURL}/api`,
});

api.interceptors.request.use((config) => {
  const authToken = window.localStorage.getItem("AUTH_TOKEN");
  const isAuthenticated = Boolean(authToken);

  if (isAuthenticated) {
    config.headers['Authorization'] = `Bearer ${authToken}`;
  }

  return config;
});

export default api;