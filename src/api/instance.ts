import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": `application/json`,
    "ngrok-skip-browser-warning": "69420",
  },
});
