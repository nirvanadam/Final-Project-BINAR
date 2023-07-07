import React, { useState, useEffect } from "react";
import NavbarMobile from "../components/NavbarMobile";
import Navbar from "../components/Navbar";
import EditAccount from "../components/account/EditAccount";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function DetailAccount() {
  const location = useLocation();
  const dataForm = location.state;
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(false);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="pb-12 font-quickSand">
      {/* navbar */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
      {/* navbar end  */}

      <div className="lg:py-12">
        <div className="flex items-center justify-between px-4 py-5">
          <h1 className="text-2xl font-bold md:mx-12 lg:mx-36 lg:mt-5 lg:mb-7">Akun</h1>
          {/* logout */}
          <button
            onClick={() => {
              Cookies.remove("token");
              setIsLoggedIn(false);
              return navigate("/");
            }}
            className="flex items-center lg:hidden gap-3 bg-red-600 px-3 py-2 rounded-lg text-white transition-all hover:translate-x-3"
          >
            <img src="/icons/logout-icon.svg" alt="" className="w-7 invert" />
            <h1 className="font-bold text-base">Keluar</h1>
          </button>
        </div>

        <Link to={"/"}>
          <div className="hidden lg:flex items-center bg-primary px-6 py-3 mx-40 gap-5 rounded-lg">
            <button>
              <img className="invert" src="/icons/arrow_left.svg" alt="" />
            </button>
            <h1 className="text-white text-lg font-medium">Beranda</h1>
          </div>
        </Link>
      </div>

      {/* content  */}
      <div className="flex lg:grid grid-cols-[1fr,4fr] lg:mb-10 flex-col mx-0 md:mx-12 lg:mx-40 gap-12">
        {/* option */}
        <div className="hidden lg:flex flex-col gap-3">
          {/* Edit Profile */}
          <Link to={"/edit-account"} className="lg:hidden flex gap-5">
            <img src="/icons/edit-icon.svg" alt="" className="w-6" />
            <h1 className="font-semibold text-lg">Ubah Profile</h1>
          </Link>
          {/* Edit Profile End */}

          <div className="hidden lg:flex gap-5 transition-all hover:translate-x-3">
            <img src="/icons/edit-icon.svg" alt="" className="w-6" />
            <h1 className="font-semibold text-lg">Ubah Profile</h1>
          </div>

          <span className="w-full h-[1px] my-3 bg-gray-400"></span>

          {/* logout */}
          <button
            onClick={() => {
              Cookies.remove("token");
              setIsLoggedIn(false);
              return navigate("/");
            }}
            className="flex gap-5 transition-all hover:translate-x-3"
          >
            <img src="/icons/logout-icon.svg" alt="" className="w-7" />
            <h1 className="font-bold text-red-500 text-lg">Keluar</h1>
          </button>
          {/* logout End */}
          <span className="w-full h-[1px] my-3 bg-gray-400"></span>

          <h1 className="text-center font-medium text-gray-400">Version 1.1.0</h1>
        </div>
        {/* option end  */}

        {/* form edit account */}
        <div className="">
          <EditAccount dataForm={dataForm} />
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
