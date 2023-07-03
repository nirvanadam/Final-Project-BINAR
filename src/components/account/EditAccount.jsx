import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditAccount(props) {
  const { dataForm } = props;
  // console.log(dataForm.dataFrom.name);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const url = `https://finalproject-develop.up.railway.app/user/update`;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.defaults.headers.common["authorization"] = Cookies.get("token");
    const data = {
      name: name,
      phone: phone,
      email: email,
    };
    axios
      .put(url, data)
      .then((response) => {
        console.log(response.data);
        toast.success("Data updated successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="lg:block border border-gray-200 shadow-md rounded-lg py-5 px-4">
      <h1 className="text-xl font-bold mb-4">Ubah Data Profile</h1>
      <form onSubmit={handleFormSubmit} className="relative overflow-hidden rounded-xl p-4">
        <h1 className="absolute top-0 w-full left-0 right-0 px-4 py-2 bg-primary text-white">Data Diri</h1>
        <div className="flex flex-col gap-1 mt-10">
          <label className="font-bold" htmlFor="">
            Nama Lengkap
          </label>
          <input
            defaultValue={dataForm.dataFrom.name}
            onChange={handleNameChange}
            className="border border-gray-300 rounded-lg py-2 px-4 font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label className="font-bold" htmlFor="">
            Nomer Telepon
          </label>
          <input
            onChange={handlePhoneChange}
            defaultValue={dataForm.dataFrom.phone}
            className="border border-gray-300 rounded-lg py-2 px-4 font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <label className="font-bold" htmlFor="">
            Email
          </label>
          <input
            onChange={handleEmailChange}
            defaultValue={dataForm.dataFrom.email}
            className="border border-gray-300 rounded-lg py-2 px-4 font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            type="text"
          />
        </div>
        <button type="submit" className="py-3 px-11 rounded-xl bg-primary text-white font-medium mx-auto block mt-8">
          Simpan
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default EditAccount;
