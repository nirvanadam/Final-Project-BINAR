import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BioDataPemesan from "../components/checkout/BioDataPemesan";
import BioDataPenumpang from "../components/checkout/BioDataPenumpang";
import Navbar from "../components/Navbar";
import FlightDetail from "../components/search-result/FlightDetail";
import CheckoutDetail from "../components/checkout/CheckoutDetail";
import Payment from "../components/checkout/Payment";
import SuccessPayment from "../components/checkout/SuccessPayment";
import axios from "axios";

function CheckoutPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const adult = queryParams.get("adult");
  const child = queryParams.get("child");

  const [data, setData] = useState();

  const url = `https://finalproject-develop.up.railway.app/flight/price/${id}?adult=${adult}&child=${child}`;
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="flex flex-col font-quickSand">
      {/* Navbar */}
      <div className="flex lg:hidden gap-5 bg-primary px-4 py-3">
        <button>
          <img src="/icons/arrow_left.svg" alt="" className="invert" />
        </button>
        <h1 className="text-white font-medium">Biodata Pemesanan</h1>
      </div>
      <Navbar />
      {/* Navbar End */}

      {/* Header */}
      <div className="hidden lg:flex items-center gap-2 py-10 px-36 border-b border-gray-200 shadow-sm">
        <h1 className="text-xl font-bold">Isi Data Diri</h1>
        <img src="/icons/chevron-right.svg" alt="" className="w-4" />
        <h1 className="text-xl text-gray-400 font-bold">Bayar</h1>
        <img src="/icons/chevron-right.svg" alt="" className="w-4" />
        <h1 className="text-xl text-gray-400 font-bold">Selesai</h1>
      </div>
      {/* Header End */}

      {/* Content */}
      <div className="lg:grid grid-cols-2 gap-5 mx-4 lg:mx-36 mt-5">
        <div className="">
          {/* <BioDataPemesan /> */}
          <BioDataPenumpang id={id} adults={adult} kids={child} />
          {/* <Payment /> */}
          {/* <SuccessPayment /> */}
        </div>

        <div className="">
          <CheckoutDetail />
        </div>
      </div>
      {/* Content End */}
    </div>
  );
}

export default CheckoutPage;
