import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [showStatus, setShowStatus] = useState(false);

  const togglePassword = () => {
    setShowStatus(!showStatus);
  };

  // Data Form
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // Data Form End

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const dataForm = {
        email,
        password,
      };

      const response = await axios.post("https://0207-143-198-212-220.ngrok-free.app/auth/login", dataForm);
      axios.defaults.headers.common["authorization"] = response.data.data;
      Cookies.set("token", response.data.data, { expires: 30 });
      navigate(`/`);
    } catch (error) {
      toast.error("Email or Password is not valid");
    }
  };

  // const handleSubmitGoogle = async (event) => {
  //   event.preventDefault();
  //   const response = await axios.get("https://0207-143-198-212-220.ngrok-free.app/auth/login/google");
  //   if (!response.data) {
  //     navigate(response.data.redirect);
  //   } else {
  //     console.error("Invalid response from server");
  //   }
  //   axios.defaults.headers.common["authorization"] = response.data.data;
  //   Cookies.set("token", response.data.data, { expires: 30 });
  //   navigate(`/`);
  // };

  return (
    <div className="grid grid-rows-[1fr,3fr] lg:grid-rows-1 lg:grid-cols-2 h-screen overflow-hidden bg-primary font-quickSand">
      {/* Left */}
      <div className="lg:relative flex justify-center items-center lg:rounded-br-[90px]">
        <h1 className="text-5xl font-bold text-white">
          Quick<span className="text-secondary">Tix</span>
        </h1>
        <div className="hidden lg:block lg:absolute bottom-0 right-0 h-[100px] w-[100px] bg-white"></div>
        <div className="hidden lg:block lg:absolute bottom-0 right-0 h-[100px] w-[100px] bg-primary rounded-br-[90px] "></div>
      </div>
      {/* Left End */}

      {/* Right */}
      <div className="bg-white flex flex-col justify-center px-14 lg:px-20 rounded-tl-[90px]">
        <h1 className="text-2xl font-bold mb-6">Masuk</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Email Input */}
          <div className="relative w-full flex items-center mb-4">
            <img src="/icons/email_icon.svg" alt="" className="absolute left-3 w-[20px] opacity-50" />
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

          {/* Password Input*/}
          <div className="relative flex items-center">
            <img src="/icons/password_icon.svg" alt="" className="absolute left-3 w-[20px] opacity-50" />
            <input
              type={showStatus ? "text" : "password"}
              name=""
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />

            <button type="button" onClick={togglePassword} className="absolute right-3">
              <img src={showStatus ? "/icons/show_password_off_icon.svg" : "/icons/show_password_icon.svg"} alt="" className="w-[20px] opacity-50" />
            </button>
          </div>
          {/* Password Input End */}

          {/* Forgot Password */}
          <Link to={"/email-reset-password"} className="mt-2 underline font-bold text-primary text-xs self-end">
            Lupa Kata Sandi
          </Link>
          {/* Forgot Password End */}

          {/* Button Submit */}
          <button type="submit" className="mt-5 bg-primary py-3 rounded-xl text-white text-sm font-medium">
            Masuk
          </button>
          {/* Button Submit End */}
        </form>

        <p className="self-center my-2 text-sm  font-bold">Or</p>

        {/* Google Login */}
        {/* <form>
          <button onClick={handleSubmitGoogle} className="mb-3 flex justify-center items-center gap-3 py-2 border border-slate-300 rounded-xl text-center">
            <img src="/icons/google_logo.svg" alt="" className="w-4" />
            <h1 className="text-sm font-semibold">Sign in with Google</h1>
          </button>
        </form> */}

        <div className="flex flex-col w-full mb-2">
          <GoogleLoginButton />
        </div>
        {/* Google Login End */}

        <p className="self-center text-sm font-medium">
          Belum punya akun?{" "}
          <Link to={"/register"} className="underline font-bold text-primary">
            Daftar di sini
          </Link>
        </p>
      </div>
      {/* Right End */}
      <ToastContainer />
    </div>
  );
}

export default Login;
