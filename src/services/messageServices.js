// src/services/authService.js
import axiosInstance from "../api/axiosInstance";

export const listMessage = async (id) => {
  const token = localStorage.getItem("token");
  const response = await axiosInstance.get(`/message/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
