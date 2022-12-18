import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const LoginPrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.authreducer);
  if (!isAuth) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};
export default LoginPrivateRoute;
