"use client";
import React from "react";

interface GradientCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const GradientCheckbox: React.FC<GradientCheckboxProps> = ({
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
          appearance-none w-4 h-4 rounded-[0.25rem]
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

export default GradientCheckbox;
