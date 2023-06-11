import React from "react";

function SuccessPayment() {
  return (
    <div>
      <img src="/images/success-ilustration.svg" alt="" />
      <div className="flex flex-col items-center font-bold">
        <h1>Selamat!</h1>
        <h1>Selamat! Transaksi Pembayaran Tiket Sukses!</h1>
      </div>
      <button className="bg-primary w-full mb-3 py-3 rounded-xl text-white font-medium">Terbitkan Tiket</button>
      <button className="bg-primary w-full py-3 rounded-xl text-white font-medium">Cari Penerbangan Lain</button>
    </div>
  );
}

export default SuccessPayment;
