import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Payment from "../components/checkout/Payment";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PaymentDetail from "../components/checkout/PaymentDetail";
import Cookies from "js-cookie";

function PaymentPage() {
  const location = useLocation();
  const order_id = +location.state;

  const [data, setData] = useState();
  const url = `https://finalproject-develop.up.railway.app/order/one/${order_id}`;
  let response;
  const fetchData = async () => {
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="font-quickSand">
      {/* Navbar */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
      {/* Navbar End */}

      {/* Header */}
      <div className="hidden lg:flex items-center gap-2 py-10 px-36 border-b border-gray-200 shadow-sm">
        <h1 className="text-xl font-bold">Isi Data Diri</h1>
        <img src="/icons/chevron-right.svg" alt="" className="w-4" />
        <h1 className="text-xl font-bold">Bayar</h1>
        <img src="/icons/chevron-right.svg" alt="" className="w-4" />
        <h1 className="text-xl text-gray-400 font-bold">Selesai</h1>
      </div>
      {/* Header End */}

      {/* Content */}
      <div className="lg:grid grid-cols-2 gap-5 mx-4 lg:mx-36 mt-5">
        {/* Left */}
        <Payment order_id={order_id} />
        {/* Left End */}

        {/* Right */}
        <div className="">{data && <PaymentDetail data={data} />}</div>
        {/* Right End */}
      </div>
      {/* Content End */}
      <Footer />
    </div>
  );
}

export default PaymentPage;
