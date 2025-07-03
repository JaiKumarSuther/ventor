"use client";
import React, { useState } from "react";
import PageContainer from "@/components/ui/PageContainer";
import BondingCurve from "@/components/ui/BondingCurve";
import BubbleMapChart from "@/components/ui/BubbleMapChart";
import Image from "next/image";
import CustomToggleSwitch from "@/components/ui/CustomToggleSwitch";
import GradientButton from "@/components/ui/GradientButton";

export default function OverviewPage() {
  const [smartSellEnabled, setSmartSellEnabled] = useState(true); // <-- Step 2

  const stats = [
    {
      label: "Market Cap",
      value: "$12,400,000",
      icon: "/assets/cap.svg",
    },
    {
      label: "Holders",
      value: "3,210",
      icon: "/assets/holders.svg",
    },
    {
      label: "Sniper Wallets",
      value: "27",
      icon: "/assets/snipper.svg",
    },
    {
      label: "Launch Mode",
      value: "Active",
      icon: "/assets/launch.svg",
    },
  ];

  return (
    <PageContainer>
      {/* Header */}
      <div className="bg-[#FFFFFF05] border border-[#22242D] p-6 rounded-2xl mb-8 mt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex gap-4 items-start">
          <div className="w-20 aspect-square rounded-md bg-[#0F0F0F] border border-[#FFFFFF1F]" />
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-semibold">
              New Walmart Tequilla
            </h3>
            <p className="text-[#6A7A8C] text-sm mt-1 max-w-xs">
              Premium tequila token with dynamic liquidity and advanced trending
              features
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-wrap gap-2">
          <div className="flex justify-end mb-3">
            <GradientButton
              label="Deploy"
              onClick={() => console.log("Deployed")}
              gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
              hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
              className="h-9 md:h-9 px-3 md:px-6"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#E43021] hover:bg-[#2a0f0f]/40 cursor-default border border-[#E43021] rounded-full px-4 py-1.5 text-sm">
              Sell Dev
            </div>
            <div className="text-[#E43021] hover:bg-[#2a0f0f]/40 cursor-default cursor-arrow border border-[#E43021] rounded-full px-4 py-1.5 text-sm">
              Sell All + Dev
            </div>
            <div className="text-[#00A34F] border border-[#00A34F] hover:bg-[#0f2a1b]/40 cursor-default rounded-full px-4 py-1.5 text-sm">
              Buy All
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-4">Stats</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#101017] border border-[#22242D] p-5 rounded-lg flex flex-col gap-2"
            >
              {/* Row 1: Icon */}
              <div className="w-6 h-6">
                <Image
                  src={stat.icon}
                  width={24}
                  height={24}
                  alt={stat.label}
                  className="object-contain"
                />
              </div>

              {/* Row 2: Live label */}
              <div className="text-[#6A7A8C] text-xs">Live</div>

              {/* Row 3: Label */}
              <div className="text-white text-base font-semibold">
                {stat.label}
              </div>

              {/* Row 4: Value */}
              <div className="text-[#8761FF] text-sm">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-4">Bonding Curve</h1>
        <BondingCurve progress={80} />
      </div>

      {/* Wallet Holdings */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-4">Wallet Holdings</h1>

        <div className="bg-[#101017] border border-[#22242D] rounded-xl p-4 sm:p-5">
          {/* Header Row */}
          <div className="flex justify-between items-center gap-4 sm:gap-0 mb-5">
            <div className="text-white text-sm font-medium">Wallet ID</div>

            <div className="flex justify-start sm:justify-end gap-3">
              <div className="text-[#6A7A8C] text-sm flex items-center gap-2">
                Smart Sell
                <CustomToggleSwitch
                  id="smart-sell"
                  checked={smartSellEnabled}
                  onChange={() => setSmartSellEnabled(!smartSellEnabled)}
                />
              </div>
              <button className="text-xs text-[#00A34F] border border-[#00A34F] px-7 py-[5px] rounded-full font-medium hover:bg-[#0f2a1b]/30">
                Buy All
              </button>
              <button className="text-xs text-[#00A34F] border border-[#00A34F] px-7 py-[5px] rounded-full font-medium hover:bg-[#2e1616]/30">
                Sell All
              </button>
            </div>
          </div>

          {/* Table Rows */}
          {[
            {
              name: "Each Wallet",
              walletId: "JIAO-4498",
              supply: "89%",
              status: "Active",
              statusColor: "#00A34F",
            },
            {
              name: "Marketing Wallet",
              walletId: "VXIA-2034",
              supply: "76%",
              status: "Flagged",
              statusColor: "#E43021",
            },
            {
              name: "Sniper Batch",
              walletId: "MPSA-1126",
              supply: "53%",
              status: "Pending",
              statusColor: "#D99235",
            },
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-5 items-start sm:items-center gap-4 sm:gap-0 border-t border-[#22242D] py-4 text-sm"
            >
              {/* Wallet Name */}
              <div className="flex items-center gap-2 text-white font-medium">
                <Image
                  src="/assets/wallet.svg"
                  alt="wallet"
                  width={18}
                  height={18}
                />
                {row.name}
              </div>

              {/* Wallet ID */}
              <div className="text-[#6A7A8C]">
                <span>Wallet ID: </span>
                {row.walletId}
              </div>

              {/* Supply */}
              <div className="text-[#8D73FF]">
                <span className="text-[#6A7A8C]">Supply: </span>
                {row.supply}
              </div>

              {/* Status */}
              <div>
                <span
                  className="text-xs px-4 py-2 rounded-md"
                  style={{
                    color: row.statusColor,
                    backgroundColor: "#6E6E6E12",
                  }}
                >
                  {row.status}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-start sm:justify-end gap-2">
                {[25, 50, 100, 25, 50, 100].map((val, idx) => (
                  <button
                    key={idx}
                    className={`text-xs px-4 py-1.5 rounded-md font-medium bg-[#6E6E6E12] ${
                      idx < 3
                        ? "text-[#00A34F] hover:bg-[#0f2a1b]/40"
                        : "text-[#E43021] hover:bg-[#2e1616]/40"
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bubble Map */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-4">Bubble Map Distribution</h1>
        <BubbleMapChart />
      </div>
    </PageContainer>
  );
}
