import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BioDataPenumpang from "../components/checkout/BioDataPenumpang";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

  const url = `${
    import.meta.env.VITE_REACT_APP_API
  }/flight/price/${id}?adult=${adult}&child=${child}`;
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
    <div className="flex flex-col font-quickSand pb-20 lg:pb-0">
      {/* Navbar */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
      {/* Navbar End */}

      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-4 lg:py-10 lg:px-36 border-b border-gray-200 bg-primary lg:bg-transparent shadow-sm">
        <div className="flex items-center gap-3">
          <Link to="/search-result" className="">
            <img src="/icons/arrow_left.svg" alt="" className="invert" />
          </Link>
          <h1 className="lg:hidden text-white font-medium">Checkout</h1>
        </div>

        <h1 className="hidden lg:flex text-xl font-bold">Isi Data Diri</h1>
        <img
          src="/icons/chevron-right.svg"
          alt=""
          className="hidden lg:flex w-4"
        />
        <h1 className="hidden lg:flex text-xl text-gray-400 font-bold">
          Bayar
        </h1>
        <img
          src="/icons/chevron-right.svg"
          alt=""
          className="hidden lg:flex w-4"
        />
        <h1 className="hidden lg:flex text-xl text-gray-400 font-bold">
          Selesai
        </h1>
      </div>
      {/* Header End */}

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-4 lg:mx-36 mt-5">
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

        <span className="lg:hidden h-[1px] w-full bg-gray-500 my-5"></span>

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

      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}

export default CheckoutPage;
