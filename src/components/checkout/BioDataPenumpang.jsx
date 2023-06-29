import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import FormPenumpang from "./FormPenumpang";

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
      const response = await axios.post("https://finalproject-develop.up.railway.app/order/create", dataForm);
      setOrder(response.data.data.order_id);
    } catch (error) {
      console.error(error);
    }
  };

  const renderForm = () => {
    const formElements = [];
    for (let i = 0; i < totalPassenger; i++) {
      formElements.push(<FormPenumpang key={i} totalPassenger={totalPassenger} setData={setData} adult={intAdult} />);
      return formElements;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative overflow-hidden p-4 border border-gray-400 rounded-xl shadow-md">
      {renderForm()}

      {/* Simpan Button */}
      <button className="w-full my-10 py-3 rounded-xl bg-primary text-white font-medium">Simpan</button>
      {/* Simpan Button End */}
    </form>
  );
}

export default BioDataPenumpang;
