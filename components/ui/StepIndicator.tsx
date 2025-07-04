"use client";
import React from "react";

interface Step {
  number: number;
  title: string;
  subtitle: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepNumber: number) => void; // Add a callback for step click
}

export default function StepIndicator({
  steps,
  currentStep,
  onStepClick,
}: StepIndicatorProps) {
  return (
    <div className="flex items-start justify-between mb-4 gap-2">
      {steps.map((step) => (
        <div
          key={step.number}
          className="flex-1"
          onClick={() => onStepClick(step.number)} // Handle click to go to the step
          style={{ cursor: "pointer" }}
        >
          {/* Top Bar with scaling on hover */}
          <div
            className={`mb-2 rounded-full ${
              step.number <= currentStep
                ? "bg-gradient-to-b from-[#5A43C6] to-[#8761FF]"
                : "bg-[#22242D]"
            } hover:scale-105`} // Apply scaling on hover to the line
            style={{
              height: "4px",
              borderRadius: "2px",
              transition: "transform 0.3s ease", // Smooth transition for scaling
            }}
          />

          {/* Text Section */}
          <div className="flex flex-col items-start">
            {/* Title */}
            <span
              className={`text-sm font-semibold ${
                step.number === currentStep
                  ? "bg-gradient-to-b from-[#5A43C6] to-[#8761FF] bg-clip-text text-transparent hidden md:block"
                  : "text-[#798388] hidden md:block"
              }`}
            >
              {step.title}
            </span>

            {/* Subtitle */}
            <span
              className={`text-xs ${
                step.number === currentStep
                  ? "bg-gradient-to-b from-[#5A43C6] to-[#8761FF] bg-clip-text text-transparent"
                  : "text-[#798388]"
              }`}
            >
              {step.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
