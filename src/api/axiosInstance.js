import axios from "axios";

const apiUrl = "http://localhost:8090";
const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

export default axiosInstance;
