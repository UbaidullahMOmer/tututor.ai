import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Config } from "../constant/Index";
import RoutesLink from "../constant/RoutesLink";
import useAuthCheck from "../hooks/useAuthCheck";

function PrivateRoute() {
  const status = useAuthCheck();

  if (status === 401) {
    return <Navigate to={RoutesLink.HOME} />;
  } else if (status === 200) {
    return <Outlet />;
  }
}

export default PrivateRoute;
