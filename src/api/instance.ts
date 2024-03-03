import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});
