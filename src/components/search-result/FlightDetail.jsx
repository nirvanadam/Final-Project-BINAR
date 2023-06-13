import React from "react";

function FlightDetail(props) {
  const { display } = props;

  return (
    <div className={`${display} mx-4 mt-3`}>
      <h1 className="lg:hidden mb-3 font-bold">
        Jakarta - Melbourne <span>4h 0m</span>
      </h1>

      <h1 className="hidden lg:block mb-3 font-bold">Detail Penerbangan</h1>
      {/* Flight Information */}
      <div className="flex flex-col ">
        {/* Keberangkatan */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="font-bold">07:00</h1>
              <h1 className="text-sm font-semibold">3 Maret 2023</h1>
            </div>
            <h1 className="text-sm font-semibold">Keberangkatan</h1>
          </div>

          <h1 className="text-sm font-semibold">Soekarno Hatta - Terminal 1A Domestik</h1>
        </div>
        {/* Keberangkatan End */}

        {/* Flight Info */}
        <div className="flex gap-5 py-3 my-3 border-y border-gray-400">
          <img src="/icons/airline_logo.svg" alt="" />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h1 className="font-bold">Jet Air - Economy</h1>
              <h1 className="font-bold">JT - 203</h1>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold">Informasi</h1>
              <h1 className="font-semibold">Baggage 20kg</h1>
              <h1 className="font-semibold">Cabin baggage 7kg</h1>
              <h1 className="font-semibold">In Flight Entertainment</h1>
            </div>
          </div>
        </div>
        {/* Flight Info */}

        {/* Kedatangan */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="font-bold">11:00</h1>
              <h1 className="text-sm font-semibold">3 Maret 2023</h1>
            </div>
            <h1 className="text-sm font-semibold">Kedatangan</h1>
          </div>

          <h1 className="text-sm font-semibold">Melbourne International Airport</h1>
        </div>
        {/* Kedatangan End */}
      </div>
      {/* Flight Information End */}
    </div>
  );
}

export default FlightDetail;
