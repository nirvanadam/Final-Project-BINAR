import React, { useState } from "react";

function ForgotPassword() {
  const [showStatus1, setShowStatus1] = useState(false);
  const [showStatus2, setShowStatus2] = useState(false);

  const togglePassword1 = () => {
    setShowStatus1(!showStatus1);
  };

  const togglePassword2 = () => {
    setShowStatus2(!showStatus2);
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
        <form action="" className="flex flex-col gap-5">
          {/* Password Baru Input */}
          <div className="relative flex items-center">
            <img
              src="/icons/password_icon.svg"
              alt=""
              className="absolute left-3 w-[20px] opacity-50"
            />
            <input
              type={showStatus1 ? "text" : "password"}
              name=""
              id="password"
              placeholder="Masukkan Password Baru"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />

            <button
              type="button"
              onClick={togglePassword1}
              className="absolute right-3"
            >
              <img
                src={
                  showStatus1
                    ? "/icons/show_password_off_icon.svg"
                    : "/icons/show_password_icon.svg"
                }
                alt=""
                className="w-[20px] opacity-50"
              />
            </button>
          </div>
          {/* Password Baru Input End*/}

          {/* Ulang Password Baru Input*/}
          <div className="relative flex items-center">
            <img
              src="/icons/password_icon.svg"
              alt=""
              className="absolute left-3 w-[20px] opacity-50"
            />
            <input
              type={showStatus2 ? "text" : "password"}
              name=""
              id="password"
              placeholder="Ulangi Password Baru"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />

            <button
              type="button"
              onClick={togglePassword2}
              className="absolute right-3"
            >
              <img
                src={
                  showStatus2
                    ? "/icons/show_password_off_icon.svg"
                    : "/icons/show_password_icon.svg"
                }
                alt=""
                className="w-[20px] opacity-50"
              />
            </button>
          </div>
          {/* Ulang Password Baru Input End */}

          {/* Button Submit */}
          <button
            type="submit"
            className="mt-5 bg-primary py-3 rounded-xl text-white text-sm font-medium"
          >
            Simpan
          </button>
          {/* Button Submit End */}
        </form>
      </div>
      {/* Right End */}
    </div>
  );
}

export default ForgotPassword;
