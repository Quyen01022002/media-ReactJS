import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/authServices";

export const useAuth = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (userData) => login(userData.email, userData.password),
    onSuccess: (data) => {
      // Lưu token vào localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("avatar", data.avatar);
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("lastName", data.lastName);
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    },
  });
};
