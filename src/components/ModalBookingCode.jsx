import React from "react";

function ModalBookingCode({ close }) {
  return (
    <div className="fixed w-full h-[80%] bottom-0 z-50 bg-white sm:bg-slate-500 sm:bg-opacity-80 sm:h-screen sm:w-screen">
      <div className="flex w-full h-full sm:justify-center sm:items-center">
        <div className="relative w-full sm:w-1/3 sm:bg-white sm:rounded-md flex flex-col px-5 pt-8 gap-8">
          <button
            onClick={close}
            className="absolute top-0 right-5 text-[28px] font-semibold"
          >
            x
          </button>
          <form className="w-full flex flex-col gap-2 mt-5 my-5">
            <div className="relative w-full lg:flex items-center rounded-lg border-2 px-2.5 py-2">
              <input
                className="w-full bg-transparent rounded-lg px-5 py-2 outline-none"
                placeholder="Masukan Booking Code"
                type="text"
              />
              <button className="absolute right-5 mt-2 lg:mt-0">
                <img
                  src="/icons/search_icon.svg"
                  alt=""
                  className="invert opacity-40"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalBookingCode;
