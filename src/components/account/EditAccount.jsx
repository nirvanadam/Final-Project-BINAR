import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

function EditAccount(props) {
  const { dataForm } = props;
  console.log(dataForm.dataFrom.name);
  const [name, setName] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const url = `https://finalproject-develop.up.railway.app/user/update`;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.defaults.headers.common["authorization"] = Cookies.get("token");
    const data = { name: name };
    axios
      .put(url, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hidden lg:block border border-gray-200 shadow-md rounded-lg pt-10 pb-6 px-4">
      <h1 className="text-xl font-bold mb-4">Ubah Data Profile</h1>
      <form
        onSubmit={handleFormSubmit}
        className="relative overflow-hidden rounded-xl p-4"
      >
        <h1 className="absolute top-0 w-full left-0 right-0 px-4 py-2 bg-primary text-white">
          Data Diri
        </h1>
        <div className="flex flex-col gap-1 mt-10">
          <label className="font-bold" htmlFor="">
            Nama Lengkap
          </label>
          <input
            defaultValue={dataForm.dataFrom.name}
            onChange={handleNameChange}
            className="border border-gray-300 rounded-lg py-2 px-4"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label className="font-bold" htmlFor="">
            Nomer Telepon
          </label>
          <input
            disabled
            defaultValue={dataForm.dataFrom.phone}
            className="border border-gray-300 rounded-lg py-2 px-4"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label className="font-bold" htmlFor="">
            Email
          </label>
          <input
            disabled
            defaultValue={dataForm.dataFrom.email}
            className="border border-gray-300 rounded-lg py-2 px-4"
            type="text"
          />
        </div>
        <button
          type="submit"
          className="py-3 px-11 rounded-xl bg-primary text-white font-medium mx-auto block mt-8"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default EditAccount;
