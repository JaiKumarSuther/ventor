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
  onStepClick: (stepNumber: number) => void;
  hideSteps?: number[]; // Optional: steps to hide if needed
}

export default function StepIndicator({
  steps,
  currentStep,
  onStepClick,
  hideSteps = [],
}: StepIndicatorProps) {
  return (
    <div className="flex items-start justify-between mb-4 gap-2">
      {steps
        .filter((step) => !hideSteps.includes(step.number)) // Optional: skip hidden steps
        .map((step) => (
          <div
            key={step.number}
            className="flex-1"
            onClick={() => onStepClick(step.number)}
            style={{ cursor: "pointer" }}
          >
            {/* Top progress bar */}
            <div
              className={`mb-2 rounded-full ${
                step.number <= currentStep
                  ? "bg-gradient-to-b from-[#5A43C6] to-[#8761FF]"
                  : "bg-[#22242D]"
              } hover:scale-105`}
              style={{
                height: "4px",
                borderRadius: "2px",
                transition: "transform 0.3s ease",
              }}
            />

            {/* Step label and subtitle */}
            <div className="flex flex-col items-start">
              {/* Title */}
              <span
                className={`text-sm font-semibold ${
                  step.number === currentStep
                    ? "bg-gradient-to-b from-[#5A43C6] to-[#8761FF] bg-clip-text text-transparent"
                    : "text-[#798388]"
                } hidden md:block`}
              >
                {step.title}
              </span>

              {/* Subtitle - always visible */}
              <span
                className={`text-xs ${
                  step.number === currentStep
                    ? "bg-gradient-to-b from-[#5A43C6] to-[#8761FF] bg-clip-text text-transparent"
                    : "text-[#798388]"
                } block`}
              >
                {step.subtitle}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
