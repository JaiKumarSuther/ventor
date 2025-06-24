"use client";

import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function BubbleMapChart() {
  const chartRef = useRef<ChartJS<"bar", number[], unknown> | null>(null);

  const [gradient, setGradient] = useState<string | CanvasGradient>(
    "rgba(138, 92, 255, 0.8)"
  );

  useEffect(() => {
    const chart = chartRef.current;
    if (chart && chart.canvas) {
      const ctx = chart.canvas.getContext("2d");
      // Ensure ctx is not null before using it
      if (ctx) {
        const gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
        gradientFill.addColorStop(0, "#5A43C6");
        gradientFill.addColorStop(1, "#8761FF");
        setGradient(gradientFill);
      }
    }
  }, []);

  const data: ChartData<"bar"> = {
    labels: [
      "Treasury",
      "Market",
      "Dev",
      "Sniper",
      "Team",
      "Air Drop",
      "LP",
      "Other",
    ],
    datasets: [
      {
        label: "Tokens",
        data: [40, 20, 85, 50, 40, 60, 30, 25],
        backgroundColor: gradient,
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: "#6A7A8C" },
        grid: { color: "#22242D" },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "#6A7A8C",
          callback: function (tickValue: string | number) {
            return `${tickValue}`;
          },
        },
        grid: { color: "#22242D" },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0D0E12",
        titleColor: "#FFFFFF",
        bodyColor: "#8761FF",
        borderColor: "#22242D",
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="h-96 bg-[#0D0E12] rounded-2xl p-5 border border-[#22242D]">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
}
