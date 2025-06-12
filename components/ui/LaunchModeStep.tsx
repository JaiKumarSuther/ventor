"use client";
import React from "react";
import RoundedGradientCheckbox from "@/components/ui/RoundedGradientCheckbox";
import DashboardActions from "@/components/ui/DashboardActions";
import Image from "next/image";

interface LaunchModeStepProps {
  data: { launchMode?: string };
  updateData: (data: Partial<{ launchMode: string }>) => void;
  onNext: () => void;
  onCancel: () => void;
}

const LaunchModeStep: React.FC<LaunchModeStepProps> = ({
  data,
  updateData,
  onNext,
  onCancel,
}) => {
  const handleFundingMethodChange = (mode: "launch-snipe" | "bundle-snipe") => {
    updateData({ launchMode: mode });
  };

  return (
    <div className="flex flex-col justify-between min-h-[600px] space-y-6">
      {/* Launch Options */}
      <div className="space-y-4">
        {/* Launch + Snipe Option */}
        <div
          className="flex items-center justify-between gap-4 rounded-md p-4 cursor-pointer hover:bg-[#101217] flex-wrap sm:flex-nowrap"
          onClick={() => handleFundingMethodChange("launch-snipe")}
        >
          {/* Icon */}
          <div className="flex justify-center items-center bg-[#101217] border border-[#22242D] rounded-sm w-11 h-11 shrink-0">
            <Image
              src="/assets/refresh.svg"
              width={20}
              height={20}
              alt="Refresh"
            />
          </div>

          {/* Description */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm mb-1">
              Launch + Snipe
            </h3>
            <p className="text-[#6A7A8C] text-sm break-words">
              Combines launch with real-time snipe detection and auto-adjusts distribution to avoid front-running and bot activity.
            </p>
          </div>

          {/* Checkbox */}
          <RoundedGradientCheckbox
            checked={data.launchMode === "launch-snipe"}
            onChange={() => handleFundingMethodChange("launch-snipe")}
          />
        </div>

        {/* Launch + Bundle + Snipe Option */}
        <div
          className="flex items-center justify-between gap-4 rounded-md p-4 cursor-pointer hover:bg-[#101217] flex-wrap sm:flex-nowrap"
          onClick={() => handleFundingMethodChange("bundle-snipe")}
        >
          {/* Icon */}
          <div className="flex justify-center items-center bg-[#101217] border border-[#22242D] rounded-sm w-11 h-11 shrink-0">
            <Image
              src="/assets/refresh.svg"
              width={20}
              height={20}
              alt="Refresh"
            />
          </div>

          {/* Description */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm mb-1">
              Launch + Bundle + Snipe
            </h3>
            <p className="text-[#6A7A8C] text-sm break-words">
              Launches the project and sends token batches to different wallets in one seamless flow. Reduces transaction costs and speeds up distribution.
            </p>
          </div>

          {/* Checkbox */}
          <RoundedGradientCheckbox
            checked={data.launchMode === "bundle-snipe"}
            onChange={() => handleFundingMethodChange("bundle-snipe")}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end pt-6">
        <DashboardActions
          onFirstAction={onCancel}
          onSecondAction={onNext}
          firstLabel="Cancel"
          secondLabel="Next"
        />
      </div>
    </div>
  );
};

export default LaunchModeStep;
