// components/FooterStatusBar.tsx
"use client";
import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function FooterStatusBar() {
  return (
    <div className="fixed bottom-0 px-10 h-12 w-full bg-[#0A0B0F] border-t border-[#0D0E12] flex justify-between items-center py-2 text-[#B4B4B4] text-xs">
      
      {/* Left */}
      <div className="flex items-center gap-5 text-white">
        <div className="flex items-center gap-2 rounded-full border border-[#22242D] px-3 py-[6px]">
          <div className="flex items-center gap-1">
            <Image src="/assets/wallet.svg" width={16} height={16} alt="wallet" />
            <span>5</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/assets/salona.svg" width={16} height={16} alt="salona" />
            <span>0</span>
          </div>
          <ChevronDown size={16} className="text-[#6A7A8C] cursor-pointer" />
        </div>

        <div className="h-4 border-l border-[#22242D]" />

        <div className="flex items-center gap-1">
          <Image src="/assets/pnl-tracker.svg" width={16} height={16} alt="PnL Tracker" />
          <span>PnL Tracker</span>
        </div>

        <div className="h-4 border-l border-[#22242D]" />

        <div className="flex items-center gap-1">
          <Image src="/assets/salona.svg" width={16} height={16} alt="salona" />
          <span>$312.52</span>
        </div>
      </div>

      {/* Middle */}
      <div className="flex items-center gap-5 text-white">
        {[
          { src: "/assets/chain.svg", label: "$312.52" },
          { src: "/assets/value.svg", label: "$312.52" },
          { src: "/assets/yeild.svg", label: "$312.52" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <Image src={item.src} width={16} height={16} alt={item.label} />
            <span>{item.label}</span>
          </div>
        ))}

        <div className="h-4 border-l border-[#22242D]" />

        <div className="flex items-center gap-2 rounded bg-[#2FD27112] text-[#2FD271] px-2 py-1">
          <div className="w-2 h-2 rounded-full bg-[#2FD271]" />
          <p className="text-xs">Connection is stable</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5 text-white">
        <div className="flex items-center gap-2">
          <Image src="/assets/notification.svg" width={16} height={16} alt="notification" />
          <Image src="/assets/X.svg" width={16} height={16} alt="X" />
          <Image src="/assets/docs.svg" width={16} height={16} alt="docs" />
          <span>Docs</span>
        </div>
      </div>
    </div>
  );
}
