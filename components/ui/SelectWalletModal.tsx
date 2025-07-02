"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import DashboardActions from "./DashboardActions"; // Import your DashboardActions component
import AddWalletModal from "./AddWalletModal";

interface Wallet {
  id: string;
  name: string;
}

const walletsData: Wallet[] = [
  { id: "wallet_22x9A...3Fb_1", name: "wallet_22x9A...3Fb" },
  { id: "wallet_22x9A...3Fb_2", name: "wallet_22x9A...3Fb" },
  { id: "wallet_22x9A...3Fb_3", name: "wallet_22x9A...3Fb" },
  { id: "wallet_22x9A...3Fb_4", name: "wallet_22x9A...3Fb" },
  { id: "wallet_22x9A...3Fb_5", name: "wallet_22x9A...3Fb" },
];

const SelectWalletModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedWallets, setSelectedWallets] = useState<Set<string>>(
    new Set()
  );
  const [expand, setExpand] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSelectWallet = (id: string) => {
    setSelectedWallets((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const handleSave = () => {
    console.log("Selected Wallets:", Array.from(selectedWallets));
    onClose(); // Close the modal after saving
  };

  const handleCancel = () => {
    setSelectedWallets(new Set()); // Clear the selected wallets if canceled
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-[#0000008d] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#101017] rounded-lg p-6 w-96">
        <h3 className="text-white text-xl font-semibold mb-4">Select Wallet</h3>
        <h3
          className="text-[#8761FF] text-lg cursor-pointer mb-4"
          onClick={() => setShowAddModal(true)}
        >
          + Add Wallet
        </h3>
 <div className="space-y-4 bg-[#14161B] p-4 mb-4 pb-2">
  <div
    className="flex justify-between items-center mb-3 cursor-pointer"
    onClick={() => setExpand(!expand)}
  >
    <span className="text-white">All Project Wallets</span>
    <ChevronDown
      size={18}
      className={`transform transition-transform ${expand ? "rotate-180" : ""}`}
    />
  </div>
  {expand && (
    <div className="my-2 max-h-48 overflow-y-auto pr-1 custom-scroll space-y-2">
      {walletsData.map((wallet) => (
        <label
          key={wallet.id}
          className="flex items-center px-4 py-2 text-white cursor-pointer hover:bg-[#1a1b1f] rounded"
        >
          <input
            type="checkbox"
            checked={selectedWallets.has(wallet.id)}
            onChange={() => handleSelectWallet(wallet.id)}
            className="mr-3 h-4 w-4"
          />
          <span>{wallet.name}</span>
        </label>
      ))}
    </div>
  )}
</div>


        {/* Action Buttons (Cancel, Save) */}
        <DashboardActions
          onFirstAction={handleCancel} // Cancel button handler
          onSecondAction={handleSave} // Save button handler
          firstLabel="Cancel"
          secondLabel="Save"
        />
      </div>
      {showAddModal && (
        <AddWalletModal
          onClose={() => setShowAddModal(false)}
          onAdd={(newAddress) => {
            const newId = `${newAddress}_${walletsData.length + 1}`;
            walletsData.push({ id: newId, name: newAddress });
          }}
        />
      )}
    </div>
  );
};

export default SelectWalletModal;
