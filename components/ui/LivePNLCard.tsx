import React from "react";

interface LivePNLCardProps {
  value: string;
}

export default function LivePNLCard({ value }: LivePNLCardProps) {
  return (
    <div className="p-4 rounded-lg bg-[#101017] border border-[#22242D]">
      <p className="text-[#B4B4B4] text-sm">Live PNL</p>
      <h2 className="text-2xl font-semibold text-green-500">{value}</h2>
    </div>
  );
}
