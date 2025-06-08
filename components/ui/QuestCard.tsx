"use client";
import React from "react";

interface QuestCardProps {
  title: string;
  description: string;
  progress: number;
  target: number;
  status: "complete" | "incomplete";
}

export default function QuestCard({ 
  title, 
  description, 
  progress, 
  target, 
  status 
}: QuestCardProps) {
  const progressPercentage = Math.min((progress / target) * 100, 100);
  
  return (
    <div className="p-4 bg-[#101017] border border-[#22242D] rounded-lg space-y-4">
      {/* Quest Info */}
      <div className="space-y-2">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-[#B4B4B4] text-sm">{description}</p>
      </div>
      
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="w-full bg-[#22242D] rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-[#5A43C6] to-[#8761FF] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        {/* Progress Text */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#B4B4B4]">
            {status === "complete" ? "Done" : `${progress} ${target === 2 ? "people" : target === 3 ? "volume" : "PNL"}`}:
          </span>
          <span className="text-[#B4B4B4]">
            {progress} {target === 2 ? "people" : target === 3 ? "volume" : "PNL"} to complete this quest.
          </span>
        </div>
      </div>
    </div>
  );
}
