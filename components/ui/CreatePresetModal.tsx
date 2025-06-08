"use client";
import React, { useState } from "react";
import DashboardActions from "./DashboardActions";

interface CreatePresetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preset: {
    name: string;
    devBuy: string;
    devTip: string;
    snipeWallet: string;
    snipeBuy: string;
    snipeTip: string;
    maxSniper: string;
  }) => void;
}

const CreatePresetModal: React.FC<CreatePresetModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [presetName, setPresetName] = useState("");
  const [devBuy, setDevBuy] = useState("");
  const [devTip, setDevTip] = useState("");
  const [snipeWallet, setSnipeWallet] = useState("");
  const [snipeBuy, setSnipeBuy] = useState("");
  const [snipeTip, setSnipeTip] = useState("");
  const [maxSniper, setMaxSniper] = useState("");

  const handleSave = () => {
    onSave({
      name: presetName,
      devBuy,
      devTip,
      snipeWallet,
      snipeBuy,
      snipeTip,
      maxSniper,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div
        className="bg-[#0D0E12] rounded-lg p-6 flex flex-col justify-between"
        style={{ width: "700px", height: "520px" }}
      >
        <h1 className="text-2xl text-white mb-4">
          Create Preset
        </h1>

        <div className="flex flex-col gap-4 flex-grow overflow-y-auto">
          {/* Preset Name */}
          <div
            className="flex flex-col bg-[#101017] border border-[#22242D] rounded-lg px-4 py-2"
            style={{ height: "72px" }}
          >
            <p className="text-xs text-[#6A7A8C]">PRESET NAME</p>
            <input
              type="text"
              value={presetName}
              onChange={(e) => setPresetName(e.target.value)}
              className="bg-transparent text-white placeholder-white outline-none mt-1"
              placeholder="Phoniex"
            />
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="flex flex-col bg-[#101017] border border-[#22242D] rounded-lg px-4 py-2"
              style={{ height: "72px" }}
            >
              <p className="text-xs text-[#6A7A8C]">DEV BUY</p>
              <input
                type="text"
                value={devBuy}
                onChange={(e) => setDevBuy(e.target.value)}
                className="bg-transparent text-white placeholder-white outline-none mt-1"
                placeholder="0%"
              />
            </div>

            <div
              className="flex flex-col bg-[#101017] border border-[#22242D] rounded-lg px-4 py-2"
              style={{ height: "72px" }}
            >
              <p className="text-xs text-[#6A7A8C]">DEV TIP</p>
              <input
                type="text"
                value={devTip}
                onChange={(e) => setDevTip(e.target.value)}
                className="bg-transparent text-white placeholder-white outline-none mt-1"
                placeholder="0 SOL"
              />
            </div>

            <div
              className="flex flex-col bg-[#101017] border border-[#22242D] rounded-lg px-4 py-2"
              style={{ height: "72px" }}
            >
              <p className="text-xs text-[#6A7A8C]">SNIPE WALLET</p>
              <input
                type="text"
                value={snipeWallet}
                onChange={(e) => setSnipeWallet(e.target.value)}
                className="bg-transparent text-white placeholder-white outline-none mt-1"
                placeholder="0%"
              />
            </div>

            <div
              className="flex flex-col bg-[#101017] border border-[#22242D] rounded-lg px-4 py-2"
              style={{ height: "72px" }}
            >
              <p className="text-xs text-[#6A7A8C]">SNIPE BUY</p>
              <input
                type="text"
                value={snipeBuy}
                onChange={(e) => setSnipeBuy(e.target.value)}
                className="bg-transparent text-white placeholder-white outline-none mt-1"
                placeholder="0%"
              />
            </div>

            <div
              className="flex flex-col bg-[#101017] border border-[#22242D] rounded-lg px-4 py-2"
              style={{ height: "72px" }}
            >
              <p className="text-xs text-[#6A7A8C]">SNIPE TIP</p>
              <input
                type="text"
                value={snipeTip}
                onChange={(e) => setSnipeTip(e.target.value)}
                className="bg-transparent text-white placeholder-white outline-none mt-1"
                placeholder="0 SOL"
              />
            </div>

            <div
              className="flex flex-col bg-[#101017] border border-[#22242D] rounded-lg px-4 py-2"
              style={{ height: "72px" }}
            >
              <p className="text-xs text-[#6A7A8C]">MAX SNIPER</p>
              <input
                type="text"
                value={maxSniper}
                onChange={(e) => setMaxSniper(e.target.value)}
                className="bg-transparent text-white placeholder-white outline-none mt-1"
                placeholder="0%"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end pt-4">
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

export default CreatePresetModal;
