import React from "react";
import NavbarMobile from "../components/NavbarMobile";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Notifikasi() {
  return (
    <div className="font-quickSand">
      {/* Navbar */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
      {/* Navbar End */}

      {/* Header */}
      <h1 className="mx-6 lg:mx-36 mt-7 mb-4 text-2xl font-bold">Notifikasi</h1>
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
          <img src="/icons/search_icon.svg" alt="" className="invert" />
        </button>
        {/* Search Button End */}
      </div>
      {/* Bar, Filter, Search Button End */}

      <div className="flex flex-col mx-7 lg:mx-36 my-4">
        <div className="flex gap-2 items-start">
          <img src="/icons/notification-icon-solid.svg" alt="" className="w-6 invert bg-black" />
          <div className="w-full flex flex-col">
            <div className="flex justify-between text-sm font-medium text-gray-500">
              <h1>Promosi</h1>
              <h1>20 Maret, 14:04</h1>
            </div>
            <h1 className="font-semibold">Dapatkan Potongan 50% Tiket!</h1>
            <h1 className="text-sm font-medium text-gray-600">Syarat ketentuan berlaku!</h1>
          </div>
        </div>

        <span className="w-full h-[1px] bg-gray-400 my-4"></span>

        <div className="flex gap-2 items-start">
          <img src="/icons/notification-icon-solid.svg" alt="" className="w-6 invert bg-black" />
          <div className="w-full flex flex-col">
            <div className="flex justify-between text-sm font-medium text-gray-500">
              <h1>Promosi</h1>
              <h1>20 Maret, 14:04</h1>
            </div>
            <h1 className="font-semibold">Dapatkan Potongan 50% Tiket!</h1>
            <h1 className="text-sm font-medium text-gray-600">Syarat ketentuan berlaku!</h1>
          </div>
        </div>
      </div>

      {/* navbar */}
      <NavbarMobile />
      {/* navbar end */}
    </div>
  );
}

export default Notifikasi;
