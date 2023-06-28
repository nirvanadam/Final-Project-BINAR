import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function BioDataPenumpang(props) {
  const { id, adults, kids } = props;

  // Toogle Button
  const [keluargaBtnSts, setKeluargaBtnSts] = useState(false);
  const keluargaBtn = () => {
    setKeluargaBtnSts(!keluargaBtnSts);
  };
  // Toogle Button end
  const intAdult = parseInt(adults);
  const intKid = parseInt(kids);
  const totalPassenger = intAdult + intKid;

  const [name, setName] = useState([]);
  const [familyName, setFamilyName] = useState([]);
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  const [person, setPerson] = useState();
  const [nationality, setNationality] = useState();
  const [no_ktp, setNoKtp] = useState();

  // const navigate = useNavigate();
  // const [formElement, setFormElement] = useState([]);
  // const handleInputChange = (index, field, value) => {
  //   const updatedFormElements = [...formElement];
  //   updatedFormElements[index][field] = value;
  //   setFormElement(updatedFormElements);
  // };
  // console.log(formElement);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = {
      flight_id: Number(id),
      data_passengers: [
        {
          fullname: `${name} ${familyName}`,
          gender,
          birthday,
          person,
          nationality,
          no_ktp,
        },
        {
          fullname: `${name} ${familyName}`,
          gender,
          birthday,
          person,
          nationality,
          no_ktp,
        },
      ],
      passengers: { adult: Number(adults), child: Number(kids) },
    };
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      await axios.post(
        "https://finalproject-develop.up.railway.app/order/create",
        dataForm
      );
    } catch (error) {
      console.error(error);
    }
  };

  const renderForm = () => {
    const formElements = [];
    for (let i = 0; i < intAdult; i++) {
      formElements.push(
        <div key={i}>
          <h1 className="absolute top-0 left-0 w-full px-5 py-3 bg-primary text-white">
            Data Diri Pemesan
          </h1>
          {/* Kategori */}
          <div className="flex flex-col gap-2 mt-12">
            <label htmlFor="kategori" className="font-bold">
              Kategori
            </label>
            <select
              name="kategori"
              id="kategori"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              className="px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary focus:rounded-b-none invalid:focus:border-red-600"
            >
              <option value="Dewasa" className="text-lg font-medium">
                Dewasa
              </option>
              <option value="Anak-Anak " className="text-lg font-medium">
                Anak-Anak
              </option>
            </select>
          </div>
          {/* Kategori End */}

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Nama Lengkap End */}

          {/* Switch Nama Keluarga */}
          <div className="flex justify-between items-center">
            <h1 className="font-medium">Punya Nama Keluarga?</h1>
            <button type="button" onClick={keluargaBtn}>
              <img
                src={
                  keluargaBtnSts
                    ? "/icons/toggle_on_icon.svg"
                    : "/icons/toggle_off_icon.svg"
                }
                alt=""
                className="w-14 opacity-70"
              />
            </button>
          </div>
          {/* Switch Nama Keluarga End */}

          {/* Nama Keluarga */}
          <div
            className={`${keluargaBtnSts ? "flex" : "hidden"} flex-col gap-2`}
          >
            <label htmlFor="nama-keluarga" className="font-bold">
              Nama Keluarga
            </label>
            <input
              type="text"
              name=""
              id="nama-keluarga"
              placeholder=""
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Nama Keluarga End */}

          {/* Gender */}
          <div
            className={`${keluargaBtnSts ? "flex" : "hidden"} flex-col gap-2`}
          >
            <label htmlFor="jenis-kelamin" className="font-bold">
              Jenis Kelamin
            </label>
            <select
              name="jenis_kelamin"
              id="jenis_kelamin"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary focus:rounded-b-none invalid:focus:border-red-600"
            >
              <option value="Dewasa" className="text-lg font-medium">
                Laki-Laki
              </option>
              <option value="Anak-Anak " className="text-lg font-medium">
                Perempuan
              </option>
            </select>
          </div>
          {/* Gender End */}

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
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
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
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Kewarganegaraan End */}

          {/* NIK / No. Identitas */}
          <div className={`flex flex-col gap-2 mt-5`}>
            <label htmlFor="noidentias" className="font-bold">
              NIK / No.Identitas
            </label>
            <input
              type="text"
              name=""
              id="noidentitas"
              placeholder=""
              value={no_ktp}
              onChange={(e) => setNoKtp(e.target.value)}
              className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* NIK / No. Identitas End */}
        </div>
      );
    }
    return formElements;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden p-4 border border-gray-400 rounded-xl shadow-md"
    >
      {renderForm()}
      {/* Simpan Button */}
      <button className="w-full my-10 py-3 rounded-xl bg-primary text-white font-medium">
        Simpan
      </button>
      {/* Simpan Button End */}
    </form>
  );
}

export default BioDataPenumpang;
