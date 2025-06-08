import React from "react";

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
    <div className="flex-1 flex items-center justify-between rounded-md px-4 py-2 cursor-pointer">
      <div>
        <p className="text-[#6A7A8C] text-xs">{label}</p>
        <h1 className="text-sm font-semibold text-white">
          {enabled ? "ON" : "OFF"}
        </h1>
      </div>
      <div
        className={`w-10 h-5 rounded-full border border-[#22242D] flex items-center transition-colors relative ${
          enabled ? "bg-green-500" : "bg-[#6A7A8C]"
        }`}
        onClick={onToggle}
      >
        <div
          className={`w-4 h-4 rounded-full bg-[#E8F5E9] shadow transition-transform absolute top-0.5 left-0.5 ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}
