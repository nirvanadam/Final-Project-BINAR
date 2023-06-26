import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FlightDetail from "./FlightDetail";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ResultNotFound from "./ResultNotFound";
import Loading from "./Loading";

function FlightResult(props) {
  const { formData } = props;
  const [detailBtnSts, setDetailBtnSts] = useState(false);

  const detailButton = (index) => {
    setDetailBtnSts((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const [data, setData] = useState();

  const url = `https://finalproject-develop.up.railway.app/flight`;
  const fetchData = async () => {
    try {
      const response = await axios.post(url, formData);
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(amount);
  }

  const [id, setId] = useState();

  const handleClick = (id) => {
    setId(id);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate(`/checkout?id=${id}&adult=${formData.adult}&child=${formData.child}`);
  };

  return (
    <div className="flex flex-col gap-5 mx-4">
      {/* Flight Information Container */}
      {data === undefined ? (
        <Loading />
      ) : data === null ? (
        <ResultNotFound />
      ) : data.length === 0 ? (
        <ResultNotFound />
      ) : (
        data?.slice(0, 20).map((datas, index) => (
          <div key={index} className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg shadow-md">
            <div className="flex flex-col ">
              {/* From, Duration, To, Price */}
              <div className="lg:order-3 flex justify-between ">
                <div className="flex gap-3">
                  {/* From Information */}
                  <div className="flex flex-col items-center">
                    <h1 className="font-bold">{datas.departure_airport.departure_time}</h1>
                    <h1 className="text-sm font-semibold">{datas.departure_city}</h1>
                  </div>
                  {/* From Information End */}

                  {/* Duration */}
                  <div className="flex flex-col w-20 lg:w-60 gap-1 items-center">
                    <h1 className="text-xs font-semibold">{datas.duration}</h1>
                    <span className="h-[1px] w-full bg-black"></span>
                    <h1 className="text-xs font-semibold">Direct</h1>
                  </div>
                  {/* Duration End */}

                  {/* To Information */}
                  <div className="flex flex-col items-center">
                    <h1 className="font-bold">{datas.arrival_airport.arrival_time}</h1>
                    <h1 className="text-sm font-semibold">{datas.arrival_city}</h1>
                  </div>
                  {/* To Information End */}
                </div>

                {/* Price */}
                <div className="flex flex-col items-end gap-1">
                  <h1 className="text-lg w-fit font-bold ">{formatCurrency(datas.price)}</h1>
                  <form onSubmit={handleSubmit}>
                    <button onClick={() => handleClick(datas.id)} type="submit" className="hidden lg:inline w-fit bg-primary text-white font-medium px-9 py-1 rounded-lg">
                      Pilih
                    </button>
                  </form>
                </div>
                {/* Price End */}
              </div>
              {/* From, Duration, To, Price End */}

              <span className="lg:order-2 bg-gray-400 my-2 w-full h-[1px]"></span>

              {/*  Airline - Seat Class & Detail Button */}
              <div className="lg:order-1 flex justify-between items-center">
                {/* Seat Class Info */}
                <div className="flex items-center gap-2">
                  <img className="h-6 w-6" src={datas.logo} alt="" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-sm font-semibold">
                      {datas.info_flight.airline} - {datas.class}
                    </h1>
                    <img src="/icons/luggage_icon.svg" alt="" className="w-5" />
                  </div>
                </div>
                {/* Seat Class Info End */}

                {/* Detail Button */}

                <button type="button" onClick={() => detailButton(index)} className="flex justify-center items-center border border-gray-300 rounded-full p-1">
                  <img src="/icons/chevron_down.svg" alt="" className="w-5" />
                </button>
                {/* Detail Button End */}
              </div>
              {/*  Airline - Seat Class & Detail Button End */}
            </div>

            <FlightDetail
              flightDate={datas.departure_airport.date}
              departureCity={datas.departure_city}
              arrivalCity={datas.arrival_city}
              Duration={datas.duration}
              departureAirport={datas.departure_airport.departure_airport}
              arrivalAirport={datas.arrival_airport.arrival_airport}
              airlineCode={datas.info_flight.airplane_code}
              seatClass={datas.class}
              departureTime={datas.departure_airport.departure_time}
              arrivalTime={datas.arrival_airport.arrival_time}
              airplaneID={datas.info_flight.airline}
              Informasi1={datas.info_flight.baggage}
              Informasi2={datas.info_flight.cabin_baggage}
              display={detailBtnSts[index] ? "block" : "hidden"}
            />
          </div>
        ))
      )}
      {/* Flight Information Container End */}
    </div>
  );
}

export default FlightResult;
