import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import OtpInput from "./pages/OtpInput.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Dashboard2 from "./pages/Dashboard2.jsx";
import ComponentTest from "./pages/ComponentTest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
    // errorElement: <NotFoundPage />,
  },
  {
    path: "/otpinput",
    element: <OtpInput />,
    // errorElement: <NotFoundPage />,
  },
  {
    path: "/test",
    element: <Dashboard2 />,
    // errorElement: <NotFoundPage />,
  },
  {
    path: "/test2",
    element: <ComponentTest />,
    // errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
