import React, { useState } from "react";
import InputBox from "../components/InputBox";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const handleClick = () => {
    setData([...data, { img: inputValue }]);

    //  [...data, new_value]
  };

  return (
    <div className="w-screen flex flex-col items-center justify-start py-24">
      {/* input box component */}
      <InputBox setInputValue={setInputValue} handleClick={handleClick} />
      {/* display container */}
      <div className="w-full px-12 py-6 flex items-center justify-evenly flex-wrap gap-4">
        {data.length > 0 &&
          data.map((item, i) => (
            <div
              key={i}
              className="w-44 h-32 rounded-md shadow-md border border-gray-300 px-2 py-2"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
