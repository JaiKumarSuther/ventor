"use client";
import React from "react";

export default function ActionButtons() {
  const redButtons = ["25%", "50%", "100%"];
  const greenButtons = ["25%", "50%", "100%"];

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Sell Buttons */}
      <button className="px-4 py-1.5 h-[34px] rounded-full bg-[#1A1B20] border border-[#22242D] text-white">
        Sell Dev
      </button>
      <button className="px-4 py-1.5 h-[34px] rounded-full bg-[#1A1B20] border border-[#22242D] text-white">
        Sell All + Sell Dev
      </button>

      {/* Red Buttons */}
      {redButtons.map((label, index) => (
        <button
          key={`red-${index}`}
          className="px-3 py-1.5 h-[34px] rounded-full border border-[#22242D] text-[#E43021]"
        >
          {label}
        </button>
      ))}

      {/* Green Buttons */}
      {greenButtons.map((label, index) => (
        <button
          key={`green-${index}`}
          className="px-3 py-1.5 h-[34px] rounded-full border border-[#22242D] text-[#2FD271]"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
