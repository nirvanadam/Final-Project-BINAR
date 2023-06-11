import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import OtpInput from "./pages/OtpInput.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Dashboard2 from "./pages/Dashboard2.jsx";
import ComponentTest from "./pages/ComponentTest.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import FlightDetail from "./pages/FlightDetailPage.jsx";
import ModalFrom from "./components/ModalFrom.jsx";
import FlightResult from "./components/FlightResult.jsx";
import ResultNotFound from "./components/ResultNotFound.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import DetailAccount from "./pages/DetailAccount";
import EditAccount from "./components/EditAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search-result",
    element: <SearchResult />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/otpinput",
    element: <OtpInput />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/flight-detail",
    element: <FlightDetail />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/edit-account",
    element: <EditAccount />,
  },
  {
    path: "/test",
    element: <Dashboard2 />,
  },
  {
    path: "/test2",
    element: <ComponentTest />,
  },
  {
    path: "/test3",
    element: <DetailAccount />,
    // errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
