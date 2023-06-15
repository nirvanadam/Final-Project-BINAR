import React, { useState } from "react";

function ComponentTest() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = () => setData(event.target.nama.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nilai input:", inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-[200px] flex flex-col gap-3">
        <label htmlFor="nama">Nama</label>
        <input onChange={handleInputChange} type="text" name="nama" id="nama" value={inputValue} className="border border-black " />

        <button type="submit" className="bg-primary text-white rounded-xl px-4 py-1">
          Submit
        </button>
      </form>
      <h1>{inputValue}</h1>
    </div>
  );
}

export default ComponentTest;
