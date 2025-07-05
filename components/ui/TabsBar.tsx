"use client";

import { ArrowLeft } from "lucide-react";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface Tab {
  label: string;
  route?: string;
  onClick?: () => void;
}

interface TabsBarProps {
  tabs: Tab[];
}

export default function TabsBar({ tabs }: TabsBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleTabClick = (tab: Tab) => {
    if (tab.onClick) {
      tab.onClick();
    } else if (tab.route) {
      router.push(tab.route);
    }
  };

  return (
    <div className="flex md:flex-row items-start md:items-center gap-2 md:gap-4 px-4 md:px-0 py-2 w-full">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="text-white hover:text-[#8761FF] flex items-center"
      >
        <ArrowLeft size={20} className="w-5 md:w-6" />
      </button>

      {/* Tabs */}
      <div className="flex gap-2 sm:gap-4 w-full flex-wrap">
        {tabs.map((tab, index) => {
          const isActive = tab.route && pathname.startsWith(tab.route);
          return (
            <button
              key={index}
              onClick={() => handleTabClick(tab)}
              className={`whitespace-nowrap ${
                isActive ? "text-[#8761FF]" : "text-white"
              } text-sm md:text-base font-semibold hover:text-[#8761FF] transition-colors`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
