import React, { useEffect, useState } from "react";
function Calculator({ bill, tip, number, setBill, setTip, setNumber }) {
  const [tipAmount, setTipAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const showResult = () => {
    // tip is a %
    const percentage = +tip / 100;
    const oneBill = +bill / +number;
    const oneTipAmount = oneBill * percentage;
    const oneTotal = oneBill + oneTipAmount;

    const showTipAmount = oneTipAmount.toPrecision(4);
    const showTotalAmount = oneTotal.toPrecision(4);

    setTipAmount(showTipAmount);
    setTotalAmount(showTotalAmount);
  };

  const handleReset = () => {
    setBill("");
    setNumber("");
  };

  useEffect(() => {
    const oneIsEmpty = (tip === "") | (number === "") | (bill === "");
    const oneNotFormat = (+tip <= 0) | (+number <= 0) | (+bill <= 0);
    const RESET = document.getElementById("reset-btn");
    if (oneIsEmpty | oneNotFormat) {
      RESET.classList.add("opacity-20");
      RESET.disabled = true;
      setTipAmount("");
      setTotalAmount("");
    } else {
      RESET.classList.remove("opacity-20");
      RESET.disabled = false;
      showResult();
    }
  }, [tip, number, bill]);

  return (
    <div className="space-y-5 rounded-md bg-very_dark_cyan p-5 xl:grow">
      {/* The tips */}
      <div className="mb-3 mt-4 grid grid-cols-2 grid-rows-2 gap-y-3 xl:gap-y-5">
        <div>
          <h3 className="text-white">Tip Amount</h3>
          <p className="text-grayish_cyan">/ person</p>
        </div>
        <p className="justify-self-end text-4xl text-strong_cyan">
          {tipAmount === "" ? " $0.00" : `$ ${tipAmount}`}
        </p>
        <div>
          <h3 className="text-white">Total</h3>
          <p className="text-grayish_cyan">/ person</p>
        </div>
        <p className="justify-self-end text-4xl text-strong_cyan">
          {totalAmount === "" ? " $0.00" : `$ ${totalAmount}`}
        </p>
      </div>
      {/* when user enter data make opacity-100 */}
      <button
        id="reset-btn"
        className="w-full rounded-md bg-strong_cyan p-2 text-lg text-very_dark_cyan opacity-20 xl:mt-9"
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </div>
  );
}

export default Calculator;
