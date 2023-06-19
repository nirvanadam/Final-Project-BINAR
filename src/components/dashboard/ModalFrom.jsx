import React, { useRef, useState } from "react";
import Select from "react-select";

function ModalFrom({ close, onDataSubmit }) {
  const [inputValue, setInputValue] = useState(null);
  const handleChange = (inputValue) => {
    setInputValue(inputValue.value);
  };

  const options = [
    { value: "Jakarta", label: "Jakarta" },
    { value: "Bandung", label: "Bandung" },
    { value: "Surabaya", label: "Surabaya" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    onDataSubmit(inputValue);
    close();
  };

  return (
    // {FromModal}

    <div className="fixed w-full h-[80%] bottom-0 z-50 bg-white sm:bg-slate-500 sm:bg-opacity-80 sm:h-screen sm:w-screen">
      <div className="flex w-full h-full sm:justify-center sm:items-center">
        <div className="relative w-full sm:w-1/3 sm:bg-white sm:rounded-md flex flex-col px-5 pt-8 gap-8">
          <button
            onClick={close}
            className="absolute top-0 right-5 text-[28px] font-semibold"
          >
            x
          </button>
          <form
            onChange={handleChange}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2 my-5"
          >
            {/* <input
              value={inputValue}
              onChange={handleChange}
              className="w-full border-2 px-2.5 py-2 rounded-md"
              placeholder="Search Country"
              type="text"
            /> */}
            <Select
              options={options}
              value={inputValue}
              onChange={handleChange}
              placeholder="Masukan Kota"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalFrom;
