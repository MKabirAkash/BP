import { lazy } from "react";
import { Navigate } from "react-router-dom";
const Home = lazy(() => import("../../pages/Home"));
const CourseDetail = lazy(() => import("../../student_pages/CourseDetail"));
const ErrorPage = lazy(() => import("../../pages/ErrorPage"));
const StudentList = lazy(() => import("../../pages/StudentList"));
const ExportStudent = lazy(() => import("../../pages/ExportStudent"));
const SingleStudent = lazy(() => import("../../pages/SingleStudent"));
const CourseList = lazy(() => import("../../pages/CourseList"));

const systemAdminRoute = [
  { path: "/", element: <Home /> },
  { path: "*", element: <Navigate to="/error" /> },
  { path: "/coursedetail", element: <CourseDetail /> },
  { path: "/students", element: <StudentList /> },
  { path: "/students/export", element: <ExportStudent /> },
  { path: "/students/single", element: <SingleStudent /> },
  { path: "/courses", element: <CourseList /> },
  { path: "/error", element: <ErrorPage /> },
];

export default systemAdminRoute;
