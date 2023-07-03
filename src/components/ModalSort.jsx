import React, { useState } from "react";

function ModalSort({ action, onDataSubmit, namaSort }) {
  const [isSort, setIsSort] = useState();
  const handleChange = (event) => {
    setIsSort(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const [value, type] = isSort.split(" ");
    const [data, v] = isSort.split("oke ");
    namaSort(v);
    onDataSubmit({
      sort_by: value,
      sort_type: type,
    });

    // console.log([value, type]);
    action();
  };

  return (
    // <Modal Start />
    <div className="fixed w-full h-[80%] bottom-0 z-50 bg-white sm:bg-slate-500 sm:bg-opacity-80 sm:h-screen sm:w-screen">
      <div className="flex w-full h-full sm:justify-center sm:items-center">
        <div className="w-full sm:w-1/3 sm:bg-white sm:rounded-md flex flex-col px-5 gap-4 pt-2 items-end">
          <button
            onClick={action}
            className="text-[20px] font-semibold text-red-500"
          >
            x
          </button>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-end gap-2"
          >
            <div className="flex flex-col w-full">
              {/* <HargaTermurah Start/> */}
              <div
                className={`bg-transparent relative flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-300`}
              >
                <input
                  type="radio"
                  value="price asc oke Termurah"
                  onChange={handleChange}
                  name="termurah"
                  id=""
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[60px] opacity-0 cursor-pointer"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold">Harga-Termurah</h1>
                </div>
                <img
                  src="/icons/check-icon.svg"
                  alt=""
                  className={`${
                    isSort == "price asc oke Termurah" ? `visible` : `invisible`
                  } absolute top-1/2 -translate-y-1/2 right-3 w-8`}
                />
              </div>
              {/* <HargaTermurah End/> */}

              {/* <Durasi Start/> */}
              <div
                className={`bg-transparent relative flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-300`}
              >
                <input
                  type="radio"
                  value="flight_duration asc oke Durasi Terpendek"
                  onChange={handleChange}
                  name="termurah"
                  id=""
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[60px] opacity-0 cursor-pointer"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold">Durasi-Terpendek</h1>
                </div>
                <img
                  src="/icons/check-icon.svg"
                  alt=""
                  className={`${
                    isSort == "flight_duration asc oke Durasi Terpendek"
                      ? `visible`
                      : `invisible`
                  } absolute top-1/2 -translate-y-1/2 right-3 w-8`}
                />
              </div>
              {/* <Durasi End/> */}

              {/* <Keberangkatan Awal Start/> */}
              <div
                className={`bg-transparent relative flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-300`}
              >
                <input
                  type="radio"
                  value="departure_time asc oke Keberangkatan Awal"
                  onChange={handleChange}
                  name="termurah"
                  id=""
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[60px] opacity-0 cursor-pointer"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold">Keberangkatan-Paling Awal</h1>
                </div>
                <img
                  src="/icons/check-icon.svg"
                  alt=""
                  className={`${
                    isSort == "departure_time asc oke Keberangkatan Awal"
                      ? `visible`
                      : `invisible`
                  } absolute top-1/2 -translate-y-1/2 right-3 w-8`}
                />
              </div>
              {/* <Keberangkatan Awal End/> */}

              {/* <Keberangkatan Akhir Start/> */}
              <div
                className={`bg-transparent relative flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-300`}
              >
                <input
                  type="radio"
                  value="departure_time desc oke Keberangkatan Akhir"
                  onChange={handleChange}
                  name="termurah"
                  id=""
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[60px] opacity-0 cursor-pointer"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold">Keberangkatan-Paling Akhir</h1>
                </div>
                <img
                  src="/icons/check-icon.svg"
                  alt=""
                  className={`${
                    isSort == "departure_time desc oke Keberangkatan Akhir"
                      ? `visible`
                      : `invisible`
                  } absolute top-1/2 -translate-y-1/2 right-3 w-8`}
                />
              </div>
              {/* <Keberangkatan Akhir End/> */}

              {/* <Kedatangan Awal Start/> */}
              <div
                className={`bg-transparent relative flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-300`}
              >
                <input
                  type="radio"
                  value="arrival_time asc oke Kedatangan Awal"
                  onChange={handleChange}
                  name="termurah"
                  id=""
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[60px] opacity-0 cursor-pointer"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold">Kedatangan-Paling Awal</h1>
                </div>
                <img
                  src="/icons/check-icon.svg"
                  alt=""
                  className={`${
                    isSort == "arrival_time asc oke Kedatangan Awal"
                      ? `visible`
                      : `invisible`
                  } absolute top-1/2 -translate-y-1/2 right-3 w-8`}
                />
              </div>
              {/* <Kedatangan Awal End/> */}

              {/* <Kedatangan Akhir Start/> */}
              <div
                className={`bg-transparent relative flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-300`}
              >
                <input
                  type="radio"
                  value="arrival_time desc oke Kedatangan Akhir"
                  onChange={handleChange}
                  name="termurah"
                  id=""
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[60px] opacity-0 cursor-pointer"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold">Kedatangan-Paling Akhir</h1>
                </div>
                <img
                  src="/icons/check-icon.svg"
                  alt=""
                  className={`${
                    isSort == "arrival_time desc oke Kedatangan Akhir"
                      ? `visible`
                      : `invisible`
                  } absolute top-1/2 -translate-y-1/2 right-3 w-8`}
                />
              </div>
              {/* <Kedatangan Akhir End/> */}
            </div>
            <button
              type="submit"
              className="py-3 px-10 bg-black mb-4 text-white rounded-md"
            >
              Pilih
            </button>
          </form>
        </div>
      </div>
    </div>
    // <ModalEnd />
  );
}

export default ModalSort;
