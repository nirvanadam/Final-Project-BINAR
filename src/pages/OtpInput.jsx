import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function OtpInput() {
  const location = useLocation();
  const user_id = location.state;
  console.log(user_id);

  const navigate = useNavigate();

  const [inputOtp1, setInputOtp1] = useState();
  const [inputOtp2, setInputOtp2] = useState();
  const [inputOtp3, setInputOtp3] = useState();
  const [inputOtp4, setInputOtp4] = useState();
  const [inputOtp5, setInputOtp5] = useState();
  const [inputOtp6, setInputOtp6] = useState();

  const otp = `${inputOtp1}${inputOtp2}${inputOtp3}${inputOtp4}${inputOtp5}${inputOtp6}`;
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("https://finalproject-develop.up.railway.app/validasi", { user_id, otp: +otp });
    navigate(`/login`);
  };

  console.log(otp);

  return (
    <div className="h-screen overflow-hidden font-quickSand">
      {/* Header */}
      <div className="bg-primary px-10 py-4 shadow-lg">
        <h1 className="text-xl text-white font-bold">QuickTix</h1>
      </div>
      {/* Header End */}

      <div className=" relative flex flex-col items-center px-10 py-11">
        <Link to={"/register"} className="absolute top-5 left-5 self-start">
          <img src="/icons/arrow_left.svg" alt="" />
        </Link>

        <h1 className="text-2xl font-bold mb-5">Masukkan OTP</h1>
        <p className="text-xs font-medium mb-5">
          Ketik 6 digit kode yang dikirimkan ke <span className="font-bold">J*****@gmail.com</span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex gap-5 mb-5">
            <input
              type="number"
              name=""
              id=""
              value={inputOtp1}
              onChange={(e) => {
                const { value } = e.target;
                const numericValue = value.replace(/\D/g, "");
                const singleDigitValue = numericValue.replace(/\D/g, "");
                setInputOtp1(singleDigitValue.slice(0, 1));
              }}
              maxLength={1}
              className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold"
            />
            <input
              type="number"
              name=""
              id=""
              value={inputOtp2}
              onChange={(e) => {
                const { value } = e.target;
                const numericValue = value.replace(/\D/g, "");
                const singleDigitValue = numericValue.replace(/\D/g, "");
                setInputOtp2(singleDigitValue.slice(0, 1));
              }}
              maxLength={1}
              className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold"
            />
            <input
              type="number"
              name=""
              id=""
              value={inputOtp3}
              onChange={(e) => {
                const { value } = e.target;
                const numericValue = value.replace(/\D/g, "");
                const singleDigitValue = numericValue.replace(/\D/g, "");
                setInputOtp3(singleDigitValue.slice(0, 1));
              }}
              maxLength={1}
              className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold"
            />
            <input
              type="number"
              name=""
              id=""
              value={inputOtp4}
              onChange={(e) => {
                const { value } = e.target;
                const numericValue = value.replace(/\D/g, "");
                const singleDigitValue = numericValue.replace(/\D/g, "");
                setInputOtp4(singleDigitValue.slice(0, 1));
              }}
              maxLength={1}
              className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold"
            />
            <input
              type="number"
              name=""
              id=""
              value={inputOtp5}
              onChange={(e) => {
                const { value } = e.target;
                const numericValue = value.replace(/\D/g, "");
                const singleDigitValue = numericValue.replace(/\D/g, "");
                setInputOtp5(singleDigitValue.slice(0, 1));
              }}
              maxLength={1}
              className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold"
            />
            <input
              type="number"
              name=""
              id=""
              value={inputOtp6}
              onChange={(e) => {
                const { value } = e.target;
                const numericValue = value.replace(/\D/g, "");
                const singleDigitValue = numericValue.replace(/\D/g, "");
                setInputOtp6(singleDigitValue.slice(0, 1));
              }}
              maxLength={1}
              className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold"
            />
          </div>
          <p className="text-xs font-bold mb-16">Kirim ulang OTP dalam 60 detik</p>

          <button type="submit" className="bg-primary text-white text-xs font-semibold w-full rounded-xl py-2">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpInput;
