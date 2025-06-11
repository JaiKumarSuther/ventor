"use client";
import React from "react";
import Image from "next/image";

interface ProfileHeaderProps {
  score: number;
  nextLevel: string;
}

export default function ProfileHeader({
  score,
  nextLevel,
}: ProfileHeaderProps) {
  return (
    <div className="bg-[#101017] border border-[#22242D] rounded-lg p-4 space-y-4">
      {/* Score Row */}
      <div className="flex items-center gap-4">
        {/* Score Icon */}
        <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#5A43C6] to-[#8761FF]"></div>

        {/* Score Text and Progress */}
        <div className="flex-1 flex flex-col justify-between h-12">
          <div className="flex items-center gap-2">
            <span className="bg-[#2FD27112] text-[#2FD271] text-xs px-2 py-1 rounded-full">
              Score
            </span>
            <span className="text-white font-semibold text-lg">
              {score} Points
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gradient-to-r from-[#5A43C6] to-[#8761FF] rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#5A43C6] to-[#8761FF] h-2 rounded-full"
              style={{ width: `${Math.min((score / 100) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Next Level Info */}
      <div className="flex justify-between gap-4">
        {/* Left Side: Next Level */}
        <div className="flex items-center gap-2 text-xs text-white">
          <Image
            src="/assets/generate.svg" // Replace with the correct path to your generate.svg
            alt="Generate"
            width={12}
            height={12}
          />
          <span className="flex gap-1">
            Next Level:
            <span className="text-[#8761FF]">{nextLevel}</span>
          </span>
        </div>

        {/* Right Side: Progress Message */}
        <div className="flex items-center gap-2 text-xs text-white">
          <Image
            src="/assets/stars.svg" // Replace with the correct path to your stars.svg
            alt="Stars"
            width={12}
            height={12}
          />
          <span className="flex gap-1 text-[#6A7A8C]">
            You are almost there! Trade 20 SOL to reach
            <span className="text-white">Silver</span>
          </span>
        </div>
      </div>
    </div>
  );
}
