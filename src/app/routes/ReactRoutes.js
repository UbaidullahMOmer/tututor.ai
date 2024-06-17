import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import RoutesLink from "../constant/RoutesLink";
function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesLink.HOME} element={<Layout />}> 
          <Route path="*" element={"Not Found"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRoutes;
