import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function NavbarMobile() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const url = `https://finalproject-develop.up.railway.app/user/get`;
  const [dataFrom, setDataForm] = useState();
  const fetchData = async () => {
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.get(url);
      setDataForm(response.data.data);
      // console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(dataFrom);
  }, [url]);
  // console.log(dataFrom);

  const handleOnClick = (event) => {
    event.preventDefault();
    const dataForm = { dataFrom };
    navigate("/detail-account", { state: dataForm });
  };
  return (
    <div className="flex lg:hidden justify-around gap-5 w-full px-2 py-2 border border-t-gray-400 border-x-0 border-b-0 bg-white fixed bottom-0 ">
      <Link to={"/"} className="flex flex-col items-center">
        <img src="/icons/home_icon.svg" alt="" className="w-7" />
        <h1 className="text-sm font-bold">Beranda</h1>
      </Link>
      <Link to={"/riwayat"} className="flex flex-col items-center">
        <img src="/icons/history_icon.svg" alt="" className="w-7" />
        <h1 className="text-sm font-bold">Riwayat</h1>
      </Link>
      <Link to={"/notifikasi"} className="flex flex-col items-center">
        <img src="/icons/notification_icon.svg" alt="" className="w-7" />
        <h1 className="text-sm font-bold">Notifikasi</h1>
      </Link>

      {isLoggedIn && (
        <button onClick={handleOnClick} className="flex flex-col items-center">
          <img src="/icons/profile_icon.svg" alt="" className="w-7" />
          <h1 className="text-sm font-bold">Akun</h1>
        </button>
      )}
    </div>
  );
}

export default NavbarMobile;
