"use client";
import React, { useState, useEffect } from "react";
import GradientButton from "@/components/ui/GradientButton";
import GradientCheckbox from "@/components/ui/GradientCheckbox";
import DashboardActions from "@/components/ui/DashboardActions";
import DataTable from "@/components/ui/DataTable";
import WalletPopup from "@/components/ui/WalletPopup";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Wallet {
  id: number;
  name: string;
  address: string;
  balance: number;
  use: number;
  age: number;
}

interface Batch {
  id: number;
  name: string;
}

interface WalletSetupData {
  selectedWallets: number[];
  selectedBatches: number[];
}

interface WalletSetupStepProps {
  data: WalletSetupData;
  updateData: (data: Partial<WalletSetupData>) => void;
  onNext: () => void;
  onCancel: () => void;
}

export default function WalletSetupStep({
  data,
  updateData,
  onNext,
  onCancel,
}: WalletSetupStepProps) {
  const [wallets] = useState<Wallet[]>([
    {
      id: 1,
      name: "Wallet1",
      address: "wallet_22x9A...3Fb",
      balance: 0,
      use: 1,
      age: 1,
    },
    {
      id: 2,
      name: "Wallet2",
      address: "wallet_3y7ZK...1Ab",
      balance: 0,
      use: 1,
      age: 1,
    },
    {
      id: 3,
      name: "Wallet3",
      address: "wallet_9xQ2L...7Vc",
      balance: 0,
      use: 1,
      age: 1,
    },
    {
      id: 4,
      name: "Wallet4",
      address: "wallet_5mNpT...8Ys",
      balance: 0,
      use: 1,
      age: 1,
    },
  ]);

  const [newWallets, setNewWallets] = useState<Wallet[]>([]);

  const [batches, setBatches] = useState<Batch[]>([
    { id: 1, name: "Batch 1" },
    { id: 2, name: "Batch 2" },
  ]);

  const router = useRouter();

  const [isPopupVisible, setPopupVisible] = useState<boolean>(false); // State for popup visibility

  // Initialize selectedWallets and selectedBatches from props.data if available
  const [selectedWallets, setSelectedWallets] = useState<number[]>(
    data.selectedWallets || []
  );
  const [selectedBatches, setSelectedBatches] = useState<number[]>(
    data.selectedBatches || [1]
  );

  // Keep local selection state in sync with parent data prop
  useEffect(() => {
    setSelectedWallets(data.selectedWallets || []);
    setSelectedBatches(data.selectedBatches || [1]);
  }, [data]);

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

  const handleNext = () => {
    updateData({ selectedWallets, selectedBatches });
    onNext();
  };

  // Trigger popup
  const handleNewWallet = () => {
    setPopupVisible(true);
  };

  const handleCreateMultipleWallets = (countString: string) => {
    const count = parseInt(countString);
    if (isNaN(count) || count <= 0) return;

    const startId = wallets.length + newWallets.length + 1;
    const createdWallets: Wallet[] = Array.from(
      { length: count },
      (_, index) => {
        const id = startId + index;
        return {
          id,
          name: `Wallet${id}`,
          address: `wallet_${Math.random().toString(36).substr(2, 8)}`,
          balance: 0,
          use: 1,
          age: 1,
        };
      }
    );

    setNewWallets((prev) => [...prev, ...createdWallets]);
  };

  const getWalletRows = (walletArray: Wallet[]) =>
    walletArray.map((wallet) => ({
      id: wallet.id,
      isSelected: selectedWallets.includes(wallet.id),
      onSelect: () => handleWalletSelect(wallet.id),
      label: wallet.name,
      subLabel: wallet.address,
      hasCopy: true,
      icon: (
        <div className="w-4 h-4 rounded-full bg-gradient-to-b from-[#5A43C6] to-[#8761FF] flex items-center justify-center">
          <span className="text-xs font-bold text-white">Ξ</span>
        </div>
      ),
      columns: [
        <div className="flex items-center gap-2" key="balance">
          <span>{wallet.balance}</span>
        </div>,
        <span key="use">{wallet.use}</span>,
        <span key="age">{wallet.age}</span>,
      ],
    }));

  const handleSelectAllWallets = () => {
    const allWalletIds = [...wallets, ...newWallets].map((wallet) => wallet.id);
    setSelectedWallets(allWalletIds);
  };
  const handleDeselectAllWallets = () => {
    setSelectedWallets([]);
  };

  const handleRandomSelectWallets = () => {
    const combinedWallets = [...wallets, ...newWallets];
    const shuffled = combinedWallets.sort(() => 0.5 - Math.random());
    const half = Math.ceil(shuffled.length / 2);
    setSelectedWallets(shuffled.slice(0, half).map((wallet) => wallet.id));
  };

  const handleNewBatch = () => {
    const newId = batches.length + 1;
    setBatches([...batches, { id: newId, name: `Batch ${newId}` }]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row min-h-[730px]">
        {/* Wallets Section */}
        <div className="flex flex-col flex-[5] border border-[#22242D] bg-[#FFFFFF05] border-r-0">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
            <h3 className="text-white text-base font-semibold">
              Wallet ({wallets.length})
            </h3>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              <GradientButton
                label="New Wallets"
                onClick={handleNewWallet}
                gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
                hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
                className="h-8"
              />
              <GradientButton
                label="Select All"
                onClick={handleSelectAllWallets}
                gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
                hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
                className="h-8"
              />
              <button
                onClick={handleDeselectAllWallets}
                className="h-8 cursor-pointer border rounded-full border-[#22242D] text-[#B4B4B4] text-sm"
              >
                Deselect All
              </button>
              <button
                onClick={handleRandomSelectWallets}
                className="h-8 cursor-pointer border rounded-full border-[#22242D] text-[#B4B4B4] text-sm"
              >
                Random 50%
              </button>
            </div>
          </div>

          {/* Scrollable Wallet Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Original Wallets */}
            <div className="border-t border-[#22242D]">
              <DataTable
                headerColumns={["Address", "Balance", "# Use", "Age"]}
                rows={getWalletRows(wallets)}
              />
            </div>

            {/* New Wallets */}
            {newWallets.length > 0 && (
              <div className="border-t border-[#22242D] mt-6 pt-4 bg-[#0F0F10] shadow-inner">
                <div className="px-4 pb-3 border-b border-[#22242D]">
                  <h3 className="text-white text-base font-semibold">
                    New Wallets
                  </h3>
                </div>
                <div>
                  <DataTable
                    headerColumns={["Address", "Balance", "# Use", "Age"]}
                    rows={getWalletRows(newWallets)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Button Footer */}
          <div className="flex justify-between md:justify-start px-2 py-4 md:px-6 space-x-2 md:space-x-4">
            <GradientButton
              label="Warmup Wallets"
              onClick={() => {
                if (selectedWallets.length > 0) {
                  setPopupVisible(true);
                }
              }}
              gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
              hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
              className="h-10 md:w-40 px-5 text-base"
              disabled={selectedWallets.length === 0}
              style={{
                cursor:
                  selectedWallets.length === 0 ? "not-allowed" : "pointer",
              }}
            />
            <GradientButton
              label="Fund Wallet"
              onClick={() => router.push("/fund-wallet")}
              gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
              hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
              className="h-10 md:w-40 px-5 text-base"
              disabled={selectedWallets.length === 0}
              style={{
                cursor:
                  selectedWallets.length === 0 ? "not-allowed" : "pointer",
              }}
            />
          </div>
        </div>
        {/* Batch Selection */}
        <div className="flex flex-col flex-[3] border border-[#22242D] bg-[#0F0F10]">
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#22242D]">
            <h3 className="text-white text-base font-semibold">
              Batch Selection
            </h3>
            <GradientButton
              label="New Batch"
              onClick={handleNewBatch}
              gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
              hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
              className="h-8 px-5"
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 bg-[#101017] h-9 border-b border-[#22242D]"></div>
            {batches.map((batch) => (
              <div
                key={batch.id}
                onClick={() => handleBatchSelect(batch.id)}
                className="flex items-center justify-between border-b border-[#22242D] bg-[#101017] h-9 px-4 cursor-pointer"
              >
                <div
                  className="flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GradientCheckbox
                    checked={selectedBatches.includes(batch.id)}
                    onChange={() => handleBatchSelect(batch.id)}
                  />
                  <span className="text-white text-sm">{batch.name}</span>
                </div>
                <button
                  className="flex cursor-pointer items-center gap-1 text-[#8761FF] text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Edit ${batch.name}`);
                  }}
                >
                  <Image
                    src="/assets/edit.svg"
                    width={20}
                    height={20}
                    alt="wallet"
                  />
                  Edit Batch
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end p-6">
            <DashboardActions
              onFirstAction={onCancel}
              onSecondAction={handleNext}
              firstLabel="Cancel"
              secondLabel="Next"
            />
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <WalletPopup
          isOpen={isPopupVisible}
          onClose={() => setPopupVisible(false)}
          onSave={(walletCount) => {
            handleCreateMultipleWallets(walletCount);
            setPopupVisible(false);
          }}
           text="Enter the number of wallets you want to create" 
        />
      )}
    </div>
  );
}
