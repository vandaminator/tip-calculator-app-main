//@ts-ignore

import { Calculator, NumberPeople, SelectTip, Bill } from "./components/Pages"
import logo from "./assets/logo.svg";
import personImg from "./assets/icon-person.svg";
import dollarImg from "./assets/icon-dollar.svg";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("")
  const [tip, setTip] = useState("")
  const [number, setNumber] = useState("")
  return (
    <div className="xl:mx-auto xl:w-[1024px]">
      {/* Logo Image */}
      <img className="mx-auto my-12" src={logo} alt="logo" />

      {/* Content is in this div */}
      <div className="w-full space-y-10 rounded-lg bg-white px-5 py-10 xl:flex xl:gap-3">
        
        {/* User Input */}
        <div className="xl:w-1/2 xl:grow">
          <Bill dollarImg={dollarImg} bill={bill} setBill={setBill} />
          <SelectTip setTip={setTip}/>
          <NumberPeople personImg={personImg} number={number} setNumber={setNumber} />
        </div>

        {/* Display */}
        <Calculator bill={bill} tip={tip} number={number} setBill={setBill} setTip={setTip} setNumber={setNumber} />
      </div>
    </div>
  );
}

export default App;
