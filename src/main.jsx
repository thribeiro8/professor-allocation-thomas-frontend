import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Course from "./pages/Course";
import Allocation from "./pages/Allocation";
import Professor from "./pages/Professor";
import Department from "./pages/Department";
import DepartmentForm from "./pages/Department/DepartmentForm";
import ProfessorForm from "./pages/Professor/ProfessorForm";
import CourseForm from "./pages/Course/CourseForm";
import AllocationForm from "./pages/Allocation/AllocationForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path="/allocation" element={<Outlet />}>
            <Route element={<Allocation />} index />
            <Route path=":id" element={<AllocationForm />} />
          </Route>
          <Route path="/professor" element={<Outlet />}>
            <Route element={<Professor />} index />
            <Route path=":id" element={<ProfessorForm />} />
          </Route>
          <Route path="/course" element={<Outlet />}>
            <Route element={<Course />} index />
            <Route path=":id" element={<CourseForm />} />
          </Route>
          <Route path="/department" element={<Outlet />}>
            <Route element={<Department />} index />
            <Route path=":id" element={<DepartmentForm />} />
          </Route>
          <Route path="*" element={<div>Page not found...</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
