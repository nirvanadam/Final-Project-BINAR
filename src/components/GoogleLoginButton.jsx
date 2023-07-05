import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

function GoogleLoginButton() {
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });
      console.log(data);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_REACT_APP_API}/auth/login/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);

      Cookies.set("token", response.data.data);

      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error);
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <button
      onClick={() => loginWithGoogle()}
      className="flex justify-center items-center gap-3 border border-slate-300 px-[15px] py-[10px] rounded-[5px]"
    >
      <img src="icons/google_logo.svg" alt="" className="w-[20px]" />
      <p className="font-semibold">Sign in with Google</p>
    </button>
  );
}

export default GoogleLoginButton;
