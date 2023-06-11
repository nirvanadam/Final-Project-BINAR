import React from "react";

function NavbarMobile() {
  return (
    <div className="flex lg:hidden justify-around gap-5 w-full px-2 py-2 border border-t-gray-400 border-x-0 border-b-0 bg-white fixed bottom-0 ">
      <button className="flex flex-col items-center">
        <img src="/icons/home_icon.svg" alt="" className="w-9" />
        <h1 className="text-sm font-bold">Beranda</h1>
      </button>
      <button className="flex flex-col items-center">
        <img src="/icons/history_icon.svg" alt="" className="w-9" />
        <h1 className="text-sm font-bold">Riwayat</h1>
      </button>
      <button className="flex flex-col items-center">
        <img src="/icons/notification_icon.svg" alt="" className="w-9" />
        <h1 className="text-sm font-bold">Notifikasi</h1>
      </button>
      <button className="flex flex-col items-center">
        <img src="/icons/profile_icon.svg" alt="" className="w-9" />
        <h1 className="text-sm font-bold">Akun</h1>
      </button>
    </div>
  );
}

export default NavbarMobile;
