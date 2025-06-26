"use client";

import React from "react";
import PageContainer from "@/components/ui/PageContainer";
import GradientButton from "@/components/ui/GradientButton";
import LifecycleProgress from "@/components/ui/LifecycleProgress";
import BubbleMapChart from "@/components/ui/BubbleMapChart";
import Image from "next/image";

export default function OverviewPage() {
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

        <div className="flex flex-wrap gap-2">
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

      {/* Lifecycle Progress */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-4">Lifecycle Progress</h1>
        <LifecycleProgress progress={80} />
      </div>

      {/* Wallet Holdings */}
   <div className="mb-10">
  <h1 className="text-2xl font-semibold mb-4">Wallet Holdings</h1>

  <div className="bg-[#101017] border border-[#22242D] rounded-xl p-5">
    {/* Header with actions */}
    <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
      <h3 className="text-white text-lg font-semibold">Wallet Holdings</h3>
      <div className="flex flex-wrap gap-2">
        <GradientButton label="Add Batch" className="px-4 py-[6px]" />
        <GradientButton label="Add Wallet" className="px-4 py-[6px]" />
        <button className="border-[1.5px] text-sm font-semibold cursor-pointer text-[#5A43C6] border-[#5A43C6] rounded-full px-4 py-[6px]">
          Configure
        </button>
      </div>
    </div>

    {/* Table Header */}
    <div className="hidden md:grid grid-cols-5 text-[#6A7A8C] text-xs border-b border-[#22242D] pb-2 mb-3">
      <div>Wallet Batches</div>
      <div>Wallet ID</div>
      <div>Supply</div>
      <div>Status</div>
      <div className="text-right">Actions</div>
    </div>

    {/* Table Rows */}
    {[
      {
        name: "Each Wallet",
        walletId: "JI4D-4498",
        supply: "89%",
        status: "Active",
        color: "#00A34F",
      },
      {
        name: "Marketing Wallet",
        walletId: "VXA-2034",
        supply: "76%",
        status: "Flagged",
        color: "#E43021",
      },
      {
        name: "Sniper Batch",
        walletId: "MPSA-1125",
        supply: "53%",
        status: "Pending",
        color: "#D99235",
      },
    ].map((row, i) => (
      <div
        key={i}
        className="grid md:grid-cols-5 grid-cols-1 gap-2 items-start md:items-center text-sm py-4 border-b border-[#22242D] last:border-none"
      >
        <div className="flex items-center gap-2 text-white font-medium">
          <Image
            src="/assets/wallet.svg"
            width={20}
            height={20}
            alt="wallet icon"
            className="flex-shrink-0"
          />
          {row.name}
        </div>

        <div className="text-[#6A7A8C] text-xs md:mt-0 mt-1">
          <span className="md:hidden font-semibold text-white">Wallet ID: </span>
          {row.walletId}
        </div>

        <div className="text-[#8D73FF] font-semibold md:mt-0 mt-1">
          <span className="md:hidden font-semibold text-white">Supply: </span>
          {row.supply}
        </div>

        <div className="md:mt-0 mt-1">
          <span
            className="text-xs px-2 py-0.5 rounded-md inline-block"
            style={{
              color: row.color,
              backgroundColor: "#6E6E6E12",
            }}
          >
            {row.status}
          </span>
        </div>

        <div className="flex md:justify-end gap-2 md:mt-0 mt-2">
  <button
    className="text-xs px-3 py-1 rounded-full border border-[#00A34F] text-[#00A34F] bg-transparent hover:bg-[#0f2a1b]/40"
  >
    Buy All
  </button>
  <button
    className="text-xs px-3 py-1 rounded-full border border-[#00A34F] text-[#00A34F] bg-transparent hover:bg-[#0f2a1b]/40"
  >
    Sell All
  </button>
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
