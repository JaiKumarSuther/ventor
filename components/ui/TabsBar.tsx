// components/ui/TabsBar.tsx
"use client";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

interface Tab {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface TabsBarProps {
  tabs: Tab[];
}

export default function TabsBar({ tabs }: TabsBarProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/wallets"); // Fallback route
    }
  };

  return (
    <div className="flex gap-2 md:gap-4 sm:gap-11 py-2 w-full items-center">
      {/* Left Arrow Button */}
      <button
        onClick={handleBack}
        className="text-white hover:text-[#8761FF] flex items-center"
      >
        <ArrowLeft size={24} className="cursor-pointer sm:size-6 w-4 md:w-6" />
      </button>

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-8 w-full justify-start">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={tab.onClick}
            className={`${
              tab.active ? "text-[#8761FF]" : "text-white"
            } text-xs sm:text-base md:text-lg hover:text-[#8761FF] cursor-pointer font-semibold`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
