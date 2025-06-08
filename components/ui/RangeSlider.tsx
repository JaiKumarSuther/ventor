"use client";
import React, { useRef, useEffect } from "react";

interface RangeSliderProps {
  values: number[]; // expected to be [minValue, maxValue]
  onChange: (values: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  minGap?: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  values,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  minGap = 0,
}) => {
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), values[1] - minGap);
    onChange([newMin, values[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), values[0] + minGap);
    onChange([values[0], newMax]);
  };

  useEffect(() => {
    const getPercentage = (value: number) => ((value - min) / (max - min)) * 100;

    const percent1 = getPercentage(values[0]);
    const percent2 = getPercentage(values[1]);

    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #5A43C6 ${percent1}%, #5A43C6 ${percent2}%, #dadae5 ${percent2}%)`;
    }
  }, [values, min, max]);

  return (
    <div className="relative w-full">
      {/* Track */}
      <div className="relative h-1 bg-gray-700 rounded-full mb-6">
        <div
          ref={sliderTrackRef}
          className="absolute h-1 rounded-full"
          style={{ width: "100%" }}
        />
        {/* Min Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[0]}
          onChange={handleMinChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        {/* Max Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[1]}
          onChange={handleMaxChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        {/* Thumbs */}
        <div
          className="absolute w-4 h-4 bg-white border-2 border-[#5A43C6] rounded-full cursor-pointer transform -translate-y-1.5 -translate-x-2"
          style={{ left: `${((values[0] - min) / (max - min)) * 100}%` }}
        />
        <div
          className="absolute w-4 h-4 bg-white border-2 border-[#5A43C6] rounded-full cursor-pointer transform -translate-y-1.5 -translate-x-2"
          style={{ left: `${((values[1] - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
