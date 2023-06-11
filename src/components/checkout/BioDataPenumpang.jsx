import React, { useState } from "react";

function BioDataPenumpang() {
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

      {/* Title */}
      <div className="flex flex-col gap-2 mt-12">
        <label htmlFor="nama-lengkap" className="font-bold">
          Title
        </label>
        <select
          name=""
          id=""
          className="px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary focus:rounded-b-none invalid:focus:border-red-600"
        >
          <option value="Mr. " className="text-xs">
            Mr.
          </option>
          <option value="Mrs. " className="text-xs">
            Mrs.
          </option>
        </select>
      </div>
      {/* Title End */}

      {/* Nama Lengkap */}
      <div className="flex flex-col gap-2 mt-5">
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

      {/* Tanggal Lahir */}
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="tanggal-lahir" className="font-bold">
          Tanggal Lahir
        </label>
        <input
          type="date"
          name=""
          id="tanggal-lahir"
          placeholder=""
          className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        />
      </div>
      {/* Tanggal Lahir End */}

      {/* Kewarganegaraan */}
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="kewarganegaraan" className="font-bold">
          Kewarganegaraan
        </label>
        <input
          type="text"
          name=""
          id="kewarganegaraan"
          placeholder=""
          className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        />
      </div>
      {/* Kewarganegaraan End */}

      {/* KTP / Passpor */}
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="ktp-paspor" className="font-bold">
          KTP / Passpor
        </label>
        <input
          type="text"
          name=""
          id="ktp-paspor"
          placeholder=""
          className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        />
      </div>
      {/* KTP / Passpor End */}

      {/* Negara Penerbit */}
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="negara-penerbit" className="font-bold">
          Negara Penerbit
        </label>
        <select
          name=""
          id=""
          className="px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary focus:rounded-b-none invalid:focus:border-red-600"
        >
          <option value="Indonesia " className="text-xs">
            Indonesia
          </option>
        </select>
      </div>
      {/* Negara Penerbit End */}

      {/* Berlaku Sampai */}
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="berlaku" className="font-bold">
          Berlaku Sampai
        </label>
        <input
          type="date"
          name=""
          id="berlaku"
          placeholder=""
          className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        />
      </div>
      {/* Berlaku Sampai End */}

      {/* Simpan Button */}
      <button className="w-full my-10 py-3 rounded-xl bg-primary text-white font-medium">Simpan</button>
      {/* Simpan Button End */}
    </form>
  );
}

export default BioDataPenumpang;
