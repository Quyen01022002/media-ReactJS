import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roles }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userRole = localStorage.getItem("userRole"); // Lấy vai trò người dùng từ localStorage

  if (!isAuthenticated) {
    // Nếu người dùng chưa đăng nhập, điều hướng đến trang đăng nhập
    return <Navigate to="/login" />;
  }

  // Nếu có vai trò được cung cấp, kiểm tra vai trò người dùng
  if (roles && roles.length > 0 && !roles.includes(userRole)) {
    // Nếu vai trò người dùng không khớp, điều hướng đến trang đăng nhập
    return <Navigate to="/login" />;
  }

  // Nếu người dùng đã xác thực và có vai trò phù hợp, render children (component cần hiển thị)
  return children;
};

export default PrivateRoute;
