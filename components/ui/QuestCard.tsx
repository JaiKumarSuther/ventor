"use client";
import React from "react";
import Image from "next/image"; // Importing Image component

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
  status,
}: QuestCardProps) {
  const progressPercentage = Math.min((progress / target) * 100, 100);

  return (
    <div className="p-5 bg-[#101017] border border-[#22242D] rounded-lg space-y-5 relative">
      {/* Top Row: Badge and Title */}
      <div className="flex justify-between items-center">
        {/* Quests Badge */}
        <div className="flex gap-2">
          <span className="bg-[#2FD27112] text-[#2FD271] text-xs px-4 py-1 rounded-full font-medium">
            Quests
          </span>
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        {/* Check Icon if complete */}
        {status === "complete" && (
          <div className="flex w-6 h-6 rounded-full justify-center items-center bg-[#2FD27112]">
            <Image
              src="/assets/tick.svg" // Replace with the correct path to your tick.svg
              alt="Complete"
              width={12}
              height={12}
            />
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="space-y-3">
        <div className="w-full bg-[#22242D] rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[#5A43C6] to-[#8761FF] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Progress Text with Icon */}
        <div className="flex items-center gap-2 text-xs text-[#B4B4B4]">
          <Image
            src="/assets/generate.svg" // Replace with the correct path to your generate.svg
            alt="Generate"
            width={12}
            height={12}
          />
          {status === "complete" ? (
            <div className="flex gap-2">
              <span className="text-white">Done</span>
              <h3 className="text-[#8761FF]">{description}</h3>
            </div>
          ) : (
            <span>
              Generate {target}{" "}
              {target === 2 ? "people" : target === 3 ? "volume" : "PNL"} to
              complete this quest.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
