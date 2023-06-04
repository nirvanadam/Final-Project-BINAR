import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

function Dashboard() {
  return (
    <div className="font-quickSand">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-primary py-3 px-5">
        <h1 className="text-2xl font-bold text-white">
          Quick<span className="text-cyan-400">Tix</span>
        </h1>
        <input type="text" name="" id="" className="border rounded-lg" />
        <button>
          <img src="/icons/hamburger_menu.svg" alt="" className="invert w-[40px]" />
        </button>
      </div>
      {/* Navbar End */}

      {/* Header */}
      <div className="relative">
        <img src="/images/poster.svg" alt="" className="" />
        <div className="bg-gradient-to-r from-black from-45% absolute top-0 bottom-0 left-0 right-0" />
        <div className="absolute top-7 left-5">
          <h1 className=" text-white text-2xl italic font-bold">Diskon hari ini!</h1>
          <h1 className="text-secondary text-2xl italic font-bold">85%</h1>
        </div>
      </div>
      {/* Header End*/}

      {/* Main Menu */}
      <form action="" className="flex flex-col mx-4 px-3 py-5 rounded-lg border shadow-md">
        {/* <h1>Pilih Jadwal Penerbangan spesial di Tiketku!</h1> */}
        <div className="grid grid-cols-1 grid-rows-2 gap-6 justify-center items-center">
          {/* Item 1 */}
          <div className="grid grid-cols-[35px,1fr] gap-5">
            <div className="flex flex-col gap-1 items-start border border-black">
              <h1 className="text-sm font-bold">From</h1>
              <img src="/icons/plane_from.svg" alt="" className="w-[30px]" />
            </div>
            <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-black outline-none" />
          </div>
          {/* Item 1 End */}

          {/* Item 2 */}
          <div className="grid grid-cols-[35px,1fr] gap-5 ">
            <div className="flex flex-col gap-1 items-start border border-black">
              <h1 className="text-sm font-bold">To</h1>
              <img src="/icons/plane_to.svg" alt="" className="w-[30px]" />
            </div>
            <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-black outline-none" />
          </div>
          {/* Item 2 End */}

          {/* Item 3 */}
          <div className="grid grid-cols-[35px,1fr] gap-5 ">
            <div className="flex flex-col gap-1 items-start border border-black">
              <h1 className="text-sm font-bold">Departure</h1>
              <img src="/icons/date_icon.svg" alt="" className="w-[30px]" />
            </div>
            <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-black outline-none" />
          </div>
          {/* Item 3 End */}

          {/* Item 4 */}
          <div className="grid grid-cols-[35px,1fr] gap-5 ">
            <div className="flex flex-col gap-1 items-start border border-black">
              <h1 className="text-sm font-bold">Departure</h1>
              <img src="/icons/date_icon.svg" alt="" className="w-[30px]" />
            </div>
            <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-black outline-none" />
          </div>
          {/* Item 4 End */}

          {/* Item 5 & 6 */}

          <div className="grid grid-cols-2 gap-3">
            {/* Item 5 */}
            <div className="grid grid-cols-[35px,1fr] gap-5 ">
              <div className="flex flex-col gap-1 items-start border border-black">
                <h1 className="text-sm font-bold">Passenger</h1>
                <img src="/icons/passengers_icon.svg" alt="" className="w-[30px]" />
              </div>
              <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-black outline-none" />
            </div>
            {/* Item 5 */}

            {/* Item 6 */}
            <div className="grid grid-cols-[35px,1fr] gap-5 ">
              <div className="flex flex-col gap-1 items-start border border-black">
                <h1 className="text-sm font-bold">SeatClass</h1>
                <img src="/icons/seat_icon.svg" alt="" className="w-[30px]" />
              </div>
              <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-black outline-none" />
            </div>
            {/* Item 6 */}
          </div>
          {/* Item 5 & 6 End */}
        </div>

        <button className="mt-5 w-full py-3 rounded-lg bg-primary text-secondary text-sm font-semibold">Cari Penerbangan</button>
      </form>
      {/* Main Menu End */}

      {/* Destinasi Favorit */}
      <div className="mx-4 mt-5 border border-red-700">
        <h1 className="text-lg font-bold">Destinasi Favorit</h1>
        <div className="flex gap-4">
          <button className="flex justify-center items-center gap-3 bg-primary px-4 py-2">
            <img src="/icons/search_icon.svg" alt="" />
            <h1 className="text-secondary">Semua</h1>
          </button>
        </div>
      </div>
      {/* Destinasi Favorit End */}
    </div>
  );
}

export default Dashboard;
