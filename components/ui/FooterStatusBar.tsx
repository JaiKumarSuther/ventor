"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type IconType = "discord" | "X" | "docs" | "docsText";

export default function FooterStatusBar() {
  const [isModalVisible, setModalVisible] = useState<IconType | null>(null);

  const handleMouseEnter = (icon: IconType) => {
    setModalVisible(icon);
  };

  const handleMouseLeave = () => {
    setModalVisible(null);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 sm:h-14 w-full bg-[#0A0B0F] border-t border-[#0D0E12] flex justify-between items-center px-3 sm:px-4 lg:px-10 py-2 sm:py-3 text-[#B4B4B4] text-xs z-50">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 text-white flex-shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#22242D] px-2 sm:px-3 py-1.5 sm:py-2">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/wallet.svg"
              width={14}
              height={14}
              alt="wallet"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            />
            <span className="text-xs sm:text-sm">5</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/salona.svg"
              width={14}
              height={14}
              alt="salona"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            />
            <span className="text-xs sm:text-sm">0</span>
          </div>
          <ChevronDown
            size={14}
            className="text-[#6A7A8C] cursor-pointer w-3.5 h-3.5 sm:w-4 sm:h-4"
          />
        </div>

        {/* Desktop/Tablet separators and additional items */}
        <div className="h-4 border-l border-[#22242D] hidden sm:block" />

        <div className="items-center gap-1 hidden md:flex">
          <Image
            src="/assets/pnl-tracker.svg"
            width={16}
            height={16}
            alt="PnL Tracker"
            className="w-4 h-4"
          />
          <span className="hidden lg:inline text-xs">PnL Tracker</span>
        </div>

        <div className="h-4 border-l border-[#22242D] hidden md:block" />

        <div className="items-center gap-1 hidden lg:flex">
          <Image
            src="/assets/salona.svg"
            width={16}
            height={16}
            alt="salona"
            className="w-4 h-4"
          />
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
              <Image
                src={item.src}
                width={16}
                height={16}
                alt={item.label}
                className="w-4 h-4"
              />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Show only key values on medium screens */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/chain.svg"
              width={16}
              height={16}
              alt="chain"
              className="w-4 h-4"
            />
            <span className="text-xs">$312.52</span>
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-1.5 sm:gap-2 rounded bg-[#10101012] text-[#2FD271] px-2 sm:px-3 py-1.5 sm:py-2">
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
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("discord")}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/assets/discord.svg" // Update this to your discord icon path
              width={16}
              height={16}
              alt="discord"
              className="w-4 h-4 sm:w-5 sm:h-5 invert cursor-pointer"
            />
            {isModalVisible === "discord" && (
              <div className="absolute w-30 bottom-7 left-[-30] bg-black text-white text-xs p-2 rounded">
                Our Discord
              </div>
            )}
          </div>

          <div
            className="relative "
            onMouseEnter={() => handleMouseEnter("X")}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/assets/X.svg"
              width={16}
              height={16}
              alt="X"
              className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hidden sm:inline"
            />
            {isModalVisible === "X" && (
              <div className="absolute w-30 bottom-7 left-[-40] bg-black text-white text-xs p-2 rounded">
                Follow us on X
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:bg-[#ffffff0e] rounded-sm p-2 transition-colors duration-200">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("docs")}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="/assets/docs.svg"
                width={16}
                height={16}
                alt="docs"
                className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hidden md:inline"
              />
              
            </div>

            <span
              className="hidden lg:inline cursor-pointer text-xs"
              onMouseEnter={() => handleMouseEnter("docsText")}
              onMouseLeave={handleMouseLeave}
            >
              Docs
              {isModalVisible === "docsText" && (
                <div className="absolute bottom-10 left-0 bg-black text-white text-xs p-2 rounded">
                  Docs Info
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
