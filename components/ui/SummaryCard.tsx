"use client";
import React from "react";

interface SummaryCardProps {
  icon?: React.ReactNode;
  title: string;
  value: string;
}

export default function SummaryCard({ icon, title, value }: SummaryCardProps) {
  return (
    <div className="flex-1 flex flex-col justify-between p-5 rounded-lg bg-[#101017] border border-[#22242D] h-[180px] ">
      {/* Icon Section */}
      <div className="flex items-center justify-center w-13 h-13 rounded-md border border-[#FFFFFF12] bg-[#1A1B20]">
        {icon}
      </div>

      {/* Text Section */}
      <div>
        <p className="text-sm text-[#6A7A8C]">{title}</p>
        <h2 className="text-[25px] font-[500] text-white">{value}</h2>
      </div>
    </div>
  );
}
