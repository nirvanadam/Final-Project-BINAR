import React from "react";
import { Link } from "react-router-dom";
import FlightDetail from "../components/FlightDetail";

function FlightDetailPage() {
  return (
    <div className="relative font-quickSand h-screen">
      {/* Info Destination */}
      <div className="flex gap-5 w-full bg-primary py-4 px-5">
        <Link to={"/search-result"} className="">
          <img src="/icons/arrow_left.svg" alt="" className="invert" />
        </Link>

        <h1 className="text-white font-bold">Pilihan Penerbangan</h1>
      </div>
      {/* Info Destination End */}

      <div className="mx-4 mt-5 pb-6 border border-gray-400 rounded-xl">
        <FlightDetail />
      </div>

      {/* Total Payment */}
      <div className="absolute bottom-10 w-full flex flex-col gap-6 px-4 py-2">
        <div className="flex justify-between pt-2 border-t border-gray-400">
          <h1 className="text-lg font-bold">Total</h1>
          <h1 className="text-xl font-bold ">IDR 4.950.000/pax</h1>
        </div>
        <button className="w-full bg-primary py-3 rounded-xl text-white">Pilih</button>
      </div>
      {/* Total Payment End */}
    </div>
  );
}

export default FlightDetailPage;
