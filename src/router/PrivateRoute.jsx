import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import CustomHooks from "../Hooks/CustomHooks";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = CustomHooks();
  const location = useLocation();
  console.log(loading);
  if (loading) {
    return <LoadingSpinner />;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
