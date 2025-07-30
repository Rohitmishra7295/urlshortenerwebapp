// src/api/api.js

import axios from "axios";

// Create an Axios instance with a base URL from environment variables or fallback
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
