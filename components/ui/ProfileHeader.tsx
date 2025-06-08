"use client";
import React from "react";

interface ProfileHeaderProps {
  score: number;
  nextLevel: string;
}

export default function ProfileHeader({ score, nextLevel }: ProfileHeaderProps) {
  return (
    <div className="space-y-4">
      {/* Score Display */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#8761FF] flex items-center justify-center">
          <span className="text-white font-semibold text-lg">S</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#B4B4B4] text-sm">Score</span>
            <span className="text-white font-semibold">{score} Points</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-[#22242D] rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#5A43C6] to-[#8761FF] h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((score / 100) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Next Level Info */}
      <div className="flex items-center gap-2 text-xs md:text-base">
        <span className="text-[#B4B4B4]">Next Level:</span>
        <span className="text-[#8761FF]">{nextLevel}</span>
        <span className="text-[#B4B4B4]">Silver</span>
      </div>
    </div>
  );
}
