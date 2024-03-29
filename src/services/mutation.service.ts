import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "../apis/instance";
import { TOKEN } from "../constants/token.constant";
import { PostRequestDto } from "../types/PostRequestDto";
import { AnswerRequestDto } from "../types/AnswerRequestDto";
import { CommentRequestDto } from "../types/CommentRequestDto";
import { useNavigate } from "react-router-dom";

export const useBSMLoginMutation = () => {
  return useMutation(
    async (authCode: string) =>
      await instance.post("/auth/login/bsm", null, { headers: { authCode } }),
    {
      onSuccess: ({ data }) => {
        localStorage.setItem(TOKEN.ACCESS, data.accessToken);
        localStorage.setItem(TOKEN.REFRESH, data.refreshToken);
        window.history.go(-2);
      },
    }
  );
};

export const useGoogleLoginMutation = () => {
  return useMutation(
    async (code: string) =>
      await instance.post("/auth/login/google", null, { params: { code } }),
    {
      onSuccess: ({ data }) => {
        localStorage.setItem(TOKEN.ACCESS, data.accessToken);
        localStorage.setItem(TOKEN.REFRESH, data.refreshToken);
        window.history.go(-2);
      },
    }
  );
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async () =>
      await instance.post("/auth/logout", null, {
        headers: { refresh_token: localStorage.getItem(TOKEN.REFRESH) },
      }),
    {
      onSettled: () => {
        localStorage.removeItem(TOKEN.ACCESS);
        localStorage.removeItem(TOKEN.REFRESH);
        queryClient.invalidateQueries(["useUser"]);
      },
    }
  );
};

export const useWritePostMutation = () => {
  return useMutation(
    async (post: PostRequestDto) =>
      await instance.post("/post/apply", post, {
        headers: { Authorization: localStorage.getItem(TOKEN.ACCESS) },
      })
  );
};

export const useDeletePostMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    async (id: number) =>
      (
        await instance.delete(`/post/remove/${id}`, {
          headers: { Authorization: localStorage.getItem(TOKEN.ACCESS) },
        })
      ).data,
    {
      onSuccess: () => {
        navigate("/");
        window.location.reload();
      },
    }
  );
};

export const useWriteAnswerMutation = () => {
  return useMutation(
    async (answer: AnswerRequestDto) =>
      (
        await instance.post("/answer/apply", answer, {
          headers: { Authorization: localStorage.getItem(TOKEN.ACCESS) },
        })
      ).data
  );
};

export const useEditAnswerMutation = () => {
  return useMutation(
    async (answer: AnswerRequestDto) =>
      (
        await instance.post(
          `/answer/edit/${answer.postId}`,
          { content: answer.content },
          {
            headers: { Authorization: localStorage.getItem(TOKEN.ACCESS) },
          }
        )
      ).data
  );
};

export const useRemoveAnswerMutation = () => {
  return useMutation(
    async (id: number) =>
      (
        await instance.delete(`/answer/remove/${id}`, {
          headers: { Authorization: localStorage.getItem(TOKEN.ACCESS) },
        })
      ).data
  );
};

export const useWriteCommentMutation = () => {
  return useMutation(
    async (comment: CommentRequestDto) =>
      (
        await instance.post("/comment/create", comment, {
          headers: { Authorization: localStorage.getItem(TOKEN.ACCESS) },
        })
      ).data
  );
};

export const useEditCommentMutation = () => {
  return useMutation(
    async (comment: CommentRequestDto) =>
      (
        await instance.post(
          `/comment/edit/${comment.postId}`,
          { content: comment.content },
          {
            headers: { Authorization: localStorage.getItem(TOKEN.ACCESS) },
          }
        )
      ).data
  );
};

export const useRemoveCommentMutation = () => {
  return useMutation(
    async (id: number) =>
      (
        await instance.delete(`/comment/remove/${id}`, {
          headers: { Authorization: localStorage.getItem(TOKEN.ACCESS) },
        })
      ).data
  );
};
