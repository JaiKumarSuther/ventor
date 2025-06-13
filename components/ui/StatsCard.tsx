"use client";
import React from "react";
import Image from "next/image";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  alreadyClaimed?: string; // e.g., "8.5 SOL"
}

const getIconPath = (title: string): string | null => {
  switch (title) {
    case "Referrals":
      return "/assets/referrals.svg";
    case "Volume":
      return "/assets/volume.svg";
    case "Rewards":
      return "/assets/rewards.svg";
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
  const iconPath = getIconPath(title);

  return (
    <div className="p-4 md:w-[300px] bg-[#101017] border border-[#22242D] rounded-lg space-y-2 relative">
      {/* Already Claimed Badge */}
      {alreadyClaimed && (
        <div className="absolute top-2 right-2 bg-[#1A1B20] text-xs text-white px-2 py-1 rounded">
          Already Claimed: {alreadyClaimed}
        </div>
      )}

      {/* Icon and Title */}
      <div className="flex items-center justify-center bg-[#101217] border-[#22242D] gap-2 w-9 h-9 rounded-full border">
        {iconPath && (
          <Image src={iconPath} alt={title} width={20} height={20} />
        )}
      </div>
        <h4 className="text-[#B4B4B4] text-sm">{title}</h4>

      {/* Value */}
      <p className="text-white text-lg font-semibold">{value}</p>

      {/* Subtitle */}
      {subtitle && <p className="text-[#6A7A8C] text-xs">{subtitle}</p>}
    </div>
  );
};

export default StatsCard;
