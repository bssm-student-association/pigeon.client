import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/instance";

export const useSummaryPostQuery = () => {
  return useQuery(
    ["usePostSummary"],
    async () => (await instance.get("/post/summary")).data
  );
};

export const useDetailPostByPostType = (postType: string) => {
  return useQuery(
    ["usePostDetail"],
    async () =>
      (await instance.get(`/post/detail/${postType.toUpperCase()}`)).data
  );
};

export const useDetailPostInfo = (id: number) => {
  return useQuery(["usePost"], async () => await instance.get(`/post/${id}`))
    .data;
};
