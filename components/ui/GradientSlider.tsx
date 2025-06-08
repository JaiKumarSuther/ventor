"use client";
import React from "react";

interface GradientSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const GradientSlider: React.FC<GradientSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 0.1,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative w-full">
      {/* Track */}
      <div className="relative h-1 bg-gray-700 rounded-full">
        <div
          className="absolute h-1 bg-gradient-to-r from-[#5A43C6] to-[#8761FF] rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {/* Input Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-4 bg-transparent appearance-none cursor-pointer"
        style={{
          WebkitAppearance: "none",
        }}
      />
      {/* Style the thumb */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 1rem;
          width: 1rem;
          background: white;
          border: 2px solid #5A43C6;
          border-radius: 50%;
          cursor: grab;
          margin-top: -0.35rem;
        }
        input[type="range"]::-moz-range-thumb {
          height: 1rem;
          width: 1rem;
          background: white;
          border: 2px solid #5A43C6;
          border-radius: 50%;
          cursor: grab;
        }
      `}</style>
    </div>
  );
};

export default GradientSlider;
