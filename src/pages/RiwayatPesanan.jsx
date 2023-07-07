import React, { useState, useEffect } from "react";
import NavbarMobile from "../components/NavbarMobile";
import Navbar from "../components/Navbar";
import CheckoutDetail from "../components/checkout/CheckoutDetail";
import { Link, useNavigate } from "react-router-dom";
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
  const [id, setId] = useState();
  console.log(id);

  const handleClick = (id) => {
    const person = data.find((person) => person.id == id);
    setId(person);
  };

  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(amount);
  }

  const navigate = useNavigate();
  const handleOnClickBayar = (async) => {
    const order_id = id.id;
    console.log(order_id);
    navigate("/payment", { state: order_id });
  };

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
        <h1 className="mx-6 lg:mx-36 mt-7 mb-4 text-2xl font-bold">
          Riwayat Pesanan
        </h1>
        {/* Header End */}

        {/* Bar, id, Search Button */}
        <div className="flex justify-end lg:justify-between items-center gap-5 mx-6 lg:mx-36">
          <div className="hidden lg:flex gap-6 items-center w-full px-5 py-3 bg-primary rounded-lg text-white">
            <Link to={"/"}>
              <img src="/icons/arrow_left.svg" alt="" className="invert" />
            </Link>
            <h1>Beranda</h1>
          </div>

          {/* id Button */}
          <button
            type="button"
            className="flex justify-between items-center gap-3 pl-3 pr-4 py-2 border border-gray-400 rounded-full"
          >
            <img src="/icons/id_icon.svg" alt="" className="invert" />
            <h1 className="text-sm font-semibold"></h1>
          </button>
          {/* id Button End */}

          {/* Search Button */}
          <button type="button">
            <img
              src="/icons/search_icon.svg"
              alt=""
              onClick={handleOpenSearch}
              className="invert"
            />
          </button>
          {/* Search Button End */}
        </div>
        {/* Bar, id, Search Button End */}

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
                        setDisplayDetailOrder(true);
                        handleClick(datas.id);
                      }}
                      className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md "
                    >
                      <h1
                        className={`${
                          datas.booking_status === "UNPAID"
                            ? `bg-red-600`
                            : `bg-green-500`
                        } mb-5 w-fit px-3 py-1 rounded-full text-white text-sm font-semibold`}
                      >
                        {datas.booking_status}
                      </h1>
                      <div className="flex flex-col w-full">
                        <h1 className="text-sm font-semibold mb-4">
                          Passengers:{" "}
                          <span className="font-bold">
                            {datas.info_price.adult_total} Adult,{" "}
                            {datas.info_price.child_total} Child
                          </span>
                        </h1>

                        {/* From. Duration, To */}
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
                          {/* From */}
                          <div className="flex gap-2 ustify-center justify-center w-full">
                            <img
                              src="/icons/location-icon.svg"
                              alt=""
                              className="w-8"
                            />
                            <div className="flex flex-col">
                              <h1 className="text-sm font-bold max-w-[100px]">
                                {datas.info_departure_airport.departure_airport}
                              </h1>
                              <h1 className="text-xs font-medium">
                                {datas.info_departure_airport.date}
                              </h1>
                              <h1 className="text-xs font-medium">
                                {datas.info_departure_airport.departure_time}
                              </h1>
                            </div>
                          </div>
                          {/* From End */}

                          {/* Duration */}
                          <div className="flex flex-row lg:flex-col justify-center items-center w-full">
                            <p className="lg:hidden">Duration</p>
                            <h1 className="font-medium">
                              {datas.flight_duration}
                            </h1>
                            <span className="hidden lg:block bg-black w-full h-[1px]"></span>
                          </div>
                          {/* Duration End */}

                          {/* To */}
                          <div className="flex gap-2 justify-center w-full">
                            <img
                              src="/icons/location-icon.svg"
                              alt=""
                              className="w-8"
                            />
                            <div className="flex flex-col">
                              <h1 className="text-sm font-bold">
                                {datas.info_arrival_airport.arrival_airport}
                              </h1>
                              <h1 className="text-xs font-medium">
                                {datas.info_arrival_airport.date}
                              </h1>
                              <h1 className="text-xs font-medium">
                                {" "}
                                {datas.info_arrival_airport.arrival_time}
                              </h1>
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
                              <h1 className="font-medium">
                                {datas.booking_code}
                              </h1>
                            </div>

                            <div className="flex flex-col text-xs">
                              <h1 className="font-bold">Class:</h1>
                              <h1 className="font-medium">
                                {datas.info_flight.class}
                              </h1>
                            </div>
                          </div>

                          <span className="bg-gray-300 w-full h-[1px]"></span>

                          <div className="flex items-center justify-center gap-5 font-bold">
                            <h1 className="text-xs">TOTAL</h1>
                            <h1 className="text-xl">
                              {formatCurrency(datas.info_price.total_price)}
                            </h1>
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
          <div>
            {id && displayDetailOrder && (
              <div className={`mx-4 mt-3`}>
                <h1 className="hidden lg:block mb-3 text-lg font-bold">
                  Detail Pesanan
                </h1>
                <div className="flex justify-between">
                  <h1 className="hidden lg:block mb-3 font-bold">
                    {id.booking_status === "UNPAID"
                      ? "Booking Code"
                      : "Ticket Code"}
                  </h1>
                  <h1 className="hidden lg:block mb-3 font-semibold">
                    {id.booking_status === "UNPAID"
                      ? id.booking_code
                      : id.ticket_code}
                  </h1>
                </div>
                {/* Flight Information */}
                <div className="flex flex-col ">
                  {/* Keberangkatan */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <h1 className="font-bold">
                          {id.info_departure_airport.departure_time}
                        </h1>
                        <h1 className="text-sm font-semibold">
                          {id.info_departure_airport.date}
                        </h1>
                      </div>
                      <h1 className="text-sm font-semibold">Keberangkatan</h1>
                    </div>

                    <h1 className="text-sm font-semibold">
                      Bandara {id.info_departure_airport.departure_airport}
                    </h1>
                  </div>
                  {/* Keberangkatan End */}

                  {/* Flight Info */}
                  <div className="flex items-center gap-5 py-3 my-3 border-y border-gray-400">
                    <img
                      src=""
                      alt=""
                      className="w-[5%] h-[5%] order border-red-500"
                    />
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <h1 className="font-bold">
                          {id.info_flight.airline_name} - {id.info_flight.class}
                        </h1>

                        <h1 className="font-bold">
                          {id.info_flight.airplane_code}
                        </h1>
                      </div>

                      <div className="flex flex-col">
                        <h1 className="font-bold">Informasi</h1>
                        {id.penumpangDewasa.length != 0 ? (
                          id.penumpangDewasa.map((penumpang, index) => {
                            return (
                              <h1>
                                Penumpang Dewasa {index + 1}:{" "}
                                {penumpang.penumpang}
                              </h1>
                            );
                          })
                        ) : (
                          <h1>-</h1>
                        )}

                        {id.penumpangAnak.length != 0 ? (
                          id.penumpangAnak.map((penumpang, index) => {
                            return (
                              <h1>
                                Penumpang Anak {index + 1}:{" "}
                                {penumpang.penumpang}
                              </h1>
                            );
                          })
                        ) : (
                          <h1>-</h1>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Flight Info */}

                  {/* Kedatangan */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <h1 className="font-bold">
                          {id.info_arrival_airport.arrival_time}
                        </h1>
                        <h1 className="text-sm font-semibold">
                          {id.info_arrival_airport.arrival_date}
                        </h1>
                      </div>
                      <h1 className="text-sm font-semibold">Kedatangan</h1>
                    </div>

                    <h1 className="text-sm font-semibold">
                      Bandara {id.info_arrival_airport.arrival_airport}
                    </h1>
                  </div>
                  {/* Kedatangan End */}
                </div>
                {/* Flight Information End */}

                {/* Rincian Harga */}
                <div className="flex flex-col mx-4 mt-4 pt-2 border-t border-gray-400">
                  <h1 className="font-bold">Rincian Harga</h1>

                  {/* Detail Passenger */}
                  <div className="pb-2 text-sm font-semibold">
                    <div className="flex justify-between">
                      <h1>{id.info_price.adult_total} Adults</h1>
                      <h1>{formatCurrency(id.info_price.adult_price)}</h1>
                    </div>
                    <div className="flex justify-between ">
                      <h1>{id.info_price.child_total} Childs</h1>
                      <h1>{formatCurrency(id.info_price.child_price)}</h1>
                    </div>
                    <div className="flex justify-between ">
                      <h1>Tax</h1>
                      <h1>{formatCurrency(id.info_price.tax)}</h1>
                    </div>
                  </div>
                  {/* Detail Passenger End */}

                  {/* Total */}
                  <div className="flex justify-between pt-2 border-t border-gray-400 text-lg font-bold ">
                    <h1>Total</h1>
                    <h1>{formatCurrency(id.info_price.total_price)}</h1>
                  </div>
                  {/* Total End */}
                </div>
                {/* Rincian Harga End */}

                {/* Payment Button */}
                {id.booking_status === "UNPAID" ? (
                  <form>
                    <button
                      type="submit"
                      onClick={handleOnClickBayar}
                      className="w-full mt-5 bg-red-500 py-4 rounded-lg text-white font-medium"
                    >
                      Bayar
                    </button>
                  </form>
                ) : (
                  <button
                    type="button"
                    className="w-full mt-5 bg-green-500 py-4 rounded-lg text-white font-medium"
                  >
                    Cetak Tiket
                  </button>
                )}
                {/* Payment Button End */}
              </div>
            )}
          </div>
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
