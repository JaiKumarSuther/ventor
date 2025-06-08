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
}

export default function StepIndicator({
  steps,
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="flex items-start justify-between mb-8 gap-2">
      {steps.map((step) => (
        <div key={step.number} className="flex-1">
          {/* Top Bar */}
          <div
            className={`mb-2 rounded-full ${
              step.number <= currentStep
                ? "bg-gradient-to-b from-[#5A43C6] to-[#8761FF]"
                : "bg-[#22242D] "
            }`}
            style={{
              height: "4px",
              borderRadius: "2px",
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
                  : "text-[#798388] "
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
