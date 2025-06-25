"use client";

import React, { useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import GradientCheckbox from "@/components/ui/GradientCheckbox";
import DataTable from "@/components/ui/DataTable";
import Image from "next/image";
import WalletPopup from "@/components/ui/WalletPopup";
import { useRouter } from "next/navigation";

interface Wallet {
  id: number;
  address: string;
  balance: number;
  use: number;
  age: number;
}
interface Batch {
  id: number;
  name: string;
  isEditing: boolean;
  walletIds: number[];
  images: string[];
  wallets: Wallet[]; // 🔥 Each batch has its own set of wallets
}

export default function WalletsScreen() {
  const [isAdded, setIsAdded] = useState(false);

  const [selectedWalletIds, setSelectedWalletIds] = useState<number[]>([]);
  const [wallets] = useState<Wallet[]>([
    { id: 101, address: "wallet_L1...aaaa", balance: 0, use: 1, age: 1 },
    { id: 102, address: "wallet_L2...bbbb", balance: 0, use: 1, age: 1 },
    { id: 103, address: "wallet_L3...cccc", balance: 0, use: 1, age: 1 },
  ]);

  const [batches, setBatches] = useState<Batch[]>([
    {
      id: 1,
      name: "Batch 1",
      isEditing: false,
      walletIds: [],
      images: [],
      wallets: [
        { id: 201, address: "wallet_B1...xxyy", balance: 0, use: 1, age: 1 },
        { id: 202, address: "wallet_B2...zzee", balance: 0, use: 1, age: 1 },
      ],
    },
    {
      id: 2,
      name: "Batch 2",
      isEditing: false,
      walletIds: [],
      images: [],
      wallets: [
        { id: 301, address: "wallet_C1...qqww", balance: 0, use: 1, age: 1 },
        { id: 302, address: "wallet_C2...rrtt", balance: 0, use: 1, age: 1 },
      ],
    },
  ]);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedBatchId, setSelectedBatchId] = useState<number | null>(null);

  const handleEditBatch = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSelectedBatchId(id === selectedBatchId ? null : id);
  };

  const updateBatch = (id: number, update: Partial<Batch>) => {
    setBatches((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...update } : b))
    );
  };

  const handleImageUpload = (files: FileList | null) => {
    if (!files || selectedBatchId === null) return;

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          updateBatch(selectedBatchId, {
            images: [
              ...(batches.find((b) => b.id === selectedBatchId)?.images || []),
              reader.result as string,
            ],
          });
        };
        reader.readAsDataURL(file);
      }
    });
  };

  //   const getWalletUsageCount = (walletId: number): number => {
  //   return batches.filter((b) => b.walletIds.includes(walletId)).length;
  // };

  const selectedBatch = batches.find((b) => b.id === selectedBatchId);

  const walletRows =
    selectedBatch?.wallets.map((wallet) => ({
      id: wallet.id,
      onSelect: () => {
        setSelectedWalletIds((prev) =>
          prev.includes(wallet.id)
            ? prev.filter((id) => id !== wallet.id)
            : [...prev, wallet.id]
        );
      },
      isSelected: selectedWalletIds.includes(wallet.id),

      label: `Wallet ${wallet.id}`,
      subLabel: wallet.address,
      hasCopy: true,
      columns: [
        <span key="balance">{wallet.balance}</span>,
        <span key="use">{wallet.use}</span>,
        <span key="age">{wallet.age}</span>,
      ],
    })) ?? [];

  const allWalletRows = wallets.map((wallet) => {
    return {
      id: wallet.id,
      onSelect: () => {
        setSelectedWalletIds((prev) =>
          prev.includes(wallet.id)
            ? prev.filter((id) => id !== wallet.id)
            : [...prev, wallet.id]
        );
      },
      isSelected: selectedWalletIds.includes(wallet.id),
      label: `Wallet ${wallet.id}`,
      subLabel: wallet.address,
      hasCopy: true,
      columns: [
        <span key="balance">{wallet.balance}</span>,
        <span key="use">{wallet.use}</span>,
        <span key="age">{wallet.age}</span>,
      ],
    };
  });

  const router = useRouter();

  function onButtonClick(): void {
    router.push("/fund-wallet");
  }

  const handleNewBatch = () => {
    const newBatch: Batch = {
      id: batches.length + 1, // Simple ID generation based on current batches
      name: `Batch ${batches.length + 1}`,
      isEditing: false,
      walletIds: [],
      images: [],
      wallets: [],
    };

    setBatches((prevBatches) => [...prevBatches, newBatch]);
  };

  return (
    <div className="overflow-hidden bg-black">
      <div className="flex flex-col md:flex-row border border-[#22242D] overflow-hidden min-h-[700px]">
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#22242D] bg-[#0F0F10] w-full md:w-1/2">
          <div className="flex items-center justify-between p-4 gap-4 border-b border-[#22242D] flex-shrink-0">
            <h3 className="text-white text-base font-semibold">Wallets</h3>
            <GradientButton
              label="Warmup Wallet"
              onClick={() => setPopupVisible(true)}
              gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
              hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
              className="h-9 w-33"
            />
          </div>

          <div className=" overflow-hidden">
            <DataTable
              headerColumns={["Address", "Balance", "# Use", "Age"]}
              rows={allWalletRows}
            />
          </div>
          <div>
            {selectedBatchId !== null &&
              selectedWalletIds.some(
                (walletId) =>
                  wallets.some((w) => w.id === walletId) &&
                  !selectedBatch?.walletIds.includes(walletId)
              ) && (
                <div className="p-4">
                  <button
                    className="button-30"
                    onClick={() => {
                      const batch = batches.find(
                        (b) => b.id === selectedBatchId
                      );
                      if (!batch) return;

                      const updatedWalletIds = Array.from(
                        new Set([...batch.walletIds, ...selectedWalletIds])
                      );

                      const walletsToAdd = wallets.filter((w) =>
                        selectedWalletIds.includes(w.id)
                      );

                      const updatedWallets = Array.from(
                        new Set([
                          ...batch.wallets,
                          ...walletsToAdd.filter(
                            (w) =>
                              !batch.wallets.some(
                                (existing) => existing.id === w.id
                              )
                          ),
                        ])
                      );

                      updateBatch(selectedBatchId, {
                        walletIds: updatedWalletIds,
                        wallets: updatedWallets,
                      });

                      setSelectedWalletIds([]);
                      setIsAdded(true);

                      setTimeout(() => {
                        setIsAdded(false);
                      }, 1000); // ⏱ 1 second
                    }}
                  >
                    {isAdded
                      ? "✅ Added!"
                      : `Add ${selectedWalletIds.length} Wallet(s) to ${selectedBatch?.name}`}
                  </button>
                </div>
              )}
          </div>
        </div>

        <div className="flex-1 bg-[#0F0F10] flex flex-col overflow-hidden">
          <div className="flex justify-between items-center border-b border-[#22242D] p-[22px] flex-shrink-0">
            <h3 className="text-white text-base">Batches</h3>
            <div className="flex items-center gap-2">
              <GradientButton
                label="New Batch"
                onClick={() => handleNewBatch()}
                gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
                hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
                className="w-34 py-2 text-base"
        
              />
              <GradientButton
                label="Fund Wallets"
                onClick={onButtonClick || (() => router.push("/fund-wallet"))}
                gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
                hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
                className="w-34 py-2 text-base"
                disabled={selectedWalletIds.length === 0} // Disable button if no wallets are selected
                style={{
                  cursor:
                    selectedWalletIds.length === 0 ? "not-allowed" : "pointer", // Make it visually disabled
                }}
              />
            </div>
          </div>

          {batches.map((batch) => (
            <div
              key={batch.id}
              className={`flex items-center justify-between px-4 py-3 border-b border-[#22242D] cursor-pointer hover:bg-[#1A1A1A] ${
                batch.id === selectedBatchId ? "bg-[#1A1A1A]" : ""
              }`}
              onClick={() => setSelectedBatchId(batch.id)}
            >
              <div className="flex items-center gap-2">
                <GradientCheckbox
                  checked={batch.id === selectedBatchId}
                  onChange={() => {}}
                />
                {batch.isEditing ? (
                  <input
                    value={batch.name}
                    onChange={(e) =>
                      updateBatch(batch.id, { name: e.target.value })
                    }
                    onBlur={() => updateBatch(batch.id, { isEditing: false })}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      updateBatch(batch.id, { isEditing: false })
                    }
                    className="bg-transparent border border-gray-600 rounded px-2 text-white"
                    autoFocus
                  />
                ) : (
                  <span className="flex items-center gap-1 text-white text-sm">
                    {batch.name}
                    <Image
                      src="/assets/edit.svg"
                      width={20}
                      height={20}
                      alt="edit"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateBatch(batch.id, { isEditing: true });
                      }}
                      className="cursor-pointer"
                    />
                  </span>
                )}
              </div>
              <button
                className="flex items-center cursor-pointer gap-1 text-[#8761FF] text-xs"
                onClick={(e) => handleEditBatch(e, batch.id)}
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
          ))}

          {selectedBatch && (
            <div className="flex flex-col">
              {/* Upload Section */}
              <div
                className="bg-[#101114] flex flex-col border border-[#22242D] p-4 gap-4"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleImageUpload(e.dataTransfer.files);
                }}
              >
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center gap-2 rounded-lg  border-[#444] p-6 text-center cursor-pointer w-full hover:bg-[#18191b]"
                >
                  <div className="flex items-center justify-center border border-[#22242D] rounded-md w-10 h-10">
                    <Image
                      src="/assets/upload-cloud.svg"
                      width={20}
                      height={20}
                      alt="Upload"
                    />
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center items-center text-center sm:text-start">
                    <p className="text-sm bg-gradient-to-b from-[#5A43C6] to-[#8761FF] bg-clip-text text-transparent font-medium">
                      Click to Add or Remove
                    </p>
                    <p className="text-sm text-[#6A7A8C]">or drag and drop</p>
                  </div>

                  <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => handleImageUpload(e.target.files)}
                  />
                </label>

                {selectedBatch.images.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-2">
                    {selectedBatch.images.map((src, idx) => (
                      <div key={idx} className="relative">
                        <div className="w-20 h-20 relative">
                          <Image
                            src={src}
                            alt={`Uploaded ${idx + 1}`}
                            fill
                            className="object-cover rounded border border-[#333]"
                          />
                        </div>

                        <button
                          className="absolute cursor-pointer top-[-6px] right-[-6px] bg-red-600 rounded-full text-white w-5 h-5 text-xs flex items-center justify-center"
                          onClick={() =>
                            updateBatch(selectedBatch.id, {
                              images: selectedBatch.images.filter(
                                (_, i) => i !== idx
                              ),
                            })
                          }
                          type="button"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Wallets Table per Batch */}
              <div className="bg-[#101017] border border-[#22242D] flex-1 overflow-hidden">
                <DataTable
                  headerColumns={["Address", "Balance", "# Use", "Age"]}
                  rows={walletRows}
                />
              </div>
              <div>
                {selectedBatchId !== null &&
                  selectedWalletIds.some((id) =>
                    selectedBatch?.wallets.map((w) => w.id).includes(id)
                  ) && (
                    <div className="p-4">
                      <button
                        className="button-30 bg-red-600 text-white px-4 py-2 rounded"
                        onClick={() => {
                          const batch = batches.find(
                            (b) => b.id === selectedBatchId
                          );
                          if (!batch) return;

                          const filteredWallets = batch.wallets.filter(
                            (w) => !selectedWalletIds.includes(w.id)
                          );
                          const filteredWalletIds = batch.walletIds.filter(
                            (id) => !selectedWalletIds.includes(id)
                          );

                          updateBatch(selectedBatchId, {
                            wallets: filteredWallets,
                            walletIds: filteredWalletIds,
                          });

                          setSelectedWalletIds([]);
                        }}
                      >
                        Remove{" "}
                        {
                          selectedWalletIds.filter((id) =>
                            selectedBatch?.wallets.map((w) => w.id).includes(id)
                          ).length
                        }{" "}
                        Wallet(s) from {selectedBatch?.name}
                      </button>
                    </div>
                  )}
              </div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      {isPopupVisible && (
        <WalletPopup
          isOpen={isPopupVisible}
          onClose={() => setPopupVisible(false)}
          onSave={() => {
            console.log("Saving wallets...");
            setPopupVisible(false);
          }}
        />
      )}
    </div>
  );
}
