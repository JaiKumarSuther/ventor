// components/ui/TabsBar.tsx
import { ArrowLeft } from "lucide-react";
import React from "react";

interface Tab {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface TabsBarProps {
  tabs: Tab[];
}

export default function TabsBar({ tabs }: TabsBarProps) {
  return (
    <div className="flex items-center gap-2 md:gap-4 sm:gap-11 py-2 w-full">
      {/* Left Arrow Button */}
      <button className="text-white hover:text-[#8761FF] flex ">
        <ArrowLeft size={24} className="cursor-pointer sm:size-6 w-4 md:w-6" />
      </button>

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-8 w-full justify-start ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={tab.onClick}
            className={`${
              tab.active
                ? "text-[#8761FF]"
                : "text-white"
            } text-xs sm:text-base md:text-lg hover:text-[#8761FF] cursor-pointer font-semibold`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
