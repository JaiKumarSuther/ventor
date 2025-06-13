import React from "react";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label = "Magic",
}) => {
  const id = `cbx-42-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className="checkbox-wrapper-42">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="cbx" htmlFor={id}></label>
      <label className="lbl" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
