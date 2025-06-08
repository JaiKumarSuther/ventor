import React from "react";
import BotAutomationItem from "./BotAutomationItem";
import Image from "next/image";

interface BotAutomationProps {
  autoSell: boolean;
  autoDump: boolean;
  smartSell: boolean;
  toggleAutoSell: () => void;
  toggleAutoDump: () => void;
  toggleSmartSell: () => void;
}

const BotAutomation: React.FC<BotAutomationProps> = ({
  autoSell,
  autoDump,
  smartSell,
  toggleAutoSell,
  toggleAutoDump,
  toggleSmartSell,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white mb-4">Bot Automation</h1>
      <div className="flex flex-col gap-4">
        <BotAutomationItem
          title="Auto Sell"
          description="Sell token automatically at target"
          enabled={autoSell}
          onToggle={toggleAutoSell}
          icon={
            <Image src="/assets/refresh.svg" width={20} height={20} alt="Refresh" />
          }
        />

        <BotAutomationItem
          title="Auto Dump"
          description="Dump tokens if sniper limit exceeded"
          enabled={autoDump}
          onToggle={toggleAutoDump}
          icon={
            <Image src="/assets/warning.svg" width={20} height={20} alt="Warning" />
          }
        />

        <BotAutomationItem
          title="Smart Sell Settings"
          description="Update smart sell settings"
          enabled={smartSell}
          onToggle={toggleSmartSell}
          icon={
            <Image src="/assets/warning.svg" width={20} height={20} alt="Warning" />
          }
        />
      </div>
      <p>Toggle instantly update bot behavior.</p>
    </div>
  );
};

export default BotAutomation;
