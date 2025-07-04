"use client";
import React, { useState } from "react";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import MatrixCard from "@/components/ui/MatrixCard";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CustomTP() {
  const router = useRouter();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  // Define initial wallet data with unique IDs
  const [wallets, setWallets] = useState([
    {
      id: "wallet_22x9A...3Fb_1",
      balance: "222.3",
      MCAP: "165.56",
      percent: "25%",
      mode: "Custom",
    },
    {
      id: "wallet_22x9A...3Fb_2",
      balance: "222.3",
      MCAP: "165.56",
      percent: "25%",
      mode: "Standard",
    },
    {
      id: "wallet_22x9A...3Fb_3",
      balance: "222.3",
      MCAP: "165.56",
      percent: "25%",
      mode: "Advanced",
    },
    {
      id: "wallet_22x9A...3Fb_4",
      balance: "300.5",
      MCAP: "250.75",
      percent: "30%",
      mode: "Custom",
    },
    {
      id: "wallet_22x9A...3Fb_5",
      balance: "150.2",
      MCAP: "120.45",
      percent: "15%",
      mode: "Standard",
    },
    {
      id: "wallet_22x9A...3Fb_6",
      balance: "500.0",
      MCAP: "450.00",
      percent: "50%",
      mode: "Advanced",
    },
    {
      id: "wallet_22x9A...3Fb_7",
      balance: "400.0",
      MCAP: "350.00",
      percent: "40%",
      mode: "Custom",
    },
    {
      id: "wallet_22x9A...3Fb_8",
      balance: "100.0",
      MCAP: "80.00",
      percent: "10%",
      mode: "Standard",
    },
    {
      id: "wallet_22x9A...3Fb_9",
      balance: "250.0",
      MCAP: "220.00",
      percent: "25%",
      mode: "Advanced",
    },
  ]);

  const handleBack = () => {
    router.back();
  };

  const handleModeChange = (id: string, newMode: string) => {
    setWallets((prevWallets) =>
      prevWallets.map((wallet) =>
        wallet.id === id ? { ...wallet, mode: newMode } : wallet
      )
    );
    setOpenDropdowns((prev) => ({ ...prev, [id]: false }));
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className=" bg-[#000000] min-h-screen mb-15">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="text-white cursor-pointer hover:text-[#8761FF] flex items-center gap-2"
      >
        <ArrowLeft size={28} />
        <span className="text-base sm:text-2xl font-medium">Custom TP</span>
      </button>

      {/* Matrix Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        <MatrixCard
          icon="/assets/wallet-card.svg"
          label="Total Wallets Configured"
          value="3"
        />
        <MatrixCard
          icon="/assets/total-sold.svg"
          label="Average Sell"
          value="3,920 SOL"
        />
        <MatrixCard
          icon="/assets/total-sold.svg"
          label="Total Expected Sold (SOL)"
          value="15.01"
        />
      </div>

      {/* Wallet Management Section */}
      <div className="mt-4">
        <p className="text-white text-2xl font-semibold mb-4">
          Wallet Management
        </p>
        <div className="w-full pr-1">
          <div className="max-h-[400px] overflow-y-auto custom-scroll pr-2 mb-15">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="p-4 rounded-lg bg-[#0D0E12] border border-[#161616] flex flex-col gap-4"
                >
                  {/* Wallet Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white text-xl">Wallet</span>
                    <div className="flex items-center gap-3">
                      <button className="text-[#8761FF] cursor-pointer text-xs flex items-center gap-1">
                        <Image
                          src="/assets/edit.svg"
                          width={20}
                          height={20}
                          alt="wallet"
                        />
                        <span>Edit</span>
                      </button>
                      <button className="text-xs text-[#8761FF] flex items-center cursor-pointer gap-1">
                        <Image
                          src="/assets/remove.svg"
                          width={14}
                          height={14}
                          alt="wallet"
                        />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>

                  {/* Wallet Info Grid */}
                  <div className="grid grid-cols-2 gap-y-1">
                    <p className="text-[#B4B4B4] text-sm">Wallet ID</p>
                    <p className="text-sm text-[#929292] text-right">
                      {wallet.id}
                    </p>

                    <p className="text-[#B4B4B4] text-sm">Balance (SOL)</p>
                    <p className="text-sm text-[#929292] text-right">
                      {wallet.balance}
                    </p>

                    <p className="text-[#B4B4B4] text-sm">MCAP</p>
                    <p className="text-sm text-[#929292] text-right">
                      {wallet.MCAP}
                    </p>

                    <p className="text-[#B4B4B4] text-sm">%</p>
                    <p className="text-sm text-[#929292] text-right">
                      {wallet.percent}
                    </p>

                    <p className="text-[#B4B4B4] text-sm">Mode</p>
                    <div className="relative w-[100px] ml-auto">
                      <div
                        onClick={() => toggleDropdown(wallet.id)}
                        className="cursor-pointer text-sm text-[#6A7A8C] pr-10 rounded-full py-1 bg-[#6E6E6E12] flex items-center justify-between pl-4"
                      >
                        <span>{wallet.mode}</span>
                        {openDropdowns[wallet.id] ? (
                          <ChevronUp size={16} className="absolute right-2" />
                        ) : (
                          <ChevronDown size={16} className="absolute right-2" />
                        )}
                      </div>

                      {openDropdowns[wallet.id] && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-[#1A1B20] border border-[#22242D] rounded-md z-50 shadow-lg">
                          {["Custom", "Standard", "Advanced"].map((mode) => (
                            <div
                              key={mode}
                              onClick={() => handleModeChange(wallet.id, mode)}
                              className="px-4 py-2 text-[#929292] text-sm cursor-pointer hover:bg-[#2A2B30] first:rounded-t-md last:rounded-b-md"
                            >
                              {mode}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between gap-2 mt-2">
                    {[25, 50, 100].map((value) => (
                      <button
                        key={`green-${value}`}
                        className="flex-1 py-1 text-xs rounded-md bg-[#1A1B20] border border-[#22242D] text-green-500 hover:bg-[#0f2a1b]/40 transition"
                      >
                        {value}
                      </button>
                    ))}
                    {[25, 50, 100].map((value) => (
                      <button
                        key={`red-${value}`}
                        className="flex-1 py-1 text-xs rounded-md bg-[#1A1B20] border border-[#22242D] text-red-500 hover:bg-[#2a0f0f]/40 transition"
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
