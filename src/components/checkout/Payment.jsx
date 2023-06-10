import React, { useState } from "react";

function Payment() {
  const [creditCardBtnSts, setCreditCardBtnSts] = useState(false);
  const [arrowPosition, setArrowPosition] = useState();
  const [displayForm, setDisplayForm] = useState("hidden");
  const handleCreditCardBtn = () => {
    setCreditCardBtnSts(!creditCardBtnSts);
    setArrowPosition(creditCardBtnSts ? "rotate-180" : " ");
    setDisplayForm(creditCardBtnSts ? "flex" : "hidden");
  };
  return (
    <div>
      {/* Detail Payment Container */}
      <div className="flex flex-col px-4 py-3 border border-gray-400 rounded-xl">
        <h1 className="text-sm font-semibold mb-4">
          Passengers: <span className="font-bold">2 Adult, 1 Baby</span>
        </h1>

        {/* From. Duration, To */}
        <div className="flex justify-between items-center">
          {/* From */}
          <div className="flex gap-2 items-start">
            <img src="/icons/location-icon.svg" alt="" className="w-8" />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold">Jakarta</h1>
              <h1 className="text-xs font-medium">5 Maret 2023</h1>
              <h1 className="text-xs font-medium">19.10</h1>
            </div>
          </div>
          {/* From End */}

          {/* Duration */}
          <div className="flex flex-col">
            <h1>4h 0m</h1>
            <span className="bg-black w-full h-[1px]"></span>
          </div>
          {/* Duration End */}

          {/* To */}
          <div className="flex gap-2 items-start">
            <img src="/icons/location-icon.svg" alt="" className="w-8" />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold">Jakarta</h1>
              <h1 className="text-xs font-medium">5 Maret 2023</h1>
              <h1 className="text-xs font-medium">19.10</h1>
            </div>
          </div>
          {/* To End */}
        </div>
        {/* From. Duration, To End */}

        <span className="bg-gray-300 w-full h-[1px] my-3">.</span>

        {/* Booking Code, Class, Total */}
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="flex flex-col text-xs">
              <h1 className="font-bold">Booking Code:</h1>
              <h1 className="font-medium">453653657</h1>
            </div>
            <div className="flex flex-col text-xs">
              <h1 className="font-bold">Class:</h1>
              <h1 className="font-medium">Economy</h1>
            </div>
          </div>

          <div className="flex flex-col items-end font-bold">
            <h1 className="text-xs">TOTAL</h1>
            <span className="text-base">IDR 9.850.000</span>
          </div>
        </div>
        {/* Booking Code, Class, Total End */}
      </div>
      {/* Detail Payment Container End */}

      {/* Method Payment: E-Money */}
      <button className="flex justify-between items-center w-full mt-6 py-2 px-4 bg-primary rounded-lg">
        <h1 className="text-white font-medium">Gopay</h1>
        <img src="/icons/chevron_down.svg" alt="" className="invert w-5" />
      </button>
      {/* Method Payment: E-Money End*/}

      {/* Method Payment: Credit Card */}
      <button type="button" onClick={handleCreditCardBtn} className="flex justify-between items-center w-full mt-2 py-2 px-4 bg-primary rounded-lg">
        <h1 className="text-white font-medium">Credit Card</h1>
        <img src="/icons/chevron_down.svg" alt="" className={`invert w-5 transition ${arrowPosition}`} />
      </button>

      <form action="" className={`${displayForm} flex-col gap-5 p-4 transition`}>
        {/* Card Number Input */}
        <div className="flex flex-col gap-1">
          <label htmlFor="card-number" className="font-bold">
            Card Number
          </label>
          <input type="text" name="" id="card-number" className="border-b border-gray-400 outline-none" />
        </div>
        {/* Card Number Input End */}

        {/* Card Holder Name Input */}
        <div className="flex flex-col gap-1">
          <label htmlFor="card-holder" className="font-bold">
            Card Holder Name
          </label>
          <input type="text" name="" id="card-holder" className="border-b border-gray-400 outline-none" />
        </div>
        {/* Card Holder Name Input End */}

        {/* CVV & Expiry Date */}
        <div className="grid grid-cols-2 gap-4">
          {/* CVV */}
          <div className="flex flex-col gap-1">
            <label htmlFor="card-holder" className="font-bold">
              CVV
            </label>
            <input type="text" name="" id="card-holder" className="border-b border-gray-400 outline-none" />
          </div>
          {/* CVV End */}

          {/* Expiry Date */}
          <div className="flex flex-col gap-1">
            <label htmlFor="card-holder" className="font-bold">
              Expiry Date
            </label>
            <input type="date" name="" id="card-holder" className="border-b border-gray-400 font-medium outline-none" />
          </div>
          {/* Expiry Date End */}
        </div>
        {/* CVV & Expiry Date End*/}

        <div className="flex justify-center gap-4 mt-4">
          <img src="/images/mastercard-logo.svg" alt="" className="w-10" />
          <img src="/images/visa-logo.svg" alt="" className="w-10" />
          <img src="/images/amex-logo.svg" alt="" className="w-10" />
          <img src="/images/paypal-logo.svg" alt="" className="w-10" />
        </div>

        <button className="bg-primary mt-7 text-white rounded-xl py-3">Bayar</button>
      </form>
      {/* Method Payment: Credit Card End */}
    </div>
  );
}

export default Payment;
