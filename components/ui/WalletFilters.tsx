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
    <div className="flex items-center gap-4 px-6 pb-4">
      <CustomCheckbox
        checked={selectAll}
        onChange={onSelectAll}
        label="Select All"
      />
      <CustomCheckbox
        checked={selectSnipeFailed}
        onChange={onSelectSnipeFailed}
        label="Select Snipe Failed"
      />
      <CustomCheckbox
        checked={selectNoSupply}
        onChange={onSelectNoSupply}
        label="Select No Supply"
      />
    </div>
  );
};

export default WalletFilters;
