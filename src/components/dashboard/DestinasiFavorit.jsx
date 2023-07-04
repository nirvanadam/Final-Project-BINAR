import React, { useState } from "react";
import { Link } from "react-router-dom";

function DestinasiFavorit() {
  // Destinasi Favorit Logic
  const dataDestinasi = [
    { id: 1, name: "Jakarta", region: "Asia", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?old&norway", price: "3.650.000" },
    { id: 2, name: "Jakarta", region: "Asia", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?old&norway", price: "3.650.000" },
    { id: 3, name: "Jakarta", region: "Asia", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?old&norway", price: "3.650.000" },
    { id: 4, name: "Jakarta", region: "Asia", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?old&norway", price: "3.650.000" },
    { id: 5, name: "Jakarta", region: "Asia", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?old&norway", price: "3.650.000" },
  ];

  const [region, setRegion] = useState("Semua");

  const changeRegionHandler = (region) => {
    setRegion(region);
  };

  const DestinasiCard = () => {
    return dataDestinasi.map((destinasi) => {
      return (
        // <Link to={"#"} className="relative inline-flex flex-col overflow-hidden min-w-[250px] max-w-[350px] mr-4 lg:mr-0 px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
        //   <img src={destinasi.foto} alt="" className="absolute top-0 bottom-0 left-0" />
        //   <div className="flex flex-col mt-40">
        //     <h1 className="text-sm font-bold">{`${destinasi.name} -> ${destinasi.to}`}</h1>
        //     <h1 className="text-xs text-secondary font-bold ">{destinasi.maskapai}</h1>

        //     <h1 className="text-sm font-semibold">
        //       Mulai dari <span className="font-bold text-red-600">{`IDR ${destinasi.price}`}</span>
        //     </h1>
        //   </div>
        // </Link>
        <div className="bg-zinc-100 relative inline-flex flex-col lg:mt-3 mr-5 lg:mr-0 overflow-hidden group rounded-xl  shadow-md cursor-default transition-all hover:-translate-y-3 whitespace-normal	">
          <div className="overflow-hidden relative h-[200px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-t from-black from-5% before:z-10">
            <img src={destinasi.foto} alt="" className="absolute transition-all duration-300 group-hover:scale-125" />
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
                <h1 className="text-sm text-gray-400 font-medium">(5.0) Rating</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 p-6">
            <h1 className="text-xl font-semibold">
              Rp {destinasi.price} <span className="text-base text-gray-500 font-medium">/ Orang</span>
            </h1>
            <h1 className="text-center text-sm text-gray-500 font-medium">Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!</h1>
            <button className="bg-white border border-gray-300 rounded-full px-10 py-3 text-sm font-semibold tracking-[2px] duration-300 transition-all hover:bg-primary hover:text-white">ORDER</button>
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
          <Link to={"#"} className="inline-flex flex-col min-w-[200px] max-w-[350px] px-3 pt-2 pb-3 border border-slate-300 shadow-md rounded-xl">
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
    <div className="mx-4 md:mx-8 lg:mx-28 -translate-y-2">
      <h1 className="text-lg font-bold mb-4">Destinasi Favorit</h1>

      {/* Filter Button */}
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
      {/* Filter Button End */}

      {/* <div className="mt-5 lg:mt-10 flex lg:flex-wrap justify-between lg:gap-5 overflow-auto whitespace-nowrap lg:whitespace-normal touch-auto w-[110%] lg:w-full lg:h-full">{region === "Semua" ? DestinasiCard() : FilteredCard()}</div> */}

      <div className="whitespace-nowrap lg:whitespace-normal lg:grid grid-cols-3 gap-5 overflow-scroll mt-5 py-5">{region === "Semua" ? DestinasiCard() : FilteredCard()}</div>
    </div>
  );
}

export default DestinasiFavorit;
