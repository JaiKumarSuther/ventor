"use client";
import React, { useState } from "react";
import CustomToggleSwitch from "./CustomToggleSwitch";
import Image from "next/image";

interface GeneralSettingsProps {
  tipAmountEnabled: boolean;
  priorityFeeEnabled: boolean;
  onToggleTipAmount: () => void;
  onTogglePriorityFee: () => void;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({
  tipAmountEnabled,
  priorityFeeEnabled,
  onToggleTipAmount,
  onTogglePriorityFee,
}) => {
  const [slippageEditing, setSlippageEditing] = useState(false);
  const [slippageValue, setSlippageValue] = useState("15");
  const [isEditing, setIsEditing] = useState(false);
  const [tipValue, setTipValue] = useState("0.101");

  const handleSave = () => {
    setIsEditing(false);
    // You can trigger any save logic here
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white mb-2">
        General Settings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Tip Amount Card */}
        <div className="p-4 bg-[#101017] border border-[#22242D] rounded-lg">
          <p className="text-[#B4B4B4] mb-2">Tip Amount</p>
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">
              {tipAmountEnabled ? "Enabled" : "Disabled"}
            </span>
            <CustomToggleSwitch
              id="tip-amount-toggle"
              checked={tipAmountEnabled}
              onChange={onToggleTipAmount}
            />
          </div>
        </div>

        {/* Priority Fee Card */}
        <div className="p-4 bg-[#101017] border border-[#22242D] rounded-lg">
          <p className="text-[#B4B4B4] mb-2">Priority Fee</p>
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">
              {priorityFeeEnabled ? "Enabled" : "Disabled"}
            </span>
            <CustomToggleSwitch
              id="priority-fee-toggle"
              checked={priorityFeeEnabled}
              onChange={onTogglePriorityFee}
            />
          </div>
        </div>

        {/* Max Tip Card */}
        <div className="p-4 bg-[#101017] border border-[#22242D] rounded-lg relative">
          <p className="text-[#B4B4B4] mb-2">Max Tip</p>

          {isEditing ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  step="0.001"
                  min="0"
                  className="bg-transparent outline-none border border-[#333] text-white px-2 py-1 rounded w-[120px]"
                  value={tipValue}
                  onBlur={() => setIsEditing(false)} // auto-save on blur
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
                      setTipValue(value);
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">{tipValue} SOL</span>
              <button
                onClick={() => setIsEditing(true)}
                className="cursor-pointer"
              >
                <Image
                  src="/assets/pencil.svg"
                  alt="Edit"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}
        </div>

        {/* Second Row: Additional Cards */}
        <div className="sm:col-span-2 lg:col-span-3">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 p-4 bg-[#101017] border border-[#22242D] rounded-lg relative">
              <p className="text-[#B4B4B4] mb-2">Slippage</p>

              {slippageEditing ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      step="0.1"
                      min="0"
                      className="bg-transparent outline-none border border-[#333] text-white px-2 py-1 rounded w-[120px]"
                      value={slippageValue}
                      onBlur={() => setSlippageEditing(false)} // auto-save on blur
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
                          setSlippageValue(value);
                        }
                      }}
                    />

                    <span className="text-white font-semibold">%</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">
                    {slippageValue}%
                  </span>
                  <button
                    onClick={() => setSlippageEditing(true)}
                    className="cursor-pointer"
                  >
                    <Image
                      src="/assets/pencil.svg"
                      alt="Edit"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              )}
            </div>

            <div className="flex-1 p-4 bg-[#101017] border border-[#22242D] rounded-lg">
              <p className="text-[#B4B4B4] mb-2">Other Settings</p>
              <span className="text-white font-semibold">N/A</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-[#B4B4B4]">
        Sniper limit: Max tokens bot will snipe per session. Jito tips: Extra
        fee for faster transactions.
      </p>
    </div>
  );
};

export default GeneralSettings;
