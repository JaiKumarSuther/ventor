import React from "react";
import { ChevronDown } from "lucide-react";

interface TopActionBarProps {
  livePNL: string;
}

export default function TopActionBar({ livePNL }: TopActionBarProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 mb-6">
      {/* Left Side */}
      <div className="flex flex-col gap-4">
        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button className="px-4 py-2 rounded-md bg-[#1A1B20] border border-[#22242D] text-white">
            Sell Dev
          </button>
          <button className="px-4 py-2 rounded-md bg-[#1A1B20] border border-[#22242D] text-white">
            Sell All + Sell Dev
          </button>
          {/* Percentage Buttons */}
          {[25, 50, 100].map((percent) => (
            <button
              key={percent}
              className={`px-2 py-1 text-xs rounded-md border ${
                percent <= 50
                  ? "border-red-500 text-red-500"
                  : "border-green-500 text-green-500"
              }`}
            >
              {percent}%
            </button>
          ))}
        </div>

        {/* Smart Sell & Preset */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-xs text-[#B4B4B4]">SMART SELL</p>
            <div
              className={`w-10 h-5 rounded-full bg-[#1A1B20] border border-[#22242D] flex items-center cursor-pointer`}
            >
              {/* Toggle Thumb */}
              <div
                className={`w-4 h-4 rounded-full bg-white translate-x-0 transition-transform`}
              ></div>
            </div>
            <p className="text-xs text-white">OFF</p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-xs text-[#B4B4B4]">CHOOSE PRESET</p>
            <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#1A1B20] border border-[#22242D]">
              <span className="text-white text-xs">Preset 1</span>
              <ChevronDown className="text-[#B4B4B4]" size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-start lg:items-end">
        <p className="text-xs text-[#B4B4B4]">Live PNL</p>
        <h2 className="text-2xl font-semibold text-green-500">{livePNL}</h2>
      </div>
    </div>
  );
}
