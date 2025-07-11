"use client";
import React, { useState } from "react";
import DashboardActions from "./DashboardActions";
import DualRangeSlider from "./DualRangeSlider";
import SingleRangeSlider from "./SingleRangeSlider";

interface SniperSettingsStepProps {
  onNext: () => void;
  onCancel: () => void;
  launchMode?: string;
}

export default function SniperSettingsStep({
  onNext,
  onCancel,
  launchMode,
}: SniperSettingsStepProps) {
  const [buyRangeValues, setBuyRangeValues] = useState({ min: 3.8, max: 4.4 });
  const [devBuyValue, setDevBuyValue] = useState(2.4);
  const [totalSnipeValue, setTotalSnipeValue] = useState(2.4);
  const [tidAmountValue, setTidAmountValue] = useState(97);
  const [selectedCount] = useState<number>(5);

  return (
    <div className="flex flex-col gap-16 md:gap-20 p-6 min-h-[730px]">
      {/* DEV BUY & TOTAL WALLETS SELECTED */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 w-full">
        {/* DEV BUY */}
        <div className="flex flex-col items-end md:flex-row w-full md:w-[545px]">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
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

        {/* TOTAL WALLETS */}
        <div className="flex md:items-center flex-col md:flex-row gap-5 md:gap-10 w-full md:w-auto flex-1">
          <h1 className="font-medium text-[#6A7A8C] pt-10 md:pt-0 md:pl-0 text-sm whitespace-nowrap">
            TOTAL WALLETS SELECTED
          </h1>
          <div className="bg-[#101114] flex-1 border border-[#22242D] rounded-lg px-5 py-3 w-full md:w-auto">
            <p className="text-[#6A7A8C] text-xs mb-1">
              Number of wallets selected
            </p>
            <h1 className="text-sm font-semibold text-white">{selectedCount}</h1>
          </div>
        </div>
      </div>

      {/* TOTAL BUNDLE & CONDITIONAL BUNDLE RANGE */}
      <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* TOTAL BUNDLE */}
        <div className="flex flex-col items-end md:flex-row w-full md:w-[545px]">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            TOTAL BUNDLE
          </h1>
          <div className="w-full pt-8">
            <SingleRangeSlider
              min={0}
              max={5}
              step={0.1}
              initialValue={totalSnipeValue}
              onChange={setTotalSnipeValue}
            />
          </div>
        </div>

        {/* BUNDLE RANGE */}
        {launchMode === "bundle-snipe" && (
          <div className="flex flex-col items-end md:flex-row w-full md:w-[545px]">
            <h1 className="w-full md:w-[40%] md:pl-4 font-medium text-[#6A7A8C] text-sm">
              BUNDLE RANGE
            </h1>
            <div className="w-full pt-8">
              <DualRangeSlider
                min={3.0}
                max={5.0}
                step={0.1}
                initialMinValue={buyRangeValues.min}
                initialMaxValue={buyRangeValues.max}
                onChange={(min, max) => setBuyRangeValues({ min, max })}
              />
            </div>
          </div>
        )}
      </div>

      {/* TOTAL SNIPE & CONDITIONAL SNIPE RANGE */}
      <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* TOTAL SNIPE */}
        <div className="flex flex-col items-end md:flex-row w-full md:w-[545px]">
          <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
            TOTAL SNIPE
          </h1>
          <div className="w-full pt-8">
            <SingleRangeSlider
              min={0}
              max={5}
              step={0.1}
              initialValue={totalSnipeValue}
              onChange={setTotalSnipeValue}
            />
          </div>
        </div>

        {/* SNIPE RANGE */}
        {launchMode === "bundle-snipe" && (
          <div className="flex flex-col items-end md:flex-row w-full md:w-[545px]">
            <h1 className="w-full md:w-[40%] md:pl-4 font-medium text-[#6A7A8C] text-sm">
              SNIPE RANGE
            </h1>
            <div className="w-full pt-8">
              <DualRangeSlider
                min={3.0}
                max={5.0}
                step={0.1}
                initialMinValue={buyRangeValues.min}
                initialMaxValue={buyRangeValues.max}
                onChange={(min, max) => setBuyRangeValues({ min, max })}
              />
            </div>
          </div>
        )}
      </div>

      {/* TID AMOUNT */}
      <div className="flex flex-col items-end md:flex-row w-full md:w-[545px]">
        <h1 className="w-full md:w-[48%] font-[500] text-[#6A7A8C] text-sm mb-2 md:mb-0">
          TID AMOUNT
        </h1>
        <div className="w-full pt-10">
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

      {/* ACTION BUTTONS */}
      <div className="flex justify-end pt-22">
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
