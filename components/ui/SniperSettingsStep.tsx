"use client";
import React, { useState } from "react";
import DashboardActions from "./DashboardActions";
import DualRangeSlider from "./DualRangeSlider";
import SingleRangeSlider from "./SingleRangeSlider";
import { ChevronDown } from "lucide-react";

interface SniperSettingsStepProps {
  onNext: () => void;
  onCancel: () => void;
}

export default function SniperSettingsStep({
  onNext,
  onCancel,
}: SniperSettingsStepProps) {
  const [buyRangeValues, setBuyRangeValues] = useState({ min: 3.8, max: 4.4 });
  const [devBuyValue, setDevBuyValue] = useState(2.4);
  const [totalSnipeValue, setTotalSnipeValue] = useState(2.4);
  const [tidAmountValue, setTidAmountValue] = useState(97);

  return (
    <div className="flex flex-col gap-4 md:gap-8 p-2">
      {/* DEV BUY & TOTAL WALLETS */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 w-full">
        <div className="flex flex-col items-center w-full md:flex-row md:w-auto flex-1 mb-4 md:mb-8">
          <h1 className="w-full md:w-[50%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            DEV BUY
          </h1>
          <div className="w-full pt-6">
            <SingleRangeSlider
              min={0}
              max={5}
              step={0.1}
              initialValue={devBuyValue}
              onChange={setDevBuyValue}
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:flex-row md:w-auto flex-1 gap-2 md:gap-6 mb-4 md:mb-8">
          <h1 className="font-[500] text-[#6A7A8C] text-sm w-full md:w-auto mb-2 md:mb-0">
            TOTAL WALLETS SELECTED
          </h1>
          <div className="bg-[#101114] border border-[#22242D] rounded-lg flex justify-between items-center px-5 py-2 h-[72px] cursor-pointer w-full">
            <div>
              <p className="text-[#6A7A8C] text-xs">Number of wallets selected</p>
              <h1 className="text-sm font-semibold text-white pt-1">4</h1>
            </div>
            <ChevronDown size={20} color="#6A7A8C" />
          </div>
        </div>
      </div>

      {/* OTHER SLIDERS */}
      <div className="flex flex-col gap-6 md:gap-12 w-full">
        <div className="flex flex-col items-center md:flex-row w-full md:w-[545px] flex-1 mb-4 md:mb-8">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            TOTAL SNIPE
          </h1>
          <div className="w-full pt-6">
            <SingleRangeSlider
              min={0}
              max={5}
              step={0.1}
              initialValue={totalSnipeValue}
              onChange={setTotalSnipeValue}
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row w-full md:w-[545px] flex-1 mb-4 md:mb-8">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            BUY RANGE
          </h1>
          <div className="w-full pt-6">
            <DualRangeSlider
              min={3.0}
              max={5.0}
              step={0.1}
              average={4.0}
              initialMinValue={buyRangeValues.min}
              initialMaxValue={buyRangeValues.max}
              onChange={(min, max) => setBuyRangeValues({ min, max })}
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row w-full md:w-[545px] flex-1 mb-4 md:mb-8">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            TID AMOUNT
          </h1>
          <div className="w-full pt-8">
            <SingleRangeSlider
              min={60}
              max={102}
              step={1}
              markers={[75, 95, 99]}
              initialValue={tidAmountValue}
              onChange={setTidAmountValue}
            />
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-end pt-8 md:pt-12">
        <DashboardActions
          onFirstAction={onCancel}
          onSecondAction={onNext}
          firstLabel="Cancel"
          secondLabel="Next"
        />
      </div>
    </div>
  );
}
