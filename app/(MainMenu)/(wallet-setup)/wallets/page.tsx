"use client";

import React, { useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import GradientCheckbox from "@/components/ui/GradientCheckbox";
import DataTable from "@/components/ui/DataTable";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  // Batch selection state
  const [selectedBatches, setSelectedBatches] = useState<number[]>([]);

  const [isBatchEditOpen, setIsBatchEditOpen] = useState(false); // Toggle for batch edit

  const handleWalletSelect = (walletId: number) => {
    setSelectedWallets((prev) =>
      prev.includes(walletId)
        ? prev.filter((id) => id !== walletId)
        : [...prev, walletId]
    );
  };

  const handleBatchSelect = (batchId: number) => {
    setSelectedBatches((prev) =>
      prev.includes(batchId)
        ? prev.filter((id) => id !== batchId)
        : [...prev, batchId]
    );
  };

  const router = useRouter();
  const handleFundWallet = () => {
    router.push("/fund-wallet");
  };

  const handleEditBatch = () => {
    setIsBatchEditOpen((prev) => !prev); // Toggle the batch edit table visibility
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
    <div className=" overflow-hidden bg-black">
      {/* Wallets and Batches Sections - Fixed Height Container */}
      <div className="flex-1 flex flex-col md:flex-row border border-[#22242D] overflow-hidden min-h-[700px]">
        {/* Wallets Table - Left Section */}
        <div className="flex-1 flex flex-col border-r border-[#22242D] bg-[#0F0F10] overflow-hidden">
          {/* Header for Wallets Table */}
          <div className="flex items-center justify-between p-4 gap-4 border-b border-[#22242D] flex-shrink-0">
            <h3 className="text-white text-base font-semibold">Wallets</h3>
            <GradientButton
              label="Warmup Wallet"
              onClick={handleFundWallet}
              gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
              hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
              className="h-9 w-33"
            />
          </div>

          {/* Wallet Table - Scrollable */}
          <div className="flex-1 overflow-hidden">
            <DataTable
              headerColumns={["Address", "Balance", "# Use", "Age"]}
              rows={walletRows}
            />
          </div>
        </div>

        {/* Batches List - Right Section */}
        <div className="flex-1 bg-[#0F0F10] flex flex-col overflow-hidden">
          {/* Header for Batches List */}
          <div className="border-b border-[#22242D] p-[22px] flex-shrink-0">
            <h3 className="text-white text-base">Batches</h3>
          </div>

          <div className="overflow-hidden">
            {[
              { id: 1, name: "Batch 1" },
              { id: 2, name: "Batch 2" },
            ].map((batch) => {
              const isSelected = selectedBatches.includes(batch.id);

              const handleRowClick = () => {
                handleBatchSelect(batch.id);
              };

              const handleCheckboxClick = (e: React.MouseEvent) => {
                e.stopPropagation(); // Prevent row click from also triggering
                handleBatchSelect(batch.id);
              };

              return (
                <div
                  key={batch.id}
                  className={`flex items-center justify-between px-4 py-3 border-b border-[#22242D] cursor-pointer hover:bg-[#1A1A1A] flex-shrink-0 ${
                    isSelected ? "bg-[#1A1A1A]" : ""
                  }`}
                  onClick={handleRowClick}
                >
                  <div className="flex items-center gap-2">
                    <div onClick={handleCheckboxClick}>
                      <GradientCheckbox
                        checked={isSelected}
                        onChange={() => {}}
                      />
                    </div>
                    <span className="text-white text-sm">{batch.name}</span>
                  </div>
                  <button
                    className="flex items-center cursor-pointer gap-1 text-[#8761FF] text-xs"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering row click
                      handleEditBatch(); // Toggle the batch edit view
                    }}
                  >
                    <Image
                      src="/assets/edit.svg"
                      width={20}
                      height={20}
                      alt="edit"
                    />
                    Edit Batch
                  </button>
                </div>
              );
            })}
          </div>

          {/* Conditionally render the batch edit section */}
          <div className="flex flex-col">
            {isBatchEditOpen && (
              <div className="h-full  flex flex-col overflow-hidden">
                {/* Upload Section */}
                <div className="bg-[#101114] h-40 flex border border-[#22242D] flex-shrink-0">
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center gap-2 rounded-lg p-6 text-center cursor-pointer w-full"
                  >
                    <div className="flex items-center justify-center border border-[#22242D] rounded-md w-10 h-10">
                      <Image
                        src="/assets/upload-cloud.svg"
                        width={20}
                        height={20}
                        alt="Upload"
                      />
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                      <p className="text-sm bg-gradient-to-b from-[#5A43C6] to-[#8761FF] bg-clip-text text-transparent font-medium">
                        Click to Add or Remove
                      </p>
                      <p className="text-sm text-[#6A7A8C]">or drag and drop</p>
                    </div>

                    <input
                      type="file"
                      id="file-upload"
                      accept="image/*,.svg,.png,.jpg,.gif,.pdf"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files) {
                          const file = e.target.files[0];
                          console.log("Selected file:", file);
                        }
                      }}
                    />
                  </label>
                </div>

                {/* Batch Edit Table - Takes remaining space */}
                <div className="bg-[#101017] border border-[#22242D] flex-1 overflow-hidden">
                  <DataTable
                    headerColumns={["Address", "Balance", "# Use", "Age"]}
                    rows={walletRows}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
