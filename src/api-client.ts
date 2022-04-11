import axios, { AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://emilia-vue-challenge.deta.dev",
  headers: {
    "Content-type": "application/json",
  },
});
export default apiClient;