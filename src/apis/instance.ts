import axios from "axios";
import { requestInterceptors } from "./requestInterceptors";
import ERROR from "../constants/error.constant";
import refresh from "./refresh";

export const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

instance.interceptors.request.use(requestInterceptors as never);
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.data.code === ERROR.CODE.TOKEN_403_2) {
      await refresh();
      return instance(originalRequest);
    }
  }
);
