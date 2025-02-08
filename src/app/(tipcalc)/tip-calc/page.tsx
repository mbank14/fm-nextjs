"use client";
import { ChangeEvent, useState } from "react";
import { formatPrice } from "@/lib/utils/fromatPrice";

const TipCalc = () => {
 const [customPercentage, setCustomPercentage] = useState<number | string>('');
  const [tip, setTip] = useState<number>(142.55);
  const [numberPpl, setNumberPpl] = useState<number>(5);
  const [percentTip, setPercentTip] = useState<number | string>(0.15);

  const tipAmount = () => {
    return (tip * Number(percentTip)) / numberPpl;
  };

  const totalAmoutn = () => {
    return (tip + tipAmount() * 5) / 5;
  };

  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if(val !== 'custom' ){
    }
    setCustomPercentage('')
    setPercentTip(Number(e.target.value));
    console.log(val);
  };

  const handleCustomPercentage = (e: ChangeEvent<HTMLInputElement>) =>{

    setCustomPercentage(Number(e.target.value))
    setPercentTip(Number(e.target.value)/100)
    console.log(customPercentage == percentTip);
  }
  return (
    <div>
      <div className="text-center">
        <h1>Title</h1>
      </div>

      <div className="p-5">
        <div>
          <form action="">
            <div className="mb-4">
              <label htmlFor="tipAmount">Bill</label>
              <div
                className="w-full px-2 py-3 bg-slate-200 rounded-lg bill-input"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "8px" }}>💵</span>
                <input
                  className="w-full appearance-none"
                  type="number"
                  id="tipAmount"
                  name="tipAmount"
                  value={tip}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  {
                    const value = Math.max(Number(e.target.value), 1);
                    e.target.value =  value.toString()  
                      setTip(Number(value))
                    }
                  }
                  style={{ textAlign: "right" }}
                  onFocus={(e) =>
                    e.target.parentElement?.classList.add("outline-input")
                  }
                  onBlur={(e) =>
                    e.target.parentElement?.classList.remove("outline-input")
                  }
                />
              </div>
            </div>

            <div className="mb-4">
              <label>Select tip %</label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    onChange={handleRadio}
                    type="radio"
                    id="tip5"
                    name="tipPercentage"
                    value={0.05}
                    checked={percentTip == 0.05 && customPercentage == ''}
                  />
                  <label htmlFor="tip5">5%</label>
                </div>

                <div>
                  <input
                    checked={percentTip == 0.10 && customPercentage == ''}
                    type="radio"
                    id="tip10"
                    name="tipPercentage"
                    value={0.10}
                    onChange={handleRadio}
                  />
                  <label htmlFor="tip10">10%</label>
                </div>

                <div>
                  <input
                  checked={percentTip == 0.15 && customPercentage == ''}
                    onChange={handleRadio}
                    type="radio"
                    id="tip15"
                    name="tipPercentage"
                    value={0.15}
                  />
                  <label htmlFor="tip15">15%</label>
                </div>

                <div>
                  <input
                  checked={percentTip == 0.20 && customPercentage == ''}
                    onChange={handleRadio}
                    type="radio"
                    id="tip20"
                    name="tipPercentage"
                    value={0.20}
                  />
                  <label htmlFor="tip20">20%</label>
                </div>

                <div>
                  <input
                  checked={percentTip == 0.25 && customPercentage == ''}
                    onChange={handleRadio}
                    type="radio"
                    id="tip25"
                    name="tipPercentage"
                    value={0.25}
                  />
                  <label htmlFor="tip25">25%</label>
                </div>

                <div>

                    <input 
                        placeholder="Custom"
                        type="number" 
                        name="tipPercentage" 
                        id="inputPercentage" 
                        value={customPercentage}
                        onChange={handleCustomPercentage}
                     />

                </div>
              </div>

              <input
                type="number"
                id="customTip"
                name="customTip"
                style={{ display: "none", textAlign: "right" }}
                placeholder="Enter custom tip %"
              />
            </div>

            <div>
              <label htmlFor="numberPpl">Number People</label>
              <div
                className="w-full px-2 py-3 bg-slate-200 rounded-lg bill-input"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "8px" }}>👥</span>
                <input
                  className="w-full appearance-none"
                  min={1}
                  value={numberPpl}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(Number(e.target.value), 1);
                    e.target.value =  value.toString()
                    setNumberPpl(value);
                  }}
                  onFocus={(e) =>
                    e.target.parentElement?.classList.add("outline-input")
                  }
                  onBlur={(e) =>
                    e.target.parentElement?.classList.remove("outline-input")
                  }
                  type="number"
                  id="numberPpl"
                  name="numberPpl"
                  style={{ textAlign: "right" }}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="bg-emerald-900 p-5 rounded-xl mt-7">
          <div>
            <div className="mb-4 flex flex-row justify-between text-white items-center">
              <h2 className="font-bold ">
                Tip Amount <br></br>{" "}
                <span className="text-sm text-slate-400">/ Person</span>
              </h2>
              <p className="text-2xl font-bold text-emerald-300">
                {" "}
                {formatPrice(tipAmount(), "us")}
              </p>
            </div>
            <div className="flex flex-row justify-between text-white items-center">
              <h2 className="font-bold ">
                Total <br></br>{" "}
                <span className="text-sm text-slate-400">/ Person</span>
              </h2>
              <p className="text-2xl font-bold text-emerald-300">
                {" "}
                {formatPrice(totalAmoutn(), "us")}
              </p>
            </div>
          </div>

          <div>
            <button onClick={() => {
                setTip(1)
                setNumberPpl(1)
                setPercentTip(0.05)
            }}
             className="bg-emerald-300 text-emerald-800 font-bold text-center py-3 block w-full mt-5 rounded-xl">
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalc;
