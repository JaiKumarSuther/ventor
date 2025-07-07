"use client";
import React, { useState } from "react";
import DashboardActions from "./DashboardActions";

interface TPEntry {
  mcap: string;
  percent: string;
}

interface TPModalProps {
  isOpen: boolean;
  onClose: () => void;
  walletId: string;
  onSave: (walletId: string, tps: TPEntry[]) => void;
  initialTPs: TPEntry[];
}

const TPModal: React.FC<TPModalProps> = ({
  isOpen,
  onClose,
  walletId,
  onSave,
  initialTPs,
}) => {
  const [tpList, setTpList] = useState<TPEntry[]>(initialTPs || []);
  const [newTP, setNewTP] = useState<TPEntry>({ mcap: "", percent: "" });
  const [errors, setErrors] = useState<{ mcap?: string; percent?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!newTP.mcap || isNaN(+newTP.mcap) || +newTP.mcap <= 0) {
      newErrors.mcap = "Enter a valid positive MCAP";
    }

    if (
      !newTP.percent ||
      isNaN(+newTP.percent) ||
      +newTP.percent < 0 ||
      +newTP.percent > 100
    ) {
      newErrors.percent = "Enter % between 0 and 100";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddTP = () => {
    if (!validate()) return;

    setTpList([...tpList, newTP]);
    setNewTP({ mcap: "", percent: "" });
    setErrors({});
  };

  const handleSave = () => {
    onSave(walletId, tpList);
    onClose();
  };

  const restrictToNumbers = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight"];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center px-4">
      <div className="bg-[#0D0E12] p-6 rounded-xl w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">TPs</h2>
          <button
            onClick={handleAddTP}
            className="text-white bg-[#22242D] px-3 py-1 rounded-full hover:bg-[#33353C]"
          >
            +
          </button>
        </div>

        {/* TP List */}
        <div className="space-y-3 mb-4 max-h-48 overflow-y-auto custom-scroll">
          {tpList.map((tp, index) => (
            <div
              key={index}
              className="flex justify-between text-sm text-[#B4B4B4] border-b border-[#22242D] pb-1"
            >
              <span>MCAP: {tp.mcap}</span>
              <span>%: {tp.percent}</span>
            </div>
          ))}
        </div>

        {/* Input Fields */}
        <div className="flex gap-2 mb-1">
          <div className="flex-1">
            <input
              className="w-full px-3 py-2 text-sm bg-[#1A1B20] text-white border border-[#22242D] rounded-md"
              placeholder="MCAP"
              value={newTP.mcap}
              onChange={(e) =>
                setNewTP((prev) => ({ ...prev, mcap: e.target.value }))
              }
            />
            {errors.mcap && (
              <p className="text-xs text-red-500 mt-1">{errors.mcap}</p>
            )}
          </div>

          <div className="flex-1">
            <input
              min={0}
              max={100}
              onKeyDown={restrictToNumbers}
              className="w-full px-3 py-2 text-sm bg-[#1A1B20] text-white border border-[#22242D] rounded-md"
              placeholder="%"
              value={newTP.percent}
              onChange={(e) =>
                setNewTP((prev) => ({ ...prev, percent: e.target.value }))
              }
            />
            {errors.percent && (
              <p className="text-xs text-red-500 mt-1">{errors.percent}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 mt-4">
          <DashboardActions
            onFirstAction={onClose}
            onSecondAction={handleSave}
            firstLabel="Cancel"
            secondLabel="Save"
          />
        </div>
      </div>
    </div>
  );
};

export default TPModal;
