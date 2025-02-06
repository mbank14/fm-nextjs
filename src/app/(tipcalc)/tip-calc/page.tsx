"use client"
import { useState } from "react";
import {formatPrice} from '@/lib/utils/fromatPrice'

const TipCalc = () => {
    const [tip, setTip] = useState<number>(142.55)
    const [numberPpl, setNumberPpl] = useState<number>(5)
    const [percentTip, setPercentTip] = useState<number>(0.15)

    const tipAmount = () =>{
        return tip * percentTip / numberPpl
    }

    const totalAmoutn =() =>{
        return (tip + tipAmount() * 5 )/ 5
    }

  return (
    <div>
      <div className="text-center">
        <h1>Title</h1>
      </div>

      <div className="p-5">
        <div>
          <form action="">
            <div>
              <label htmlFor="tipAmount">Bill</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "8px" }}>💵</span>
                <input
                  type="number"
                  id="tipAmount"
                  name="tipAmount"
                  style={{ textAlign: "right" }}
                />
              </div>
            </div>

            <div>
              <label>Select tip %</label>
              <div>
                <input type="radio" id="tip5" name="tipPercentage" value="5" />
                <label htmlFor="tip5">5%</label>

                <input
                  type="radio"
                  id="tip10"
                  name="tipPercentage"
                  value="10"
                />
                <label htmlFor="tip10">10%</label>

                <input
                  type="radio"
                  id="tip15"
                  name="tipPercentage"
                  value="15"
                />
                <label htmlFor="tip15">15%</label>

                <input
                  type="radio"
                  id="tip20"
                  name="tipPercentage"
                  value="20"
                />
                <label htmlFor="tip20">20%</label>

                <input
                  type="radio"
                  id="tip25"
                  name="tipPercentage"
                  value="25"
                />
                <label htmlFor="tip25">25%</label>

                <input
                  type="radio"
                  id="tipCustom"
                  name="tipPercentage"
                  value="custom"
                />
                <label htmlFor="tipCustom" style={{ backgroundColor: "gray" }}>
                  Custom
                </label>
              </div>
              <input
                type="number"
                id="customTip"
                name="customTip"
                style={{ display: "none", textAlign: "right" }}
                placeholder="Enter custom tip %"
              />

              {/* <script>
                    document.getElementById('tipPercentage').addEventListener('change', function() {
                        const customTipInput = document.getElementById('customTip');
                        if (this.value === 'custom') {
                            customTipInput.style.display = 'block';
                        } else {
                            customTipInput.style.display = 'none';
                        }
                    });
                </script> */}
            </div>

            <div>
              <label htmlFor="numberPpl">Number People</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "8px" }}>💵</span>
                <input
                  type="number"
                  id="tipAmount"
                  name="tipAmount"
                  style={{ textAlign: "right" }}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="bg-emerald-900 p-5 rounded-xl mt-7">
          <div>
            <div className="mb-4 flex flex-row justify-between text-white items-center">
              <h2 className="font-bold ">Tip Amount <br></br> <span className="text-sm text-slate-400">/ Person</span></h2>
              <p className="text-2xl font-bold text-emerald-300"> {formatPrice(tipAmount(),'us')}</p>
            </div>
            <div className="flex flex-row justify-between text-white items-center">
              <h2 className="font-bold ">Total <br></br> <span className="text-sm text-slate-400">/ Person</span></h2>
              <p className="text-2xl font-bold text-emerald-300"> {formatPrice(totalAmoutn(), 'us')}</p>
            </div>
          </div>

          <div>
            <button     
            className="bg-emerald-300 text-emerald-800 font-bold text-center py-3 block w-full mt-5 rounded-xl">RESET</button>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default TipCalc;
