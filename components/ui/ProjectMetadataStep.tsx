"use client";
import React from "react";
import { Upload } from "lucide-react";
import DashboardActions from "@/components/ui/DashboardActions"; // Adjust path if needed

interface ProjectMetadata {
  projectName?: string;
  tokenSymbol?: string;
  launchpad?: string;
  description?: string;
  twitterUrl?: string;
  websiteUrl?: string;
  telegramUrl?: string;
}

interface ProjectMetadataStepProps {
  data: ProjectMetadata;
  updateData: (data: Partial<ProjectMetadata>) => void;
  onNext: () => void;
  onCancel: () => void;
}

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
      <div className="w-full bg-[#101017] border min-h-[72px] border-[#22242D] rounded-md px-3 flex items-center">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="bg-transparent w-full text-white font-semibold placeholder-[#fff] text-sm focus:outline-none"
        />
      </div>
      <label className="absolute left-3 top-2 text-xs text-[#6A7A8C] transition-all">
        {label}
      </label>
    </div>
  );
};

export default function ProjectMetadataStep({
  data,
  updateData,
  onNext,
  onCancel,
}: ProjectMetadataStepProps) {
  const handleInputChange = (field: keyof ProjectMetadata, value: string) => {
    updateData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FloatingInput
          label="Project Name"
          value={data.projectName || ""}
          placeholder="SOLPhoenix"
          onChange={(value) => handleInputChange("projectName", value)}
        />
        <FloatingInput
          label="Token Symbol"
          value={data.tokenSymbol || ""}
          placeholder="SOLPX"
          onChange={(value) => handleInputChange("tokenSymbol", value)}
        />
        <FloatingInput
          label="Launchpad"
          value={data.launchpad || ""}
          placeholder="Pump Fun"
          onChange={(value) => handleInputChange("launchpad", value)}
        />
      </div>

      {/* Description */}
      <div className="relative">
        <textarea
          value={data.description || ""}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="NFT launchpad for Solana creators"
          className="w-full bg-[#101017] border border-[#22242D] rounded-md px-3 pt-6 pb-2 text-white placeholder-[#6A7A8C] text-sm min-h-[144px] resize-none focus:outline-none"
        />
        <label className="absolute left-3 top-2 text-xs text-[#B4B4B4]">
          Description
        </label>
      </div>

      {/* Upload Box */}
      <div className="space-y-2">
        <div className="border-2 border-dashed border-[#22242D] rounded-lg p-8 text-center cursor-pointer">
          <Upload className="mx-auto mb-4 text-[#535862]" size={48} />
          <div className="flex gap-1 justify-center">
            <p className="bg-gradient-to-b from-[#5A43C6] to-[#8761FF] bg-clip-text text-transparent">
              Click to upload
            </p>
            <p className="text-sm text-[#6A7A8C]">or drag and drop</p>
          </div>
          <p className="text-xs text-[#6A7A8C] mt-2">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
        </div>
      </div>

      {/* Social URLs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FloatingInput
          label="Twitter URL"
          value={data.twitterUrl || ""}
          placeholder="https://twitter.com/solph"
          onChange={(value) => handleInputChange("twitterUrl", value)}
        />
        <FloatingInput
          label="Website URL"
          value={data.websiteUrl || ""}
          placeholder="https://solphoenix.xyz"
          onChange={(value) => handleInputChange("websiteUrl", value)}
        />
        <FloatingInput
          label="Telegram URL"
          value={data.telegramUrl || ""}
          placeholder="https://solphoenix.xyz"
          onChange={(value) => handleInputChange("telegramUrl", value)}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end pt-6">
        <DashboardActions
          onFirstAction={onCancel}
          onSecondAction={onNext}
          firstLabel="Cancel"
          secondLabel="Next"
        />
      </div>
    </div>
  );
}
