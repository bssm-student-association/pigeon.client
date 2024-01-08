import { useLocation } from "react-router-dom";

export const useOAuth = () => {
  const { search, ...location } = useLocation();
  const code = search.replace("?code=", "");

  return { code, ...location };
};
