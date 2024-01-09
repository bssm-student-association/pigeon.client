import React from "react";
import { useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useAtom } from "jotai";
import { User } from "../types";
import { userContext } from "../context";
import { ROLE } from "../constants";
import { TOKEN } from "../../constants/token.constant";
import ERROR from "../../constants/error.constant";
import refresh from "../../apis/refresh";
import { instance } from "../../apis/instance";

const useUser = () => {
  const [user, setUser] = useAtom(userContext);

  const {
    data: userInfo,
    error,
    refetch,
  } = useQuery<User>(
    ["useUser"],
    async () => {
      const { data } = await instance.get("/user", {
        headers: { Authorization: localStorage.getItem(TOKEN.ACCESS) },
      });
      return data;
    },
    { enabled: !!localStorage.getItem(TOKEN.ACCESS) }
  );

  const isSameUser = (id: number) => {
    return userInfo?.id === id;
  };

  React.useEffect(() => {
    if (isAxiosError(error) && error.response) {
      const { code } = error.response.data;
      if (code === ERROR.CODE.TOKEN_403_2) {
        refresh().then(() => refetch());
      }
    }
  }, [error, refetch]);

  React.useEffect(() => {
    if (userInfo) setUser(userInfo);
  }, [setUser, userInfo]);

  return {
    user,
    isLoggedIn: !!userInfo,
    isAdmin: userInfo?.authority === ROLE.ADMIN,
    role: userInfo?.role === "STUDENT" ? "학생" : "선생님",
    isSameUser,
  };
};

export default useUser;
