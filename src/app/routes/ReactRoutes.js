import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import "../assets/globals.css";
import "../assets/devClasses.css";
import RoutesLink from "../constant/RoutesLink";
function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesLink.HOME} element={<Layout />}>
          <Route element={<PrivateRoute />}>
          </Route>
          <Route path="*" element={"Not Found"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRoutes;
