import axios from "axios";
export const API_URL = "http://localhost:4000";
//export const API_URL = "http://localhost:4000/api";
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
export default $api;
