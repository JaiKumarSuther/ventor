"use client";
import React, { useState } from "react";
import Image from "next/image";
import RoundedGradientCheckbox from "@/components/ui/RoundedGradientCheckbox";
import DashboardActions from "@/components/ui/DashboardActions";
import CustomToggleSwitch from "./CustomToggleSwitch";

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
  const [smartSellEnabled, setSmartSellEnabled] = useState(false);

  const handleFundingMethodChange = (
    mode: "launch-dev" | "launch-snipe" | "bundle-snipe"
  ) => {
    updateData({ launchMode: mode });
  };

  return (
    <div className="flex flex-col justify-between min-h-[600px] space-y-6">
      <div className="space-y-4">
        {/* Launch Only Dev */}
        <div
          className="flex  justify-between gap-4 rounded-md p-4 cursor-pointer hover:bg-[#101217] flex-wrap sm:flex-nowrap"
          onClick={() => handleFundingMethodChange("launch-dev")}
        >
          <div className="flex justify-center  bg-[#101217] border border-[#22242D] rounded-sm w-11 h-11 shrink-0">
            <Image
              src="/assets/refresh.svg"
              width={20}
              height={20}
              alt="Refresh"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm mb-1">
              Launch Only Dev
            </h3>
            <p className="text-[#6A7A8C] text-sm break-words">
              Launch with real-time snipe detection.
            </p>
          </div>
          <div className="flex items-start md:items-center">
            <RoundedGradientCheckbox
            checked={data.launchMode === "launch-dev"}
            onChange={() => handleFundingMethodChange("launch-dev")}
          />
          </div>
        </div>

        {/* Launch + Snipe */}
        <div
          className="flex justify-between gap-4 rounded-md p-4 cursor-pointer hover:bg-[#101217] flex-wrap sm:flex-nowrap"
          onClick={() => handleFundingMethodChange("launch-snipe")}
        >
          <div className="flex justify-center  bg-[#101217] border border-[#22242D] rounded-sm w-11 h-11 shrink-0">
            <Image
              src="/assets/refresh.svg"
              width={20}
              height={20}
              alt="Refresh"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm mb-1">
              Launch + Snipe
            </h3>
            <p className="text-[#6A7A8C] text-sm break-words">
              Combines launch with real-time snipe detection and auto-adjusts
              distribution to avoid front-running and bot activity.
            </p>
          </div>
          <div className="flex items-start md:items-center">
            <RoundedGradientCheckbox
            checked={data.launchMode === "launch-snipe"}
            onChange={() => handleFundingMethodChange("launch-snipe")}
          />
          </div>
        </div>

        {/* Launch + Bundle + Snipe */}
        <div
          className="flex  justify-between gap-4 rounded-md p-4 cursor-pointer hover:bg-[#101217] flex-wrap sm:flex-nowrap"
          onClick={() => handleFundingMethodChange("bundle-snipe")}
        >
          <div className="flex justify-center  bg-[#101217] border border-[#22242D] rounded-sm w-11 h-11 shrink-0">
            <Image
              src="/assets/refresh.svg"
              width={20}
              height={20}
              alt="Refresh"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm mb-1">
              Launch + Bundle + Snipe
            </h3>
            <p className="text-[#6A7A8C] text-sm break-words">
              Launches the project and sends token batches to different wallets
              in one seamless flow. Reduces transaction costs and speeds up
              distribution.
            </p>
          </div>
          <div className="flex items-start md:items-center">
            <RoundedGradientCheckbox
            checked={data.launchMode === "bundle-snipe"}
            onChange={() => handleFundingMethodChange("bundle-snipe")}
          />
          </div>
        </div>

        {/* Risk Mode */}
        <div
          className="flex mt-30  justify-between gap-4 rounded-md p-4 cursor-pointer hover:bg-[#101217] flex-wrap sm:flex-nowrap"
          onClick={() => handleFundingMethodChange("bundle-snipe")}
        >
          <div className="flex justify-center  bg-[#101217] border border-[#22242D] rounded-sm w-11 h-11 shrink-0">
            <Image
              src="/assets/refresh.svg"
              width={20}
              height={20}
              alt="Refresh"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-sm mb-1">Risk Mode</h3>{" "}
            <p className="text-[#6A7A8C] text-sm break-words">
              Enable aggressive automation settings with reduced safety checks.
              Use with caution.
            </p>
          </div>
          <CustomToggleSwitch
            id="Risk Mode"
            checked={smartSellEnabled}
            onChange={() => setSmartSellEnabled(!smartSellEnabled)}
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
