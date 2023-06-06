import React from "react";

function ComponentTest() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* <div className="whitespace-nowrap overflow-auto touch-auto p-10 gap-5 w-[500px] h-[400px] border border-cyan-400 rounded-xl">
        <div className="inline-flex mr-4 bg-primary rounded-xl w-[200px] h-[290px]"></div>
        <div className="inline-flex mr-4 bg-primary rounded-xl w-[200px] h-[290px]"></div>
        <div className="inline-flex mr-4 bg-primary rounded-xl w-[200px] h-[290px]"></div>
      </div> */}
      <input type="email" name="" id="" className="peer" />
      <p className="hidden peer-invalid:block">Hai</p>
    </div>
  );
}

export default ComponentTest;
