"use client";
import React, { useState } from "react";
import DashboardActions from "./DashboardActions";

const AddWalletModal = ({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (address: string) => void;
}) => {
  const [walletAddress, setWalletAddress] = useState("");

  const handleAdd = () => {
    if (walletAddress.trim()) {
      onAdd(walletAddress);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0000008d] flex justify-center items-center z-50">
      <div className="bg-[#101017] rounded-lg p-6 w-96">
        <h3 className="text-white text-2xl p-2 mb-4">Add Wallet</h3>
        <div
            className="flex flex-col bg-[#101017] mb-5 border border-[#22242D] rounded-lg px-4 py-2"
            style={{ height: "72px" }}
          >
            <p className="text-sm text-[#6A7A8C]">Wallet Address</p>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="bg-transparent text-white placeholder-white outline-none mt-1"
              // placeholder="Phoniex"
            />
          </div>

        <DashboardActions
          onFirstAction={onClose}
          onSecondAction={handleAdd}
          firstLabel="Cancel"
          secondLabel="Add"
        />
      </div>
    </div>
  );
};

export default AddWalletModal;
