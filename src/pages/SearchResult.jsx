import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlightResult from "../components/FlightResult";
import Loading from "../components/search-result/Loading";
import Sorry from "../components/search-result/Sorry";

function SearchResult() {
  return (
    <div className="font-quickSand overflow-hidden">
      {/* Navbar */}
      <div className="hidden lg:flex justify-center lg:justify-between items-center bg-primary pt-5 pb-32 lg:pb-5 px-3 lg:px-28 rounded-b-lg lg:rounded-none lg:shadow-lg">
        {/* Hamburger Menu */}
        {/* <button className="lg:hidden">
          <img src="/icons/hamburger_menu.svg" alt="" className="invert w-[40px]" />
        </button> */}
        {/* Hamburger Menu End */}

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

        {/* Login Button */}
        <Link to={"/login"} className="hidden lg:flex justify-center items-center gap-2 px-3 py-2 bg-white rounded-lg font-semibold">
          <img src="/icons/login_icon.svg" alt="" className="w-5" />
          <h1>Login</h1>
        </Link>
        {/* Login Button End */}
      </div>
      {/* Navbar End */}

      {/* Header */}
      <div className="lg:mt-12 lg:mx-36">
        <h1 className="hidden lg:block text-xl font-bold mb-8">Pilih Penerbangan</h1>

        {/* Container Info Destination & Ubah Pencarian Button */}
        <div className="flex gap-3">
          {/* Info Destination */}
          <div className="relative flex justify-center w-full bg-primary py-4 lg:rounded-xl">
            <button className="absolute left-3 md:left-5">
              <img src="/icons/arrow_left.svg" alt="" className="invert" />
            </button>

            <div className="flex self-center items-center gap-1">
              <h1 className=" text-white font-bold">JKT</h1>
              <img src="/icons/navigate_next_icon.svg" alt="" className="invert w-5" />
              <h1 className=" text-white font-bold">MLB</h1>
              <h1 className=" text-white font-medium">- 2 Penumpang</h1>
              <h1 className=" text-white font-medium">- Ekonomy</h1>
            </div>
          </div>
          {/* Info Destination End */}

          {/* Ubah Pencarian Button */}
          <button className="hidden lg:inline basis-1/4 bg-secondary rounded-xl font-bold">Ubah Pencarian</button>
          {/* Ubah Pencarian Button End */}
        </div>
        {/* Container Info Destination & Ubah Pencarian Button End */}

        {/* Date List */}
        <div className="overflow-auto flex gap-3 divide-x divide-gray-300 lg:mt-3 py-3 px-2 border-b border-gray-300">
          <div className="flex flex-col justify-center items-center px-3">
            <h1 className="font-bold">Selasa</h1>
            <h1 className="text-sm font-medium text-gray-500">01/03/2023</h1>
          </div>
          <div className="flex flex-col justify-center items-center px-3 py-1">
            <h1 className="font-bold">Selasa</h1>
            <h1 className="text-sm font-medium text-gray-500">01/03/2023</h1>
          </div>
          <div className="flex flex-col justify-center items-center px-3">
            <h1 className="font-bold">Selasa</h1>
            <h1 className="text-sm font-medium text-gray-500">01/03/2023</h1>
          </div>
          <div className="flex flex-col justify-center items-center px-3">
            <h1 className="font-bold">Selasa</h1>
            <h1 className="text-sm font-medium text-gray-500">01/03/2023</h1>
          </div>
          <div className="flex flex-col justify-center items-center px-3">
            <h1 className="font-bold">Selasa</h1>
            <h1 className="text-sm font-medium text-gray-500">01/03/2023</h1>
          </div>
          <div className="flex flex-col justify-center items-center px-3">
            <h1 className="font-bold">Selasa</h1>
            <h1 className="text-sm font-medium text-gray-500">01/03/2023</h1>
          </div>
          <div className="flex flex-col justify-center items-center px-3">
            <h1 className="font-bold">Selasa</h1>
            <h1 className="text-sm font-medium text-gray-500">01/03/2023</h1>
          </div>
          <div className="flex flex-col justify-center items-center px-3">
            <h1 className="font-bold">Selasa</h1>
            <h1 className="text-sm font-medium text-gray-500">01/03/2023</h1>
          </div>
        </div>
        {/* Date List */}
      </div>
      {/* Header End */}

      {/* Filter & Sort Button [Mobile & Tablet] */}
      <div className="flex justify-between mt-3 md:mx-10 lg:mt-6 px-4 lg:px-0 lg:mx-36">
        {/* Filter Button */}
        <button className="flex lg:hidden items-center gap-2 py-1 px-2 border border-gray-300 rounded-full">
          <img src="/icons/filter_icon.svg" alt="" className="w-5" />
          <h1 className="text-sm font-semibold">Filter</h1>
        </button>
        {/* Filter Button End */}

        {/* Sort Button [Mobile]*/}
        <button className="flex lg:ml-auto items-center gap-2 py-1 lg:py-2 px-2 lg:px-3 border border-gray-300 rounded-full">
          <img src="/icons/sort_icon.svg" alt="" className="w-5" />
          <h1 className="text-sm font-semibold">Termurah</h1>
        </button>
        {/* Sort Button End [Mobile]*/}
      </div>
      {/* Filter & Sort Button [Mobile & Tablet]End */}

      {/* Main Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-9 mt-4 lg:mt-5 md:mx-10 lg:mx-36">
        {/* Filter Container */}
        <div className="hidden lg:flex flex-col h-fit p-5 border border-gray-200 shadow-md rounded-xl">
          <h1 className="font-bold mb-3">Filter</h1>
          <div className="flex flex-col divide-y divide-gray-400">
            {/* Transit Filter Button */}
            <button className="flex justify-between py-4 px-1">
              <div className="flex gap-2 items-center">
                <img src="/icons/map_icon.svg" alt="" className="w-6 opacity-60" />
                <h1 className="font-semibold">Transit</h1>
              </div>
              <img src="/icons/navigate_next_icon.svg" alt="" className="w-6 opacity-50" />
            </button>
            {/* Transit Filter Button End */}

            {/* Fasilitas Filter Button */}
            <button className="flex justify-between py-4 px-1">
              <div className="flex gap-2 items-center">
                <img src="/icons/building_icon.svg" alt="" className="w-6 opacity-60" />
                <h1 className="font-semibold">Fasilitas</h1>
              </div>
              <img src="/icons/navigate_next_icon.svg" alt="" className="w-6 opacity-60" />
            </button>
            {/* Fasilitas Filter Button End */}

            {/* Harga Filter Button */}
            <button className="flex justify-between py-4 px-1">
              <div className="flex gap-2 items-center">
                <img src="/icons/price_icon.svg" alt="" className="w-6 opacity-60" />
                <h1 className="font-semibold">Harga</h1>
              </div>
              <img src="/icons/navigate_next_icon.svg" alt="" className="w-6 opacity-60" />
            </button>
            {/* Harga Filter Button End */}
          </div>
        </div>
        {/* Filter Container End */}

        {/* Content */}
        {/* <FlightResult /> */}
        {/* <Loading /> */}
        <Sorry />
        {/* Content End */}
      </div>
      {/* Main Content Container End*/}
    </div>
  );
}

export default SearchResult;
