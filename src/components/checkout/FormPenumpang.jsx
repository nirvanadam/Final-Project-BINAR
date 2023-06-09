import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormPenumpang({ totalPassenger, setData, adult }) {
  // State Penumapng
  const [passengers, setPassengers] = useState([]);
  // console.log(passengers);

  useEffect(() => {
    // Inisialisasi data penumpang dengan nilai awal
    const initialPassengers = Array.from(
      { length: totalPassenger },
      (_, index) => ({
        fullname: "",
        gender: "laki-laki",
        birthday: "",
        person: index < adult ? "adult" : "child",
        nationality: "",
        no_ktp: "",
      })
    );
    setPassengers(initialPassengers);
  }, []);

  useEffect(() => {
    // Memasukkan data penumpang ke setData saat nilai sudah terpenuhi
    if (passengers.every((passenger) => passenger.no_ktp !== "")) {
      setData(passengers);
    }
  }, [passengers, setData]);

  const handleChangeName = (index, value) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      updatedPassengers[index].fullname = value;
      return updatedPassengers;
    });
  };

  const handleChangeGender = (index, value) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];

      updatedPassengers[index].gender = value;

      return updatedPassengers;
    });
  };

  const handleChangeBirthday = (index, value) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      updatedPassengers[index].birthday = value;
      return updatedPassengers;
    });
  };

  const handleChangeNationality = (index, value) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      updatedPassengers[index].nationality = value;
      return updatedPassengers;
    });
  };

  const handleChangeNo_ktp = (index, value) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      updatedPassengers[index].no_ktp = value;
      return updatedPassengers;
    });
  };

  return (
    <div>
      {passengers.map((passenger, index) => (
        <div
          className="relative overflow-hidden mb-9 border border-gray-300 px-4 pt-10 pb-4 rounded-xl shadow-md"
          key={index}
        >
          {/* Kategori */}
          <h1 className="absolute top-0 left-0 w-full px-5 py-3 bg-primary text-white">
            {passenger.person === "adult"
              ? `Penumpang Dewasa ${index + 1}`
              : `Penumpang Anak-Anak ${index - adult + 1}`}
          </h1>

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
              placeholder="Nama Penumpang"
              value={passenger.fullname}
              required
              autoComplete="off"
              onChange={(e) => handleChangeName(index, e.target.value)}
              className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Nama Lengkap End */}

          {/* Gender */}
          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="jenis-kelamin" className="font-bold">
              Jenis Kelamin
            </label>
            <select
              name="jenis_kelamin"
              id="jenis_kelamin"
              value={passenger.gender}
              onChange={(e) => handleChangeGender(index, e.target.value)}
              required
              className="px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary focus:rounded-b-none invalid:focus:border-red-600"
            >
              <option
                value="laki-laki"
                selected
                className="text-lg font-medium"
              >
                Laki-Laki
              </option>
              <option value="perempuan" className="text-lg font-medium">
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
              placeholder="Tanggal Lahir Anda"
              value={passenger.birthday}
              required
              onChange={(e) => handleChangeBirthday(index, e.target.value)}
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
              placeholder="Kewarganegaraan Anda"
              value={passenger.nationality}
              required
              autoComplete="off"
              onChange={(e) => handleChangeNationality(index, e.target.value)}
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
              placeholder="Masukan NIK/No. Identitas"
              value={passenger.no_ktp}
              required
              autoComplete="off"
              onChange={(e) => handleChangeNo_ktp(index, e.target.value)}
              className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* NIK / No. Identitas End */}
        </div>
      ))}
    </div>
  );
}

export default FormPenumpang;
