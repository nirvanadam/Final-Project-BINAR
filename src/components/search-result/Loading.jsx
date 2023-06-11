import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold">Mencari penerbangan terbaik ...</h1>
      <img src="/images/loading-ilustration.svg" alt="" className="w-1/2" />
    </div>
  );
}

export default Loading;
