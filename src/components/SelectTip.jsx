import React, { useState } from "react";
function SelectTip({ setTip }) {
  const options = [
    { value: "5", chosen: false },
    { value: "10", chosen: false },
    { value: "15", chosen: false },
    { value: "25", chosen: false },
    { value: "50", chosen: false },
  ];

  const [nums, setOptions] = useState(options);

  const handleButtonClick = (value, index) => {
    // reset custom input when a button is clicked
    document.getElementById("custom-tip").value = "";
    setTip(value);
    let newOPtions = options;
    newOPtions[index].chosen = true;
    setOptions(newOPtions);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setTip(value);
  };

  const hadleClick = () => {
    setOptions(options);
  };

  const buttons = nums.map(({ value, chosen }, index) => {
    const normalStyle =
      "rounded-md bg-very_dark_cyan p-4 text-lg hover:opacity-90 active:bg-light_grayish_cyan active:text-very_dark_cyan";
    const otherStyle =
      "rounded-md bg-strong_cyan p-4 text-lg text-very_dark_cyan hover:opacity-90 active:bg-very_dark_cyan active:text-white";

    const style = chosen ? otherStyle : normalStyle;
    return (
      <button
        key={index}
        onClick={() => handleButtonClick(value, index)}
        className={style}
      >
        {value + "%"}
      </button>
    );
  });
  return (
    <div>
      <p className="opacity-60">Select Tip %</p>
      <div className="my-2 grid grid-cols-2 grid-rows-3 gap-3 text-white xl:grid-cols-3 xl:grid-rows-2">
        {buttons}
        <input
          className="rounded-md bg-light_grayish_cyan p-4 text-right text-lg text-very_dark_cyan placeholder:text-center placeholder:text-dark_grayish_cyan focus:outline-strong_cyan"
          placeholder="Custom %"
          type="number"
          id="custom-tip"
          onChange={handleChange}
          onClick={() => hadleClick()}
        />
      </div>
    </div>
  );
}

export default SelectTip;
