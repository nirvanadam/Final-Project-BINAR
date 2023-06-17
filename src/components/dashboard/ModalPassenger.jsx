import React, { useState } from "react";

function ModalPassenger({ action, onDataSubmit }) {
  // Adult State
  const [totalAdult, setTotalAdult] = useState(0);
  const addAdult = () => {
    setTotalAdult(totalAdult + 1);
  };

  const reduceAdult = () => {
    setTotalAdult(totalAdult - 1);
    if (totalAdult <= 0) {
      setTotalAdult(totalAdult - 0);
    }
  };

  const handleChangeAdult = (event) => {
    setTotalAdult(event.target.value);
  };
  // Adult State End

  // Kid State
  const [totalKid, setTotalKid] = useState(0);
  const addKid = () => {
    setTotalKid(totalKid + 1);
  };

  const reduceKid = () => {
    setTotalKid(totalKid - 1);
    if (totalKid <= 0) {
      setTotalKid(totalKid - 0);
    }
  };

  const handleChangeKid = (event) => {
    setTotalKid(event.target.value);
  };
  // Kid State End

  // Baby State
  const [totalBaby, setTotalBaby] = useState(0);
  const addBaby = () => {
    setTotalBaby(totalBaby + 1);
  };

  const reduceBaby = () => {
    setTotalBaby(totalBaby - 1);
    if (totalBaby <= 0) {
      setTotalBaby(totalBaby - 0);
    }
  };

  const handleChangeBaby = (event) => {
    setTotalBaby(event.target.value);
  };
  // Baby State End

  // Submit Logic
  const handleSubmit = (event) => {
    event.preventDefault();
    onDataSubmit(totalAdult + totalKid + totalBaby);
    action();
  };
  // Submit Logic End
  return (
    <div className="fixed w-full h-[80%] bottom-0 z-50 bg-white sm:bg-slate-500 sm:bg-opacity-80 sm:h-screen sm:w-screen">
      <div className="flex w-full h-full sm:justify-center sm:items-center">
        <div className="w-full sm:w-1/3 sm:bg-white sm:rounded-xl flex flex-col px-5 gap-4 pt-2 items-end ">
          <button onClick={action} className="text-[20px] font-semibold text-red-500">
            x
          </button>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            <div className="flex justify-between border-b-2 border-gray">
              <div className="flex my-2 pb-3">
                <img src="/icons/icon_dewasa.svg" alt="" />
                <h1 className="font-semibold ml-5">Dewasa</h1>
              </div>
              <div className="flex justify-between gap-3 items-center">
                <button onClick={reduceAdult} type="button" className="border-2 border-secondary rounded-lg p-2">
                  <img src="/icons/minus-icon.svg" alt="" className="w-6 opacity-60" />
                </button>
                <input type="text" value={totalAdult} onChange={handleChangeAdult} className="p-2 w-[60px] border-2 border-gray-300 rounded-lg outline-none text-center font-medium" />
                <button onClick={addAdult} type="button" className="border-2 border-secondary rounded-lg p-2">
                  <img src="/icons/plus-icon.svg" alt="" className="w-6 opacity-60" />
                </button>
              </div>
            </div>

            <div className="flex justify-between border-b-2 border-gray">
              <div className="flex my-2 pb-3">
                <img src="/icons/icon_anak.svg" alt="" />
                <h1 className="font-semibold ml-5">Anak</h1>
              </div>
              <div className="flex justify-between gap-3 items-center">
                <button type="button" onClick={reduceKid} className="border-2 border-secondary rounded-lg p-2">
                  <img src="/icons/minus-icon.svg" alt="" className="w-6 opacity-60" />
                </button>
                <input type="text" value={totalKid} onChange={handleChangeKid} className="p-2 w-[60px] border-2 border-gray-300 rounded-lg outline-none text-center font-medium" />
                <button type="button" onClick={addKid} className="border-2 border-secondary rounded-lg p-2">
                  <img src="/icons/plus-icon.svg" alt="" className="w-6 opacity-60" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray">
              <div className="flex my-2 pb-3">
                <img src="/icons/icon_bayi.svg" alt="" />
                <h1 className="font-semibold ml-5">Bayi</h1>
              </div>
              <div className="flex justify-between gap-3 items-center">
                <button type="button" onClick={reduceBaby} className="border-2 border-secondary rounded-lg p-2">
                  <img src="/icons/minus-icon.svg" alt="" className="w-6 opacity-60" />
                </button>
                <input value={totalBaby} onChange={handleChangeBaby} type="text" className="p-2 w-[60px] border-2 border-gray-300 rounded-lg outline-none text-center font-medium" />
                <button type="button" onClick={addBaby} className="border-2 border-secondary rounded-lg p-2">
                  <img src="/icons/plus-icon.svg" alt="" className="w-6 opacity-60" />
                </button>
              </div>
            </div>
            <button type="submit" className="py-3 bg-primary my-4 text-white rounded-lg">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalPassenger;