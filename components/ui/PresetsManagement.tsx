"use client";
import React, { useState } from "react";
import PresetItem from "./PresetItem";
import GradientButton from "./GradientButton";
import CreatePresetModal from "./CreatePresetModal"; // Import the modal component
import Image from "next/image";

interface PresetData {
  name: string;
  devBuy: string;
  devTip: string;
  snipeWallet: string;
  snipeBuy: string;
  snipeTip: string;
  maxSniper: string;
}

const PresetsManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSavePreset = (presetData: PresetData) => {
    console.log("Preset saved:", presetData);
    // Here you can integrate saving logic (API call, local storage, etc.)
    setIsModalOpen(false);
  };

  return (
    <div className="mb-8 border-b py-10 border-[#22242D]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-md md:text-2xl lg:text-3xl font-semibold text-white">
          Presents Management
        </h1>
        <GradientButton
          label="Create Present"
          onClick={handleOpenModal}
          gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
          hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
          className="h-8 md:h-10 w-35 md:w-40"
        />
      </div>

      <div className="flex flex-col gap-0">
        <PresetItem
          title="Aggressive Snipe"
          description="High risk, High reward"
          onPlay={() => {}}
          onEdit={() => {}}
          onDelete={() => {}}
          icon={
            <Image src="/assets/zap.svg" alt="Edit" width={20} height={20} />
          }
        />

        <PresetItem
          title="Safe Mode"
          description="Low risk, Conservative"
          onPlay={() => {}}
          onEdit={() => {}}
          onDelete={() => {}}
          icon={
            <Image src="/assets/shield.svg" alt="Edit" width={20} height={20} />
          }
        />
      </div>

      <p className="mt-4 text-[#6A7A8C]">
        Delete Preset? This action cannot be undone.
      </p>

      {/* Create Present Modal */}
      <CreatePresetModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSavePreset}
      />
    </div>
  );
};

export default PresetsManagement;
