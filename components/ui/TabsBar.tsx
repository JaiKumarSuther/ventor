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
    <div className="flex items-center gap-11">
      <button className="text-white hover:text-[#8761FF]">
        <ArrowLeft size={30} className="cursor-pointer"/>
      </button>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={tab.onClick}
          className={`${
            tab.active ? "text-[#8761FF] text-[18px]" : "text-white"
          } hover:text-[#8761FF] cursor-pointer font-semibold`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
