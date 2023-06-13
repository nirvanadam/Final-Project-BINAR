import React from "react";
import NavbarMobile from "../components/NavbarMobile";

function Notifikasi() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mx-7 my-4">
        <h1 className="text-2xl font-bold mb-4">Notifikasi</h1>
        <div className="flex border gap-2 items-start border-red-500">
          <img className="" src="/icons/icon_lonceng.svg" alt="" />
          <div className="w-full flex flex-col">
            <div className="flex justify-between text-[10px] text-gray-500">
              <h1>Promosi</h1>
              <h1>20 Maret, 14:04</h1>
            </div>
            <h1 className="font-semibold text-[14px]">
              Dapatkan Potongan 50% Tiket!
            </h1>
            <h1 className="text-[10px] text-gray-600">
              Syarat ketentuan berlaku!
            </h1>
          </div>
        </div>
        <span className="w-full h-[1px] bg-gray-400 my-4"></span>
        <div className="flex border gap-2 items-start border-red-500">
          <img className="" src="/icons/icon_lonceng.svg" alt="" />
          <div className="w-full flex flex-col">
            <div className="flex justify-between text-[10px] text-gray-500">
              <h1>Notifikasi</h1>
              <h1>20 Maret, 14:04</h1>
            </div>
            <h1 className="font-semibold text-[14px] text-left">
              Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek
              jadwal perjalanan Anda disini!
            </h1>
            <h1 className="text-[10px] text-gray-600"></h1>
          </div>
        </div>
      </div>
      {/* navbar */}
      <NavbarMobile />
      {/* navbar end */}
    </div>
  );
}

export default Notifikasi;
