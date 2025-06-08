"use client";
import React, { useState } from "react";
import PageContainer from "@/components/ui/PageContainer";
import PresetsManagement from "@/components/ui/PresetsManagement";
import BotAutomation from "@/components/ui/BotAutomation";
import GeneralSettings from "@/components/ui/GeneralSettings";


const SettingsPage: React.FC = () => {
  const [tipAmountEnabled, setTipAmountEnabled] = useState(false);
  const [priorityFeeEnabled, setPriorityFeeEnabled] = useState(false);

  const handleToggleTipAmount = () => setTipAmountEnabled((prev) => !prev);
  const handleTogglePriorityFee = () => setPriorityFeeEnabled((prev) => !prev);

  const [autoSell, setAutoSell] = useState(false);
  const [autoDump, setAutoDump] = useState(false);
  const [smartSell, setSmartSell] = useState(false);

  return (
    <PageContainer>
     <GeneralSettings
        tipAmountEnabled={tipAmountEnabled}
        priorityFeeEnabled={priorityFeeEnabled}
        onToggleTipAmount={handleToggleTipAmount}
        onTogglePriorityFee={handleTogglePriorityFee}
      />
      <PresetsManagement />
      <BotAutomation
        autoSell={autoSell}
        autoDump={autoDump}
        smartSell={smartSell}
        toggleAutoSell={() => setAutoSell(!autoSell)}
        toggleAutoDump={() => setAutoDump(!autoDump)}
        toggleSmartSell={() => setSmartSell(!smartSell)}
      />
    </PageContainer>
  );
};

export default SettingsPage;
