import React from "react";

function DetailPayment() {
  return (
    <div className="flex flex-col">
      <h1 className="text-sm font-semibold mb-4">
        Passengers: <span className="font-bold">2 Adult, 1 Baby</span>
      </h1>

      {/* From. Duration, To */}
      <div className="flex justify-between items-center">
        {/* From */}
        <div className="flex gap-2 items-start">
          <img src="/icons/location-icon.svg" alt="" className="w-8" />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">Jakarta</h1>
            <h1 className="text-xs font-medium">5 Maret 2023</h1>
            <h1 className="text-xs font-medium">19.10</h1>
          </div>
        </div>
        {/* From End */}

        {/* Duration */}
        <div className="flex flex-col">
          <h1>4h 0m</h1>
          <span className="bg-black w-full h-[1px]"></span>
        </div>
        {/* Duration End */}

        {/* To */}
        <div className="flex gap-2 items-start">
          <img src="/icons/location-icon.svg" alt="" className="w-8" />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">Jakarta</h1>
            <h1 className="text-xs font-medium">5 Maret 2023</h1>
            <h1 className="text-xs font-medium">19.10</h1>
          </div>
        </div>
        {/* To End */}
      </div>
      {/* From. Duration, To End */}

      <span className="bg-gray-300 w-full h-[1px] my-3"></span>

      {/* Booking Code, Class, Total */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col text-xs">
            <h1 className="font-bold">Booking Code:</h1>
            <h1 className="font-medium">453653657</h1>
          </div>
          <div className="flex flex-col text-xs">
            <h1 className="font-bold">Class:</h1>
            <h1 className="font-medium">Economy</h1>
          </div>
        </div>

        <div className="flex flex-col items-end font-bold">
          <h1 className="text-xs">TOTAL</h1>
          <span className="text-base">IDR 9.850.000</span>
        </div>
      </div>
      {/* Booking Code, Class, Total End */}
    </div>
  );
}

export default DetailPayment;
