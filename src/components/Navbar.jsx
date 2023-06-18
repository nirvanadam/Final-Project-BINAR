import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = true;
  return (
    <div className="flex justify-center lg:justify-between items-center bg-primary pt-5 lg:pt-5 pb-32 lg:pb-5 px-3 lg:px-28 rounded-b-lg lg:rounded-none lg:shadow-lg">
      <div className="lg:flex gap-7 lg:w-1/2 items-center">
        {/* Logo */}
        <Link to={"/"}>
          <h1 className="text-2xl font-bold text-white">
            Quick<span className="text-cyan-400">Tix</span>
          </h1>
        </Link>
        {/* Logo End */}

        {/* Search Input */}
        <div className="relative w-full hidden lg:flex items-center rounded-lg bg-white">
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari di sini ..."
            className="w-full bg-transparent rounded-lg px-5 py-2 outline-none font-medium transition placeholder:text-sm placeholder:focus:-translate-y-10 placeholder:transition"
          />

          <button className="absolute right-5">
            <img src="/icons/search_icon.svg" alt="" className="invert opacity-40" />
          </button>
        </div>
        {/* Search Input End */}
      </div>

      {/* Profile Icon [Mobile]*/}
      {/* <button className="lg:hidden">
          <img src="/icons/profile_icon.svg" alt="" className="invert w-[40px]" />
        </button> */}
      {/* Profile Icon [Mobile ]End */}

      {token ? (
        <div className="hidden lg:flex gap-6 items-center">
          <Link to={"/riwayat"} className="transition-all duration-200 active:scale-90">
            <img src="/icons/history_icon.svg" alt="" className="w-7 invert" />
          </Link>
          <Link to={"/notifikasi"} className="transition-all duration-200 active:scale-90">
            <img src="/icons/notification_icon.svg" alt="" className="w-7 invert fill-white" />
          </Link>
          <Link
            to={"/detail-account"}
            className="relative overflow-hidden flex justify-between items-center gap-3 pl-3 pr-4 py-1 rounded-md transition-all group before:content-[''] before:absolute before:-left-2 before:-skew-x-[15deg] before:w-0 before:h-full before:-skew-x-[15deg]d before:bg-white before:transition-all before:duration-500 hover:before:w-[110%]"
          >
            <img src="/icons/profile_icon.svg" alt="" className="w-7 invert transition-all duration-300 group-hover:invert-0" />
            <h1 className="z-10 text-white font-semibold transition-all duration-300 group-hover:text-primary">Hi, Team 3!</h1>
          </Link>
        </div>
      ) : (
        <Link to={"/login"} className="hidden lg:flex justify-center items-center gap-2 px-3 py-2 bg-white rounded-lg font-semibold">
          <img src="/icons/login_icon.svg" alt="" className="w-5" />
          <h1>Login</h1>
        </Link>
      )}

      {/* Login Button */}

      {/* Login Button End */}
    </div>
  );
}

export default Navbar;
