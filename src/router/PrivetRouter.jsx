import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import CustomHooks from "../Hooks/CustomHooks";

const PrivateRoute = ({ children }) => {
  const { user, loading } = CustomHooks();
  const location = useLocation();

  useEffect(() => {
    if (user && user.uid) {
      localStorage.setItem("currentPrivateRoute", location.pathname);
    }
  }, [user, location.pathname]);

  console.log(loading);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user && user.uid) {
    return children;
  }

  //   if (initialLoad) {
  //     return null;
  //   }

  const lastPrivateRoute = localStorage.getItem("currentPrivateRoute");

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Navigate to={lastPrivateRoute || "/"} replace />;
};

export default PrivateRoute;
