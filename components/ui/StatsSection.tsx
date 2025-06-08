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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatsCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          alreadyClaimed={stat.alreadyClaimed}
        />
      ))}
    </div>
  );
};

export default StatsSection;
