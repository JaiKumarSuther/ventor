"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomToggleSwitch from "@/components/ui/CustomToggleSwitch";
import LastSellTransactions from "@/components/ui/LastSellTransactions";
import MatrixCard from "@/components/ui/MatrixCard";
import SelectWalletModal from "@/components/ui/SelectWalletModal"; // Import the Wallet Modal

export default function SmartSell() {
  const initialStatusCards = [
    {
      key: "smartSell",
      label: "Smart Sell Status",
      value: "OFF",
      editable: false,
      viewable: true,
      toggle: true,
    },
    {
      key: "wallets",
      label: "Whitelisted Wallets",
      value: "6",
      editable: true,
    },
    {
      key: "sellOnBuy",
      label: "Sell % on Buy",
      value: "1.00%",
      editable: true,
    },
    { key: "stopIfHolding", label: "Stop if Holding <", value: "1.00%" },
    { key: "minSol", label: "Min SOL to Activate", value: "0.5000 SOL" },
    {
      key: "minMcap",
      label: "Min MCAP to Activate",
      value: "$1.00",
      editable: true,
    },
  ];

  const [statusCardValues, setStatusCardValues] = useState(
    initialStatusCards.reduce((acc, item) => {
      const numericPart = item.value.match(/[0-9.]+/)?.[0] || "";
      acc[item.key] = numericPart;
      return acc;
    }, {} as Record<string, string>)
  );

  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [tpStates, setTpStates] = useState({
    smartSell: false,
  });

  const [showWalletModal, setShowWalletModal] = useState(false); // Wallet modal state

  const handleTpToggle = (key: keyof typeof tpStates) => {
    setTpStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInlineChange = (key: string, value: string) => {
    if (/^[0-9]*\.?[0-9]*$/.test(value) || value === "") {
      setStatusCardValues((prev) => ({ ...prev, [key]: value }));
    }
  };

  const getUnit = (value: string): string => {
    const match = value.match(/[a-zA-Z%$]+/g);
    return match ? match.join("") : "";
  };

  const handleViewClick = () => {
    setShowWalletModal(true); // Show wallet selection modal
  };

  const handleCloseModal = () => {
    setShowWalletModal(false); // Close the wallet selection modal
  };

  return (
    <div className="pb-10 pt-5 px-5 md:px-0 space-y-8">
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
          {initialStatusCards.map((item, index) => {
            const unit = getUnit(item.value);

            return (
              <div
                key={index}
                className="flex flex-col gap-2 bg-[#FFFFFF05] p-4 rounded-xl border border-[#22242D] relative"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[15px] text-[#FFFFFF] mb-1">
                    {item.label}
                  </div>
                  {(item.editable || item.viewable) && (
                    <button
                      onClick={() => {
                        if (item.editable) setEditingKey(item.key);
                        else handleViewClick(); // Open wallet modal if viewable
                      }}
                      className="flex items-center cursor-pointer text-[#8761FF] font-medium gap-1"
                    >
                      {item.editable ? (
                        <>
                          <Image
                            src="/assets/edit.svg"
                            alt="Edit"
                            width={17}
                            height={17}
                          />
                          Edit
                        </>
                      ) : (
                        <>View</>
                      )}
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  {item.key === "smartSell" &&
                  statusCardValues[item.key].toLowerCase() === "off" ? (
                    <div className="flex items-center gap-2 text-xs text-[#FF4D4D] font-semibold bg-[#6E6E6E12] px-3 py-1 rounded-[4px] w-fit">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#FF0000] via-[#FF4D4D] to-[#FF7B7B]" />
                      OFF
                    </div>
                  ) : editingKey === item.key ? (
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        value={statusCardValues[item.key]}
                        autoFocus
                        onChange={(e) =>
                          handleInlineChange(item.key, e.target.value)
                        }
                        onBlur={() => setEditingKey(null)}
                        className="bg-transparent border border-[#333] text-white px-2 py-1 rounded w-[100px] outline-none"
                      />
                      <span className="text-white text-base font-semibold">
                        {unit}
                      </span>
                    </div>
                  ) : (
                    <div className="text-lg font-semibold text-[#6A7A8C]">
                      {statusCardValues[item.key]}
                      {unit && <span className="ml-1">{unit}</span>}
                    </div>
                  )}

                  {item.toggle && (
                    <CustomToggleSwitch
                      id={`tp-${item.key}-status`}
                      checked={tpStates[item.key as keyof typeof tpStates]}
                      onChange={() =>
                        handleTpToggle(item.key as keyof typeof tpStates)
                      }
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <LastSellTransactions />
      {/* <ActivationChecklist /> */}

      <div className="flex flex-col gap-4">
        <h2 className="text-white text-2xl font-semibold">Summary Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <MatrixCard
            icon="/assets/supply-held.svg"
            label="Supply Held"
            value="182,000 ORBT"
          />
          <MatrixCard
            icon="/assets/live-pnl.svg"
            label="Total Sold"
            value={`3,920 SOL`}
          />
          <MatrixCard
            icon="/assets/total-sold.svg"
            label="Live PNL"
            value={`+142.3%`}
          />
        </div>
      </div>

      {/* Show Modal */}
      {showWalletModal && <SelectWalletModal onClose={handleCloseModal} />}
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
