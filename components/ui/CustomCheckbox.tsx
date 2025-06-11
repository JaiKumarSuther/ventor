import React from "react";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer appearance-none w-4 h-4 bg-[#101017] border border-[#444] rounded-md checked:bg-[#526FFF] checked:border-[#526FFF] cursor-pointer transition-colors duration-200"
      />
      <span className="absolute left-[3px] top-[0px] text-xs text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200">
        ✔
      </span>
    </label>
  );
};

export default CustomCheckbox;
