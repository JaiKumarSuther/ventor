// components/FilterButton.tsx
import React from "react";
import { ChevronDown } from "lucide-react";

interface FilterButtonProps {
  label: string;
  onClick?: () => void;
}

export default function FilterButton({ label, onClick }: FilterButtonProps) {
  return (
    <button
      className="flex items-center px-5 py-2 cursor-pointer rounded-full bg-[#15161D] text-white gap-2"
      onClick={onClick}
    >
      <span>{label}</span>
      <ChevronDown size={16} />
    </button>
  );
}
