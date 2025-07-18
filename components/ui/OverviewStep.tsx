"use client";
import React, { useState } from "react";
import DashboardActions from "@/components/ui/DashboardActions";
import DataTable from "@/components/ui/DataTable";
import GradientCheckbox from "@/components/ui/GradientCheckbox";

interface SettingOverviewProps {
  onFinish: () => void;
  onCancel: () => void;
}

export default function SettingOverview({
  onFinish,
  onCancel,
}: SettingOverviewProps) {
  const selectedWallets = [
    {
      id: 1,
      name: "Wallet 1",
      address: "wallet_22x9A...3Fb",
      balance: 0,
      use: 1,
      age: 1,
    },
    {
      id: 2,
      name: "Wallet 2",
      address: "wallet_3y7ZK...1Ab",
      balance: 0,
      use: 1,
      age: 1,
    },
    {
      id: 3,
      name: "Wallet 3",
      address: "wallet_9xQ2L...7Vc",
      balance: 0,
      use: 1,
      age: 1,
    },
    {
      id: 4,
      name: "Wallet 4",
      address: "wallet_5mNpT...8Ys",
      balance: 0,
      use: 1,
      age: 1,
    },
  ];

  const [isBatch1Selected, setIsBatch1Selected] = useState<boolean>(false);

  const walletTableRows = selectedWallets.map((wallet) => ({
    id: wallet.id,
    isSelected: wallet.id === 1 || wallet.id === 4,
    onSelect: () => {},
    label: wallet.name,
    subLabel: wallet.address,
    hasCopy: true,

    columns: [
      <span key="balance" className="text-white text-sm">
        {wallet.balance}
      </span>,
      <span key="use" className="text-white text-sm">
        {wallet.use}
      </span>,
      <span key="age" className="text-white text-sm">
        {wallet.age}
      </span>,
    ],
  }));

  const settingData = {
    devBuy: "2.4 SOL",
    totalSnipe: "2.4 SOL",
    burRange: "3.8 - 4.4",
    tipAmount: "97",
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row min-h-[730px]">
        
        {/* Setting Overview Section */}
        <div className="flex flex-col justify-between flex-[5] border border-[#22242D] bg-[#FFFFFF05] border-r-0">
          <div>
            <div className="flex items-center justify-between p-4 border-b border-[#22242D]">
              <h3 className="text-white text-base font-semibold">
                Setting Overview
              </h3>
            </div>

            <div className="p-6 space-y-6">
              {/* Batch 1 Section */}
              <div className="space-y-4">
                <div
                  className="flex items-center gap-2 bg-[#FFFFFF05] h-11 w-full p-4 cursor-pointer"
                  onClick={() => setIsBatch1Selected(!isBatch1Selected)}
                >
                  <div onClick={(e) => e.stopPropagation()} className="flex items-center">
                    <GradientCheckbox
                      checked={isBatch1Selected}
                      onChange={() => setIsBatch1Selected(!isBatch1Selected)}
                    />
                  </div>
                  <span className="text-white text-sm font-medium">
                    Batch 1
                  </span>
                </div>

                <div className="text-xs text-[#6A7A8C] mb-4">
                  *Only wallets in this batch will be available for sniping
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-[#6A7A8C] mb-1">DEV BUY</div>
                    <div className="text-white text-lg font-medium">
                      {settingData.devBuy}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[#6A7A8C] mb-1">
                      TOTAL SNIPE
                    </div>
                    <div className="text-white text-lg font-medium">
                      {settingData.totalSnipe}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[#6A7A8C] mb-1">BUR RANGE</div>
                    <div className="text-white text-lg font-medium">
                      {settingData.burRange}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[#6A7A8C] mb-1">
                      TIP AMOUNT
                    </div>
                    <div className="text-white text-lg font-medium">
                      {settingData.tipAmount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Selected Wallets Section */}
        <div className="flex flex-col justify-between border border-[#22242D] bg-[#0F0F10]">
          <div>
            {/* Top Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#22242D]">
              <h3 className="text-white text-base">Selected Wallets</h3>
            </div>
            <div className="text-sm p-5 border-b border-[#22242D] text-[#6A7A8C]">
              WALLETS: 
              <span className="text-white pl-1 font-semibold">
                {selectedWallets.length}
              </span>
            </div>

            {/* Wallet Table - Checkboxes disabled to show previous selections */}
            <DataTable
              headerColumns={["Address", "Balance", "# Use", "Age"]}
              rows={walletTableRows}
              disableCheckboxes={true}
            />
          </div>
          {/* Bottom Actions */}
          <div className="flex justify-end p-6">
            <DashboardActions
              onFirstAction={onCancel}
              onSecondAction={onFinish}
              firstLabel="Cancel"
              secondLabel="Finish"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
