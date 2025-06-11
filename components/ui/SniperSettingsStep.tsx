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
  const [sliderValues, setSliderValues] = useState({ min: 200, max: 1000 });
  const [singleSliderValue, setSingleSliderValue] = useState(500);

  const handleDualSliderChange = (minValue: number, maxValue: number) => {
    setSliderValues({ min: minValue, max: maxValue });
  };

  const handleSingleSliderChange = (value: number) => {
    setSingleSliderValue(value);
  };

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
              min={100}
              max={2000}
              initialValue={singleSliderValue}
              onChange={handleSingleSliderChange}
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

      {/* TOTAL BUNDLES & BUNDLE RANGE */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 w-full">
        <div className="flex items-center flex-col w-full md:flex-row md:w-auto flex-1 mb-4 md:mb-8">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            DEV BUY
          </h1>
          <div className="bg-[#101114] border border-[#22242D] rounded-lg flex justify-between items-center px-5 py-2 h-[72px] cursor-pointer w-full">
            <div>
              <p className="text-[#6A7A8C] text-xs">TOTAL BUNDLES</p>
              <h1 className="text-sm font-semibold text-white pt-1">4</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:flex-row md:w-[520px] flex-1 mb-4 md:mb-8">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            BUNDLE RANGE
          </h1>
          <div className="w-full pt-6">
            <DualRangeSlider
              min={100}
              max={2000}
              initialMinValue={sliderValues.min}
              initialMaxValue={sliderValues.max}
              onChange={handleDualSliderChange}
            />
          </div>
        </div>
      </div>

      {/* OTHER SLIDERS */}
      <div className="flex flex-col gap-6 md:gap-12 w-full">
        <div className="flex flex-col md:flex-row w-full md:w-[545px] flex-1 mb-4 md:mb-8">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            TOTAL SNIPE
          </h1>
          <div className="w-full pt-6">
            <SingleRangeSlider
              min={100}
              max={2000}
              initialValue={singleSliderValue}
              onChange={handleSingleSliderChange}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-[545px] flex-1 mb-4 md:mb-8">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            SNIPE RANGE
          </h1>
          <div className="w-full pt-6">
            <DualRangeSlider
              min={100}
              max={2000}
              initialMinValue={sliderValues.min}
              initialMaxValue={sliderValues.max}
              onChange={handleDualSliderChange}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-[545px] flex-1 mb-4 md:mb-8">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            TID AMOUNT
          </h1>
          <div className="w-full pt-8">
            <SingleRangeSlider
              min={100}
              max={2000}
              initialValue={singleSliderValue}
              onChange={handleSingleSliderChange}
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
