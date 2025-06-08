"use client";
import React from "react";

interface OutlinedButtonProps {
  onClick?: () => void;
  label?: string;
  width?: string;
  height?: string;
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  onClick,
  label = "Cancel",
  width = "100px",
  height = "40px",
}) => {
  return (
    <button
      className="rounded-full cursor-pointer border border-[#7458E7] text-[#7458E7] hover:bg-[#8761FF]/10"
      onClick={onClick}
      style={{ width, height }}
    >
      {label}
    </button>
  );
};

export default OutlinedButton;
