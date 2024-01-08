import { AxiosRequestConfig } from "axios";
import { TOKEN } from "../constants/token.constant";

export const requestInterceptors = (requestConfig: AxiosRequestConfig) => {
  const urlParams = requestConfig.url?.split("/:") || [];
  const accessToken = localStorage.getItem(TOKEN.ACCESS);

  if (accessToken && requestConfig.headers)
    requestConfig.headers.Authorization = accessToken;
  if (urlParams.length < 2) return requestConfig;

  const paramParsedUrl = urlParams
    ?.map((paramKey) => {
      return requestConfig.params[paramKey];
    })
    .join("/");

  urlParams?.forEach((paramKey: string) => {
    delete requestConfig.params[paramKey];
  }, {});

  return {
    ...requestConfig,
    url: paramParsedUrl,
  };
};
