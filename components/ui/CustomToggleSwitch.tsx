import React from "react";

interface CustomToggleSwitchProps {
  id: string;
  checked: boolean;
  onChange: () => void;
}

const CustomToggleSwitch: React.FC<CustomToggleSwitchProps> = ({
  id,
  checked,
  onChange,
}) => {
  return (
    <div className="checkbox-wrapper-simple">
      <input
        className="tgl-simple"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="tgl-btn-simple" htmlFor={id}></label>
    </div>
  );
};

export default CustomToggleSwitch;
