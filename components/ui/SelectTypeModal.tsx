"use client";

import React from "react";
import GradientButton from "@/components/ui/GradientButton";
import { X } from "lucide-react";

interface SelectTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCTOClick: () => void;
  onNewProjectClick: () => void;
}

const SelectTypeModal: React.FC<SelectTypeModalProps> = ({
  isOpen,
  onClose,
  onCTOClick,
  onNewProjectClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 sm:px-6">
      <div className="bg-[#0D0E12] rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg py-10 px-6 sm:px-10 relative">
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">
            Select Type
          </h2>
          <X
            className="text-white cursor-pointer hover:text-gray-300"
            size={20}
            onClick={onClose}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <GradientButton
            label="CTO"
            onClick={onCTOClick}
            gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
            hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
            className="flex-1 h-12 rounded-full text-sm sm:text-base"
          />
          <GradientButton
            label="New Project"
            onClick={onNewProjectClick}
            gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
            hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
            className="flex-1 h-12 rounded-full text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectTypeModal;
