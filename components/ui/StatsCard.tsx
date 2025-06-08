// components/ui/StatsCard.tsx
"use client";
import React from "react";
import { User, BarChart2, Gift, DollarSign } from "lucide-react"; // Import icons from Lucide

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  alreadyClaimed?: string; // e.g., "8.5 SOL"
}

const getIcon = (title: string) => {
  switch (title) {
    case "Total claimed":
      return <DollarSign size={20} className="text-[#8761FF]" />;
    case "Referrals":
      return <User size={20} className="text-[#8761FF]" />;
    case "Volume":
      return <BarChart2 size={20} className="text-[#8761FF]" />;
    case "Rewards":
      return <Gift size={20} className="text-[#8761FF]" />;
    default:
      return null;
  }
};

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  alreadyClaimed,
}) => {
  return (
    <div className="p-4 bg-[#101017] border border-[#22242D] rounded-lg space-y-2 relative">
      {/* Already Claimed Badge */}
      {alreadyClaimed && (
        <div className="absolute top-2 right-2 bg-[#1A1B20] text-xs text-white px-2 py-1 rounded">
          Already Claimed: {alreadyClaimed}
        </div>
      )}

      {/* Icon and Title */}
      <div className="flex items-center gap-2">
        {getIcon(title)}
        <h4 className="text-[#B4B4B4] text-sm">{title}</h4>
      </div>

      {/* Value */}
      <p className="text-white text-lg font-semibold">{value}</p>

      {/* Subtitle */}
      {subtitle && <p className="text-[#6A7A8C] text-xs">{subtitle}</p>}
    </div>
  );
};

export default StatsCard;
