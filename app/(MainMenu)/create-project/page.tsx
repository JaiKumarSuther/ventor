"use client";
import React, { useState } from "react";
import StepIndicator from "@/components/ui/StepIndicator";
import ProjectMetadataStep from "@/components/ui/ProjectMetadataStep";
import WalletSetupStep from "@/components/ui/WalletSetupStep";
import { useRouter } from "next/navigation";
import SniperSettingsStep from "@/components/ui/SniperSettingsStep";
import SettingOverview from "@/components/ui/OverviewStep";
import LaunchModeStep from "@/components/ui/LaunchModeStep";

export default function CreateProject() {
  const [currentStep, setCurrentStep] = useState(1);

  const [projectData, setProjectData] = useState({
    projectName: "",
    tokenSymbol: "",
    launchpad: "",
    description: "",
    imageFile: null as File | null,
    twitterUrl: "",
    websiteUrl: "",
    telegramUrl: "",
    selectedWallets: [] as number[],
    selectedBatches: [] as number[],
    launchMode: "",
    sniperSettings: {
      devBuy: 2.4,
      totalSnipe: 2.4,
      buyRange: { min: 3.8, max: 4.4 },
      tidAmount: [78, 95, 97, 99],
    },
  });
  const router = useRouter(); // Initialize useRouter

  const steps = [
    { number: 1, title: "Project Metadata Configuration", subtitle: "Step 1" },
    { number: 2, title: "Launch Mode", subtitle: "Step 2" },
    { number: 3, title: "Wallet setup", subtitle: "Step 3" },
    { number: 4, title: "Sniper Settings", subtitle: "Step 4" },
    { number: 5, title: "Overview", subtitle: "Step 5" },
  ];

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };
  const handleFinish = () => {
    router.push("/features/overview"); // Redirect to '/myprofile' using router.push
  };

  const updateProjectData = (data: Partial<typeof projectData>) => {
    setProjectData((prev) => ({ ...prev, ...data }));
  };

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber); // Update current step on click
  };

  return (
    <div className="bg-[#06070B] px-5 pb-14 md:px-0 w-full">
      <div className="flex flex-col w-full px-0 gap-8">
        <h1 className="text-3xl  md:px-0 font-semibold pb-5 text-[#FFFFFF] border-b border-[#FFFFFF14]">
          Create Project
        </h1>

        <div className="bg-[#FFFFFF05] px-4 md:px-6 py-5 border border-[#FFFFFF1A] rounded-lg">
          <StepIndicator
            steps={steps}
            currentStep={currentStep}
            onStepClick={handleStepClick} // Pass the step click handler
          />
          <div className="">
            {currentStep === 1 && (
              <ProjectMetadataStep
                data={projectData}
                updateData={updateProjectData}
                onNext={handleNext}
                onCancel={handleCancel}
              />
            )}

            {currentStep === 2 && (
              <LaunchModeStep
                data={{ launchMode: projectData.launchMode }}
                updateData={(data) => updateProjectData(data)}
                onNext={handleNext}
                onCancel={handleCancel}
              />
            )}

            {currentStep === 3 && (
              <WalletSetupStep
                data={projectData}
                updateData={updateProjectData}
                onNext={handleNext}
                onCancel={handleCancel}
              />
            )}
            {currentStep === 4 && (
              <SniperSettingsStep
                onNext={handleNext}
                onCancel={handleCancel}
                launchMode={projectData.launchMode} // ✅ pass it here
              />
            )}
            {currentStep === 5 && (
              <SettingOverview
                onFinish={handleFinish}
                onCancel={handleCancel}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
