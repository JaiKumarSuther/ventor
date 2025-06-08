import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";

interface WalletCardProps {
  walletId: string;
  holding: string;
  worth: string;
  percent: string;
}

export default function WalletCard({
  walletId,
  holding,
  worth,
  percent,
}: WalletCardProps) {
  // Add state for the checkbox
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="p-4 rounded-lg bg-[#0D0E12] border border-[#161616] flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <CustomCheckbox
          checked={isChecked}
          onChange={setIsChecked}
        />
        <h3 className="text-lg font-semibold text-white">Wallet</h3>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-y-1">
        <p className="text-[#B4B4B4] text-sm">Wallet ID</p>
        <p className="text-sm text-white text-right">{walletId}</p>

        <p className="text-[#B4B4B4] text-sm">SOL Holding</p>
        <p className="text-sm text-white text-right">{holding}</p>

        <p className="text-[#B4B4B4] text-sm">SOL Worth</p>
        <p className="text-sm text-white text-right">{worth}</p>

        <p className="text-[#B4B4B4] text-sm">%</p>
        <p className="text-sm text-white text-right">{percent}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-2 mt-2">
        {[25, 50, 100].map((value) => (
          <button
            key={`green-${value}`}
            className="flex-1 py-1 text-xs rounded-md bg-[#1A1B20] border border-[#22242D] text-green-500"
          >
            {value}
          </button>
        ))}
        {[25, 50, 100].map((value) => (
          <button
            key={`red-${value}`}
            className="flex-1 py-1 text-xs rounded-md bg-[#1A1B20] border border-[#22242D] text-red-500"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}
