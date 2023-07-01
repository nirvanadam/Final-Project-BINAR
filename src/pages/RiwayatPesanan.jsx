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
  const url = "https://finalproject-develop.up.railway.app/order";
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
  console.log(data);

  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(amount);
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-[70%,30%] gap-10 mt-4 mx-6 lg:mx-36">
          {/* Column 1 */}
          <div className="">
            {/* Date */}
            {/* <div className="flex justify-between items-center">
              <h1 className="font-bold">Maret 2023</h1>
            </div> */}
            {/* Date End */}

            {/* Detail Payment */}

            <div className="flex flex-col gap-5">
              {data &&
                data.map((datas, index) => {
                  return (
                    <div key={index} className="flex flex-col  p-4 border border-gray-400 rounded-lg">
                      <h1 className={`${datas.booking_status === "UNPAID" ? `bg-red-600` : `bg-green-500`} mb-5 w-fit px-3 py-1 rounded-full text-white text-sm font-semibold`}>{datas.booking_status}</h1>
                      <div className="flex flex-col">
                        <h1 className="text-sm font-semibold mb-4">
                          Passengers:{" "}
                          <span className="font-bold">
                            {datas.info_price.adult_total} Adult, {datas.info_price.child_total} Child
                          </span>
                        </h1>

                        {/* From. Duration, To */}
                        <div className="flex justify-between items-center">
                          {/* From */}
                          <div className="flex gap-2 items-start">
                            <img src="/icons/location-icon.svg" alt="" className="w-8" />
                            <div className="flex flex-col border">
                              <h1 className="text-sm font-bold max-w-[100px]">{datas.info_departure_airport.departure_airport}</h1>
                              <h1 className="text-xs font-medium">{datas.info_departure_airport.date}</h1>
                              <h1 className="text-xs font-medium">{datas.info_departure_airport.departure_time}</h1>
                            </div>
                          </div>
                          {/* From End */}

                          {/* Duration */}
                          <div className="flex flex-col justify-center w-1/3 items-center">
                            <h1>{datas.flight_duration}</h1>
                            <span className="bg-black w-full h-[1px]"></span>
                          </div>
                          {/* Duration End */}

                          {/* To */}
                          <div className="flex gap-2 items-start">
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
                        <div className="flex justify-between">
                          <div className="flex gap-4">
                            <div className="flex flex-col text-xs">
                              <h1 className="font-bold">Booking Code:</h1>
                              <h1 className="font-medium">{datas.booking_code}</h1>
                            </div>
                            <div className="flex flex-col text-xs">
                              <h1 className="font-bold">Class:</h1>
                              <h1 className="font-medium">{datas.info_flight.class}</h1>
                            </div>
                          </div>

                          <div className="flex flex-col items-end font-bold">
                            <h1 className="text-xs">TOTAL</h1>
                            <span className="text-base">{formatCurrency(datas.info_price.total_price)}</span>
                          </div>
                        </div>
                        {/* Booking Code, Class, Total End */}
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Detail Payment End */}
          </div>
          {/* Column 1 End */}

          {/* Column 2 */}
          {/* <div className="border border-gray-400">
            <CheckoutDetail></CheckoutDetail>
          </div> */}
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
