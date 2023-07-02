import React, { useState } from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [showStatus, setShowStatus] = useState(false);
  const [showStatusNew, setShowStatusNew] = useState(false);

  const togglePassword = () => {
    setShowStatus(!showStatus);
  };

  const toggleNewPassword = () => {
    setShowStatusNew(!showStatusNew);
  };

  // Data Form
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  // Data Form End

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
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
        <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
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
          <div className="relative flex items-center mb-4">
            <img src="/icons/password_icon.svg" alt="" className="absolute left-3 w-[20px] opacity-50" />
            <input
              type={showStatus ? "text" : "password"}
              name=""
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />

            <button type="button" onClick={togglePassword} className="absolute right-3">
              <img src={showStatus ? "/icons/show_password_off_icon.svg" : "/icons/show_password_icon.svg"} alt="" className="w-[20px] opacity-50" />
            </button>
          </div>
          {/* Password Input End */}

          {/* New Password Input*/}
          <div className="relative flex items-center">
            <img src="/icons/password_icon.svg" alt="" className="absolute left-3 w-[20px] opacity-50" />
            <input
              type={showStatusNew ? "text" : "password"}
              name=""
              id="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />

            <button type="button" onClick={toggleNewPassword} className="absolute right-3">
              <img src={showStatusNew ? "/icons/show_password_off_icon.svg" : "/icons/show_password_icon.svg"} alt="" className="w-[20px] opacity-50" />
            </button>
          </div>
          {/* New Password Input End */}

          {/* Button Submit */}
          <button type="submit" className="mt-6 bg-primary py-3 rounded-xl text-white text-sm font-medium">
            Ubah Password
          </button>
          {/* Button Submit End */}
        </form>
      </div>
      {/* Right End */}
    </div>
  );
}

export default ResetPassword;
