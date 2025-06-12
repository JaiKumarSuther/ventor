"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface PresetSelectorProps {
  label: string;
  selected: string;
  options: string[];
  onSelect: (preset: string) => void;
}

export default function PresetSelector({
  label,
  selected,
  options,
  onSelect,
}: PresetSelectorProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1 min-w-[180px]" ref={wrapperRef}>
      {/* Main Selector Box */}
      <div
        className="flex justify-between items-center px-2 sm:px-3 py-2 rounded-md cursor-pointer min-w-0"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="min-w-0">
          <p className="text-[#6A7A8C] text-xs">{label}</p>
          <h1 className="text-sm font-semibold text-white truncate">{selected}</h1>
        </div>
        <ChevronDown size={16} color="#6A7A8C" className="shrink-0 ml-2" />
      </div>

      {/* Dropdown Items */}
      {open && (
        <div className="absolute left-0 z-50 mt-1 w-full bg-[#101114] border border-[#22242D] shadow-md">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className={`px-3 py-2 text-sm truncate cursor-pointer ${
                option === selected
                  ? "bg-[#000000] text-white"
                  : "text-[#6A7A8C] hover:bg-[#000000]"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
