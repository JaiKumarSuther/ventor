"use client";

import GradientButton from "@/components/ui/GradientButton";
import Image from "next/image";
import React from "react";

export default function SmartSell() {
  const statusCards = [
    { label: "Smart Cell Status", value: "OFF" },
    { label: "Whitelisted Wallets", value: "6" },
    { label: "Sell % on Buy", value: "1.00%" },
    { label: "Stop if Holding <", value: "1.00%" },
    { label: "Min SOL to Activate", value: "0.5000 SOL" },
    { label: "Min MCAP to Activate", value: "$1.00" },
  ];

  const requirements = [
    { label: "Token Deployed", met: false },
    { label: "Min SOL Set", met: true },
    { label: "Min MCAP Set", met: true },
    { label: "Set % Configured", met: true },
    { label: "Stop Holding % Set", met: true },
    { label: "Wallets Whitelisted", met: true },
  ];

  const configButtons = [
    "Wallets Whitelisted",
    "Smart Sell % on Buy",
    "Set Stop Holding",
    "Set Minimum SOL to Activate",
    "Set Minimum MCAP to Activate",
  ];

  return (
    <div className="p-4 md:p-6 space-y-8">
      {/* Token Status */}
      <div className="flex flex-col gap-4">
        <Card title="Token Status">
          <div className="flex items-center gap-2 text-xs px-3 py-2 bg-[#1E1E1E] text-[#DF7C00] font-semibold rounded-sm w-fit">
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#FF0000] via-[#FF6A00] to-[#FFA800]" />
            Not Deployed
          </div>
        </Card>

        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {statusCards.map((item, index) => (
            <StatusCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Activation Requirements */}
      <div>
        <SectionTitle>Activation Requirements</SectionTitle>
        <div className="flex flex-col gap-4">
          {requirements.map((item, index) => (
            <RequirementItem key={index} {...item} />
          ))}
        </div>
        <p className="text-sm text-[#D99235] mt-4">
          Smart Sell becomes available after token deployment.
        </p>
      </div>

      {/* Configuration Buttons */}
     <div>
  <SectionTitle>Configuration Actions</SectionTitle>
  <div className="flex flex-wrap justify-center sm:justify-start gap-3">
    {configButtons.map((label, index) => (
      <GradientButton
        key={index}
        label={label}
        className="px-3 py-2 w-full sm:w-auto min-w-[200px] sm:min-w-[220px]"
      />
    ))}
  </div>
</div>

    </div>
  );
}

// ---------------- Subcomponents ----------------

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#FFFFFF05] p-4 rounded-xl border border-[#22242D]">
      <h2 className="text-[20px] text-white mb-2">{title}</h2>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-white text-2xl mb-4">{children}</h3>;
}

function StatusCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const isOff = value.toLowerCase() === "off";

  return (
    <div className="flex flex-col gap-2 bg-[#FFFFFF05] p-4 rounded-xl border border-[#22242D]">
      <div className="text-[15px] text-[#FFFFFF] mb-1">{label}</div>
      {isOff ? (
        <div className="flex items-center gap-2 text-xs text-[#FF4D4D] font-semibold bg-[#6E6E6E12] px-3 py-1 rounded-[4px] w-fit">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#FF0000] via-[#FF4D4D] to-[#FF7B7B]" />
          OFF
        </div>
      ) : (
        <div className="text-[16px] font-semibold text-[#6A7A8C]">{value}</div>
      )}
    </div>
  );
}

function RequirementItem({ label, met }: { label: string; met: boolean }) {
  const iconSrc = met ? "/assets/right.svg" : "/assets/cross.svg";
  const altText = met ? "Success" : "Failure";

  const subtextMap: Record<string, string> = {
    "Token Deployed": "Required for activation",
    "Min SOL Set": "Set minimum SOL",
    "Min MCAP Set": "Set minimum MCAP",
    "Set % Configured": "Set sell percentage",
    "Stop Holding % Set": "Set stop holding threshold",
    "Wallets Whitelisted": "Add at least one wallet",
  };

  return (
    <div className="flex items-start gap-3">
      <div className="flex justify-center items-center bg-[#101217] w-11 aspect-square rounded-md border border-[#22242D]">
        <Image src={iconSrc} width={20} height={20} alt={altText} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-xs text-[#6A7A8C]">{subtextMap[label] || ""}</span>
      </div>
    </div>
  );
}
