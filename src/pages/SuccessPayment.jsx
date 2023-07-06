import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import Cookies from "js-cookie";

function SuccessPayment() {
  const location = useLocation();
  const dataForm = location.state;

  // console.log(dataForm);

  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/payment/invoice`,
        dataForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

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

  return (
    <div className=" h-screen bg-primary lg:bg-white flex flex-col items-center font-quickSand">
      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <h1 className="lg:hidden text-white font-semibold text-2xl">
          Transaksi Berhasil!
        </h1>
        <div className="flex lg:hidden justify-center items-center mb-3 px-5 py-5 w-fit rounded-full bg-white lg:bg-primary ">
          <img
            src="/icons/check-icon2.svg"
            alt=""
            className=" w-5 h-5 lg:invert"
          />
        </div>
      </div>

      <div className="fixed flex flex-col justify-center items-center gap-3 bottom-0 lg:top-[15%] bg-white lg:bg-zinc-200 w-full lg:w-1/3 h-[65%] lg:h-fit px-5 lg:px-10 lg:py-5 rounded-t-[60px] lg:rounded-xl">
        <h1 className="hidden lg:block font-semibold mb-3 lg:text-black">
          Transaksi Berhasil!
        </h1>
        <div className="hidden lg:flex justify-center items-center mb-3 px-5 py-5 w-fit rounded-full bg-white lg:bg-transparent lg:border-2 lg:border-primary ">
          <img src="/icons/check-icon2.svg" alt="" className=" w-5 h-5" />
        </div>

        <div className="flex flex-col gap-1 w-full ">
          {/* Payment Type */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-500 text-sm font-medium">Booking Code</h1>
            <h1 className="text-gray-700 text-sm font-semibold">
              {data?.booking_code}
            </h1>
          </div>
          {/* Payment Type End */}

          {/* Bank */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-500 text-sm font-medium">
              Metode Pembayaran
            </h1>
            <h1 className="text-gray-700 text-sm font-semibold">
              {data?.payment}
            </h1>
          </div>
          {/* Bank End */}

          {/* Adults Info */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-500 text-sm font-medium">
              {data.info_price.adult_total} Adults
            </h1>
            <h1 className="text-gray-700 text-sm font-semibold">
              {formatCurrency(data.info_price.adult_price)}
            </h1>
          </div>
          {/* Adults Info End */}

          {/* Childs Info */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-500 text-sm font-medium">
              {data.info_price.child_total} Childs
            </h1>
            <h1 className="text-gray-700 text-sm font-semibold">
              {formatCurrency(data.info_price.child_price)}
            </h1>
          </div>
          {/* Childs Info End */}

          {/* Tax Info */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-500 text-sm font-medium">Tax 10%</h1>
            <h1 className="text-gray-700 text-sm font-semibold">
              {formatCurrency(data.info_price.tax)}
            </h1>
          </div>
          {/* Tax Info End */}

          <span className="w-full h-[1px] bg-zinc-400 my-5"></span>

          {/* Amount Paid */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-600 font-semibold">Amount Paid</h1>
            <h1 className="text-gray-700 font-bold">
              {formatCurrency(data.info_price.total_price)}
            </h1>
          </div>
          {/* Amount Paid End */}

          <span className="w-full h-[1px] bg-zinc-400 my-5"></span>

          <div className="flex justify-center gap-1">
            <button className="flex gap-2 justify-center items-center bg-primary px-8 py-3 rounded-lg text-white text-xs font-medium">
              <img src="/icons/print-icon.svg" alt="" className="w-5 invert" />
              PRINT
            </button>
            <button className="flex items-center bg-primary px-8 py-3 rounded-lg">
              <img src="/icons/qr-icon.svg" alt="" className="w-5 invert" />
            </button>
            <Link
              to="/"
              className="flex items-center bg-primary px-8 py-3 rounded-lg text-white text-xs font-medium"
            >
              CLOSE
            </Link>
          </div>
        </div>
        {/* <Link to="/" className="bg-primary lg:bg-white rounded-full text-white lg:text-black font-medium px-5 py-3">
          Cari Penerbangan Lain
        </Link> */}
      </div>
    </div>
  );
}

export default SuccessPayment;
