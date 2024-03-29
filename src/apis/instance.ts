import axios from "axios";
import refresh from "./refresh";

export const instance = axios.create({
  baseURL: "http://10.129.57.18:8080/api",
  withCredentials: false,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (!originalRequest.trigger) {
      originalRequest.trigger = true;
      await refresh();
      return instance(originalRequest);
    }
  }
);
