import React, { useState } from "react";

function ModalTo({ action, onDataSubmit }) {
  const [inputValue, SetInputValueTo] = useState();
  const handleChange = (event) => {
    SetInputValueTo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDataSubmit(inputValue);
    action();
  };

  return (
    // ToModal
    <div className="fixed w-full h-[80%] bottom-0 z-50 bg-white sm:bg-slate-500 sm:bg-opacity-80 sm:h-screen sm:w-screen">
      <div className="flex w-full h-full sm:justify-center sm:items-center">
        <div className="relative w-full sm:w-1/3 sm:bg-white sm:rounded-md flex flex-col px-5 pt-8 gap-8">
          <button onClick={action} className="absolute top-0 right-5 text-[28px] font-semibold">
            x
          </button>
          <form onChange={handleChange} onSubmit={handleSubmit} className="w-full flex flex-col gap-2 mt-5">
            <input value={inputValue} onChange={handleChange} className="w-full border-2 px-2.5 py-2 rounded-md" placeholder="Search Country" type="text" />
            <button className="w-fit px-5 py-3 mb-3 bg-primary rounded-md text-white" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalTo;
