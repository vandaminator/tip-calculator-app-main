import React from "react";
function NumberPeople({ personImg, number, setNumber }) {
  const handleChange = ({ target }) => {
    // reseting error visuals
    document.getElementById("error-person").textContent = "";
    document.getElementById("person").classList.remove("error-input");

    let { value } = target;

    setNumber(value);

    if (+value <= 0) {
      // makes input red
      document.getElementById("person").classList.add("error-input");
      // shows error message
      document.getElementById("error-person").textContent =
        "Can't be less than zero";
    }
    if (value === "") {
      // makes input red
      document.getElementById("person").classList.add("error-input");
      // shows error message
      document.getElementById("error-person").textContent = "Enter a number";
    }
  };

  return (
    <div className="my-8">
      <div className="flex justify-between">
        <label className="opacity-60 " htmlFor="person">
          Number of people
        </label>
        <p className="mr-3 text-red-600" id="error-person"></p>
      </div>
      <div className="relative flex w-full items-center p-2">
        <img src={personImg} alt="" className="absolute left-4" />
        {/* add "outline outline-red-400" for when there is error */}
        <input
          type="number"
          className="grow rounded-md bg-light_grayish_cyan p-2 pl-6 text-right text-2xl text-very_dark_cyan focus:outline-strong_cyan"
          placeholder="0"
          name="person"
          id="person"
          value={number}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default NumberPeople;
