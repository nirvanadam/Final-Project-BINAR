import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlightDetail from "./FlightDetail";

function FlightResult() {
  const [detailBtnSts, setDetailBtnSts] = useState(false);
  const detailButton = () => {
    setDetailBtnSts(!detailBtnSts);
  };
  return (
    <div className="flex flex-col gap-5 mx-4">
      {/* Flight Information Container */}
      <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="flex flex-col ">
          {/* From, Duration, To, Price */}
          <div className="lg:order-3 flex justify-between ">
            <div className="flex gap-3">
              {/* From Information */}
              <div className="flex flex-col items-center">
                <h1 className="font-bold">07:00</h1>
                <h1 className="text-sm font-semibold">JKT</h1>
              </div>
              {/* From Information End */}

              {/* Duration */}
              <div className="flex flex-col w-20 lg:w-60 gap-1 items-center">
                <h1 className="text-xs font-semibold">4h 0m</h1>
                <span className="h-[1px] w-full bg-black"></span>
                <h1 className="text-xs font-semibold">Direct</h1>
              </div>
              {/* Duration End */}

              {/* To Information */}
              <div className="flex flex-col items-center">
                <h1 className="font-bold">11:00</h1>
                <h1 className="text-sm font-semibold">MLB</h1>
              </div>
              {/* To Information End */}
            </div>

            {/* Price */}
            <div className="flex flex-col items-end gap-1">
              <h1 className="text-lg w-fit font-bold ">IDR 4.950.000</h1>
              <button className="hidden lg:inline w-fit bg-primary text-white font-medium px-9 py-1 rounded-lg">Pilih</button>
            </div>
            {/* Price End */}
          </div>
          {/* From, Duration, To, Price End */}

          <span className="lg:order-2 bg-gray-400 my-2 w-full h-[1px]"></span>

          {/*  Airline - Seat Class & Detail Button */}
          <div className="lg:order-1 flex justify-between items-center">
            {/* Seat Class Info */}
            <div className="flex items-center gap-2">
              <img src="/icons/airline_logo.svg" alt="" />
              <div className="flex flex-col gap-1">
                <h1 className="text-sm font-semibold">Jet Air- Economy</h1>
                <img src="/icons/luggage_icon.svg" alt="" className="w-5" />
              </div>
            </div>
            {/* Seat Class Info End */}

            {/* Detail Button */}
            <Link to={"/flight-detail"} className="flex lg:hidden justify-center items-center border border-gray-300 rounded-full p-1">
              <img src="/icons/chevron_down.svg" alt="" className="w-5" />
            </Link>

            <button type="button" onClick={detailButton} className="hidden lg:flex justify-center items-center border border-gray-300 rounded-full p-1">
              <img src="/icons/chevron_down.svg" alt="" className="w-5" />
            </button>
            {/* Detail Button End */}
          </div>
          {/*  Airline - Seat Class & Detail Button End */}
        </div>

        <FlightDetail display={detailBtnSts ? "block" : "hidden"} />
      </div>
      {/* Flight Information Container End */}
    </div>
  );
}

export default FlightResult;
