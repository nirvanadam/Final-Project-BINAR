import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="font-quickSand overflow-hidden">
      {/* Navbar */}
      <div className="flex justify-center lg:justify-between items-center bg-primary pt-5 lg:pt-5 pb-32 lg:pb-5 px-3 lg:px-28 rounded-b-lg lg:rounded-none lg:shadow-lg">
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
      <div className="hidden lg:block relative">
        <div className="relative overflow-hidden mt-8 mx-28 h-72 bg-[url('/images/poster.svg')] bg-cover bg-no-repeat bg-center rounded-xl before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-r from-primary from-25%">
          <div className="absolute top-16 left-16">
            <h1 className="mb-2 text-4xl italic text-white font-bold">Diskon Hari Ini!</h1>
            <h1 className="text-4xl italic text-secondary font-bold">85%</h1>
          </div>
        </div>
        <div className="absolute top-[20%] bottom-1/2 -z-10 w-full h-48 bg-gray-800"></div>
      </div>
      {/* Header End*/}

      {/* Main Form */}
      <div className="-translate-y-24 lg:-translate-y-24 ">
        <form action="" className="flex flex-col bg-white mx-4 md:mx-8 lg:mx-56 px-3 lg:px-7  py-5 rounded-lg border shadow-md">
          <h1 className="hidden lg:block text-lg font-bold mb-6">
            Pilih Jadwal Penerbangan Spesial di <span className="text-secondary">QuickTix!</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-6 lg:gap-y-16 lg:gap-x-12 justify-center items-center">
            {/* From */}
            <div className="grid grid-cols-[35px,1fr] gap-5">
              <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                <h1 className="text-slate-400 text-sm font-bold lg:order-last">From</h1>
                <img src="/icons/plane_from.svg" alt="" className="w-[30px] opacity-50 group/input" />
              </div>
              <div className="relative self-end lg:ml-10">
                <input type="text" name="" id="" className="self-end w-[85%] h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none group-focus/input:opacity-100" />

                <button type="button" className="absolute translate-y-3 bottom-0 right-2 flex justify-center items-center py-1 px-1 bg-slate-300 rounded-full">
                  <img src="/icons/swap_icon.svg" alt="" />
                </button>
              </div>
            </div>
            {/* From End */}

            {/* To */}
            <div className="grid grid-cols-[35px,1fr] gap-5">
              <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                <h1 className="text-slate-400 text-sm font-bold lg:order-last">To</h1>
                <img src="/icons/plane_to.svg" alt="" className="w-[30px] opacity-50" />
              </div>
              <div className="lg:ml-10">
                <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none" />
              </div>
            </div>
            {/* To End */}

            {/* Departure & Return */}
            <div className="grid lg:grid-cols-2 gap-5">
              {/* Departure */}
              <div className="lg:relative grid grid-cols-[35px,1fr] gap-5 ">
                <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                  <h1 className="lg:absolute -top-4 left-14 text-slate-400 text-sm font-bold lg:order-last">Departure</h1>
                  <img src="/icons/date_icon.svg" alt="" className="w-[30px] opacity-50" />
                </div>

                <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none" />
              </div>
              {/* Departure End */}

              {/* Return */}
              <div className="lg:relative grid grid-cols-[35px,1fr] gap-5 ">
                <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                  <h1 className="lg:absolute -top-4 left-14 text-slate-400 text-sm font-bold lg:order-last">Return</h1>
                  <img src="/icons/date_icon.svg" alt="" className="w-[30px] opacity-50" />
                </div>
                <div className="relative self-end">
                  <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none" />
                  <div className="absolute bottom-2 lg:bottom-7 right-0 flex flex-col">
                    <h1 className="lg:hidden text-slate-400 text-xs font-bold">Round Trip?</h1>
                    <button className="self-end">
                      <img src="/icons/toggle_off_icon.svg" alt="" className="w-[35px]" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Return End */}
            </div>
            {/* Departure & Return End */}

            {/* Passenger & Seat Class */}

            <div className="grid grid-cols-2 gap-3">
              {/* Passenger */}
              <div className="lg:relative grid grid-cols-[35px,1fr] gap-5 ">
                <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                  <h1 className="lg:absolute -top-4 left-14 text-slate-400 text-sm font-bold lg:order-last">Passenger</h1>
                  <img src="/icons/passengers_icon.svg" alt="" className="w-[30px] opacity-50" />
                </div>
                <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none" />
              </div>
              {/* Passenger */}

              {/* Seat Class */}
              <div className="lg:relative grid grid-cols-[35px,1fr] gap-5 ">
                <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                  <h1 className="lg:absolute -top-4 left-14 text-slate-400 text-sm font-bold lg:order-last">SeatClass</h1>
                  <img src="/icons/seat_icon.svg" alt="" className="w-[30px] opacity-50" />
                </div>
                <input type="text" name="" id="" className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none" />
              </div>
              {/* Seat Class End */}
            </div>
            {/* Passenger & Seat Class End */}
          </div>

          <button className="mt-5 lg:mt-9 w-full py-3 rounded-lg bg-primary text-white text-sm font-semibold">Cari Penerbangan</button>
        </form>
      </div>
      {/* Main Form End */}

      {/* Destinasi Favorit */}
      <div className="mx-4 md:mx-8 lg:mx-28 -translate-y-16">
        <h1 className="text-lg font-bold mb-4">Destinasi Favorit</h1>

        <div className="flex flex-wrap justify-between lg:justify-start gap-x-3 gap-y-4 lg:gap-5">
          {/* Semua Button */}
          <button className="flex justify-center items-center gap-3  rounded-lg bg-primary px-4 py-2">
            <img src="/icons/search_icon.svg" alt="" />
            <h1 className="text-white">Semua</h1>
          </button>
          {/* Semua Button End */}

          {/* Asia Button */}
          <button className="flex justify-center items-center gap-3  rounded-lg bg-primary px-4 py-2">
            <img src="/icons/search_icon.svg" alt="" />
            <h1 className="text-white">Asia</h1>
          </button>
          {/* Asia Button End */}

          {/* Amerika Button */}
          <button className="flex justify-center items-center gap-3  rounded-lg bg-primary px-4 py-2">
            <img src="/icons/search_icon.svg" alt="" />
            <h1 className="text-white">Amerika</h1>
          </button>
          {/* Amerika Button End */}

          {/* Australia Button */}
          <button className="flex justify-center items-center gap-3  rounded-lg bg-primary px-4 py-2">
            <img src="/icons/search_icon.svg" alt="" />
            <h1 className="text-white">Australia</h1>
          </button>
          {/* Australia Button End */}

          {/* Eropa Button */}
          <button className="flex justify-center items-center gap-3  rounded-lg bg-primary px-4 py-2">
            <img src="/icons/search_icon.svg" alt="" />
            <h1 className="text-white">Eropa</h1>
          </button>
          {/* Eropa Button End */}

          {/* Afrika Button */}
          <button className="flex justify-center items-center gap-3  rounded-lg bg-primary px-4 py-2">
            <img src="/icons/search_icon.svg" alt="" />
            <h1 className="text-white">Afrika</h1>
          </button>
          {/* Afrika Button End */}
        </div>

        <div className="mt-5 lg:mt-10 lg:flex lg:flex-wrap lg:gap-6 whitespace-nowrap overflow-auto lg:whitespace-normal touch-auto w-[110%] lg:w-full h-[300px] lg:h-full">
          <Link to={"#"} className="inline-flex flex-col min-w-[200px] max-w-[350px] mr-4 lg:mr-0 px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
            <img src="/images/poster_bangkok.svg" alt="" className="mb-2" />
            <h1 className="text-sm font-bold">Jakarta -{">"} Bangkok</h1>
            <h1 className="text-xs text-secondary font-bold ">Air Asia</h1>
            <h1 className="text-xs font-semibold">20 -30 Maret 2023</h1>
            <h1 className="text-sm font-semibold">
              Mulai dari <span className="font-bold text-red-600">IDR 950.000</span>
            </h1>
          </Link>

          <Link to={"#"} className="inline-flex flex-col min-w-[200px] max-w-[350px] mr-4 lg:mr-0 px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
            <img src="/images/poster_bangkok.svg" alt="" className="mb-2" />
            <h1 className="text-sm font-bold">Jakarta -{">"} Bangkok</h1>
            <h1 className="text-xs text-secondary font-bold ">Air Asia</h1>
            <h1 className="text-xs font-semibold">20 -30 Maret 2023</h1>
            <h1 className="text-sm font-semibold">
              Mulai dari <span className="font-bold text-red-600">IDR 950.000</span>
            </h1>
          </Link>

          <Link to={"#"} className="inline-flex flex-col min-w-[200px] max-w-[350px] mr-4 lg:mr-0 px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
            <img src="/images/poster_bangkok.svg" alt="" className="mb-2" />
            <h1 className="text-sm font-bold">Jakarta -{">"} Bangkok</h1>
            <h1 className="text-xs text-secondary font-bold ">Air Asia</h1>
            <h1 className="text-xs font-semibold">20 -30 Maret 2023</h1>
            <h1 className="text-sm font-semibold">
              Mulai dari <span className="font-bold text-red-600">IDR 950.000</span>
            </h1>
          </Link>

          <Link to={"#"} className="inline-flex flex-col min-w-[200px] max-w-[350px] mr-4 lg:mr-0 px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
            <img src="/images/poster_bangkok.svg" alt="" className="mb-2" />
            <h1 className="text-sm font-bold">Jakarta -{">"} Bangkok</h1>
            <h1 className="text-xs text-secondary font-bold ">Air Asia</h1>
            <h1 className="text-xs font-semibold">20 -30 Maret 2023</h1>
            <h1 className="text-sm font-semibold">
              Mulai dari <span className="font-bold text-red-600">IDR 950.000</span>
            </h1>
          </Link>

          <Link to={"#"} className="inline-flex flex-col min-w-[200px] max-w-[350px] mr-4 lg:mr-0 px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
            <img src="/images/poster_bangkok.svg" alt="" className="mb-2" />
            <h1 className="text-sm font-bold">Jakarta -{">"} Bangkok</h1>
            <h1 className="text-xs text-secondary font-bold ">Air Asia</h1>
            <h1 className="text-xs font-semibold">20 -30 Maret 2023</h1>
            <h1 className="text-sm font-semibold">
              Mulai dari <span className="font-bold text-red-600">IDR 950.000</span>
            </h1>
          </Link>

          <Link to={"#"} className="inline-flex flex-col min-w-[200px] max-w-[350px] mr-4 lg:mr-0 px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
            <img src="/images/poster_bangkok.svg" alt="" className="mb-2" />
            <h1 className="text-sm font-bold">Jakarta -{">"} Bangkok</h1>
            <h1 className="text-xs text-secondary font-bold ">Air Asia</h1>
            <h1 className="text-xs font-semibold">20 -30 Maret 2023</h1>
            <h1 className="text-sm font-semibold">
              Mulai dari <span className="font-bold text-red-600">IDR 950.000</span>
            </h1>
          </Link>
        </div>
      </div>
      {/* Destinasi Favorit End */}

      {/* Navbar 2.0 */}
      <div className="flex lg:hidden justify-around gap-5 w-full px-2 py-2 border border-t-gray-400 border-x-0 border-b-0 bg-white fixed bottom-0 ">
        <button className="flex flex-col items-center">
          <img src="/icons/home_icon.svg" alt="" className="w-9" />
          <h1 className="text-sm font-bold">Beranda</h1>
        </button>
        <button className="flex flex-col items-center">
          <img src="/icons/history_icon.svg" alt="" className="w-9" />
          <h1 className="text-sm font-bold">Riwayat</h1>
        </button>
        <button className="flex flex-col items-center">
          <img src="/icons/notification_icon.svg" alt="" className="w-9" />
          <h1 className="text-sm font-bold">Notifikasi</h1>
        </button>
        <button className="flex flex-col items-center">
          <img src="/icons/profile_icon.svg" alt="" className="w-9" />
          <h1 className="text-sm font-bold">Akun</h1>
        </button>
      </div>
      {/* Navbar 2.0 End */}
    </div>
  );
}

export default Dashboard;
