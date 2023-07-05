import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import FormPenumpang from "./FormPenumpang";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BioDataPenumpang(props) {
  const { id, adults, kids, setOrder } = props;

  // Total Passengers
  const intAdult = +adults;
  const intKid = +kids;
  const totalPassenger = intAdult + intKid;
  // Total Passengers End

  const [data, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = {
      flight_id: Number(id),
      data_passengers: data,
      passengers: { adult: Number(adults), child: Number(kids) },
    };
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/order/create`,
        dataForm
      );
      setOrder(response.data.data.order_id);
      toast.success("Yeay, Your Data Has been Submited");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const renderForm = () => {
    const formElements = [];
    for (let i = 0; i < totalPassenger; i++) {
      formElements.push(
        <FormPenumpang
          key={i}
          totalPassenger={totalPassenger}
          setData={setData}
          adult={intAdult}
        />
      );
      return formElements;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden p-4 border border-gray-400 rounded-xl shadow-md"
    >
      {renderForm()}

      {/* Simpan Button */}
      <button className="w-full py-3 rounded-xl bg-primary text-white font-medium">
        Simpan
      </button>
      {/* Simpan Button End */}
      <ToastContainer />
    </form>
  );
}

export default BioDataPenumpang;
