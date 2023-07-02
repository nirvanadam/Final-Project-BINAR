import React from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";

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
    <div className=" h-screen bg-primary lg:bg-white flex flex-col items-center font-quickSand">
      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <h1 className="lg:hidden text-white font-semibold text-2xl">Transaksi Berhasil!</h1>
        <div className="flex justify-center items-center mb-3 px-5 py-5 w-fit rounded-full bg-white lg:bg-primary ">
          <img src="/icons/check-icon2.svg" alt="" className=" w-6 h-5 lg:invert" />
        </div>
      </div>
      <div className="fixed flex flex-col justify-center items-center gap-3 bottom-0 lg:top-1/3 bg-white lg:bg-primary w-full h-[65%] lg:h-fit lg:w-fit px-4 lg:py-5 rounded-t-[60px] lg:rounded-xl">
        <h1 className="hidden font-semibold mb-3 lg:text-white">Transaksi Berhasil!</h1>

        <div className="flex flex-col gap-1 w-full ">
          {/* Payment Type */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-500 text-sm font-medium">Payment Type</h1>
            <h1 className=" text-sm font-semibold">Net Banking</h1>
          </div>
          {/* Payment Type End */}

          {/* Bank */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-500 text-sm font-medium">Bank</h1>
            <h1 className=" text-sm font-semibold">HDFC</h1>
          </div>
          {/* Bank End */}

          {/* Mobile */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-500 text-sm font-medium">Mobile</h1>
            <h1 className=" text-sm font-semibold">08123456</h1>
          </div>
          {/* Mobile End */}

          {/* Email */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-gray-500 text-sm font-medium">Email</h1>
            <h1 className=" text-sm font-semibold">nirvan@gmail.com</h1>
          </div>
          {/* Email End */}

          {/* Amount Paid */}
          <div className="mt-3 flex w-full justify-between items-center">
            <h1 className="text-gray-600 font-semibold">Amount Paid</h1>
            <h1 className="font-bold">500</h1>
          </div>
          {/* Amount Paid End */}

          {/* Transaction Id */}
          <div className="mt-3 flex w-full justify-between items-center text-sm">
            <h1 className=" text-gray-500 font-medium">Transaction Id</h1>
            <h1 className="font-semibold">12345678</h1>
          </div>
          {/* Transaction Id End */}

          <div className="flex justify-center gap-3 mt-6">
            <Link className="bg-primary px-7 py-3 rounded-lg text-white text-xs font-medium">PRINT</Link>
            <Link className="bg-primary px-7 py-3 rounded-lg text-white text-xs font-medium">CLOSE</Link>
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
