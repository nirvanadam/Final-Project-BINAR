import React from "react";

function ModalPassenger({ action }) {
  return (
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
              <div className="flex justify-between content-center border-b-2 border-gray">
                <div className="flex justify text-left my-2 pb-3">
                  <img src="/icons/icon_dewasa.svg" alt="" />
                  <h1 className="font-semibold ml-5">Dewasa</h1>
                </div>
                <div className="flex space-x-4">
                  <button className="text-[16px] font-semibold border border-gray-950 px-2 my-3">
                    -
                  </button>
                  <input className=" " type="text" />
                  <button className="text-[16px] font-semibold border border-gray-950 px-2 my-3">
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between content-center border-b-2 border-gray">
                <div className="flex justify text-left my-2 pb-3">
                  <img src="/icons/icon_anak.svg" alt="" />
                  <h1 className="font-semibold ml-5">Anak</h1>
                </div>
                <div className="flex space-x-4">
                  <button className="text-[16px] font-semibold border border-gray-950 px-2 my-3">
                    -
                  </button>
                  <input className=" " type="text" />
                  <button className="text-[16px] font-semibold border border-gray-950 px-2 my-3">
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between content-center border-b-2 border-gray">
                <div className="flex justify text-left my-2 pb-3">
                  <img src="/icons/icon_bayi.svg" alt="" />
                  <h1 className="font-semibold ml-5">Bayi</h1>
                </div>
                <div className="flex space-x-4">
                  <button className="text-[16px] font-semibold border border-gray-950 px-2 my-3">
                    -
                  </button>
                  <input className=" " type="text" />
                  <button className="text-[16px] font-semibold border border-gray-950 px-2 my-3">
                    +
                  </button>
                </div>
              </div>
            </div>
          </form>
          <button className="py-3 px-10 bg-black mb-4 text-white rounded-md">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPassenger;
