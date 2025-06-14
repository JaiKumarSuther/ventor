"use client";
import React from "react";

export default function ActionButtons() {
  const redButtons = ["25%", "50%", "100%"];
  const greenButtons = ["25%", "50%", "100%"];

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Sell Buttons */}
      <button className="px-2 sm:px-4 py-1.5 h-[34px] rounded-full bg-[#1A1B20] border border-[#22242D] text-white text-xs sm:text-sm">
        Sell Dev
      </button>
      <button className="px-2 sm:px-4 py-1.5 h-[34px] rounded-full bg-[#1A1B20] border border-[#22242D] text-white text-xs sm:text-sm">
        Sell All + Sell Dev
      </button>

      {/* Red Buttons */}
      {redButtons.map((label, index) => (
        <button
          key={`red-${index}`}
          className="px-2 sm:px-3 py-1.5 h-[34px] rounded-full border border-[#22242D] text-[#E43021] text-xs sm:text-sm hover:bg-[#2a0f0f]/40 transition"
        >
          {label}
        </button>
      ))}

      {/* Green Buttons */}
      {greenButtons.map((label, index) => (
        <button
          key={`green-${index}`}
          className="px-2 sm:px-3 py-1.5 h-[34px] rounded-full border border-[#22242D] text-[#2FD271] text-xs sm:text-sm hover:bg-[#0f2a1b]/40 transition"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
