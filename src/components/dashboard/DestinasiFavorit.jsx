import React, { useState } from "react";
import { Link } from "react-router-dom";

function DestinasiFavorit() {
  // Destinasi Favorit Logic
  const dataDestinasi = [
    { id: 1, name: "Jakarta", region: "Asia", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?old&norway", price: "3.650.000" },
    { id: 2, name: "New York", region: "Amerika", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?landmark&america", price: "2.650.000" },
    { id: 3, name: "Sydney", region: "Australia", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?landmark&australia", price: "3.650.000" },
    { id: 4, name: "Paris", region: "Eropa", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?landmark&europe", price: "2.650.000" },
    { id: 5, name: "Cape Town", to: "Sydney", region: "Afrika", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?landmark&africa", price: "3.450.000" },
    { id: 6, name: "Cape Town", to: "Sydney", region: "Afrika", maskapai: "AirAsia", foto: "https://source.unsplash.com/1600x900/?landmark&africa", price: "3.450.000" },
    // Tambahkan destinasi lainnya di sini
  ];

  const [region, setRegion] = useState("Semua");

  const changeRegionHandler = (region) => {
    setRegion(region);
  };

  const DestinasiCard = () => {
    return dataDestinasi.map((destinasi) => {
      return (
        <div className="bg-zinc-100 relative inline-flex flex-col lg:mt-3 mr-5 lg:mr-0 overflow-hidden group rounded-xl shadow-md cursor-default transition-all duration-[0.4s] hover:-translate-y-3 whitespace-normal	">
          <div className="overflow-hidden relative h-[200px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-t from-black from-5% before:z-10">
            <img src={destinasi.foto} alt="" className="absolute transition-all duration-[0.4s] group-hover:scale-125" />
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
          <div className="bg-zinc-100 relative inline-flex flex-col lg:mt-3 mr-5 lg:mr-0 overflow-hidden group rounded-xl shadow-md cursor-default transition-all hover:-translate-y-3 whitespace-normal	">
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
  // Destinasi Favorit Logic End
  return (
    <div className=" -translate-y-2">
      {/* Tour Section */}
      <section>
        <div className="relative overflow-hidden bg-[url('/images/edinburgh-poster.jpg')] bg-cover bg-fixed bg-center flex justify-center items-center h-[300px] lg:h-[600px] border border-red-50 before:content-[''] before:absolute before:bg-black before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-40">
          <div className="flex flex-col items-center z-10">
            <h1 className="text-lg lg:text-2xl text-white font-bold italic">All Tours For You</h1>
            <h1 className="text-5xl lg:text-9xl text-white font-bold">Our Tours</h1>
          </div>
        </div>

        {/* Filter Button */}
        <div className="hidden relative lg:flex flex-wrap items-center gap-x-3 overflow-hidden gap-y-4 lg:gap-5 mx-28 bg-white pl-44 pr-5 py-5 rounded-lg -translate-y-10 shadow-md">
          <h1 className="absolute left-0 flex items-center h-full bg-primary text-white font-medium px-10">Region</h1>
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

        <div className="whitespace-nowrap lg:whitespace-normal lg:grid grid-cols-3 gap-5 overflow-auto mt-5 mx-4 md:mx-8 lg:mx-28 py-5">{region === "Semua" ? DestinasiCard() : FilteredCard()}</div>
      </section>
      {/* Tour Section End */}

      {/* Discount Section */}
      <section className="mt-20">
        <div className="relative overflow-hidden bg-[url('/images/edinburgh-poster.jpg')] bg-cover bg-fixed bg-no-repeat bg-center flex justify-center items-center h-[300px] lg:h-[600px] mb-10 border border-red-50 before:content-[''] before:absolute before:bg-black before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-40">
          <div className="flex flex-col items-center z-10">
            <h1 className="text-lg lg:text-2xl text-white font-bold italic">Discount Offer</h1>
            <h1 className="text-5xl lg:text-9xl text-white font-bold">Discount</h1>
          </div>
        </div>

        <div className=" lg:grid lg:grid-cols-4 lg:grid-rows-4 gap-7 lg:h-[1000px] lg:mx-9">
          {/* Item 1  */}
          <div className="relative overflow-hidden group lg:col-span-2 lg:row-span-2 rounded-xl before:content-[''] before:absolute before:bg-gradient-to-t from-black from-1% before:top-0 before:bottom-0 before:left-0 before:right-0 cursor-pointer">
            <img src="https://source.unsplash.com/1600x900/?edinburgh" alt="" className="absolute -z-10 top-10 scale-150 transition-all duration-500 group-hover:scale-[1.7]" />

            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-2xl text-white font-bold">$ 950.00 USD</h1>
              <h1 className="text-lg font-medium">Adventures in Japan</h1>
              <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
            </div>

            <button className="absolute top-0 bg-primary w-full py-5 text-white text-sm font-medium tracking-widest shadow-2xl duration-500 transition-all opacity-0 group-hover:opacity-100">ORDER</button>
          </div>
          {/* Item 1  End */}

          {/* Item 2 */}
          <div className="relative overflow-hidden group rounded-xl before:content-[''] before:absolute before:bg-gradient-to-t from-black from-1% before:top-0 before:bottom-0 before:left-0 before:right-0 cursor-pointer">
            <img src="https://source.unsplash.com/1600x901/?edinburgh" alt="" className="absolute -z-10 top-10 scale-150 transition-all duration-500 group-hover:scale-[1.7]" />

            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-xl text-white font-bold">$ 950.00 USD</h1>
              <h1 className="font-medium">Adventures in Japan</h1>
              <p>Enjoy each of our tours</p>
            </div>

            <button className="absolute top-0 bg-primary w-full py-5 text-white text-sm font-medium tracking-widest shadow-2xl duration-500 transition-all opacity-0 group-hover:opacity-100">ORDER</button>
          </div>
          {/* Item 2 End */}

          {/* Item 3 */}
          <div className="relative overflow-hidden group rounded-xl before:content-[''] before:absolute before:bg-gradient-to-t from-black from-1% before:top-0 before:bottom-0 before:left-0 before:right-0 cursor-pointer">
            <img src="https://source.unsplash.com/1600x902/?edinburgh" alt="" className="absolute -z-10 top-10 scale-150 transition-all duration-500 group-hover:scale-[1.7]" />

            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-xl text-white font-bold">$ 950.00 USD</h1>
              <h1 className="font-medium">Adventures in Japan</h1>
              <p>Enjoy each of our tours</p>
            </div>

            <button className="absolute top-0 bg-primary w-full py-5 text-white text-sm font-medium tracking-widest shadow-2xl duration-500 transition-all opacity-0 group-hover:opacity-100">ORDER</button>
          </div>
          {/* Item 3 End */}

          {/* Item 4 */}
          <div className="lg:col-span-2 relative overflow-hidden group rounded-xl before:content-[''] before:absolute before:bg-gradient-to-t from-black from-1% before:top-0 before:bottom-0 before:left-0 before:right-0 cursor-pointer">
            <img src="https://source.unsplash.com/1600x903/?edinburgh" alt="" className="absolute -z-10 top-10 scale-150 transition-all duration-500 group-hover:scale-[1.7]" />

            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-xl text-white font-bold">$ 950.00 USD</h1>
              <h1 className="font-medium">Adventures in Japan</h1>
              <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
            </div>

            <button className="absolute top-0 bg-primary w-full py-5 text-white text-sm font-medium tracking-widest shadow-2xl duration-500 transition-all opacity-0 group-hover:opacity-100">ORDER</button>
          </div>
          {/* Item 4 End */}

          {/* Item 5 */}
          <div className="relative overflow-hidden group rounded-xl before:content-[''] before:absolute before:bg-gradient-to-t from-black from-1% before:top-0 before:bottom-0 before:left-0 before:right-0 cursor-pointer">
            <img src="https://source.unsplash.com/1600x904/?edinburgh" alt="" className="absolute -z-10 top-10 scale-150 transition-all duration-500 group-hover:scale-[1.7]" />

            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-xl text-white font-bold">$ 950.00 USD</h1>
              <h1 className="font-medium">Adventures in Japan</h1>
              <p>Enjoy each of our tours</p>
            </div>

            <button className="absolute top-0 bg-primary w-full py-5 text-white text-sm font-medium tracking-widest shadow-2xl duration-500 transition-all opacity-0 group-hover:opacity-100">ORDER</button>
          </div>
          {/* Item 5 End */}

          {/* Item 6 */}
          <div className="relative overflow-hidden group rounded-xl before:content-[''] before:absolute before:bg-gradient-to-t from-black from-1% before:top-0 before:bottom-0 before:left-0 before:right-0 cursor-pointer">
            <img src="https://source.unsplash.com/1600x905/?edinburgh" alt="" className="absolute -z-10 top-10 scale-150 transition-all duration-500 group-hover:scale-[1.7]" />

            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-xl text-white font-bold">$ 950.00 USD</h1>
              <h1 className="font-medium">Adventures in Japan</h1>
              <p>Enjoy each of our tours</p>
            </div>

            <button className="absolute top-0 bg-primary w-full py-5 text-white text-sm font-medium tracking-widest shadow-2xl duration-500 transition-all opacity-0 group-hover:opacity-100">ORDER</button>
          </div>
          {/* Item 6 End */}

          {/* Item 7 */}
          <div className="relative overflow-hidden group lg:col-span-2 lg:row-span-2 rounded-xl before:content-[''] before:absolute before:bg-gradient-to-t from-black from-1% before:top-0 before:bottom-0 before:left-0 before:right-0 cursor-pointer">
            <img src="https://source.unsplash.com/1600x906/?edinburgh" alt="" className="absolute -z-10 top-10 scale-150 transition-all duration-500 group-hover:scale-[1.7]" />

            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-2xl text-white font-bold">$ 950.00 USD</h1>
              <h1 className="text-lg font-medium">Adventures in Japan</h1>
              <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
            </div>

            <button className="absolute top-0 bg-primary w-full py-5 text-white text-sm font-medium tracking-widest shadow-2xl duration-500 transition-all opacity-0 group-hover:opacity-100">ORDER</button>
          </div>
          {/* Item End 7 */}

          {/* Item 8 */}

          <div className="relative overflow-hidden group lg:col-span-2 rounded-xl before:content-[''] before:absolute before:bg-gradient-to-t from-black from-1% before:top-0 before:bottom-0 before:left-0 before:right-0 cursor-pointer">
            <img src="https://source.unsplash.com/1600x907/?edinburgh" alt="" className="absolute -z-10 top-10 scale-150 transition-all duration-500 group-hover:scale-[1.7]" />

            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-2xl text-white font-bold">$ 950.00 USD</h1>
              <h1 className="text-lg font-medium">Adventures in Japan</h1>
              <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
            </div>

            <button className="absolute top-0 bg-primary w-full py-5 text-white text-sm font-medium tracking-widest shadow-2xl duration-500 transition-all opacity-0 group-hover:opacity-100">ORDER</button>
          </div>
          {/* Item 8 End */}
        </div>
      </section>
      {/* Discount Section End */}
    </div>
  );
}

export default DestinasiFavorit;
