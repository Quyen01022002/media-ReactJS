// src/services/authService.js
import axiosInstance from "../api/axiosInstance";

export const listPost = async (email, password) => {
  const response = await axiosInstance.post("/media/authenticate", {
    email,
    password,
  });
  return response.data;
};
