"use client";
import React from "react";
import Image from "next/image";

interface MatrixCardProps {
  icon: string; // path to image, e.g., "/assets/live-pnl.svg"
  label: string;
  value: string;
}

export default function MatrixCard({ icon, label, value }: MatrixCardProps) {
  return (
    <div className="flex-1 flex flex-col justify-between p-4 rounded-lg bg-[#0D0E12] border border-[#161616] gap-2">
      {/* Icon Section */}
      <div className="flex items-center justify-center w-13 h-13 rounded-md border border-[#FFFFFF12] bg-[#FFFFFF05]">
        <Image src={icon} alt={label} width={24} height={24} />
      </div>

      {/* Text Section */}
      <div>
        <p className="text-xl text-white">{label}</p>
        <h2 className="text-sm font-[500] text-[#8761FF] mt-2">{value}</h2>
      </div>
    </div>
  );
}
