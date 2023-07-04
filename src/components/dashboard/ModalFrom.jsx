import React, { useRef, useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import "animate.css";

function ModalFrom({ close, onDataSubmit }) {
  const [inputValue, setInputValue] = useState(null);
  const handleChange = (inputValue) => {
    setInputValue(inputValue.label);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDataSubmit(inputValue);
    close();
  };

  // Fetch API Logic
  const [data, setData] = useState(null);

<<<<<<< HEAD
  const url = "https://b9c0-143-198-212-220.ngrok-free.app/airport";
=======
  const url = `https://finalproject-develop.up.railway.app/airport`;
>>>>>>> 05addfe4e78f7a849b982c3f3fa38d1dcb7d7f9a

  const fetchData = async () => {
    try {
      axios.defaults.headers.common["ngrok-skip-browser-warning"] = true;
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    // console.log(JSON.stringify(data));
  }, [url]);

  // Fetch API Logic End

  return (
    // {FromModal}

    <div className="fixed w-full h-[80%] bottom-0 z-50 bg-black bg-opacity-60 sm:h-screen  sm:w-screen">
      <div className="flex w-full h-full sm:justify-center sm:items-center">
        <div className="relative w-full sm:w-1/3 bg-white sm:rounded-md flex flex-col px-5 pt-8 gap-8 animate__animated animate__fadeInUp">
          <button onClick={close} className="absolute top-3 right-5 ">
            <img src="/icons/close-icon.svg" alt="" className="w-5" />
          </button>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2 my-5"
          >
            {data && (
              <Select
                options={data}
                value={data.value}
                onChange={handleChange}
                placeholder="Pilih Kota"
              />
            )}

            <button
              type="submit"
              className="w-full mt-5 py-3 px-10 bg-primary mb-4 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalFrom;
