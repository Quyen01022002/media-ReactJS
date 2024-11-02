// src/services/authService.js
import axiosInstance from "../api/axiosInstance";

export const listPost = async (id) => {
  const token = localStorage.getItem("token"); // Lấy token từ localStorage
  const response = await axiosInstance.get(`/post/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
