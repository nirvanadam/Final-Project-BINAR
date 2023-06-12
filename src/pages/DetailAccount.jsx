import React from "react";
import NavbarMobile from "../components/NavbarMobile";
import Navbar from "../components/Navbar";
import EditAccount from "../components/EditAccount";
import { Link } from "react-router-dom";

function DetailAccount() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* navbar end  */}

      <div className="lg:py-12">
        <h1 className="text-2xl font-bold mx-7 md:mx-12 lg:mx-36 mt-5 mb-7">
          Akun
        </h1>

        <div className="hidden lg:flex items-center bg-primary px-6 py-3 mx-40 gap-5 rounded-lg">
          <button>
            <img className="invert" src="/icons/arrow_left.svg" alt="" />
          </button>
          <h1 className="text-white text-lg font-medium">Beranda</h1>
        </div>
      </div>
      {/* content  */}
      <div className="flex lg:grid grid-cols-[1fr,4fr] lg:mb-10 flex-col mx-7 md:mx-12 lg:mx-40 gap-12">
        {/* option */}
        <div className="flex flex-col gap-3">
          <Link to={"/edit-account"} className="lg:hidden flex gap-5 py-3">
            <img src="/icons/icon_edit.svg" alt="" />
            <h1>Ubah Profile</h1>
          </Link>
          <div className="hidden lg:flex gap-5 py-3">
            <img src="/icons/icon_edit.svg" alt="" />
            <h1>Ubah Profile</h1>
          </div>
          <span className="w-full h-[1px] bg-gray-400"></span>
          <button className="flex gap-5 py-3">
            <img src="/icons/icon_logout.svg" alt="" />
            <h1>Keluar</h1>
          </button>
          <span className="w-full h-[1px] bg-gray-400"></span>
          <h1 className="text-center">Version 1.1.0</h1>
        </div>
        {/* option end  */}
        {/* form edit account */}
        <div className="">
          <EditAccount />
        </div>
        {/* form edit account end  */}
      </div>

      {/* conten end  */}

      {/* navbar */}
      <NavbarMobile />
      {/* navbar end */}
    </div>
  );
}

export default DetailAccount;
