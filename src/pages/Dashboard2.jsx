import React, { useState } from "react";

function Dashboard2() {
  const [modalOpen, setModalOpen] = useState("hidden");
  const [blur, setBlur] = useState();
  const [searchOpen, setSearchOpen] = useState("w-0");
  const openSwitch = () => {
    setModalOpen("block");
    setBlur("bg-cyan-400");
  };
  const closeSwitch = () => {
    setModalOpen("hidden");
    setBlur("bg-transparent");
  };

  const openSearch = () => setSearchOpen("w-1/2");

  const [switchStatus, setSwitchStatus] = useState(false);

  const toggleSwitch = () => {
    setSwitchStatus(!switchStatus);
    // Lakukan tindakan yang sesuai saat saklar diubah
    if (switchStatus) {
      console.log("Saklar dinonaktifkan");
      // Lakukan tindakan yang sesuai saat saklar dinonaktifkan
    } else {
      console.log("Saklar diaktifkan");
      // Lakukan tindakan yang sesuai saat saklar diaktifkan
    }
  };

  return (
    <div className={`h-screen flex flex-col justify-center items-center ${blur}`}>
      <div className={`${modalOpen} absolute flex flex-col justify-center items-center bg-[#263238] rounded-lg px-5 py-5`}>
        <h1 className="text-white ">Hello. This is modal!</h1>
        <button onClick={closeSwitch} className="bg-white rounded-lg px-4 py-1">
          Close
        </button>
      </div>
      <button onClick={openSwitch}>Click</button>

      <button onClick={openSearch}>
        <img src="/icons/search_icon.svg" width="50px" alt="" />
      </button>
      <input type="text" name="" id="" className={`${searchOpen} border border-black transition-all`} />

      <button onClick={toggleSwitch}>{switchStatus ? "On" : "Off"}</button>
    </div>
  );
}

export default Dashboard2;
