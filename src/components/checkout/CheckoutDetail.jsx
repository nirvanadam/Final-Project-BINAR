import React from "react";
import FlightDetail from "../search-result/FlightDetail";

function CheckoutDetail() {
  return (
    <div>
      <FlightDetail />
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
