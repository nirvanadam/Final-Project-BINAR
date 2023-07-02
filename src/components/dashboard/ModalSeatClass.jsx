import React, { useState } from "react";
import Select from "react-select";

function ModalSeatClass({ action, onDataSubmit }) {
  const [inputValue, setInputValue] = useState();
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDataSubmit(inputValue);
    action();
  };

  return (
    <div className="font-quickSand fixed w-full h-[80%] bottom-0 z-50 bg-white sm:bg-slate-500 sm:bg-opacity-80 sm:h-screen sm:w-screen">
      <div className="flex w-full h-full sm:justify-center sm:items-center">
        <div className="w-full sm:w-1/3 sm:bg-white sm:rounded-md flex flex-col px-5 gap-4 pt-2 items-end">
          <button onClick={action} className="mt-3">
            <img src="/icons/close-icon.svg" alt="" className="w-5" />
          </button>
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            {/* Economy */}
            <div className={`${inputValue === "Economy" ? `bg-zinc-400` : `bg-transparent`} relative flex items-center w-full h-[50px] px-4 rounded-lg hover:bg-zinc-400 transition-all duration-200`}>
              <input type="radio" value="Economy" onChange={handleOnChange} name="seat-class" id="" className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[50px] opacity-0 cursor-pointer" />
              <div className="flex flex-col">
                <h1 className="font-bold">Economy</h1>
              </div>
              <img src="/icons/check-icon.svg" alt="" className={`${inputValue === "Economy" ? `visible` : `invisible`} absolute top-1/2 -translate-y-1/2 right-3 w-8`} />
            </div>
            {/* Economy End */}

            <span className="bg-gray-300 w-full h-[1px] my-2"></span>

            {/* Business */}
            <div className={`${inputValue === "Business" ? `bg-zinc-400` : `bg-transparent`} relative flex items-center w-full h-[50px] px-4 rounded-lg hover:bg-zinc-400 transition-all duration-200`}>
              <input type="radio" value="Business" onChange={handleOnChange} name="seat-class" id="" className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[50px] opacity-0 cursor-pointer" />
              <div className="flex flex-col">
                <h1 className="font-bold">Business</h1>
              </div>
              <img src="/icons/check-icon.svg" alt="" className={`${inputValue === "Business" ? `visible` : `invisible`} absolute top-1/2 -translate-y-1/2 right-3 w-8`} />
            </div>
            {/* Business End */}

            <span className="bg-gray-300 w-full h-[1px] my-2"></span>

            {/* First Class */}
            <div className={`${inputValue === "First Class" ? `bg-zinc-400` : `bg-transparent`} relative flex items-center w-full h-[50px] px-4 rounded-lg hover:bg-zinc-400 hover transition-all duration-200`}>
              <input type="radio" value="First Class" onChange={handleOnChange} name="seat-class" id="" className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[50px] opacity-0 cursor-pointer" />
              <div className="flex flex-col">
                <h1 className="font-bold">First Class</h1>
              </div>
              <img src="/icons/check-icon.svg" alt="" className={`${inputValue === "First Class" ? `visible` : `invisible`} absolute top-1/2 -translate-y-1/2 right-3 w-8`} />
            </div>
            {/* First Class End */}

            <button type="submit" className="w-full mt-10 py-3 px-10 bg-primary mb-4 text-white font-medium rounded-md">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalSeatClass;
