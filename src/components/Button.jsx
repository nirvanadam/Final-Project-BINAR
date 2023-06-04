import React from "react";

function Button(props) {
  const { type, color = "bg-[#7126B5]", text = "..." } = props;
  return (
    <button type={type} className={`py-2 ${color} rounded-xl text-white text-xs`}>
      {text}
    </button>
  );
}

export default Button;
