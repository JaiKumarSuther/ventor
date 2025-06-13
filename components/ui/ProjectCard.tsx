"use client";
import React from "react";
import StatusBadge from "./StatusBadge";
import { EllipsisVertical } from "lucide-react";

interface ProjectCardProps {
  title: string;
  pnl: string;
  projectId: string;
  status: "Launched" | "Not Launched";
  onClick?: () => void; // ✅ Add onClick prop
}

export default function ProjectCard({
  title,
  pnl,
  projectId,
  status,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick} // ✅ Apply onClick here
      className="flex flex-col gap-2 justify-between rounded-lg border border-[#22242D] bg-[#101017] p-4 cursor-pointer hover:border-[#8761FF] transition-all"
    >
      {/* Top section with optional icon */}
      <div className="flex justify-between items-start">
        <div className="flex items-center justify-center w-13 h-13 rounded-md border border-[#FFFFFF12] bg-[#1A1B20]" />
        <EllipsisVertical color="#929292" className="cursor-pointer" />
      </div>

      <div className="flex flex-col">
        <h3 className="text-white font-semibold text-xl">
          {title} <span className="text-xs text-[#B4B4B4]">SOL</span>
        </h3>
      </div>

      {/* PNL and ID */}
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex justify-between">
          <span className="text-[#B4B4B4] text-sm">PNL</span>
          <span className="text-[#B4B4B4] text-sm">{pnl}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#B4B4B4] text-sm">Project ID</span>
          <span className="text-[#B4B4B4] text-sm">{projectId}</span>
        </div>
      </div>

      {/* Status */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-[#B4B4B4] text-sm">Project Status</span>
        <StatusBadge status={status} />
      </div>
    </div>
  );
}
