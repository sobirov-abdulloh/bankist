import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes() {
  const user = false;
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
