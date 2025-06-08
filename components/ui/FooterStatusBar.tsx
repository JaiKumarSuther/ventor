import React from "react";
import { ChevronDown } from "lucide-react";

export default function FooterStatusBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 sm:h-14 w-full bg-[#0A0B0F] border-t border-[#0D0E12] flex justify-between items-center px-3 sm:px-4 lg:px-10 py-2 sm:py-3 text-[#B4B4B4] text-xs z-50">
      
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 text-white flex-shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#22242D] px-2 sm:px-3 py-1.5 sm:py-2">
          <div className="flex items-center gap-1">
            <img src="/assets/wallet.svg" width={14} height={14} alt="wallet" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">5</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assets/salona.svg" width={14} height={14} alt="salona" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">0</span>
          </div>
          <ChevronDown size={14} className="text-[#6A7A8C] cursor-pointer w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>

        {/* Desktop/Tablet separators and additional items */}
        <div className="h-4 border-l border-[#22242D] hidden sm:block" />

        <div className="flex items-center gap-1 hidden md:flex">
          <img src="/assets/pnl-tracker.svg" width={16} height={16} alt="PnL Tracker" className="w-4 h-4" />
          <span className="hidden lg:inline text-xs">PnL Tracker</span>
        </div>

        <div className="h-4 border-l border-[#22242D] hidden md:block" />

        <div className="flex items-center gap-1 hidden lg:flex">
          <img src="/assets/salona.svg" width={16} height={16} alt="salona" className="w-4 h-4" />
          <span className="text-xs">$312.52</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 text-white flex-1 justify-center min-w-0">
        {/* Values - Show only on larger screens */}
        <div className="hidden lg:flex items-center gap-5">
          {[
            { src: "/assets/chain.svg", label: "$312.52" },
            { src: "/assets/value.svg", label: "$312.52" },
            { src: "/assets/yeild.svg", label: "$312.52" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <img src={item.src} width={16} height={16} alt={item.label} className="w-4 h-4" />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Show only key values on medium screens */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <div className="flex items-center gap-1">
            <img src="/assets/chain.svg" width={16} height={16} alt="chain" className="w-4 h-4" />
            <span className="text-xs">$312.52</span>
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-1.5 sm:gap-2 rounded bg-[#2FD27112] text-[#2FD271] px-2 sm:px-3 py-1.5 sm:py-2">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#2FD271] flex-shrink-0" />
          <p className="text-xs sm:text-sm whitespace-nowrap">
            <span className="hidden sm:inline">Connection is stable</span>
            <span className="sm:hidden">Online</span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 text-white flex-shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <img src="/assets/notification.svg" width={16} height={16} alt="notification" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
          <img src="/assets/X.svg" width={16} height={16} alt="X" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hidden sm:inline" />
          <img src="/assets/docs.svg" width={16} height={16} alt="docs" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hidden md:inline" />
          <span className="hidden lg:inline cursor-pointer text-xs">Docs</span>
        </div>
      </div>
    </div>
  );
}
