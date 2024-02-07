import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import systemAdminRoute from "./RoleBaseRoutes/systemAdminRoute";
const Home = lazy(() => import("../pages/Home"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const Routers = ({ user, userRole }) => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      {user &&
        userRole &&
        userRole === "systemadmin" &&
        systemAdminRoute.map((route, index) => routerPathElement(route, index))}
      
    </Routes>
  </>
);

export function routerPathElement(route, index) {
  return (
    <React.Fragment key={index}>
      <Route path={route.path} element={route.element} />
      <Route path="*" element={<Navigate to="/error" />} />
      <Route path="/error" element={<ErrorPage />} />
    </React.Fragment>
  );
}

export default Routers;
