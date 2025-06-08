"use client";
import React from "react";
import GradientButton from "./GradientButton";

interface ActionButtonsProps {
  onFirstAction?: () => void;
  onSecondAction?: () => void;
  firstLabel?: string;
  secondLabel?: string;
  secondGradient?: string;
  secondHoverGradient?: string;
  width?: string;   // Optional width (e.g., '25%' or '100px')
  height?: string;  // Optional height (e.g., '40px')
}

export default function DashboardActions({
  onFirstAction,
  onSecondAction,
  firstLabel = "Cancel",
  secondLabel = "Save",
  secondGradient = "linear-gradient(0deg, #5A43C6, #8761FF)",
  secondHoverGradient = "linear-gradient(0deg, #4A36B0, #765FE0)",
  width = "100px",       // default width
  height = "40px",       // default height
}: ActionButtonsProps) {
  return (
    <div className="flex gap-4">
      <button
        className={`rounded-full cursor-pointer border border-[#7458E7] text-[#7458E7] hover:bg-[#8761FF]/10`}
        onClick={onFirstAction}
        style={{ width, height }}
      >
        {firstLabel}
      </button>
      <GradientButton
        label={secondLabel}
        onClick={onSecondAction}
        gradient={secondGradient}
        hoverGradient={secondHoverGradient}
        className="rounded-full"
        style={{ width, height }}
      />
    </div>
  );
}
