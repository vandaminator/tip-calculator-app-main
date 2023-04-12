import React from "react";
function Bill({ dollarImg, bill, setBill }) {
  const handleChange = ({ target }) => {
    // reseting error visuals
    document.getElementById("error-bill").textContent = "";
    document.getElementById("bill").classList.remove("error-input");

    let { value } = target;

    setBill(value);

    if (+value <= 0) {
      // makes input red
      document.getElementById("bill").classList.add("error-input");
      // shows error message
      document.getElementById("error-bill").textContent =
        "Can't be less than zero";
    }
    if (value === "") {
      // makes input red
      document.getElementById("bill").classList.add("error-input");
      // shows error message
      document.getElementById("error-bill").textContent = "Enter a number";
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <label className="opacity-60 " htmlFor="bill">
          Bill
        </label>
        <p className="mr-3 text-red-600" id="error-bill"></p>
      </div>
      <div className="relative flex w-full items-center p-2">
        <img src={dollarImg} alt="" className="absolute left-4" />
        {/* add "outline outline-red-400" for when there is error */}
        <input
          type="number"
          className="grow appearance-none rounded-md bg-light_grayish_cyan p-2 pl-6 text-right text-2xl text-very_dark_cyan focus:outline-strong_cyan"
          placeholder="0"
          name="bill"
          id="bill"
          onChange={handleChange}
          value={bill}
        />
      </div>
    </div>
  );
}

export default Bill;
