"use client";

import React, { useState } from "react";
import GradientButton from "@/components/ui/GradientButton";

interface CreateCTOModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (ctoAddress: string) => void;
}

const CreateCTOModal: React.FC<CreateCTOModalProps> = ({ isOpen, onClose, onSave }) => {
  const [ctoAddress, setCtoAddress] = useState("");

  const handleSave = () => {
    if (!ctoAddress.trim()) return;
    onSave(ctoAddress);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-[#101017] rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-white text-2xl mb-3">
          Enter CTO Wallet Address
        </h2>

        <div className="mb-3 bg-[#0D0E12] rounded-lg border border-[#22242D] px-4 py-3">
          <p className="text-[11px] text-[#6A7A8C] font-medium mb-1 uppercase">
            CTO Wallet Address
          </p>
          <input
            type="text"
            value={ctoAddress}
            onChange={(e) => setCtoAddress(e.target.value)}
            placeholder="Enter"
            className="w-full bg-transparent outline-none text-white text-sm placeholder:text-[#999]"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="px-5 h-10 rounded-full border border-[#7458E7] text-[#7458E7] hover:bg-[#8761FF]/10 text-sm"
            onClick={onClose}
          >
            Cancel
          </button>

          <GradientButton
            label="Save"
            onClick={handleSave}
            gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
            hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
            className="h-10 px-6 text-sm font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCTOModal;
