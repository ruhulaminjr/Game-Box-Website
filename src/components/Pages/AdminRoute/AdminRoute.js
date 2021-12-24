import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  let { admin, authLoading } = useAuth();
  let location = useLocation();
  if (authLoading) {
    return (
      <div class="flex justify-center">
        <span class="circle animate-loader"></span>
        <span class="circle animate-loader animation-delay-200"></span>
        <span class="circle animate-loader animation-delay-400"></span>
      </div>
    );
  }
  if (admin) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return children;
  }

  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
