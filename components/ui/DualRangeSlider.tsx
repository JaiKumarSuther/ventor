"use client";
import React, { useState, useRef, useCallback } from "react";

interface DualRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  initialMinValue?: number;
  initialMaxValue?: number;
  average?: number; // 👈 New average prop
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

  const handleStart = useCallback((thumb: "min" | "max") => {
    setIsDragging(thumb);
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(100, ((clientX - rect.left) / rect.width) * 100)
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

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      handleMove(event.clientX);
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length > 0) {
        handleMove(event.touches[0].clientX);
      }
    },
    [handleMove]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(null);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      // Mouse events
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);

      // Touch events
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleEnd);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleEnd);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  const minPercentage = getPercentage(minValue);
  const maxPercentage = getPercentage(maxValue);
  const averageValue = (minValue + maxValue) / 2;
  const averagePercentage = getPercentage(averageValue);
  return (
    <div className={`relative w-full ${className}`}>
      {/* Value labels above thumbs and average */}
      <div className="relative mb-4">
        <div
          className="absolute text-lg text-[#8761FF] font-semibold transform -translate-x-1/2 -translate-y-full"
          style={{ left: `${minPercentage}%`, marginTop: "-12px" }}
        >
          {minValue.toFixed(1)}
        </div>
        <div
          className="absolute text-lg text-[#8761FF] font-semibold transform -translate-x-1/2 -translate-y-full"
          style={{ left: `${maxPercentage}%`, marginTop: "-12px" }}
        >
          {maxValue.toFixed(1)}
        </div>
        {averagePercentage !== null && (
          <>
            {/* Average label */}
            <div
              className="absolute text-lg text-[#BD402F] font-semibold transform -translate-x-1/2 -translate-y-full"
              style={{ left: `${averagePercentage}%`, marginTop: "-12px" }}
            >
              {averageValue.toFixed(1)}
            </div>

            {/* Thicker vertical average marker */}
            <div
              className="absolute bg-[#BD402F] top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${averagePercentage}%`,
                width: "4px",
                height: "20px",
              }}
            />
          </>
        )}
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
          className="absolute w-6 h-6 border-4 rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 top-1/2 transition-transform shadow-lg touch-none"
          style={{
            left: `${minPercentage}%`,
            background: "#22242D",
            borderColor: "#8761FF",
          }}
          onMouseDown={() => handleStart("min")}
          onTouchStart={() => handleStart("min")}
        />

        {/* Max thumb */}
        <div
          className="absolute w-6 h-6 border-4 rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 top-1/2 transition-transform shadow-lg touch-none"
          style={{
            left: `${maxPercentage}%`,
            background: "#22242D",
            borderColor: "#8761FF",
          }}
          onMouseDown={() => handleStart("max")}
          onTouchStart={() => handleStart("max")}
        />

        {/* Average marker */}
        {averagePercentage !== null && (
          <div
            className="absolute w-0.5 h-4 bg-red-500 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${averagePercentage}%` }}
          />
        )}
      </div>
    </div>
  );
};

export default DualRangeSlider;
