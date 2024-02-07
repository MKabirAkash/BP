import { lazy } from "react";
import { Navigate } from "react-router-dom";
const Home = lazy(() => import("../../pages/Home"));
const CourseDetail = lazy(() => import("../../../student_pages/CourseDetail"));
const ErrorPage = lazy(() => import("../../pages/ErrorPage"));

const systemAdminRoute = [
  { path: "/", element: <Home /> },
  { path: "*", element: <Navigate to="/error" /> },
  { path: "/coursedetail", element: <CourseDetail /> },
  { path: "/error", element: <ErrorPage /> },
];

export default systemAdminRoute;
