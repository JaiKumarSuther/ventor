"use client";
import React, { useState, useRef, useCallback } from "react";

interface SingleRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
  className?: string;
}

const gradient = "linear-gradient(0deg, #5A43C6, #8761FF)";

const SingleRangeSlider: React.FC<SingleRangeSliderProps> = ({
  min = 0,
  max = 10,
  step = 0.1,
  initialValue = 5,
  onChange,
  className = "",
}) => {
  const [value, setValue] = useState(initialValue);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
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

      setValue(steppedValue);
      onChange?.(steppedValue);
    },
    [isDragging, min, max, step, onChange]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
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

  const percentage = getPercentage(value);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Value label above thumb */}
      <div className="relative mb-2">
        <div
          className="absolute text-lg text-[#8761FF] font-semibold transform -translate-x-1/2 -translate-y-full"
          style={{
            left: `${percentage}%`,
            marginTop: "-8px", // moves it a bit higher
          }}
        >
          {value.toFixed(1)}
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
            width: `${percentage}%`,
            background: gradient,
          }}
        />

        {/* Thumb */}
        <div
          className="absolute w-6 h-6 border-4 rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 top-1/2 transition-transform shadow-lg"
          style={{
            left: `${percentage}%`,
            background: "#22242D",
            borderColor: "#8761FF",
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
};

export default SingleRangeSlider;
