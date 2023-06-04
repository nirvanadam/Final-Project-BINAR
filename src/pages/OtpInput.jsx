import React from "react";
import { Link } from "react-router-dom";

function OtpInput() {
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
        <form action="" className="flex flex-col items-center">
          <div className="flex gap-5 mb-5">
            <input type="text" name="" id="" className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold" />
            <input type="text" name="" id="" className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold" />
            <input type="text" name="" id="" className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold" />
            <input type="text" name="" id="" className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold" />
            <input type="text" name="" id="" className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold" />
            <input type="text" name="" id="" className="max-w-[35px] h-[35px] border border-slate-500 outline-none rounded-md text-center font-bold" />
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
