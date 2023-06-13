import React, { useRef, useState } from "react";

function ModalFrom({ action }) {
  return (
    // {FromModal}

    <div className="fixed w-full h-[80%] bottom-0 z-50 bg-white sm:bg-slate-500 sm:bg-opacity-80 sm:h-screen sm:w-screen">
      <div className="flex w-full h-full sm:justify-center sm:items-center">
        <div className="w-full sm:w-1/3 sm:bg-white sm:rounded-md flex flex-col px-5 pt-8 gap-8">
          <form className="w-full flex items-center gap-2">
            <input
              className="w-full border-2 px-2.5 py-2 rounded-md"
              placeholder="Search Country"
              type="text"
            />
            <button onClick={action} className="text-[28px] font-semibold">
              x
            </button>
          </form>
          <div className="flex justify-between">
            <p className="text-[16px]">Pencarian Terkini</p>

            <button className="text-[16px] text-red-400">Hapus</button>
          </div>
          <div className="mb-4">
            <div className="flex justify-between pb-3 border-b-2 border-gray">
              <p className="text-[14px]">Jakarta</p>
              <button className="text-[14px]">X</button>
            </div>
            <div className="flex justify-between mt-3 pb-3 border-b-2 border-gray">
              <p className="text-[14px]">Bandung</p>
              <button className="text-[14px]">X</button>
            </div>
            <div className="flex justify-between mt-3 pb-3 border-b-2 border-gray">
              <p className="text-[14px]">Surabaya</p>
              <button className="text-[14px]">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFrom;
