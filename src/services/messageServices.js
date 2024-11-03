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

export const AddMessage = async (messageBox, content) => {
  const token = localStorage.getItem("token");

  const response = await axiosInstance.post(
    "/message/add",
    {
      content,
      messageBox,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
