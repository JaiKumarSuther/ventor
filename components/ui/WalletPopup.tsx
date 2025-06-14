"use client";
import React, { useState } from "react";
import DashboardActions from "@/components/ui/DashboardActions"; // Adjust path if needed

// Reusable FloatingInput Component
const FloatingInput = ({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="relative">
      <div className="w-full bg-[#101017] border min-h-[74px] border-[#22242D] rounded-md px-4 flex items-center pt-4">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
          placeholder={placeholder}
          className="bg-transparent w-full text-white font-semibold placeholder-[#fff] text-sm focus:outline-none"
        />
      </div>
      <label className="absolute left-4 top-4 text-xs text-[#6A7A8C] transition-all">
        {label}
      </label>
    </div>
  );
};

interface WalletPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (wallets: string) => void;
}

const WalletPopup: React.FC<WalletPopupProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [wallets, setWallets] = useState<string>("");

  const handleSave = () => {
    onSave(wallets);
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-[#0008] bg-opacity-50">
        <div className="bg-[#101017] rounded-lg p-6 w-[631px]">
          <h3 className="text-xl text-white mb-4">Number of trade per wallet (free of charges)</h3>

          <FloatingInput
            label="NO OF WALLETS"
            value={wallets}
            placeholder=""
            onChange={(value) => setWallets(value)}
          />

          <div className="flex justify-end pt-6">
            <DashboardActions
              onFirstAction={onClose}
              onSecondAction={handleSave}
              firstLabel="Cancel"
              secondLabel="Save"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default WalletPopup;
