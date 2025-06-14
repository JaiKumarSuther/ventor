import React from "react";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label = "Checkbox",
}) => {
  const id = `cbk1-65-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className="checkbox-wrapper-65">
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="cbx">
          <svg width="12px" height="11px" viewBox="0 0 12 11">
            <polyline points="1 6.29411765 4.5 10 11 1" />
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
