import React, { useState, useEffect } from "react";
import DetailPayment from "../components/history/DetailPayment";
import NavbarMobile from "../components/NavbarMobile";
import Navbar from "../components/Navbar";
import CheckoutDetail from "../components/checkout/CheckoutDetail";
import { Link } from "react-router-dom";
import ModalBookingCode from "../components/ModalBookingCode";
import axios from "axios";
import Cookies from "js-cookie";

function RiwayatPesanan() {
  // modal search
  const [openSearch, setOpenSearch] = useState(false);

  // Open modal search
  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  // close modal search
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  const [data, setData] = useState();
  const url = `${import.meta.env.VITE_REACT_APP_API}/order`;
  const fetchData = async () => {
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(amount);
  }

  // Detail Order
  const [displayDetailOrder, setDisplayDetailOrder] = useState(false);
  const [id, setId] = useState(1);

  const filter = data && data.filter((num) => num == id);

  console.log(filter);

  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(amount);
  }
  // Detail Order End
  return (
    <>
      {openSearch ? <ModalBookingCode close={handleCloseSearch} /> : null}
      <div className="font-quickSand">
        {/* Navbar */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {/* Navbar End */}

        {/* Header */}
        <h1 className="mx-6 lg:mx-36 mt-7 mb-4 text-2xl font-bold">Riwayat Pesanan</h1>
        {/* Header End */}

        {/* Bar, Filter, Search Button */}
        <div className="flex justify-end lg:justify-between items-center gap-5 mx-6 lg:mx-36">
          <div className="hidden lg:flex gap-6 items-center w-full px-5 py-3 bg-primary rounded-lg text-white">
            <Link to={"/"}>
              <img src="/icons/arrow_left.svg" alt="" className="invert" />
            </Link>
            <h1>Beranda</h1>
          </div>

          {/* Filter Button */}
          <button type="button" className="flex justify-between items-center gap-3 pl-3 pr-4 py-2 border border-gray-400 rounded-full">
            <img src="/icons/filter_icon.svg" alt="" className="invert" />
            <h1 className="text-sm font-semibold">Filter</h1>
          </button>
          {/* Filter Button End */}

          {/* Search Button */}
          <button type="button">
            <img src="/icons/search_icon.svg" alt="" onClick={handleOpenSearch} className="invert" />
          </button>
          {/* Search Button End */}
        </div>
        {/* Bar, Filter, Search Button End */}

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%,35%] gap-10 mt-4 mx-6 lg:mx-36 pb-28">
          {/* Column 1 */}
          <div className="">
            <div className="flex flex-col gap-5">
              {data &&
                data.map((datas, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setDisplayDetailOrder(!displayDetailOrder);
                        setId(datas.id);
                      }}
                      className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md "
                    >
                      <h1 className={`${datas.booking_status === "UNPAID" ? `bg-red-600` : `bg-green-500`} mb-5 w-fit px-3 py-1 rounded-full text-white text-sm font-semibold`}>{datas.booking_status}</h1>
                      <div className="flex flex-col w-full">
                        <h1 className="text-sm font-semibold mb-4">
                          Passengers:{" "}
                          <span className="font-bold">
                            {datas.info_price.adult_total} Adult, {datas.info_price.child_total} Child
                          </span>
                        </h1>

                        {/* From. Duration, To */}
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
                          {/* From */}
                          <div className="flex gap-2 ustify-center justify-center w-full">
                            <img src="/icons/location-icon.svg" alt="" className="w-8" />
                            <div className="flex flex-col">
                              <h1 className="text-sm font-bold max-w-[100px]">{datas.info_departure_airport.departure_airport}</h1>
                              <h1 className="text-xs font-medium">{datas.info_departure_airport.date}</h1>
                              <h1 className="text-xs font-medium">{datas.info_departure_airport.departure_time}</h1>
                            </div>
                          </div>
                          {/* From End */}

                          {/* Duration */}
                          <div className="flex flex-row lg:flex-col justify-center items-center w-full">
                            <p className="lg:hidden">Duration</p>
                            <h1 className="font-medium">{datas.flight_duration}</h1>
                            <span className="hidden lg:block bg-black w-full h-[1px]"></span>
                          </div>
                          {/* Duration End */}

                          {/* To */}
                          <div className="flex gap-2 justify-center w-full">
                            <img src="/icons/location-icon.svg" alt="" className="w-8" />
                            <div className="flex flex-col">
                              <h1 className="text-sm font-bold">{datas.info_arrival_airport.arrival_airport}</h1>
                              <h1 className="text-xs font-medium">{datas.info_arrival_airport.date}</h1>
                              <h1 className="text-xs font-medium"> {datas.info_arrival_airport.arrival_time}</h1>
                            </div>
                          </div>
                          {/* To End */}
                        </div>
                        {/* From. Duration, To End */}

                        <span className="bg-gray-300 w-full h-[1px] my-3"></span>

                        {/* Booking Code, Class, Total */}
                        <div className="flex flex-col gap-3 justify-between">
                          <div className="flex justify-between gap-4">
                            <div className="flex flex-col text-xs">
                              <h1 className="font-bold">Booking Code:</h1>
                              <h1 className="font-medium">{datas.booking_code}</h1>
                            </div>

                            <div className="flex flex-col text-xs">
                              <h1 className="font-bold">Class:</h1>
                              <h1 className="font-medium">{datas.info_flight.class}</h1>
                            </div>
                          </div>

                          <span className="bg-gray-300 w-full h-[1px]"></span>

                          <div className="flex items-center justify-center gap-5 font-bold">
                            <h1 className="text-xs">TOTAL</h1>
                            <h1 className="text-xl">{formatCurrency(datas.info_price.total_price)}</h1>
                          </div>
                        </div>
                        {/* Booking Code, Class, Total End */}
                      </div>
                    </button>
                  );
                })}
            </div>
            {/* Detail Payment End */}
          </div>
          {/* Column 1 End */}

          {/* Column 2 */}

          {/* Column 2 End */}
        </div>
        {/* Content End */}

        {/* Navbar (Mobile) */}
        <NavbarMobile />
        {/* Navbar (Mobile) End */}
      </div>
    </>
  );
}

export default RiwayatPesanan;
