"use client";
import React, { useState, useRef, useEffect } from "react";
import StatusBadge from "./StatusBadge";
import { EllipsisVertical } from "lucide-react";

interface ProjectCardProps {
  title: string;
  pnl: string;
  projectId: string;
  status: "Launched" | "Not Launched";
  onClick?: () => void;
  onDoubleClick?: () => void;
  onMoreClick?: () => void;
}

export default function ProjectCard({
  title,
  pnl,
  projectId,
  status,
  onClick,
  onDoubleClick,
  onMoreClick,
}: ProjectCardProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Hide dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className="relative flex flex-col gap-2 justify-between rounded-lg border border-[#22242D] bg-[#101017] p-4 cursor-pointer hover:border-[#8761FF] transition-all"
    >
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div className="flex items-center justify-center w-13 h-13 rounded-md border border-[#FFFFFF12] bg-[#1A1B20]" />
        <div className="relative" ref={dropdownRef}>
          <EllipsisVertical
            color="#929292"
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // prevent card click
              setShowDropdown((prev) => !prev);
            }}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-[#1A1B20] border border-[#333] shadow-lg z-50">
              <button
                className="w-full cursor-pointer text-left text-sm text-white px-4 py-2 hover:bg-[#2a2b30]"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(false);
                  onMoreClick?.();
                }}
              >
                Open The Project
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-col">
        <h3 className="text-white font-semibold text-xl">
          {title} <span className="text-xs text-[#B4B4B4]">SOL</span>
        </h3>
      </div>

      {/* PNL & ID */}
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
