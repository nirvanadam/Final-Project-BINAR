import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import FlightDetailPage from "./pages/FlightDetailPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OtpInput from "./pages/OtpInput";
import ForgotPassword from "./pages/ForgotPassword";
import SearchResult from "./pages/SearchResult";
import CheckoutPage from "./pages/CheckoutPage";
import DetailAccount from "./pages/DetailAccount";
import Notifikasi from "./pages/Notifikasi";
import ComponentTest from "./pages/ComponentTest";
import RiwayatPesanan from "./pages/RiwayatPesanan";
import FlightDetail from "./components/search-result/FlightDetail";
import FlightResult from "./components/search-result/FlightResult";
import PaymentPage from "./pages/PaymentPage";
import SuccessPayment from "./pages/SuccessPayment";
import Footer from "./components/Footer";

function App() {
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
        <Route path="/test" element={<ComponentTest />} />
        <Route path="/riwayat" element={<RiwayatPesanan />} />
        <Route path="/test1" element={<FlightDetail />} />
        <Route path="/flight-result" element={<FlightResult />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success-payment" element={<SuccessPayment />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
