import axios from "axios";
export const API_URL = "http://localhost:4000";
export const APLICATION_URL = "localhost:5173";
//export const API_URL = "http://localhost:4000/api";
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest.isRetry = true;
    }
    return Promise.reject(error);
  }
);
export default $api;
