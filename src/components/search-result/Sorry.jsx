import React from "react";

function Sorry() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold">Maaf, Tiket terjual habis!</h1>
      <h1 className="text-xl font-semibold">Coba cari perjalanan lainnya!</h1>
      <img src="/images/sorry-ilustration.svg" alt="" className="w-1/2" />
    </div>
  );
}

export default Sorry;
