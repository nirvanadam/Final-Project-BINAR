import React from "react";
import { Link } from "react-router-dom";

function ResultNotFound() {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <div className="">
        <img
          className="w-full h-full object-cover"
          src="/images/not_found.svg"
          alt=""
        />
      </div>
      <div className="my-4">
        <h1 className="font-semibold text-[20px]">
          Maaf , Pencarian Anda tidak ditemukan
        </h1>
        <Link to={"/"}>
          <h1 className="text-[16px] text-fuchsia-500">
            Coba cari Perjalanan lainnya!
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default ResultNotFound;
