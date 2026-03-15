import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children ,isLoading}) {
  const location = useLocation();

  console.log("Path:", location.pathname);
  console.log("Auth:", isAuthenticated);
  console.log("User:", user);

  if(isLoading){
    return <div>Loading...</div>
  }

  // User not logged in
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  //  User logged in but trying login/register
  if (
    isAuthenticated &&
    (
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  //  Non-admin trying to access admin routes
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  //  Admin accessing non-admin routes
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;