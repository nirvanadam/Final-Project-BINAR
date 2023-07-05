import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleLoginButton from "../components/GoogleLoginButton";

function Register() {
  const [showStatusPswrd, setShowStatusPswrd] = useState(false);
  const [showStatusCnfrmPswrd, setShowCnfrmStatusPswrd] = useState(false);

  const togglePassword = () => {
    setShowStatusPswrd(!showStatusPswrd);
  };

  const toggleConfirmPassword = () => {
    setShowCnfrmStatusPswrd(!showStatusCnfrmPswrd);
  };

  const navigate = useNavigate();

  // Data Form
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  // Data Form End

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirmpassword !== password) {
      toast.error("Password tidak sama");
    } else {
      const dataForm = {
        name,
        email,
        phone,
        password,
        confirmpassword,
      };
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/auth/register`,
        dataForm
      );
      navigate(`/otpinput`, { state: response.data.data });
    }
  };
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
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
          {/* Nama Input */}
          <div className="relative w-full flex items-center">
            <img
              src="/icons/person_icon.svg"
              alt=""
              className="absolute left-3 w-[20px] opacity-50"
            />
            <input
              type="text"
              name=""
              id="namalengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Lengkap"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Nama Input End*/}

          {/* Email Input */}
          <div className="relative w-full flex items-center">
            <img
              src="/icons/email_icon.svg"
              alt=""
              className="absolute left-3 w-[20px] opacity-50"
            />
            <input
              type="email"
              name=""
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Email Input End*/}

          {/* Nomor Telepon Input */}
          <div className="relative w-full flex items-center">
            <img
              src="/icons/telephone_icon.svg"
              alt=""
              className="absolute left-3 w-[20px] opacity-50"
            />
            <input
              type="text"
              name=""
              id="phonenumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Nomor Telepon"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Nomor Telepon Input End*/}

          {/* Buat Password Input*/}
          <div className="relative flex items-center">
            <img
              src="/icons/password_icon.svg"
              alt=""
              className="absolute left-3 w-[20px] opacity-50"
            />
            <input
              type={showStatusPswrd ? "text" : "password"}
              name=""
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3"
            >
              <img
                src={
                  showStatusPswrd
                    ? "/icons/show_password_off_icon.svg"
                    : "/icons/show_password_icon.svg"
                }
                alt=""
                className="w-[20px] opacity-50"
              />
            </button>
          </div>
          {/* Buat Password End */}

          {/* Confirm Password Input*/}
          <div className="relative flex items-center">
            <img
              src="/icons/password_icon.svg"
              alt=""
              className="absolute left-3 w-[20px] opacity-50"
            />
            <input
              type={showStatusCnfrmPswrd ? "text" : "password"}
              name=""
              id="password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              placeholder="Password"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
            <button
              type="button"
              onClick={toggleConfirmPassword}
              className="absolute right-3"
            >
              <img
                src={
                  showStatusCnfrmPswrd
                    ? "/icons/show_password_off_icon.svg"
                    : "/icons/show_password_icon.svg"
                }
                alt=""
                className="w-[20px] opacity-50"
              />
            </button>
          </div>
          {/* Confirm Password End */}

          {/* Button Submit */}
          <button
            type="submit"
            className="bg-primary py-3 rounded-xl text-white text-sm font-medium"
          >
            Daftar
          </button>
          {/* Button Submit End */}
        </form>

        {/* <p className="self-center my-2 font-bold">Or</p> */}

        {/* Google Login */}
        {/* <button type="submit" className="mb-3 flex justify-center items-center gap-3 py-2 border border-slate-300 rounded-xl text-center">
          <img src="/icons/google_logo.svg" alt="" className="w-4" />
          <h1 className="text-sm font-semibold">Sign in with Google</h1>
        </button> */}
        <div className="flex flex-col w-full my-4">
          <GoogleLoginButton />
        </div>
        {/* Google Login End */}

        <p className="self-center text-sm font-medium">
          Sudah punya akun?{" "}
          <Link to={"/login"} className="underline font-bold text-primary">
            Masuk di sini
          </Link>
        </p>
      </div>
      {/* Right End */}
      <ToastContainer />
    </div>
  );
}

export default Register;
