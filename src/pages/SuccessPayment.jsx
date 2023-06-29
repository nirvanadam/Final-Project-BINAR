import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function SuccessPayment() {
  const location = useLocation();
  const id = location.state;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.get(`https://finalproject-develop.up.railway.app/ticket?order_id=${order_id}`);
      navigate("/success-payment", { state: order_id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <img src="/images/success-ilustration.svg" alt="" />
      <div className="flex flex-col items-center font-bold">
        <h1>Selamat!</h1>
        <h1>Selamat! Transaksi Pembayaran Tiket Sukses!</h1>
      </div>
      <button className="bg-primary w-full mb-3 py-3 rounded-xl text-white font-medium">Terbitkan Tiket</button>
      <button className="bg-primary w-full py-3 rounded-xl text-white font-medium">Cari Penerbangan Lain</button>
    </div>
  );
}

export default SuccessPayment;
