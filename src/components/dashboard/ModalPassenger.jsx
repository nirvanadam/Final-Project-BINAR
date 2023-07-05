import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalPassenger({ action, onDataSubmit, onDataCategory }) {
  const [totalPassanger, setTotalPassanger] = useState({
    totalAdults: 0,
    totalKids: 0,
    totalBabies: 0,
  });
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
    const { value } = event.target;
    const numericValue = value.replace(/\D/g, "");
    setTotalAdult(numericValue);
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
    const { value } = event.target;
    const numericValue = value.replace(/\D/g, "");
    setTotalKid(numericValue);
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
    const { value } = event.target;
    const numericValue = value.replace(/\D/g, "");
    setTotalBaby(numericValue);
  };
  // Baby State End

  // Submit Logic
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const total = {
      adult: totalAdult,
      kid: totalKid,
      baby: totalBaby,
    };

    const totalPassengers = totalAdult + totalKid + totalBaby;
    if (totalPassengers == 0) {
      toast.error("Data Penumpang Tidak Boleh Kosong!");
    } else {
      navigate("/", { state: total });
      onDataSubmit(totalPassengers);
      action();
    }
  };

  // Submit Logic End
  return (
    <div className="fixed w-full h-full z-50 bg-black bg-opacity-60 sm:h-screen sm:w-screen font-quickSand">
      <div className="flex w-full h-full sm:justify-center">
        <div className="relative top-1/4 flex flex-col w-full h-fit md:w-[50%] lg:w-1/3 bg-white rounded-lg px-5 pt-8 gap-8 animate__animated animate__fadeInUp ">
          <button onClick={action} className="">
            <img src="/icons/close-icon.svg" alt="" className="absolute top-3 right-5 w-5" />
          </button>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            <div className="flex justify-between border-b-2 border-gray">
              <div className="flex my-2 pb-3">
                <img src="/icons/icon_dewasa.svg" alt="" />
                <h1 className="font-semibold ml-5">Dewasa</h1>
              </div>
              <div className="flex justify-between gap-3 items-center">
                <button onClick={reduceAdult} type="button" className="bg-primary rounded-lg p-2 transition-all active:scale-90">
                  <img src="/icons/minus-icon.svg" alt="" className="w-6 invert " />
                </button>
                <input type="text" value={totalAdult} onChange={handleChangeAdult} className="p-2 w-[60px] border-2 border-gray-300 rounded-lg outline-none text-center font-medium" />
                <button onClick={addAdult} type="button" className="bg-primary rounded-lg p-2 transition-all active:scale-90">
                  <img src="/icons/plus-icon.svg" alt="" className="w-6 invert" />
                </button>
              </div>
            </div>

            <div className="flex justify-between border-b-2 border-gray">
              <div className="flex my-2 pb-3">
                <img src="/icons/icon_anak.svg" alt="" />
                <h1 className="font-semibold ml-5">Anak</h1>
              </div>
              <div className="flex justify-between gap-3 items-center">
                <button type="button" onClick={reduceKid} className="bg-primary rounded-lg p-2 transition-all active:scale-90">
                  <img src="/icons/minus-icon.svg" alt="" className="w-6 invert" />
                </button>
                <input type="text" value={totalKid} onChange={handleChangeKid} className="p-2 w-[60px] border-2 border-gray-300 rounded-lg outline-none text-center font-medium" />
                <button type="button" onClick={addKid} className="bg-primary rounded-lg p-2 transition-all active:scale-90">
                  <img src="/icons/plus-icon.svg" alt="" className="w-6 invert" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray">
              <div className="flex my-2 pb-3">
                <img src="/icons/icon_bayi.svg" alt="" />
                <h1 className="font-semibold ml-5">Bayi</h1>
              </div>
              <div className="flex justify-between gap-3 items-center">
                <button type="button" onClick={reduceBaby} className="bg-primary rounded-lg p-2 transition-all active:scale-90">
                  <img src="/icons/minus-icon.svg" alt="" className="w-6 invert" />
                </button>
                <input value={totalBaby} onChange={handleChangeBaby} type="text" className="p-2 w-[60px] border-2 border-gray-300 rounded-lg outline-none text-center font-medium" />
                <button type="button" onClick={addBaby} className="bg-primary rounded-lg p-2 transition-all active:scale-90">
                  <img src="/icons/plus-icon.svg" alt="" className="w-6 invert" />
                </button>
              </div>
            </div>
            <button type="submit" className="py-3 bg-primary my-4 text-white rounded-lg font-medium">
              Simpan
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ModalPassenger;
