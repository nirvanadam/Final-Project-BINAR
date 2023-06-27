import React, { useState } from "react";

function BioDataPenumpang(props) {
  const { id, adults, kids } = props;

  const [keluargaBtnSts, setKeluargaBtnSts] = useState(false);
  const keluargaBtn = () => {
    setKeluargaBtnSts(!keluargaBtnSts);
  };

  const [fullname, setFullName] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  const [person, setPerson] = useState();
  const [nationality, setNationality] = useState();
  const [no_ktp, setNoKtp] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = {
      flight_id: { id },
      data_passengers: [
        {
          fullname,
          gender,
          birthday,
          person,
          nationality,
          no_ktp,
        },
        {
          fullname,
          gender,
          birthday,
          person,
          nationality,
          no_ktp,
        },
      ],
      passengers: { adult: adults, child: kids },
    };
    await axios.post("https://finalproject-develop.up.railway.app/order/create", dataForm);
  };

  const intAdult = parseInt(adults);
  const intKid = parseInt(kids);
  const totalPassengers = intAdult + intKid;
  console.log(totalPassengers);

  const renderForm = () => {
    for (let i = 0; i < 3; i++) {
      return (
        // <div>
        //   <h1 className="absolute top-0 left-0 w-full px-5 py-3 bg-primary text-white">Data Diri Pemesan</h1>
        //   {/* Kategori */}
        //   <div className="flex flex-col gap-2 mt-12">
        //     <label htmlFor="kategori" className="font-bold">
        //       Kategori
        //     </label>
        //     <select
        //       name=""
        //       id="kategori"
        //       value={valueKategori}
        //       onChange={(e) => setPerson(e.target.value)}
        //       className="px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary focus:rounded-b-none invalid:focus:border-red-600"
        //     >
        //       <option value="Dewasa " className="text-lg font-medium">
        //         Dewasa
        //       </option>
        //       <option value="Anak-Anak " className="text-lg font-medium">
        //         Anak-Anak
        //       </option>
        //     </select>
        //   </div>
        //   {/* Kategori End */}

        //   {/* Nama Lengkap */}
        //   <div className="flex flex-col gap-2 mt-5">
        //     <label htmlFor="nama-lengkap" className="font-bold">
        //       Nama Lengkap
        //     </label>
        //     <input
        //       type="text"
        //       name=""
        //       id="text"
        //       placeholder=""
        //       onChange={(e) => setFullName(e.target.value)}
        //       className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        //     />
        //   </div>
        //   {/* Nama Lengkap End */}

        //   {/* Switch Nama Keluarga */}
        //   <div className="flex justify-between items-center">
        //     <h1 className="font-medium">Punya Nama Keluarga?</h1>
        //     <button type="button" onClick={keluargaBtn}>
        //       <img src={keluargaBtnSts ? "/icons/toggle_on_icon.svg" : "/icons/toggle_off_icon.svg"} alt="" className="w-14 opacity-70" />
        //     </button>
        //   </div>
        //   {/* Switch Nama Keluarga End */}

        //   {/* Nama Keluarga */}
        //   <div className={`${keluargaBtnSts ? "flex" : "hidden"} flex-col gap-2`}>
        //     <label htmlFor="nama-keluarga" className="font-bold">
        //       Nama Keluarga
        //     </label>
        //     <input
        //       type="text"
        //       name=""
        //       id="nama-keluarga"
        //       placeholder=""
        //       className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        //     />
        //   </div>
        //   {/* Nama Keluarga End */}

        //   {/* Gender */}
        //   <div className={`${keluargaBtnSts ? "flex" : "hidden"} flex-col gap-2`}>
        //     <label htmlFor="jenis-kelamin" className="font-bold">
        //       Jenis Kelamin
        //     </label>
        //     <input
        //       type="text"
        //       name=""
        //       id="jenis-kelamin"
        //       placeholder=""
        //       onChange={(e) => setGender(e.target.value)}
        //       className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        //     />
        //   </div>
        //   {/* Gender End */}

        //   {/* Tanggal Lahir */}
        //   <div className="flex flex-col gap-2 mt-5">
        //     <label htmlFor="tanggal-lahir" className="font-bold">
        //       Tanggal Lahir
        //     </label>
        //     <input
        //       type="date"
        //       name=""
        //       id="tanggal-lahir"
        //       placeholder=""
        //       onChange={(e) => setBirthday(e.target.value)}
        //       className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        //     />
        //   </div>
        //   {/* Tanggal Lahir End */}

        //   {/* Kewarganegaraan */}
        //   <div className="flex flex-col gap-2 mt-5">
        //     <label htmlFor="kewarganegaraan" className="font-bold">
        //       Kewarganegaraan
        //     </label>
        //     <input
        //       type="text"
        //       name=""
        //       id="kewarganegaraan"
        //       placeholder=""
        //       onChange={(e) => setNationality(e.target.value)}
        //       className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        //     />
        //   </div>
        //   {/* Kewarganegaraan End */}

        //   {/* NIK / No. Identitas */}
        //   <div className={`${valueKategori === "Anak-Anak" ? `hidden` : `flex`} flex-col gap-2 mt-5`}>
        //     <label htmlFor="noidentias" className="font-bold">
        //       NIK / No.Identitas
        //     </label>
        //     <input
        //       type="text"
        //       name=""
        //       id="noidentitas"
        //       placeholder=""
        //       onChange={(e) => setNoKtp(e.target.value)}
        //       className="w-full px-3 py-2 border border-slate-400 rounded-lg font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
        //     />
        //   </div>
        //   {/* NIK / No. Identitas End */}
        // </div>
        <h1>Hai</h1>
      );
    }
  };

  const valueKategori = "Anak-";
  return (
    <form onSubmit={handleSubmit} className="relative overflow-hidden p-4 border border-gray-400 rounded-xl shadow-md">
      {/* Simpan Button */}
      <button className="w-full my-10 py-3 rounded-xl bg-primary text-white font-medium">Simpan</button>
      {/* Simpan Button End */}
    </form>
  );
}

export default BioDataPenumpang;
