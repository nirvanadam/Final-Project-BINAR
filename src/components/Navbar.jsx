import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center lg:justify-between items-center bg-primary pt-5 lg:pt-5 pb-32 lg:pb-5 px-3 lg:px-28 rounded-b-lg lg:rounded-none lg:shadow-lg">
      <div className="lg:flex gap-7 lg:w-1/2 items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Quick<span className="text-cyan-400">Tix</span>
        </h1>
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
            <img
              src="/icons/search_icon.svg"
              alt=""
              className="invert opacity-40"
            />
          </button>
        </div>
        {/* Search Input End */}
      </div>

      {/* Profile Icon [Mobile]*/}
      {/* <button className="lg:hidden">
          <img src="/icons/profile_icon.svg" alt="" className="invert w-[40px]" />
        </button> */}
      {/* Profile Icon [Mobile ]End */}

      {/* Login Button */}
      <Link
        to={"/login"}
        className="hidden lg:flex justify-center items-center gap-2 px-3 py-2 bg-white rounded-lg font-semibold"
      >
        <img src="/icons/login_icon.svg" alt="" className="w-5" />
        <h1>Login</h1>
      </Link>
      {/* Login Button End */}
    </div>
  );
}

export default Navbar;
