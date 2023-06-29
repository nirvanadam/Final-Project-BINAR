import React from "react";
import FlightDetail from "../search-result/FlightDetail";

function CheckoutDetail(props) {
  const { data, arrivalTime, arrivalDate, arrivalAirport, departureTime, departureDate, departureAirport, airlineClass, airlineCode, airlineName, baggage, cabinBaggage, logo } = props;
  return (
    <div>
      {/* Flight Detail End */}

      <div className={`mx-4 mt-3`}>
        <h1 className="lg:hidden mb-3 font-bold">
          {departureCity} - {arrivalCity} <span>{Duration}</span>
        </h1>

        <h1 className="hidden lg:block mb-3 font-bold">Detail Penerbangan</h1>
        {/* Flight Information */}
        <div className="flex flex-col ">
          {/* Keberangkatan */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="font-bold">{departureTime}</h1>
                <h1 className="text-sm font-semibold">{departureDate}</h1>
              </div>
              <h1 className="text-sm font-semibold">Keberangkatan</h1>
            </div>

            <h1 className="text-sm font-semibold">Bandara {departureAirport}</h1>
          </div>
          {/* Keberangkatan End */}

          {/* Flight Info */}
          <div className="flex gap-5 py-3 my-3 border-y border-gray-400">
            <img src={`${logo}`} alt="" className="w-5" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h1 className="font-bold">
                  {airlineName} - {airlineClass}
                </h1>

                <h1 className="font-bold">{airlineCode}</h1>
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold">Informasi</h1>
                <h1 className="font-semibold">Baggage {baggage}</h1>
                <h1 className="font-semibold">Cabin baggage {cabinBaggage}</h1>
              </div>
            </div>
          </div>
          {/* Flight Info */}

          {/* Kedatangan */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="font-bold">{arrivalTime}</h1>
                <h1 className="text-sm font-semibold">{arrivalDate}</h1>
              </div>
              <h1 className="text-sm font-semibold">Kedatangan</h1>
            </div>

            <h1 className="text-sm font-semibold">Bandara {arrivalAirport}</h1>
          </div>
          {/* Kedatangan End */}
        </div>
        {/* Flight Information End */}
      </div>
      {/* Flight Detail */}

      <div className="flex flex-col mx-4 mt-4 pt-2 border-t border-gray-400">
        <h1 className="font-bold">Rincian Harga</h1>

        {/* Detail Passenger */}
        <div className="pb-2 text-sm font-semibold">
          <div className="flex justify-between">
            <h1>2 Adults</h1>
            <h1>IDR 9.550.000</h1>
          </div>
          <div className="flex justify-between ">
            <h1>11 Baby</h1>
            <h1>IDR 0</h1>
          </div>
          <div className="flex justify-between ">
            <h1>Tax</h1>
            <h1>IDR 300.000</h1>
          </div>
        </div>
        {/* Detail Passenger End */}

        {/* Total */}
        <div className="flex justify-between pt-2 border-t border-gray-400 text-lg font-bold ">
          <h1>Total</h1>
          <h1>IDR 9.850.000</h1>
        </div>
        {/* Total End */}
      </div>
    </div>
  );
}

export default CheckoutDetail;
