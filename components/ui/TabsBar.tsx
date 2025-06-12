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
      router.push("/wallets");
    }
  };

  return (
    <div className="flex gap-3 md:gap-6 items-start py-2 w-full">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="text-white cursor-pointer hover:text-[#8761FF] flex items-start"
      >
        <ArrowLeft size={20} className="sm:size-6 md:size-6 w-4 md:w-6" />
      </button>

      {/* Tabs */}
      <div className="flex flex-wrap  gap-2 sm:gap-6 w-full justify-start">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={tab.onClick}
            className={`${
              tab.active ? "text-[#8761FF]" : "text-white"
            } text-xs sm:text-sm md:text-base cursor-pointer hover:text-[#8761FF] font-semibold transition`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
