import React from "react";
import { ChevronDown } from "lucide-react";

interface PresetSelectorProps {
  label: string;
  selected: string;
  onSelect?: (preset: string) => void;
}

export default function PresetSelector({
  label,
  selected,
}: PresetSelectorProps) {
  return (
    <div className="flex-1 flex justify-between items-center px-3 py-2 rounded-md  cursor-pointer">
      <div>
        <p className="text-[#6A7A8C] text-xs">{label}</p>
        <h1 className="text-sm font-semibold text-white">{selected}</h1>
      </div>
      <ChevronDown size={16} color="#6A7A8C" />
    </div>
  );
}
