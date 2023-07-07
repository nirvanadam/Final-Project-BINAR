import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function DestinasiFavorit() {
  const [data, setData] = useState();
  const url = `${import.meta.env.VITE_REACT_APP_API}/flight/destination`;
  const fetchData = async () => {
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Destinasi Favorit Logic
  const dataDestinasi = [
    {
      id: 1,
      name: "Jakarta",
      region: "Asia",
      maskapai: "AirAsia",
      foto: "https://source.unsplash.com/1600x900/?old&norway",
      price: "3.650.000",
    },
    {
      id: 2,
      name: "New York",
      region: "Amerika",
      maskapai: "AirAsia",
      foto: "https://source.unsplash.com/1600x900/?landmark&america",
      price: "2.650.000",
    },
    {
      id: 3,
      name: "Sydney",
      region: "Australia",
      maskapai: "AirAsia",
      foto: "https://source.unsplash.com/1600x900/?landmark&australia",
      price: "3.650.000",
    },
    {
      id: 4,
      name: "Paris",
      region: "Eropa",
      maskapai: "AirAsia",
      foto: "https://source.unsplash.com/1600x900/?landmark&europe",
      price: "2.650.000",
    },
    {
      id: 5,
      name: "Cape Town",
      to: "Sydney",
      region: "Afrika",
      maskapai: "AirAsia",
      foto: "https://source.unsplash.com/1600x900/?landmark&africa",
      price: "3.450.000",
    },
    {
      id: 6,
      name: "Cape Town",
      to: "Sydney",
      region: "Afrika",
      maskapai: "AirAsia",
      foto: "https://source.unsplash.com/1600x900/?landmark&africa",
      price: "3.450.000",
    },
    // Tambahkan destinasi lainnya di sini
  ];

  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(amount);
  }

  const [region, setRegion] = useState("Semua");

  const changeRegionHandler = (region) => {
    setRegion(region);
  };

  const navigate = useNavigate();
  const handleOnClick = (id) => {
    const person = data.find((person) => person.id == id);
    navigate("/search-result", { state: person.form });
  };

  const DestinasiCard = () => {
    return data?.map((destinasi, index) => {
      return (
        <div
          key={index}
          className="bg-zinc-100 relative inline-flex flex-col lg:mt-3 mr-5 lg:mr-0 overflow-hidden group rounded-xl shadow-md cursor-default transition-all duration-[0.4s] hover:-translate-y-3 whitespace-normal	"
        >
          <div className="overflow-hidden relative h-[200px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-t from-black from-5% before:z-10">
            <img
              key={index}
              src={`https://source.unsplash.com/1600x900/?kota&indnesia&${destinasi.data.arrival}`}
              alt=""
              className="absolute transition-all duration-[0.4s] group-hover:scale-125"
            />
            <div className="absolute bottom-3 left-3 z-20 flex flex-col gap-1">
              <h1 className="text-white font-white">
                {destinasi.data.departure} - {destinasi.data.arrival}
              </h1>
              <div className="flex gap-2">
                <div className="flex gap-1 ">
                  <img src="/icons/star-icon.svg" alt="" />
                  <img src="/icons/star-icon.svg" alt="" />
                  <img src="/icons/star-icon.svg" alt="" />
                  <img src="/icons/star-icon.svg" alt="" />
                  <img src="/icons/star-icon.svg" alt="" />
                </div>
                <h1 className="text-sm text-gray-400 font-medium">
                  (5.0) Rating
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 p-6">
            <h1 className="text-xl font-semibold">
              Rp {formatCurrency(destinasi.data.price)}
              <span className="text-base text-gray-500 font-medium">
                / Orang
              </span>
            </h1>
            <h1 className="text-center text-sm text-gray-500 font-medium">
              Our travels are different from all the others! We love our
              business and want to see happy customers, so we always do our best
              for your comfort!
            </h1>
            <button
              onClick={() => handleOnClick(destinasi.id)}
              className="bg-white border border-gray-300 rounded-full px-10 py-3 text-sm font-semibold tracking-[2px] duration-300 transition-all hover:bg-primary hover:text-white"
            >
              ORDER
            </button>
          </div>
        </div>
      );
    });
  };

  const FilteredCard = () =>
    dataDestinasi
      .filter((destinasi) => destinasi.region === region)
      .map((destinasi) => {
        return (
          <div className="bg-zinc-100 relative inline-flex flex-col lg:mt-3 mr-5 lg:mr-0 overflow-hidden group rounded-xl shadow-md cursor-default transition-all hover:-translate-y-3 whitespace-normal	">
            <div className="overflow-hidden relative h-[200px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-t from-black from-5% before:z-10">
              <img
                src={destinasi.foto}
                alt=""
                className="absolute transition-all duration-300 group-hover:scale-125"
              />
              <div className="absolute bottom-3 left-3 z-20 flex flex-col gap-1">
                <h1 className="text-white font-white">{destinasi.name}</h1>
                <div className="flex gap-2">
                  <div className="flex gap-1 ">
                    <img src="/icons/star-icon.svg" alt="" />
                    <img src="/icons/star-icon.svg" alt="" />
                    <img src="/icons/star-icon.svg" alt="" />
                    <img src="/icons/star-icon.svg" alt="" />
                    <img src="/icons/star-icon.svg" alt="" />
                  </div>
                  <h1 className="text-sm text-gray-400 font-medium">
                    (5.0) Rating
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-6">
              <h1 className="text-xl font-semibold">
                Rp {destinasi.price}{" "}
                <span className="text-base text-gray-500 font-medium">
                  / Orang
                </span>
              </h1>
              <h1 className="text-center text-sm text-gray-500 font-medium">
                Our travels are different from all the others! We love our
                business and want to see happy customers, so we always do our
                best for your comfort!
              </h1>
              <button className="bg-white border border-gray-300 rounded-full px-10 py-3 text-sm font-semibold tracking-[2px] duration-300 transition-all hover:bg-primary hover:text-white">
                ORDER
              </button>
            </div>
          </div>
        );
      });
  // Destinasi Favorit Logic End
  return (
    <div className=" -translate-y-2">
      {/* Tour Section */}
      <section>
        <div className="relative overflow-hidden bg-[url('/images/edinburgh-poster.jpg')] bg-cover bg-fixed bg-center flex justify-center items-center h-[300px] lg:h-[600px] border border-red-50 before:content-[''] before:absolute before:bg-black before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-40">
          <div className="flex flex-col items-center z-10">
            <h1 className="text-lg lg:text-2xl text-white font-bold italic">
              Get Your Ticket and Flight With Us
            </h1>
            <h1 className="text-4xl lg:text-9xl text-white font-bold">
              Destination
            </h1>
          </div>
        </div>

        {/* Filter Button */}

        {/* Filter Button End */}

        <div className="whitespace-nowrap lg:whitespace-normal lg:grid grid-cols-3 gap-5 overflow-auto mt-5 mx-4 md:mx-8 lg:mx-28 py-5">
          {region === "Semua" ? DestinasiCard() : FilteredCard()}
        </div>
      </section>
      {/* Tour Section End */}

      {/* Discount Section */}

      {/* Discount Section End */}
    </div>
  );
}

export default DestinasiFavorit;
