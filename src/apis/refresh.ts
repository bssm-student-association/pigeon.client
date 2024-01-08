import axios from "axios";
import { TOKEN } from "../constants/token.constant";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const refresh = async () => {
  try {
    const { data } = await instance.put("/api/auth/refresh", null, {
      headers: {
        Refresh_token: `${localStorage.getItem(TOKEN.REFRESH)}`,
      },
    });
    localStorage.setItem(TOKEN.ACCESS, data.accessToken);
  } catch (err) {
    localStorage.clear();
  }
};

export default refresh;
