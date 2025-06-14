import React from "react";
import CustomToggleSwitch from "./CustomToggleSwitch";

interface SmartSellControlProps {
  label: string;
  enabled: boolean;
  onToggle?: () => void;
}

export default function SmartSellControl({
  label,
  enabled,
  onToggle,
}: SmartSellControlProps) {
  return (
    <div className="flex-1 flex items-center justify-between rounded-md px-2 sm:px-4 py-2 cursor-pointer min-w-0">
      <div className="min-w-0">
        <p className="text-[#6A7A8C] text-xs">{label}</p>
        <h1 className="text-sm font-semibold text-white">
          {enabled ? "ON" : "OFF"}
        </h1>
      </div>
      <CustomToggleSwitch
        id={`switch-${label.replace(/\s+/g, "-").toLowerCase()}`}
        checked={enabled}
        onChange={onToggle ?? (() => {})}
      />
    </div>
  );
}
