import React from "react";

function ModalSeatClass({ action }) {
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
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label
                  for="radio1"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  <h1>Economy</h1>
                  <h2>IDR 4.950.000</h2>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
              </div>
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label
                  for="radio"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  <h1>Premium Economy</h1>
                  <h2>IDR 7.550.000</h2>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
              </div>
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label
                  for="radio"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  <h1>Business</h1>
                  <h2>IDR 29.220.000</h2>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
              </div>
              <div className="flex justify-between text-left my-2 pb-3 border-b-2 border-gray">
                <label
                  for="radio"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  <h1>Economy</h1>
                  <h2>IDR 87.620.000</h2>
                </label>
                <input
                  className=""
                  id="radio"
                  type="radio"
                  value=""
                  name="radio"
                />
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

export default ModalSeatClass;
