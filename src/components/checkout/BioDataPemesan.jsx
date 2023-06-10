import React, { useState } from "react";

function BioDataPemesan() {
  const [keluargaBtnSts, setKeluargaBtnSts] = useState(false);
  const [displayKeluarga, setDisplayKeluarga] = useState("hidden");
  const [toggleImage, setToggleImage] = useState("/icons/toggle_off_icon.svg");
  const keluargaBtn = () => {
    setKeluargaBtnSts(!keluargaBtnSts);
    setDisplayKeluarga(keluargaBtnSts ? "flex" : "hidden");
    setToggleImage(keluargaBtnSts ? "/icons/toggle_on_icon.svg" : "/icons/toggle_off_icon.svg");
  };

  return (
    <form action="" className="relative overflow-hidden p-4 border border-gray-400 rounded-xl shadow-md">
      <h1 className="absolute top-0 left-0 w-full px-5 py-3 bg-primary text-white">Data Diri Pemesan</h1>

      {/* Nama Lengkap */}
      <div className="flex flex-col gap-2 mt-12">
        <label htmlFor="nama-lengkap" className="font-bold">
          Nama Lengkap
        </label>
        <input
          type="text"
          name=""
          id="text"
          placeholder=""
          className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        />
      </div>
      {/* Nama Lengkap End */}

      {/* Switch Nama Keluarga */}
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Punya Nama Keluarga?</h1>
        <button type="button" onClick={keluargaBtn}>
          <img src={toggleImage} alt="" className="w-14 opacity-70" />
        </button>
      </div>
      {/* Switch Nama Keluarga End */}

      {/* Nama Keluarga */}
      <div className={`${displayKeluarga} flex-col gap-2`}>
        <label htmlFor="nama-keluarga" className="font-bold">
          Nama Keluarga
        </label>
        <input
          type="text"
          name=""
          id="nama-keluarga"
          placeholder=""
          className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        />
      </div>
      {/* Nama Keluarga End */}

      {/* Nomor Telepon */}
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="no-telepon" className="font-bold">
          Nomor Telepon
        </label>
        <input
          type="text"
          name=""
          id="no-telepon"
          placeholder=""
          className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        />
      </div>
      {/* Nomor Telepon End */}

      {/* Email */}
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          type="text"
          name=""
          id="email"
          placeholder=""
          className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        />
      </div>
      {/* Email End */}

      {/* Simpan Button */}
      <button className="w-full my-10 py-3 rounded-xl bg-primary text-white font-medium">Simpan</button>
      {/* Simpan Button End */}
    </form>
  );
}

export default BioDataPemesan;
