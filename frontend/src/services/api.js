import axios from "axios";

const api = axios.create({
  baseURL: "https://campus-eventhub-team4.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// Automatically attach token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // or sessionStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
