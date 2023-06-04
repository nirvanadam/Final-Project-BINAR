import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="grid grid-rows-[1fr,3fr] lg:grid-rows-1 lg:grid-cols-2 h-screen overflow-hidden bg-primary font-quickSand">
      {/* Left */}
      <div className="lg:relative flex justify-center items-center lg:rounded-br-[90px]">
        <h1 className="text-5xl font-bold text-white">
          Quick<span className="text-cyan-400">Tix</span>
        </h1>
        <div className="hidden lg:block lg:absolute bottom-0 right-0 h-[100px] w-[100px] bg-white"></div>
        <div className="hidden lg:block lg:absolute bottom-0 right-0 h-[100px] w-[100px] bg-primary rounded-br-[90px] "></div>
      </div>
      {/* Left End */}

      {/* Right */}
      <div className="bg-white flex flex-col justify-center px-14 lg:px-20 rounded-tl-[90px]">
        <h1 className="text-2xl font-bold mb-6">Daftar</h1>
        <form action="" className="flex flex-col gap-4">
          {/* Nama Input */}
          <div className="relative w-full flex items-center">
            <img src="/icons/person_icon.svg" alt="" className="absolute left-3 w-[20px] opacity-50" />
            <input
              type="text"
              name=""
              id="namalengkap"
              placeholder="Nama Lengkap"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl outline-none placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Nama Input End*/}

          {/* Email Input */}
          <div className="relative w-full flex items-center">
            <img src="/icons/email_icon.svg" alt="" className="absolute left-3 w-[20px] opacity-50" />
            <input
              type="email"
              name=""
              id="email"
              placeholder="Email"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl outline-none placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Email Input End*/}

          {/* Nomor Telepon Input */}
          <div className="relative w-full flex items-center">
            <img src="/icons/telephone_icon.svg" alt="" className="absolute left-3 w-[20px] opacity-50" />
            <input
              type="text"
              name=""
              id="phonenumber"
              placeholder="Nomor Telepon"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl outline-none placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Nomor Telepon Input End*/}

          {/* Buat Password Input*/}
          <div className="relative flex items-center">
            <img src="/icons/password_icon.svg" alt="" className="absolute left-3 w-[20px] opacity-50" />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl outline-none placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
            <button className="absolute right-3">
              <img src="/icons/show_password_icon.svg" alt="" className="w-[20px]" />
            </button>
          </div>
          {/* Password Input End */}

          {/* Button Submit */}
          <button type="submit" className="bg-primary py-2 rounded-xl text-secondary text-sm font-medium">
            Daftar
          </button>
          {/* Button Submit End */}
        </form>

        <p className="self-center my-2 font-bold">Or</p>
        <div className="mb-3 py-2 border border-black rounded-xl text-center">Google</div>
        <p className="self-center text-sm">
          Sudah punya akun?{" "}
          <Link to={"/"} className="underline font-bold text-primary">
            Masuk di sini
          </Link>
        </p>
      </div>
      {/* Right End */}
    </div>
  );
}

export default Register;
