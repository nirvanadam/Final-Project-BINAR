import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BioDataPenumpang from "../components/checkout/BioDataPenumpang";
import Navbar from "../components/Navbar";
import FlightDetail from "../components/search-result/FlightDetail";
import CheckoutDetail from "../components/checkout/CheckoutDetail";
import Payment from "../components/checkout/Payment";
import SuccessPayment from "./SuccessPayment";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckoutPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const adult = queryParams.get("adult");
  const child = queryParams.get("child");

  const [data, setData] = useState();

  const url = `https://finalproject-develop.up.railway.app/flight/price/${id}?adult=${adult}&child=${child}`;
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
  }, [url]);

  console.log(data);

  const [order, setOrder] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/payment", { state: order });
    toast.success("Yeay, you almost ready to flight");
  };

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
        {/* Left */}
        <div className="">
          {/* <BioDataPemesan /> */}
          <BioDataPenumpang
            id={id}
            adults={adult}
            kids={child}
            setOrder={setOrder}
          />
          {/* <Payment /> */}
          {/* <SuccessPayment /> */}
        </div>
        {/* Left End */}

        {/* Right */}
        <div className="">
          {data && (
            <CheckoutDetail
              arrivalTime={data.arrival_airport.arrival_time}
              arrivalDate={data.arrival_airport.date}
              arrivalAirport={data.arrival_airport.arrival_airport}
              departureTime={data.departure_airport.departure_time}
              departureDate={data.departure_airport.date}
              departureAirport={data.departure_airport.departure_airport}
              airlineClass={data.flight.airline_class}
              airlineCode={data.flight.airplane_code}
              airlineName={data.flight.airline_name}
              baggage={data.flight.baggage}
              cabinBaggage={data.flight.cabin_baggage}
              logo={data.flight.logo}
              childPrice={data.info_price.child_price}
              childTotal={data.info_price.child_total}
              totalHarga={data.info_price.total_price}
              tax={data.info_price.tax}
              adultPrice={data.info_price.adult_price}
              adultTotal={data.info_price.adult_total}
              handleBayar={handleSubmit}
            />
          )}
        </div>
        {/* Right End */}
      </div>
      {/* Content End */}
    </div>
  );
}

export default CheckoutPage;
