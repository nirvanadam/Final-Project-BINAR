import React, { useState } from "react";
import DetailPayment from "../components/history/DetailPayment";
import NavbarMobile from "../components/NavbarMobile";
import Navbar from "../components/Navbar";
import CheckoutDetail from "../components/checkout/CheckoutDetail";
import { Link } from "react-router-dom";
import ModalBookingCode from "../components/ModalBookingCode";

function RiwayatPesanan() {
  // modal search
  const [openSearch, setOpenSearch] = useState(false);

  // Open modal search
  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  // close modal search
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  return (
    <>
      {openSearch ? <ModalBookingCode close={handleCloseSearch} /> : null}
      <div className="font-quickSand">
        {/* Navbar */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {/* Navbar End */}

        {/* Header */}
        <h1 className="mx-6 lg:mx-36 mt-7 mb-4 text-2xl font-bold">Riwayat Pesanan</h1>
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
            <img src="/icons/search_icon.svg" alt="" onClick={handleOpenSearch} className="invert" />
          </button>
          {/* Search Button End */}
        </div>
        {/* Bar, Filter, Search Button End */}

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4 mx-6 lg:mx-36">
          {/* Column 1 */}
          <div className="">
            {/* Date */}
            <div className="flex justify-between items-center">
              <h1 className="font-bold">Maret 2023</h1>
            </div>
            {/* Date End */}

            {/* Detail Payment */}
            <div className="flex flex-col  p-4 border border-gray-400 rounded-lg">
              <h1 className="mb-5 w-fit px-3 py-1 rounded-full bg-red-600 text-white text-sm font-semibold">Unpaid</h1>
              <DetailPayment />
            </div>
            {/* Detail Payment End */}
          </div>
          {/* Column 1 End */}

          {/* Column 2 */}
          <div className="border border-gray-400">
            <CheckoutDetail></CheckoutDetail>
          </div>
          {/* Column 2 End */}
        </div>
        {/* Content End */}

        {/* Navbar (Mobile) */}
        <NavbarMobile />
        {/* Navbar (Mobile) End */}
      </div>
    </>
  );
}

export default RiwayatPesanan;
