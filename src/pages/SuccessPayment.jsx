import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import Cookies from "js-cookie";
import "animate.css";

function SuccessPayment() {
  const location = useLocation();
  const dataForm = location.state;

  // console.log(dataForm);

  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/payment/invoice`, dataForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data);

  // Get Ticket & QR
  const order_id = location.state.order_id;
  const [ticket, setTicket] = useState();
  const [displayTicket, setDisplayTicket] = useState(false);
  const [displayQr, setDisplayQr] = useState(false);

  const fetchTicket = async () => {
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/ticket?order_id=${order_id}`);
      setTicket(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(ticket);
  // Get Ticket & QR End

  useEffect(() => {
    fetchData();
    fetchTicket();
  }, []);

  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(amount);
  }

  return (
    <div className="relative h-screen bg-primary lg:bg-zinc-200 flex flex-col items-center font-quickSand">
      <div className="flex lg:fixed flex-col justify-center items-center gap-3 bottom-0 lg:top-[5%] bg-white lg:bg-white w-full lg:w-1/3 h-full lg:h-fit px-5 lg:px-4 lg:py-5 lg:rounded-xl">
        <div className="flex flex-col gap-3 w-full ">
          <div className="flex flex-col gap-2 px-3 py-5 bg-gray-200 rounded-lg">
            {/* Payment Type */}
            <div className="flex w-full justify-between items-center">
              <h1 className="text-black text-sm font-medium">Booking Code</h1>
              <h1 className="text-black text-sm font-semibold">{data?.booking_code}</h1>
            </div>
            {/* Payment Type End */}

            {/* Bank */}
            <div className="flex w-full justify-between items-center">
              <h1 className="text-black text-sm font-medium">Metode Pembayaran</h1>
              <h1 className="text-black text-sm font-semibold">{data?.payment}</h1>
            </div>
            {/* Bank End */}
          </div>

          <div className="flex flex-col gap-2 px-3 py-5 bg-gray-200 rounded-lg">
            {/* Adults Info */}
            <div className="flex w-full justify-between items-center">
              <h1 className="text-black text-sm font-medium">{data?.info_price.adult_total} Adults</h1>
              <h1 className="text-black text-sm font-semibold">{formatCurrency(data?.info_price.adult_price)}</h1>
            </div>
            {/* Adults Info End */}

            {/* Childs Info */}
            <div className="flex w-full justify-between items-center">
              <h1 className="text-black text-sm font-medium">{data?.info_price.child_total} Childs</h1>
              <h1 className="text-black text-sm font-semibold">{formatCurrency(data?.info_price.child_price)}</h1>
            </div>
            {/* Childs Info End */}

            {/* Tax Info */}
            <div className="flex w-full justify-between items-center">
              <h1 className="text-black text-sm font-medium">Tax 10%</h1>
              <h1 className="text-black text-sm font-semibold">{formatCurrency(data?.info_price.tax)}</h1>
            </div>
            {/* Tax Info End */}
          </div>

          {/* <span className="w-full h-[1px] bg-zinc-400 my-5"></span> */}

          {/* Amount Paid */}
          <div className="flex w-full justify-between items-center px-3 py-5 bg-gray-200 rounded-lg">
            <h1 className="text-black text-lg font-medium">Amount Paid</h1>
            <h1 className="text-black text-lg font-semibold">{formatCurrency(data?.info_price.total_price)}</h1>
          </div>
          {/* Amount Paid End */}

          {/* <span className="w-full h-[1px] bg-zinc-400 my-5"></span> */}

          <div className="flex gap-1">
            <img src={ticket?.qr} alt="" className="w-1/2" />
            <div className="flex flex-col gap-2 bg-gray-200 p-4 w-full rounded-lg">
              <div className="flex flex-row h-full justify-center items-center gap-3">
                <img src="/images/quicktix-logo.png" alt="" className="w-8" />
                <h1 className="lg:order-2 text-2xl font-bold text-primary">
                  Quick<span className="text-secondary">Tix</span>
                </h1>
              </div>
              <button onClick={() => setDisplayTicket(!displayTicket)} className="flex gap-2 justify-center items-center w-full bg-black px-8 py-3 rounded-lg text-white text-sm font-semibold">
                <img src="/icons/print-icon.svg" alt="" className="w-5 invert" />
                PRINT
              </button>
              <Link to="/" className="flex justify-center items-center bg-black px-8 py-3 rounded-lg text-white text-sm font-semibold">
                CLOSE
              </Link>
            </div>
            {/* <button onClick={() => setDisplayQr(!displayQr)} className="flex items-center bg-primary  rounded-lg">
              <img src="/icons/qr-icon.svg" alt="" className=" invert" />
            </button> */}
          </div>
        </div>
        {/* <Link to="/" className="bg-primary lg:bg-white rounded-full text-white lg:text-black font-medium px-5 py-3">
          Cari Penerbangan Lain
        </Link> */}
      </div>

      {displayTicket && (
        <div className="absolute flex justify-center items-center w-full h-screen bg-primary">
          <img src={ticket?.image} alt="" className="w-3/4 z-20 animate__animated animate__fadeIn" />
          <button onClick={() => setDisplayTicket(!displayTicket)} className="absolute w-full z-10 h-screen cursor-default"></button>
        </div>
      )}
    </div>
  );
}

export default SuccessPayment;
