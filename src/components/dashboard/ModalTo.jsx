import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

function ModalTo({ action, onDataSubmit }) {
  const [inputValue, SetInputValueTo] = useState();
  const handleChange = (inputValue) => {
    SetInputValueTo(inputValue.label);
  };

  // const options = [
  //   { value: "jakarta", label: "Jakarta" },
  //   { value: "bandung", label: "Bandung" },
  //   { value: "surabaya", label: "Surabaya" },
  // ];

  const handleSubmit = (event) => {
    event.preventDefault();
    onDataSubmit(inputValue);
    action();
  };

  // Fetch API Logic
  const [data, setData] = useState(null);

  const url = "https://finalproject-develop.up.railway.app/airport";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.data);
      // setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // console.log(JSON.stringify(data));
  // Fetch API Logic End

  return (
    // ToModal
    <div className="fixed w-full h-[80%] bottom-0 z-50 bg-white sm:bg-slate-500 sm:bg-opacity-80 sm:h-screen sm:w-screen">
      <div className="flex w-full h-full sm:justify-center sm:items-center">
        <div className="relative w-full sm:w-1/3 sm:bg-white sm:rounded-md flex flex-col px-5 pt-8 gap-8">
          <button
            onClick={action}
            className="absolute top-0 right-5 text-[28px] font-semibold"
          >
            x
          </button>
          <form
            onChange={handleChange}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2 my-5"
          >
            {data && (
              <Select
                options={data}
                value={data.value}
                onChange={handleChange}
                placeholder="Masukan Kota"
              />
            )}

            <button
              type="submit"
              className="w-full mt-10 py-3 px-10 bg-primary mb-4 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalTo;
