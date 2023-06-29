import React from "react";

function PaymentDetail(props) {
  const { data } = props;

  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(amount);
  }

  return (
    <div>
      {/* Flight Detail End */}
      <div className={`mx-4 mt-3`}>
        <h1 className="hidden lg:block mb-3 font-bold">Booking Code: {data.booking_code}</h1>
        {/* Flight Information */}
        <div className="flex flex-col ">
          {/* Keberangkatan */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="font-bold">{data.info_departure_airport.departure_time}</h1>
                <h1 className="text-sm font-semibold">{data.info_departure_airport.date}</h1>
              </div>
              <h1 className="text-sm font-semibold">Keberangkatan</h1>
            </div>

            <h1 className="text-sm font-semibold">Bandara {data.info_departure_airport.departure_airport}</h1>
          </div>
          {/* Keberangkatan End */}

          {/* Flight Info */}
          <div className="flex items-center gap-5 py-3 my-3 border-y border-gray-400">
            <img src={`${data.info_flight.logo}`} alt="" className="w-[5%] h-[5%] order border-red-500" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h1 className="font-bold">
                  {data.info_flight.airline_name} - {data.info_flight.class}
                </h1>

                <h1 className="font-bold">{data.info_flight.airplane_code}</h1>
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold">Informasi</h1>
                <h1 className="font-semibold">Baggage {data.info_flight.baggage}</h1>
                <h1 className="font-semibold">Cabin baggage {data.info_flight.cabin_baggage}</h1>
              </div>
            </div>
          </div>
          {/* Flight Info */}

          {/* Kedatangan */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="font-bold">{data.info_arrival_airport.arrival_time}</h1>
                <h1 className="text-sm font-semibold">{data.info_arrival_airport.date}</h1>
              </div>
              <h1 className="text-sm font-semibold">Kedatangan</h1>
            </div>

            <h1 className="text-sm font-semibold">Bandara {data.info_arrival_airport.arrival_airport}</h1>
          </div>
          {/* Kedatangan End */}
        </div>
        {/* Flight Information End */}
      </div>
      {/* Flight Detail */}

      {/* Rincian Harga */}
      <div className="flex flex-col mx-4 mt-4 pt-2 border-t border-gray-400">
        <h1 className="font-bold">Rincian Harga</h1>

        {/* Detail Passenger */}
        <div className="pb-2 text-sm font-semibold">
          <div className="flex justify-between">
            <h1>{data.info_price.adult_total} Adults</h1>
            <h1>{formatCurrency(data.info_price.adult_price)}</h1>
          </div>
          <div className="flex justify-between ">
            <h1>{data.info_price.child_total} Baby</h1>
            <h1>{formatCurrency(data.info_price.child_price)}</h1>
          </div>
          <div className="flex justify-between ">
            <h1>Tax</h1>
            <h1>{formatCurrency(data.info_price.tax)}</h1>
          </div>
        </div>
        {/* Detail Passenger End */}

        {/* Total */}
        <div className="flex justify-between pt-2 border-t border-gray-400 text-lg font-bold ">
          <h1>Total</h1>
          <h1>{formatCurrency(data.info_price.total_price)}</h1>
        </div>
        {/* Total End */}
      </div>
      {/* Rincian Harga End */}
    </div>
  );
}

export default PaymentDetail;
