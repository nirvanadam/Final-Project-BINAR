import React, { useState, useEffect } from "react";

function FormPenumpang({ totalPassenger, setData, adult }) {
  // State Penumapng
  const [passengers, setPassengers] = useState([]);
  // console.log(passengers);

  // Toogle Button
  const [keluargaBtnSts, setKeluargaBtnSts] = useState(false);
  const keluargaBtn = () => {
    setKeluargaBtnSts(!keluargaBtnSts);
  };
  // Toogle Button end

  useEffect(() => {
    // Inisialisasi data penumpang dengan nilai awal
    const initialPassengers = Array.from({ length: totalPassenger }, (_, index) => ({
      fullname: "",
      gender: "Laki-Laki",
      birthday: "",
      person: index < adult ? "Dewasa" : "Anak-anak",
      nationality: "",
      no_ktp: "",
    }));
    setPassengers(initialPassengers);
  }, [totalPassenger]);

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

  const handleChangePerson = (index, value) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      if (value !== "Dewasa") {
        updatedPassengers[index].person = value;
      } else {
        updatedPassengers[index].person = "Dewasa";
      }
      return updatedPassengers;
    });
  };

  const handleChangeGender = (index, value) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      if (value !== "Laki-laki") {
        updatedPassengers[index].person = value;
      }
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
        <div className="mb-9" key={index}>
          {/* Kategori */}
          {/* <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="kategori" className="font-bold">
              Kategori
            </label>
            <select
              name="kategori"
              id="kategori"
              value={passenger.person}
              onChange={(e) => handleChangePerson(index, e.target.value)}
              defaultValue={"Dewasa"}
              required
              className="px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary focus:rounded-b-none invalid:focus:border-red-600"
            >
              <option value="Dewasa" selected className="text-lg font-medium">
                Dewasa
              </option>
              <option value="Anak-Anak " className="text-lg font-medium">
                Anak-Anak
              </option>
            </select>
          </div> */}
          <h1 className="w-full px-5 py-3 rounded-lg bg-primary text-white">{passenger.person === "Dewasa" ? `Penumpang Dewasa ${index + 1}` : `Penumpang Anak-Anak ${index - adult + 1}`}</h1>

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
              value={passenger.fullname}
              required
              onChange={(e) => handleChangeName(index, e.target.value)}
              className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Nama Lengkap End */}

          {/* Switch Nama Keluarga */}
          {/* <div className="flex justify-between items-center">
          <h1 className="font-medium">Punya Nama Keluarga?</h1>
          <button type="button" onClick={keluargaBtn}>
            <img src={keluargaBtnSts ? "/icons/toggle_on_icon.svg" : "/icons/toggle_off_icon.svg"} alt="" className="w-14 opacity-70" />
          </button>
        </div> */}
          {/* Switch Nama Keluarga End */}

          {/* Nama Keluarga */}
          {/* <div className={${keluargaBtnSts ? "flex" : "hidden"} flex-col gap-2 mb-4}>
          <label htmlFor="nama-keluarga" className="font-bold">
            Nama Keluarga
          </label>
          <input
            type="text"
            name=""
            id="nama-keluarga"
            placeholder=""
            value={familyName}
            onChange={(e) => handleChangeName(index, e.target.value)}
            className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
          />
        </div> */}
          {/* Nama Keluarga End */}

          {/* Gender */}
          <div className="flex flex-col gap-2">
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
              <option value="Laki-Laki" selected className="text-lg font-medium">
                Laki-Laki
              </option>
              <option value="Perempuan" className="text-lg font-medium">
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
              placeholder=""
              value={passenger.nationality}
              required
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
              placeholder=""
              value={passenger.no_ktp}
              required
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
