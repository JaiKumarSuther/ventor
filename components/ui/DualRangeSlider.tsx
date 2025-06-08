"use client";
import React, { useState, useRef, useCallback } from "react";

interface DualRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  initialMinValue?: number;
  initialMaxValue?: number;
  onChange?: (minValue: number, maxValue: number) => void;
  className?: string;
}

const gradient = "linear-gradient(0deg, #5A43C6, #8761FF)";

const DualRangeSlider: React.FC<DualRangeSliderProps> = ({
  min = 0,
  max = 10,
  step = 0.1,
  initialMinValue = 3.8,
  initialMaxValue = 4.4,
  onChange,
  className = "",
}) => {
  const [minValue, setMinValue] = useState(initialMinValue);
  const [maxValue, setMaxValue] = useState(initialMaxValue);
  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getPercentage = (value: number) => ((value - min) / (max - min)) * 100;

  const handleMouseDown = useCallback((thumb: "min" | "max") => {
    setIsDragging(thumb);
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(100, ((event.clientX - rect.left) / rect.width) * 100)
      );
      const newValue = min + (percentage / 100) * (max - min);
      const steppedValue = Math.round(newValue / step) * step;

      if (isDragging === "min") {
        const newMinValue = Math.min(steppedValue, maxValue - step);
        setMinValue(newMinValue);
        onChange?.(newMinValue, maxValue);
      } else if (isDragging === "max") {
        const newMaxValue = Math.max(steppedValue, minValue + step);
        setMaxValue(newMaxValue);
        onChange?.(minValue, newMaxValue);
      }
    },
    [isDragging, min, max, step, minValue, maxValue, onChange]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const minPercentage = getPercentage(minValue);
  const maxPercentage = getPercentage(maxValue);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Value labels above thumbs */}
      <div className="relative mb-4">
        <div
          className="absolute text-lg text-[#8761FF] font-semibold transform -translate-x-1/2 -translate-y-full"
          style={{
            left: `${minPercentage}%`,
            marginTop: "-12px", // moves it a bit higher
          }}
        >
          {minValue.toFixed(1)}
        </div>
        <div
          className="absolute text-lg text-[#8761FF] font-semibold transform -translate-x-1/2 -translate-y-full"
          style={{
            left: `${maxPercentage}%`,
            marginTop: "-12px", // moves it a bit higher
          }}
        >
          {maxValue.toFixed(1)}
        </div>
      </div>

      {/* Track */}
      <div
        ref={sliderRef}
        className="relative h-1 rounded-full"
        style={{ background: "#22242D" }}
      >
        {/* Active range */}
        <div
          className="absolute h-1 rounded-full"
          style={{
            left: `${minPercentage}%`,
            width: `${maxPercentage - minPercentage}%`,
            background: gradient,
          }}
        />

        {/* Min thumb */}
        <div
          className="absolute w-6 h-6 border-4 rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 top-1/2 transition-transform shadow-lg"
          style={{
            left: `${minPercentage}%`,
            background: "#22242D",
            borderColor: "#8761FF",
          }}
          onMouseDown={() => handleMouseDown("min")}
        />

        {/* Max thumb */}
        <div
          className="absolute w-6 h-6 border-4 rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 top-1/2 transition-transform shadow-lg"
          style={{
            left: `${maxPercentage}%`,
            background: "#22242D",
            borderColor: "#8761FF",
          }}
          onMouseDown={() => handleMouseDown("max")}
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
