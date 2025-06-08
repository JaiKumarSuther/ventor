"use client";
import React, { useState } from "react";
import PageContainer from "@/components/ui/PageContainer";
import WalletCard from "@/components/ui/WalletCard";
import PresetSelector from "@/components/ui/PresetSelector";
import TabsBar from "@/components/ui/TabsBar";
import ActionButtons from "@/components/ui/ActionButtons";
import SmartSellControl from "@/components/ui/SmartSellToggle";
import WalletFilters from "@/components/ui/WalletFilters";

export default function WalletsPage() {
  const [isSmartSellEnabled, setIsSmartSellEnabled] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectSnipeFailed, setSelectSnipeFailed] = useState(false);
  const [selectNoSupply, setSelectNoSupply] = useState(false);
  // Example data for demonstration
  const walletData = [
    {
      id: "wallet_22x9A...3Fb",
      holding: "222.3",
      worth: "165.56",
      percent: "20%",
    },
    {
      id: "wallet_22x9A...3Fb",
      holding: "222.3",
      worth: "165.56",
      percent: "20%",
    },
    {
      id: "wallet_22x9A...3Fb",
      holding: "222.3",
      worth: "165.56",
      percent: "20%",
    },
    {
      id: "wallet_22x9A...3Fb",
      holding: "222.3",
      worth: "165.56",
      percent: "20%",
    },
    {
      id: "wallet_22x9A...3Fb",
      holding: "222.3",
      worth: "165.56",
      percent: "20%",
    },
    {
      id: "wallet_22x9A...3Fb",
      holding: "222.3",
      worth: "165.56",
      percent: "20%",
    },
  ];

  const tabs = [
    {
      label: "Swap Manager",
      active: true,
      onClick: () => console.log("Swap Manager"),
    },
    { label: "Market Maker", onClick: () => console.log("Market Maker") },
    { label: "Smart Sell", onClick: () => console.log("Smart Sell") },
    { label: "Auto TP", onClick: () => console.log("Auto TP") },
  ];

  return (
    <PageContainer>
      {/* Tabs Bar */}
      <div className="mb-6">
        <TabsBar tabs={tabs} />
      </div>

      {/* Top bar */}
      <div className="border border-[#22242D]">
  <div className="flex flex-col md:flex-row md:h-[160px] w-full bg-[#FFFFFF05] mb-10 border-b border-[#22242D]">
      {/* Left side */}
      <div className="flex-3 flex flex-col md:border-r px-3 md:px-5 py-5 md:py-10 gap-3 md:gap-5 border-[#22242D]">
        <ActionButtons />
        <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
          <SmartSellControl
            label="SMART SELL"
            enabled={isSmartSellEnabled}
            onToggle={() => setIsSmartSellEnabled(!isSmartSellEnabled)}
          />

          <div className="hidden sm:block border border-[#22242D]" />

          <PresetSelector
            label="CHOOSE PRESET"
            selected="PRESET 1"
            onSelect={(preset) => {
              console.log("Selected preset:", preset);
              // handle selection change here (e.g., open a dropdown or modal)
            }}
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex-2 flex flex-col justify-center items-center py-5 md:py-0 border-t md:border-t-0 border-[#22242D]">
        <h2 className="text-[#6A7A8C] text-xl md:text-2xl">Live PNL</h2>
        <h1 className="text-[#2FD271] text-2xl md:text-4xl">+ 120.35 SOL</h1>
      </div>
    </div>

        <WalletFilters
          selectAll={selectAll}
          onSelectAll={setSelectAll}
          selectSnipeFailed={selectSnipeFailed}
          onSelectSnipeFailed={setSelectSnipeFailed}
          selectNoSupply={selectNoSupply}
          onSelectNoSupply={setSelectNoSupply}
        />

        {/* Wallets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-4">
          {walletData.map((wallet, index) => (
            <WalletCard
              key={index}
              walletId={wallet.id}
              holding={wallet.holding}
              worth={wallet.worth}
              percent={wallet.percent}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
