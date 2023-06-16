import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalFrom from "../components/dashboard/ModalFrom";
import ModalTo from "../components/dashboard/ModalTo.Jsx";
import ReactDatePicker from "react-datepicker";
import ModalSeatClass from "../components/dashboard/ModalSeatClass";
import ModalPassenger from "../components/dashboard/ModalPassenger";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import DestinasiFavorit from "../components/dashboard/DestinasiFavorit";

function Dashboard() {
  // {ModalFrom}
  const [isOpenFrom, setIsOpenFrom] = useState(false);
  // ModalTo
  const [isOpenTo, setIsOpenTo] = useState(false);
  // Modal Seat Class
  const [isOpenSeatClass, setIsOpenSeatClass] = useState(false);
  // Modal Passenger
  const [isOpenPassengers, setIsOpenPassengers] = useState(false);

  // <Handle Open Modal/>
  const handleFrom = () => {
    setIsOpenFrom(true);
  };

  const handleTo = () => {
    setIsOpenTo(true);
  };

  const handleSeatClass = () => {
    setIsOpenSeatClass(true);
  };

  const handlePassengers = () => {
    setIsOpenPassengers(true);
  };

  // <Handle Close Modal/>
  const handleCloseFrom = () => {
    setIsOpenFrom(false);
  };

  const handleCloseTo = () => {
    setIsOpenTo(false);
  };

  const handleCloseSeatClass = () => {
    setIsOpenSeatClass(false);
  };

  const handleClosePassengers = () => {
    setIsOpenPassengers(false);
  };

  // saveValueFrom
  const [submitFrom, setSubmitFrom] = useState();
  const handleDataSubmitFrom = (dataFrom) => {
    setSubmitFrom(dataFrom);
  };

  // save Value To
  const [submitTo, setSubmitTo] = useState();
  const handleDataSubmitTo = (dataTo) => {
    setSubmitTo(dataTo);
  };

  // swap Value From and To
  const swapValues = () => {
    const temp = submitFrom;
    setSubmitFrom(submitTo);
    setSubmitTo(temp);
  };

  return (
    <>
      {isOpenFrom ? (
        <ModalFrom
          close={handleCloseFrom}
          onDataSubmit={handleDataSubmitFrom}
        />
      ) : null}
      {isOpenTo ? (
        <ModalTo action={handleCloseTo} onDataSubmit={handleDataSubmitTo} />
      ) : null}
      {isOpenSeatClass ? (
        <ModalSeatClass action={handleCloseSeatClass} />
      ) : null}
      {isOpenPassengers ? (
        <ModalPassenger action={handleClosePassengers} />
      ) : null}

      {/* {isOpenFrom && <ModalFrom onDataSubmit={handleDataSubmit} />} */}

      <div className="font-quickSand overflow-hidden">
        {/* Navbar */}
        <Navbar />
        {/* Navbar End */}

        {/* Header */}
        <div className="hidden lg:block relative">
          <div className="relative overflow-hidden mt-8 mx-28 h-72 bg-[url('/images/poster.svg')] bg-cover bg-no-repeat bg-center rounded-xl before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-r from-primary from-25%">
            <div className="absolute top-16 left-16">
              <h1 className="mb-2 text-4xl italic text-white font-bold">
                Diskon Hari Ini!
              </h1>
              <h1 className="text-4xl italic text-secondary font-bold">85%</h1>
            </div>
          </div>
          <div className="absolute top-[20%] bottom-1/2 -z-10 w-full h-48 bg-gray-800"></div>
        </div>
        {/* Header End*/}

        {/* Main Form */}
        <div className="-translate-y-24 lg:-translate-y-24 ">
          <form
            action=""
            className="flex flex-col bg-white mx-4 md:mx-8 lg:mx-56 px-3 lg:px-7  py-5 rounded-lg border shadow-md"
          >
            <h1 className="hidden lg:block text-lg font-bold mb-6">
              Pilih Jadwal Penerbangan Spesial di{" "}
              <span className="text-secondary">QuickTix!</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-6 lg:gap-y-16 lg:gap-x-12 justify-center items-center">
              {/* From */}
              <div className="grid grid-cols-[35px,1fr] gap-5">
                <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                  <h1 className="text-slate-400 text-sm font-bold lg:order-last">
                    From
                  </h1>
                  <img
                    src="/icons/plane_from.svg"
                    alt=""
                    className="w-[30px] opacity-50 group/input"
                  />
                </div>
                <div className="relative self-end lg:ml-10">
                  <input
                    onClick={handleFrom}
                    value={submitFrom}
                    type="text"
                    name=""
                    id=""
                    placeholder="Kota atau Bandara"
                    className="self-end w-[85%] h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none group-focus/input:opacity-100"
                  />

                  <button
                    onClick={swapValues}
                    type="button"
                    className="absolute translate-y-3 bottom-0 right-2 flex justify-center items-center py-1 px-1 bg-slate-300 rounded-full"
                  >
                    <img src="/icons/swap_icon.svg" alt="" />
                  </button>
                </div>
              </div>
              {/* From End */}

              {/* To */}
              <div className="grid grid-cols-[35px,1fr] gap-5">
                <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                  <h1 className="text-slate-400 text-sm font-bold lg:order-last">
                    To
                  </h1>
                  <img
                    src="/icons/plane_to.svg"
                    alt=""
                    className="w-[30px] opacity-50"
                  />
                </div>
                <div className="lg:ml-10">
                  <input
                    onClick={handleTo}
                    value={submitTo}
                    placeholder="Mau Kemana ?"
                    type="text"
                    name=""
                    id=""
                    className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none"
                  />
                </div>
              </div>
              {/* To End */}

              {/* Departure & Return */}
              <div className="grid lg:grid-cols-2 gap-5">
                {/* Departure */}
                <div className="lg:relative grid grid-cols-[35px,1fr] gap-5 ">
                  <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                    <h1 className="lg:absolute -top-4 left-14 text-slate-400 text-sm font-bold lg:order-last">
                      Departure
                    </h1>
                    <img
                      src="/icons/date_icon.svg"
                      alt=""
                      className="w-[30px] opacity-50"
                    />
                  </div>

                  <input
                    type="date"
                    name=""
                    id=""
                    className="self-end w-[60%] lg:w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none"
                  />
                </div>
                {/* Departure End */}

                {/* Return */}
                <div className="lg:relative grid grid-cols-[35px,1fr] gap-5 ">
                  <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                    <h1 className="lg:absolute -top-4 left-14 text-slate-400 text-sm font-bold lg:order-last">
                      Return
                    </h1>
                    <img
                      src="/icons/date_icon.svg"
                      alt=""
                      className="w-[30px] opacity-50"
                    />
                  </div>
                  <div className="relative self-end">
                    <input
                      type="date"
                      name=""
                      id=""
                      className="self-end w-[60%] lg:w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none"
                    />
                    <div className="absolute bottom-2 lg:bottom-7 right-0 flex flex-col">
                      <h1 className="lg:hidden text-slate-400 text-xs font-bold">
                        Round Trip?
                      </h1>
                      <button className="self-end">
                        <img
                          src="/icons/toggle_off_icon.svg"
                          alt=""
                          className="w-[35px]"
                        />
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
                    <h1 className="lg:absolute -top-4 left-14 text-slate-400 text-sm font-bold lg:order-last">
                      Passenger
                    </h1>
                    <img
                      src="/icons/passengers_icon.svg"
                      alt=""
                      className="w-[30px] opacity-50"
                    />
                  </div>
                  <input
                    onClick={handlePassengers}
                    type=""
                    name=""
                    id=""
                    className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none"
                  />
                </div>
                {/* Passenger */}

                {/* Seat Class */}
                <div className="lg:relative grid grid-cols-[35px,1fr] gap-5 ">
                  <div className="flex flex-col lg:flex-row gap-1 items-start lg:items-center">
                    <h1 className="lg:absolute -top-4 left-14 text-slate-400 text-sm font-bold lg:order-last">
                      SeatClass
                    </h1>
                    <img
                      src="/icons/seat_icon.svg"
                      alt=""
                      className="w-[30px] opacity-50"
                    />
                  </div>
                  <input
                    onClick={handleSeatClass}
                    type=""
                    name=""
                    id=""
                    className="self-end w-full h-10 bg-transparent border border-t-0 border-x-0 border-slate-400 outline-none"
                  />
                </div>
                {/* Seat Class End */}
              </div>
              {/* Passenger & Seat Class End */}
            </div>

            <button className="mt-5 lg:mt-9 w-full py-3 rounded-lg bg-primary text-white text-sm font-semibold">
              Cari Penerbangan
            </button>
          </form>
        </div>
        {/* Main Form End */}

        {/* Destinasi Favorit */}
        <DestinasiFavorit />
        {/* Destinasi Favorit End */}

        {/* Navbar 2.0 */}
        <NavbarMobile />
        {/* Navbar 2.0 End */}
      </div>
    </>
  );
}

export default Dashboard;
