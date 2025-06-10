"use client";
import React from "react";

interface RoundedGradientCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const RoundedGradientCheckbox: React.FC<RoundedGradientCheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`
          appearance-none w-4 h-4 rounded-full
          border-2 border-[#8761FF]
          bg-transparent
          transition-all duration-200
          checked:bg-[#8761FF]
          checked:shadow-[inset_0_0_0_2px_#101017]
          cursor-pointer
        `}
      />
    </label>
  );
};

export default RoundedGradientCheckbox;
