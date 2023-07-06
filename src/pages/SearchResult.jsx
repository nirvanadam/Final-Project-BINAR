import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FlightResult from "../components/search-result/FlightResult";
import ResultNotFound from "../components/search-result/ResultNotFound";
import ModalSort from "../components/ModalSort";
import Loading from "../components/search-result/Loading";
import Sorry from "../components/search-result/Sorry";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
function SearchResult() {
  // Modal Sort
  const [isOpenSort, setIsOpenSort] = useState();

  const handleSort = () => {
    setIsOpenSort(true);
  };

  const handleCloseSort = () => {
    setIsOpenSort(false);
  };
  // modal sort end

  const location = useLocation();
  let formData = location.state;

  // looping Date
  const currentDate = Date.now();
  const dates = Array(7)
    .fill()
    .map((_, index) => new Date(currentDate + index * 24 * 60 * 60 * 1000));
  // looping date end

  // Hari , Tanggal , Bulan , Tahun
  function getNamaHari(date) {
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  }

  function getTanggalFormat(date) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
      date
    );

    // Memisahkan hari, bulan, dan tahun
    const [day, month, year] = formattedDate.split("/");

    // Menggabungkan kembali dengan tanda strip
    return `${year}-${month}-${day}`;
  }
  // Hari , Tanggal , Bulan , Tahun

  const [date, setDate] = useState(formData.date);
  formData.date = date;
  // console.log(date);

  const [sorting, setSorting] = useState({
    sort_by: "",
    sort_type: "",
  });

  const [namaSort, setNamaSort] = useState();

  // const [setName, isSetName] = useState();

  return (
    <>
      {isOpenSort ? (
        <ModalSort
          action={handleCloseSort}
          onDataSubmit={setSorting}
          namaSort={setNamaSort}
        />
      ) : null}
      <div className="font-quickSand overflow-hidden">
        {/* Navbar */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {/* Navbar End */}

        {/* Header */}
        <div className="lg:mt-12 lg:mx-36">
          <h1 className="hidden lg:block text-xl font-bold mb-8">
            Pilih Penerbangan
          </h1>

          {/* Container Info Destination & Ubah Pencarian Button */}
          <div className="flex gap-3">
            {/* Info Destination */}
            <div className="relative flex flex-col w-full bg-primary py-4 px-2 lg:rounded-xl">
              <div className="flex items-center gap-5">
                <Link to="/" className="">
                  <img src="/icons/arrow_left.svg" alt="" className="invert" />
                </Link>

                <div className="flex flex-col md:flex-row md:gap-5">
                  <div className="flex gap-2">
                    <h1 className=" text-white font-bold">
                      {formData.departure_airport}
                    </h1>
                    <img
                      src="/icons/navigate_next_icon.svg"
                      alt=""
                      className="invert w-5"
                    />
                    <h1 className=" text-white font-bold">
                      {formData.arrival_airport}
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <h1 className=" text-white font-medium">
                      {formData.passenger} Penumpang
                    </h1>
                    <h1 className=" text-white font-medium">
                      - {formData.seat_type}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Info Destination End */}

            {/* Ubah Pencarian Button */}
            <Link
              to={"/"}
              className="hidden lg:flex justify-center items-center basis-1/4  bg-secondary rounded-xl font-bold"
            >
              Ubah Pencarian
            </Link>
            {/* Ubah Pencarian Button End */}
          </div>
          {/* Container Info Destination & Ubah Pencarian Button End */}

          {/* Date List */}
          <div className="overflow-auto flex gap-3 divide-x divide-gray-300 lg:mt-3 py-3 px-2">
            <form className="flex gap-2">
              {dates.map((date) => (
                <button
                  className="flex justify-center items-center w-[130px] px-4 py-2 bg-gray-300 rounded-lg"
                  key={date.getTime()}
                  value={getTanggalFormat(date)}
                  onClick={() => setDate(getTanggalFormat(date))}
                >
                  <div className="flex flex-col justify-center items-center px-3">
                    <h1 className="text-gray-700 font-bold">
                      {getNamaHari(date)}
                    </h1>
                    <h1 className="text-sm font-medium text-gray-700">
                      {getTanggalFormat(date)}
                    </h1>
                  </div>
                </button>
              ))}
            </form>
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
          <button
            onClick={handleSort}
            className="flex lg:ml-auto items-center gap-2 py-1 lg:py-2 px-2 lg:px-3 border border-gray-300 rounded-full"
          >
            <img src="/icons/sort_icon.svg" alt="" className="w-5" />
            <h1 className="text-sm font-semibold">
              {namaSort ? namaSort : "Sort By"}
            </h1>
          </button>
          {/* Sort Button End [Mobile]*/}
        </div>
        {/* Filter & Sort Button [Mobile & Tablet]End */}

        {/* Main Content Contain  */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-9 mt-4 lg:mt-5 md:mx-10 lg:mx-36">
          {/* Filter Container */}
          <div className="hidden lg:flex flex-col h-fit p-5 border border-gray-200 shadow-md rounded-xl">
            <h1 className="font-bold mb-3">Filter</h1>
            <div className="flex flex-col divide-y divide-gray-400">
              {/* Transit Filter Button */}
              <button className="flex justify-between py-4 px-1">
                <div className="flex gap-2 items-center">
                  <img
                    src="/icons/map_icon.svg"
                    alt=""
                    className="w-6 opacity-60"
                  />
                  <h1 className="font-semibold">Transit</h1>
                </div>
                <img
                  src="/icons/navigate_next_icon.svg"
                  alt=""
                  className="w-6 opacity-50"
                />
              </button>
              {/* Transit Filter Button End */}

              {/* Fasilitas Filter Button */}
              <button className="flex justify-between py-4 px-1">
                <div className="flex gap-2 items-center">
                  <img
                    src="/icons/building_icon.svg"
                    alt=""
                    className="w-6 opacity-60"
                  />
                  <h1 className="font-semibold">Fasilitas</h1>
                </div>
                <img
                  src="/icons/navigate_next_icon.svg"
                  alt=""
                  className="w-6 opacity-60"
                />
              </button>
              {/* Fasilitas Filter Button End */}

              {/* Harga Filter Button */}
              <button className="flex justify-between py-4 px-1">
                <div className="flex gap-2 items-center">
                  <img
                    src="/icons/price_icon.svg"
                    alt=""
                    className="w-6 opacity-60"
                  />
                  <h1 className="font-semibold">Harga</h1>
                </div>
                <img
                  src="/icons/navigate_next_icon.svg"
                  alt=""
                  className="w-6 opacity-60"
                />
              </button>
              {/* Harga Filter Button End */}
            </div>
          </div>
          {/* Filter Container End */}

          {/* Content */}
          <FlightResult
            formData={formData}
            sorting={sorting}
            date={formData.date}
          />
          {/* <ResultNotFound /> */}
          {/* Content End */}
        </div>
        {/* Main Content Container End*/}

        <Footer />
      </div>
    </>
  );
}

export default SearchResult;
