// components/ui/StatsSection.tsx
"use client";
import React from "react";
import StatsCard from "./StatsCard";

interface StatsItem {
  id: number;
  title: string;
  value: string;
  subtitle?: string;
  alreadyClaimed?: string;
}

interface StatsSectionProps {
  stats: StatsItem[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="p-4 md:w-[300px] bg-[#101017] border border-[#22242D] rounded-lg space-y-2 relative">
        {/* Icon and Title */}
        <div className="flex items-center gap-2">
          <h4 className="text-[#B4B4B4] text-sm">Total claimed</h4>
        </div>
        {/* Value */}
        <p className="text-white text-lg font-semibold">1633</p>

        {/* Subtitle */}
      </div>
      <div className="flex flex-wrap justify-start gap-4 sm:gap-6 md:gap-6 w-full max-w-6xl ">
      {stats.map((stat) => (
        <div key={stat.id} className="flex-1 min-w-[250px] md:-w-[300px]">
          <StatsCard
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            alreadyClaimed={stat.alreadyClaimed}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default StatsSection;
