import { useMutation } from "@tanstack/react-query";
import { AddMessage, listMessage } from "../../services/messageServices";

export const useMessageList = (onSuccess, onError) => {
  const id = localStorage.getItem("id");

  return useMutation({
    mutationFn: () => listMessage(id), // Gọi listPost mà không cần truyền userData
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    },
  });
};

export const useAddMessage = (onSuccess, onError) => {
  return useMutation({
    mutationFn: ({ messageBox, content }) => AddMessage(messageBox, content), // Change here to accept id and content
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    },
  });
};
