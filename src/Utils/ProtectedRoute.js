import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  if (!user || user === null) {
    return navigate("/login");
  }

  if (isAdmin === true && user.role !== "admin") {
    return navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
