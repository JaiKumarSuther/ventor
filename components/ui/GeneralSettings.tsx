import React from "react";
import CustomToggleSwitch from "./CustomToggleSwitch";

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
    <div className="p-4 bg-[#101017] border border-[#22242D] rounded-lg">
      <p className="text-[#B4B4B4] mb-2">Max Tip</p>
      <span className="text-white font-semibold">0.101 SOL</span>
    </div>

    {/* Second Row: Additional Cards */}
    <div className="sm:col-span-2 lg:col-span-3">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 p-4 bg-[#101017] border border-[#22242D] rounded-lg">
          <p className="text-[#B4B4B4] mb-2">Slippage</p>
          <span className="text-white font-semibold">15%</span>
        </div>
        <div className="flex-1 p-4 bg-[#101017] border border-[#22242D] rounded-lg">
          <p className="text-[#B4B4B4] mb-2">Other Settings</p>
          <span className="text-white font-semibold">N/A</span>
        </div>
      </div>
    </div>
  </div>

  <p className="text-sm text-[#B4B4B4]">
    Sniper limit: Max tokens bot will snipe per session. Jito tips: Extra fee for faster transactions.
  </p>
</div>

  );
};

export default GeneralSettings;
