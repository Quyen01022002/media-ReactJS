// src/services/authService.js
import axiosInstance from "../api/axiosInstance";

export const login = async (email, password) => {
  const response = await axiosInstance.post("/media/authenticate", {
    email,
    password,
  });
  return response.data;
};
