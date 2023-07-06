import React, { useState, useEffect } from "react";
import DetailPayment from "../history/DetailPayment";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment({ order_id }) {
  const [creditCardBtnSts, setCreditCardBtnSts] = useState(false);
  const [arrowPosition, setArrowPosition] = useState();
  const [displayForm, setDisplayForm] = useState("hidden");
  const handleCreditCardBtn = () => {
    setCreditCardBtnSts(!creditCardBtnSts);
    setArrowPosition(creditCardBtnSts ? "rotate-180" : " ");
    setDisplayForm(creditCardBtnSts ? "flex" : "hidden");
  };

  const [data, setData] = useState();
  const url = `${import.meta.env.VITE_REACT_APP_API}/payment`;
  const fetchData = async () => {
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const [inputValue, setInputValue] = useState();
  const [displayWallet, setDisplayWallet] = useState(false);
  const [displayVirtualAcc, setDisplayVirtualAcc] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = {
      order_id,
      payment_id: +inputValue,
    };
    try {
      axios.defaults.headers.common["authorization"] = Cookies.get("token");
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/payment/checkout`, dataForm);
      navigate("/success-payment", { state: order_id });
      toast.success("Yeay , Ready to Flight now");
    } catch (error) {
      toast.error("Please choose your payment methode");
    }
  };

  return (
    <div>
      {/* Detail Payment Container */}
      {/* <div className="flex flex-col px-4 py-3 border border-gray-400 rounded-xl">
        <DetailPayment />
      </div> */}
      {/* Detail Payment Container End */}

      {/* Method Payment: E-Money */}
      <h1 className="text-xl font-bold mb-4">Isi Data Pembayaran</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* E-Wallet Payment */}
        <div className="">
          <button
            type="button"
            onClick={() => setDisplayWallet(!displayWallet)}
            className={`${displayWallet ? `rounded-b-0` : `rounded-b-lg`} flex justify-between items-center w-full py-3 px-4 bg-primary rounded-x-lg rounded-t-lg transition-all`}
          >
            <h1 className="text-white font-medium">E-Wallet</h1>
            <img src="/icons/chevron_down.svg" alt="" className="invert w-5" />
          </button>

          {displayWallet && (
            <div className={`bg-gray-100 rounded-b-lg`}>
              {data &&
                data.slice(0, 4).map((payment) => {
                  return (
                    <div key={payment.id} className={`bg-transparent relative flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-300`}>
                      <input type="radio" value={payment.id} onChange={(event) => setInputValue(event.target.value)} name="seat-class" id="" className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[60px] opacity-0 cursor-pointer" />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <img src={payment.logo} alt="" className="w-8" />
                          <h1 className="font-bold">{payment.name}</h1>
                        </div>
                      </div>
                      <img src="/icons/check-icon.svg" alt="" className={`${inputValue == payment.id ? `visible` : `invisible`} absolute top-1/2 -translate-y-1/2 right-3 w-8`} />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        {/* E-Wallet Payment End */}

        {/* Virtual Account Payment */}
        <div className="">
          <button
            type="button"
            onClick={() => setDisplayVirtualAcc(!displayVirtualAcc)}
            className={`${displayVirtualAcc ? `rounded-b-0` : `rounded-b-lg`} flex justify-between items-center w-full py-3 px-4 bg-primary rounded-x-lg rounded-t-lg transition-all`}
          >
            <h1 className="text-white font-medium">Virtual Account</h1>
            <img src="/icons/chevron_down.svg" alt="" className="invert w-5" />
          </button>
          {displayVirtualAcc && (
            <div className={`bg-gray-100 rounded-b-lg`}>
              {data &&
                data.slice(4, 8).map((payment) => {
                  return (
                    <div key={payment.id} className={`bg-transparent relative flex items-center w-full h-[60px] px-4 rounded-lg transition-all duration-200 hover:bg-gray-300`}>
                      <input type="radio" value={payment.id} onChange={(event) => setInputValue(event.target.value)} name="seat-class" id="" className="absolute top-1/2 -translate-y-1/2 left-4 w-full h-[60px] opacity-0 cursor-pointer" />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <img src={payment.logo} alt="" className="w-8" />
                          <h1 className="font-bold">{payment.name}</h1>
                        </div>
                      </div>
                      <img src="/icons/check-icon.svg" alt="" className={`${inputValue == payment.id ? `visible` : `invisible`} absolute top-1/2 -translate-y-1/2 right-3 w-8`} />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        {/* Virtual Account Payment End */}
        <button type="submit" className="bg-primary mt-5 py-3 px-4 text-white font-medium rounded-lg">
          Bayar
        </button>
      </form>

      {/* Method Payment: E-Money End*/}

      {/* Method Payment: Credit Card */}
      {/* <button type="button" onClick={handleCreditCardBtn} className="flex justify-between items-center w-full mt-2 py-2 px-4 bg-primary rounded-lg">
        <h1 className="text-white font-medium">Credit Card</h1>
        <img src="/icons/chevron_down.svg" alt="" className={`invert w-5 transition ${arrowPosition}`} />
      </button> */}

      {/* Method Payment: Credit Card End */}
      <ToastContainer />
    </div>
  );
}

export default Payment;
