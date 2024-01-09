import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/instance";

export const useSummaryPostQuery = () => {
  return useQuery(
    ["usePostSummary"],
    async () => (await instance.get("/post/summary")).data
  );
};

export const useDetailPostByPostTypeQuery = (postType: string) => {
  return useQuery(
    ["usePostDetail", postType],
    async () =>
      (await instance.get(`/post/detail/${postType.toUpperCase()}`)).data
  );
};

export const useDetailPostInfoQuery = (id: number) => {
  return useQuery(
    ["usePost", id],
    async () => (await instance.get(`/post/${id}`)).data
  );
};
