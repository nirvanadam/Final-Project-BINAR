import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OtpInput() {
  const location = useLocation();
  const user_id = location.state.id;
  // console.log(user_id);
  const email = location.state.email;

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
    await axios.post(`${import.meta.env.VITE_REACT_APP_API}/validasi`, {
      user_id,
      otp: +otp,
    });
    navigate(`/login`);
  };

  const handleSubmitOtp = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/sendotp?user_id=${user_id}`);
      toast.success(response.data.message);
      disableResendButton();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const [countdown, setCountdown] = useState(30);
  const [showButton, setShowButton] = useState(false);

  const disableResendButton = () => {
    setCountdown(30);
    setShowButton(false);
  };

  useEffect(() => {
    let interval = null;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setShowButton(true);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden font-quickSand">
      <div className=" flex flex-col items-center px-10 py-11">
        <Link to={"/register"} className="absolute top-5 left-5 self-start">
          <img src="/icons/arrow_left.svg" alt="" />
        </Link>

        <h1 className="text-2xl font-bold mb-5">Masukkan Kode OTP</h1>
        <p className="text-xs font-medium mb-5">
          Ketik 6 digit kode yang dikirimkan ke <span className="font-bold">{email}</span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex gap-2 md:gap-5 mb-5">
            <input
              type="text"
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
              className="w-[38px] h-[38px] lg:w-[50px] lg:h-[50px]  border-2 border-zinc-300 outline-none rounded-md text-center lg:text-2xl  font-bold"
            />
            <input
              type="text"
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
              className="w-[38px] h-[38px] lg:w-[50px] lg:h-[50px]  border-2 border-zinc-300 outline-none rounded-md text-center lg:text-2xl font-bold"
            />
            <input
              type="text"
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
              className="w-[38px] h-[38px] lg:w-[50px] lg:h-[50px]  border-2 border-zinc-300 outline-none rounded-md text-center lg:text-2xl font-bold"
            />
            <input
              type="text"
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
              className="w-[38px] h-[38px] lg:w-[50px] lg:h-[50px]  border-2 border-zinc-300 outline-none rounded-md text-center lg:text-2xl font-bold"
            />
            <input
              type="text"
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
              className="w-[38px] h-[38px] lg:w-[50px] lg:h-[50px]  border-2 border-zinc-300 outline-none rounded-md text-center lg:text-2xl font-bold"
            />
            <input
              type="text"
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
              className="w-[38px] h-[38px] lg:w-[50px] lg:h-[50px]  border-2 border-zinc-300 outline-none rounded-md text-center lg:text-2xl font-bold"
            />
          </div>
          <p className="text-xs font-bold mb-16">
            {countdown > 0 ? <p>Resend OTP in {countdown} seconds</p> : <p></p>}
            {showButton && <button onClick={handleSubmitOtp}>Resend OTP</button>}
          </p>

          <button type="submit" className="bg-primary text-white font-medium w-full rounded-xl py-4">
            Verify
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default OtpInput;
