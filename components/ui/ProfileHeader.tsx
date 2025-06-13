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
    <div className="bg-[#101017] border border-[#22242D] rounded-lg p-4 space-y-5">
      {/* Top Section: Score */}
      <div className="flex flex-row items-center gap-4">
        {/* Icon */}
        <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#5A43C6] to-[#8761FF] shrink-0" />

        {/* Score Info */}
        <div className="flex-1 w-full space-y-2">
          {/* Score Label */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#2FD27112] text-[#2FD271] text-xs px-2 py-1 rounded-full">
              Score
            </span>
            <span className="text-white font-semibold text-lg">
              {score} Points
            </span>
          </div>

          {/* Slider Container with Gradient BG */}
          <div className="w-full h-2 rounded-full bg-gradient-to-b from-[#5A43C6] to-[#8761FF]">
            <div
              className="h-2 rounded-full bg-white/30"
              style={{
                width: `${Math.min((score / 100) * 100, 100)}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Info: Progress Messages */}
      <div className="flex flex-col lg:flex-row justify-between gap-3">
        {/* Next Level Info */}
        <div className="flex items-center gap-2 text-xs text-white flex-wrap">
          <Image src="/assets/generate.svg" alt="Generate" width={12} height={12} />
          <span>Next Level: <span className="text-[#8761FF]">{nextLevel}</span></span>
        </div>

        {/* Encouragement Message */}
        <div className="flex items-center gap-2 text-xs text-[#6A7A8C] flex-wrap">
          <Image src="/assets/stars.svg" alt="Stars" width={12} height={12} />
          <span>You are almost there! Trade 20 SOL to reach <span className="text-white">Silver</span></span>
        </div>
      </div>
    </div>
  );
}
