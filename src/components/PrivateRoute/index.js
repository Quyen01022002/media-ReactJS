import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roles }) => {
  const token = localStorage.getItem("token");
  // Kiểm tra nếu người dùng không có token hoặc vai trò không khớp
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  // Logic kiểm tra vai trò có thể thêm tại đây nếu cần
  return children;
};

export default PrivateRoute;
