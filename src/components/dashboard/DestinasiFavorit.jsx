import React, { useState } from "react";
import { Link } from "react-router-dom";

function DestinasiFavorit() {
  // Destinasi Favorit Logic
  const dataDestinasi = [
    { id: 1, name: "Jakarta", to: "Sydney", region: "Asia", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?borobur,petronas", price: "3.650.000" },
    { id: 2, name: "New York", to: "Paris", region: "Amerika", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?landmark&america", price: "2.650.000" },
    { id: 3, name: "Sydney", to: "Jakarta", region: "Australia", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?landmark&australia", price: "3.650.000" },
    { id: 4, name: "Paris", to: "New York", region: "Eropa", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?landmark&europe", price: "2.650.000" },
    { id: 5, name: "Cape Town", to: "Sydney", region: "Afrika", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?landmark&africa", price: "3.450.000" },
    // Tambahkan destinasi lainnya di sini
  ];

  const [region, setRegion] = useState("Semua");

  const changeRegionHandler = (region) => {
    setRegion(region);
  };

  const DestinasiCard = () => {
    return dataDestinasi.map((destinasi) => {
      return (
        <Link to={"#"} className="relative inline-flex flex-col overflow-hidden min-w-[250px] max-w-[350px] mr-4 lg:mr-0 px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
          <img src={destinasi.foto} alt="" className="absolute top-0 bottom-0 left-0" />
          <div className="flex flex-col mt-40">
            <h1 className="text-sm font-bold">{`${destinasi.name} -> ${destinasi.to}`}</h1>
            <h1 className="text-xs text-secondary font-bold ">{destinasi.maskapai}</h1>

            <h1 className="text-sm font-semibold">
              Mulai dari <span className="font-bold text-red-600">{`IDR ${destinasi.price}`}</span>
            </h1>
          </div>
        </Link>
      );
    });
  };

  const FilteredCard = () =>
    dataDestinasi
      .filter((destinasi) => destinasi.region === region)
      .map((destinasi) => {
        return (
          <Link to={"#"} className="inline-flex flex-col min-w-[200px] max-w-[350px] mr-4 lg:mr-0 px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
            <img src={destinasi.foto} alt="" className="mb-2 w-[200px]" />
            <h1 className="text-sm font-bold">{`${destinasi.name} -> ${destinasi.to}`}</h1>
            <h1 className="text-xs text-secondary font-bold ">{destinasi.maskapai}</h1>
            <h1 className="text-sm font-semibold">
              Mulai dari <span className="font-bold text-red-600">{`IDR ${destinasi.price}`}</span>
            </h1>
          </Link>
        );
      });
  // Destinasi Favorit Logic End
  return (
    <div className="mx-4 md:mx-8 lg:mx-28 -translate-y-16">
      <h1 className="text-lg font-bold mb-4">Destinasi Favorit</h1>

      <div className="flex flex-wrap lg:justify-start gap-x-3 gap-y-4 lg:gap-5">
        {/* Semua Button */}
        <button
          onClick={() => changeRegionHandler("Semua")}
          className={`${region === "Semua" ? `bg-primary` : `bg-gray-400`} flex justify-center items-center gap-3 rounded-lg  px-4 py-2 hover:bg-primary hover:-translate-y-1 active:scale-90 transition`}
        >
          <img src="/icons/search_icon.svg" alt="" />
          <h1 className="text-white font-medium">Semua</h1>
        </button>
        {/* Semua Button End */}

        {/* Asia Button */}
        <button
          onClick={() => changeRegionHandler("Asia")}
          className={`${region === "Asia" ? `bg-primary` : `bg-gray-400`} flex justify-center items-center gap-3 rounded-lg  px-4 py-2 hover:bg-primary hover:-translate-y-1 active:scale-90 transition`}
        >
          <img src="/icons/search_icon.svg" alt="" />
          <h1 className="text-white font-medium">Asia</h1>
        </button>
        {/* Asia Button End */}

        {/* Amerika Button */}
        <button
          onClick={() => changeRegionHandler("Amerika")}
          className={`${region === "Amerika" ? `bg-primary` : `bg-gray-400`} flex justify-center items-center gap-3 rounded-lg  px-4 py-2 hover:bg-primary hover:-translate-y-1 active:scale-90 transition`}
        >
          <img src="/icons/search_icon.svg" alt="" />
          <h1 className="text-white font-medium">Amerika</h1>
        </button>
        {/* Amerika Button End */}

        {/* Australia Button */}
        <button
          onClick={() => changeRegionHandler("Australia")}
          className={`${region === "Australia" ? `bg-primary` : `bg-gray-400`} flex justify-center items-center gap-3 rounded-lg  px-4 py-2 group hover:bg-primary hover:-translate-y-1 active:scale-90 transition`}
        >
          <img src="/icons/search_icon.svg" alt="" />
          <h1 className="text-white font-medium">Australia</h1>
        </button>
        {/* Australia Button End */}

        {/* Eropa Button */}
        <button
          onClick={() => changeRegionHandler("Eropa")}
          className={`${region === "Eropa" ? `bg-primary` : `bg-gray-400`} flex justify-center items-center gap-3 rounded-lg  px-4 py-2 hover:bg-primary hover:-translate-y-1 active:scale-90 transition`}
        >
          <img src="/icons/search_icon.svg" alt="" />
          <h1 className="text-white font-medium">Eropa</h1>
        </button>
        {/* Eropa Button End */}

        {/* Afrika Button */}
        <button
          onClick={() => changeRegionHandler("Afrika")}
          className={`${region === "Afrika" ? `bg-primary` : `bg-gray-400`} flex justify-center items-center gap-3 rounded-lg  px-4 py-2 hover:bg-primary hover:-translate-y-1 active:scale-90 transition`}
        >
          <img src="/icons/search_icon.svg" alt="" />
          <h1 className="text-white font-medium">Afrika</h1>
        </button>
        {/* Afrika Button End */}
      </div>

      <div className="mt-5 lg:mt-10 lg:flex lg:flex-wrap lg:gap-6 whitespace-nowrap overflow-auto lg:whitespace-normal touch-auto w-[110%] lg:w-full h-[300px] lg:h-full">{region === "Semua" ? DestinasiCard() : FilteredCard()}</div>
    </div>
  );
}

export default DestinasiFavorit;
