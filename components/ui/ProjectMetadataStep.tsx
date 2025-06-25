"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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
      <div className="w-full bg-[#101017] border min-h-[74px] border-[#22242D] rounded-md px-4 flex items-center pt-4">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="bg-transparent w-full text-white font-semibold placeholder-[#6A7A8C] text-sm focus:outline-none"
        />
      </div>
      <label className="absolute left-4 top-4 text-xs text-[#6A7A8C] transition-all">
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

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const [selectedLaunchpad, setSelectedLaunchpad] = useState<string>(
    data.launchpad || "Pump Fun"
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const launchpadOptions = ["Pump Fun", "Bonk", "LaunchLab"];

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const selectLaunchpad = (value: string) => {
    setSelectedLaunchpad(value);
    handleInputChange("launchpad", value); // update parent data
    setShowDropdown(false);
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

        <div className="relative flex flex-col items-center w-full md:flex-row md:w-auto flex-1 gap-2 md:gap-6 mb-4 md:mb-8">
          <div className="relative flex flex-col items-center w-full md:flex-row md:w-auto flex-1 gap-2 md:gap-6 mb-4 md:mb-8">
            <div
              className="bg-[#101114] border border-[#22242D] rounded-lg flex justify-between items-center px-5 py-2 h-[72px] cursor-pointer w-full relative"
              onClick={toggleDropdown}
            >
              <div>
                <p className="text-[#6A7A8C] text-xs">Launchpad</p>
                <h1 className="text-sm font-semibold text-white pt-1">
                  {selectedLaunchpad}
                </h1>
              </div>
              <ChevronDown
                size={20}
                color="#6A7A8C"
                className={`transform transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
              {showDropdown && (
                <div className="absolute top-[78px] left-0 right-0 bg-[#101114] border border-[#22242D] rounded-lg z-10 max-h-60 overflow-y-auto">
                  {launchpadOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="w-full text-left px-5 py-2 text-white hover:bg-[#1a1b1f] cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents re-triggering toggleDropdown
                        selectLaunchpad(option);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="relative">
        <textarea
          value={data.description || ""}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="NFT launchpad for Solana creators"
          className="w-full bg-[#101017] border border-[#22242D] rounded-md px-3 pt-6 pb-2 text-white placeholder-[#fff] text-sm min-h-[144px] resize-none focus:outline-none"
        />
        <label className="absolute left-3 top-2 text-xs text-[#6A7A8C]">
          Description
        </label>
      </div>

      {/* Upload Box (File Upload with Click Anywhere to Trigger) */}
      <div
        className="bg-[#101114] flex flex-col border border-[#22242D] p-4 gap-4"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const files = Array.from(e.dataTransfer.files);
          files.forEach((file) => {
            if (file.type.startsWith("image/")) {
              const reader = new FileReader();
              reader.onload = () => {
                setUploadedImages((prev) => [...prev, reader.result as string]);
              };
              reader.readAsDataURL(file);
            }
          });
        }}
      >
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center gap-2 rounded-lg p-6 text-center cursor-pointer w-full hover:bg-[#18191b]"
        >
          <div className="flex items-center justify-center border border-[#22242D] rounded-md w-10 h-10">
            <Image
              src="/assets/upload-cloud.svg"
              width={20}
              height={20}
              alt="Upload"
            />
          </div>
          <div className="flex flex-wrap gap-1 justify-center items-center text-center px-2 sm:px-0">
            <p className="text-sm bg-gradient-to-b from-[#5A43C6] to-[#8761FF] bg-clip-text text-transparent font-medium whitespace-nowrap">
              Click to Add or Remove
            </p>
            <p className="text-sm text-[#6A7A8C] whitespace-nowrap">
              or drag and drop
            </p>
          </div>

          <input
            type="file"
            id="file-upload"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              files.forEach((file) => {
                if (file.type.startsWith("image/")) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setUploadedImages((prev) => [
                      ...prev,
                      reader.result as string,
                    ]);
                  };
                  reader.readAsDataURL(file);
                }
              });
            }}
          />
        </label>

        {uploadedImages.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-2">
            {uploadedImages.map((src, idx) => (
              <div key={idx} className="relative">
                <Image
                  src={src}
                  alt={`Uploaded ${idx + 1}`}
                  width={80}
                  height={80}
                  className="object-cover rounded border border-[#333]"
                  style={{ height: "80px", width: "80px" }}
                />
                <button
                  className="absolute cursor-pointer top-[-6px] right-[-6px] bg-red-600 rounded-full text-white w-5 h-5 text-xs flex items-center justify-center"
                  onClick={() =>
                    setUploadedImages((prev) =>
                      prev.filter((_, i) => i !== idx)
                    )
                  }
                  type="button"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
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
