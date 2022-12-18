import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children }) => {
  const { isAdmin } = useSelector((state) => state.authreducer);
  if (!isAdmin) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};
export default PrivateRoute;
