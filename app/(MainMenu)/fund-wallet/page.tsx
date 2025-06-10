'use client'
import React, { useState } from "react";
import { Edit } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";
import GradientCheckbox from "@/components/ui/GradientCheckbox";
import DataTable from "@/components/ui/DataTable";

interface Wallet {
  id: number;
  address: string;
  balance: number;
  use: number;
  age: number;
}


export default function WalletsScreen() {
  const [wallets] = useState<Wallet[]>([
    { id: 1, address: "wallet_22x9A...3Fb", balance: 0, use: 1, age: 1 },
    { id: 2, address: "wallet_22x9A...3Fb", balance: 0, use: 1, age: 1 },
    { id: 3, address: "wallet_22x9A...3Fb", balance: 0, use: 1, age: 1 },
    { id: 4, address: "wallet_22x9A...3Fb", balance: 0, use: 1, age: 1 },
    { id: 5, address: "wallet_22x9A...3Fb", balance: 0, use: 1, age: 1 },
  ]);

  const [selectedWallets, setSelectedWallets] = useState<number[]>([]);

  const handleWalletSelect = (walletId: number) => {
    setSelectedWallets((prev) =>
      prev.includes(walletId)
        ? prev.filter((id) => id !== walletId)
        : [...prev, walletId]
    );
  };

  const handleFundWallet = () => {
    console.log("Fund Wallet clicked");
  };

  const walletRows = wallets.map((wallet) => ({
    id: wallet.id,
    isSelected: selectedWallets.includes(wallet.id),
    onSelect: () => handleWalletSelect(wallet.id),
    label: `Wallet ${wallet.id}`,
    subLabel: wallet.address,
    hasCopy: true,
    icon: (
      <div className="w-4 h-4 rounded-full bg-gradient-to-b from-[#5A43C6] to-[#8761FF] flex items-center justify-center">
        <span className="text-xs font-bold text-white">Ξ</span>
      </div>
    ),
    columns: [
      <span key="balance">{wallet.balance}</span>,
      <span key="use">{wallet.use}</span>,
      <span key="age">{wallet.age}</span>,
    ],
  }));

  return (
    <div className="space-y-4 md:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-lg font-semibold">Wallets</h2>
        <GradientButton
          label="Fund Wallet"
          onClick={handleFundWallet}
          gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
          hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
          className="px-5 py-2"
        />
      </div>

      <div className="flex flex-col md:flex-row border border-[#22242D] min-h-[600px]">
        {/* Wallets Table */}
        <div className="flex-1 flex flex-col justify-between border-r border-[#22242D] bg-[#0F0F10]">
          <DataTable
            headerColumns={["Address", "Balance", "# Use", "Age"]}
            rows={walletRows}
          />
          <div className="flex justify-end p-4">
            <GradientButton
              label="Warmup Wallet"
              onClick={() => console.log("Warmup Wallet")}
              gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
              hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
              className="px-4 py-2"
            />
          </div>
        </div>

        {/* Batches List */}
        <div className="flex-1 bg-[#0F0F10]">
          <div className="border-b border-[#22242D] p-4">
            <h3 className="text-white text-base font-semibold">Batches</h3>
          </div>
          <div className="flex flex-col">
            {[
              { id: 1, name: "Batch 1" },
              { id: 2, name: "Batch 2" },
            ].map((batch) => (
              <div
                key={batch.id}
                className="flex items-center justify-between px-4 py-3 border-b border-[#22242D] cursor-pointer hover:bg-[#1A1A1A]"
              >
                <div className="flex items-center gap-2">
                  <GradientCheckbox
                    checked={true}
                    onChange={() => console.log(`Toggle Batch ${batch.id}`)}
                  />
                  <span className="text-white text-sm">{batch.name}</span>
                </div>
                <button
                  className="flex items-center gap-1 text-[#8761FF] text-xs"
                  onClick={() => console.log(`Edit Batch ${batch.id}`)}
                >
                  <Edit size={14} />
                  Edit Batch
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
