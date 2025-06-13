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
        <CustomCheckbox
          label="Select All"
          checked={selectAll}
          onChange={onSelectAll}
        />
      </div>
      <div className="flex items-center gap-2">
        <CustomCheckbox
          label="Select Snipe Failed"
          checked={selectSnipeFailed}
          onChange={onSelectSnipeFailed}
        />
      </div>
      <div className="flex items-center gap-2">
        <CustomCheckbox
          label="Select No Supply"
          checked={selectNoSupply}
          onChange={onSelectNoSupply}
        />
      </div>
    </div>
  );
};

export default WalletFilters;
