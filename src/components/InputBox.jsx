import React, { useState } from "react";

const InputBox = ({ setInputValue, handleClick }) => {
  const [values, setValues] = useState("");

  const handleText = (e) => {
    setValues(e.target.value);
    setInputValue(e.target.value);
  };

  const clickMe = () => {
    setValues("");
    handleClick();
  };

  return (
    <div className="border border-gray-300 rounded-md px-6 py-8 flex flex-col items-center justify-center gap-12">
      <input
        value={values}
        onChange={handleText}
        type="text"
        placeholder="Type here your image url"
        className="w-96 h-10 outline-none border-none shadow-md rounded-md text-base text-gray-700 px-3 py-6"
      />
      <button
        onClick={clickMe}
        className="w-full px-4 py-3 rounded-md bg-emerald-500 text-lg capitalize text-white font-semibold cursor-pointer active:bg-teal-500"
      >
        Add to list
      </button>
    </div>
  );
};

export default InputBox;
