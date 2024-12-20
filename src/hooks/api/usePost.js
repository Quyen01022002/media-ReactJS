import { useMutation } from "@tanstack/react-query";
import { listPost } from "../../services/postServices";

export const usePostList = (onSuccess, onError) => {
  const id = localStorage.getItem("id");

  return useMutation({
    mutationFn: () => listPost(id), // Gọi listPost mà không cần truyền userData
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    },
  });
};
