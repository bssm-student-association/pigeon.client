import axios from "axios";
import refresh from "./refresh";

export const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
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
