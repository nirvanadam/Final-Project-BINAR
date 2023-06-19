import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OtpInput from "./pages/OtpInput";
import ForgotPassword from "./pages/ForgotPassword";
import SearchResult from "./pages/SearchResult";
import CheckoutPage from "./pages/CheckoutPage";
import DetailAccount from "./pages/DetailAccount";
import Notifikasi from "./pages/Notifikasi";
import ComponentTest from "./pages/ComponentTest";
import RiwayatPesanan from "./pages/RIwayatPesanan";
import FlightDetail from "./components/search-result/FlightDetail";
import FlightResult from "./components/search-result/FlightResult";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otpinput" element={<OtpInput />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/detail-account" element={<DetailAccount />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/test" element={<FlightResult />} />
        <Route path="/riwayat" element={<RiwayatPesanan />} />
        <Route path="/test1" element={<FlightDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
