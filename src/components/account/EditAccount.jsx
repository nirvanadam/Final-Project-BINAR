import React from "react";

function EditAccount() {
  return (
    <div className="hidden lg:block border border-gray-200 shadow-md rounded-lg pt-10 pb-6 px-4">
      <h1 className="text-xl font-bold mb-4">Ubah Data Profile</h1>
      <form className="relative overflow-hidden rounded-xl p-4">
        <h1 className="absolute top-0 w-full left-0 right-0 px-4 py-2 bg-primary text-white">
          Data Diri
        </h1>
        <div className="flex flex-col gap-1 mt-10">
          <label className="font-bold" htmlFor="">
            Nama Lengkap
          </label>
          <input
            className="border border-gray-300 rounded-lg py-2 px-4"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label className="font-bold" htmlFor="">
            Nomer Telepon
          </label>
          <input
            className="border border-gray-300 rounded-lg py-2 px-4"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label className="font-bold" htmlFor="">
            Email
          </label>
          <input
            className="border border-gray-300 rounded-lg py-2 px-4"
            type="text"
          />
        </div>
        <button className="py-3 px-11 rounded-xl bg-primary text-white font-medium mx-auto block mt-8">
          Simpan
        </button>
      </form>
    </div>
  );
}

export default EditAccount;
