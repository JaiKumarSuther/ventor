// components/WalletFilters.tsx
import React from "react";
import CustomCheckbox from "./CustomCheckbox";

interface WalletFiltersProps {
  selectAll: boolean;
  onSelectAll: (checked: boolean) => void;
  selectSnipeFailed: boolean;
  onSelectSnipeFailed: (checked: boolean) => void;
  selectNoSupply: boolean;
  onSelectNoSupply: (checked: boolean) => void;
}

const WalletFilters: React.FC<WalletFiltersProps> = ({
  selectAll,
  onSelectAll,
  selectSnipeFailed,
  onSelectSnipeFailed,
  selectNoSupply,
  onSelectNoSupply,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 px-3 md:px-6 pb-4">
      <div className="flex items-center gap-2">
        <CustomCheckbox checked={selectAll} onChange={onSelectAll} />
        <h1 className="text-sm font-semibold">Select All</h1>
      </div>
      <div className="flex items-center gap-2">
        <CustomCheckbox checked={selectSnipeFailed} onChange={onSelectSnipeFailed} />
        <h1 className="text-sm font-semibold">Select Snipe Failed</h1>
      </div>
      <div className="flex items-center gap-2">
        <CustomCheckbox checked={selectNoSupply} onChange={onSelectNoSupply} />
        <h1 className="text-sm font-semibold">Select No Supply</h1>
      </div>
    </div>
  );
};

export default WalletFilters;
