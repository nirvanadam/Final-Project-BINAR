import React from "react";

function ModalSort({ action }) {
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
          <form className="w-full flex items-center gap-2">
            <div className="flex flex-col w-full">
              {/* <HargaTermurah Start/> */}
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label for="radio1" className="ml-2 text-[16px] text-black">
                  <h1>Harga-Termurah</h1>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
              </div>
              {/* <HargaTermurah End/> */}

              {/* <Durasi Start/> */}
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label for="radio" className="ml-2 text-[16px] text-black">
                  <h1>Durasi-Terpendek</h1>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
              </div>
              {/* <Durasi End/> */}

              {/* <Keberangkatan Awal Start/> */}
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label for="radio" className="ml-2 text-[16px] text-black">
                  <h1>Keberangkatan-Paling Awal</h1>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
              </div>
              {/* <Keberangkatan Awal End/> */}

              {/* <Keberangkatan Akhir Start/> */}
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label for="radio" className="ml-2 text-[16px] text-black">
                  <h1>Keberangkatan-Paling Akhir</h1>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
              </div>
              {/* <Keberangkatan Akhir End/> */}

              {/* <Kedatangan Awal Start/> */}
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label for="radio" className="ml-2 text-[16px] text-black">
                  <h1>Kedatangan-Paling Awal</h1>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
              </div>
              {/* <Kedatangan Awal End/> */}

              {/* <Kedatangan Akhir Start/> */}
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label for="radio" className="ml-2 text-[16px] text-black">
                  <h1>Kedatangan-Paling Akhir</h1>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
              </div>
              {/* <Kedatangan Akhir End/> */}
            </div>
          </form>
          <button className="py-3 px-10 bg-black mb-4 text-white rounded-md">
            Pilih
          </button>
        </div>
      </div>
    </div>
    // <ModalEnd />
  );
}

export default ModalSort;
