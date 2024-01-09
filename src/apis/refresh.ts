import axios from "axios";
import { TOKEN } from "../constants/token.constant";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

const refresh = async () => {
  try {
    const { data } = await instance.put("/auth/refresh", null, {
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
