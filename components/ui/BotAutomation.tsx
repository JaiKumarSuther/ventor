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
  toggleAutoSell,
  toggleAutoDump,
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
            <Image
              src="/assets/refresh.svg"
              width={20}
              height={20}
              alt="Refresh"
            />
          }
        />

        <BotAutomationItem
          title="Auto Dump"
          description="Dump tokens if sniper limit exceeded"
          enabled={autoDump}
          onToggle={toggleAutoDump}
          icon={
            <Image
              src="/assets/warning.svg"
              width={20}
              height={20}
              alt="Warning"
            />
          }
        />

       
        <div className="flex justify-between items-center py-4 rounded-lg mb-10">
          <div className="flex gap-2 items-center">
            <div className="flex justify-center items-center bg-[#101217] border border-[#22242D] rounded-sm w-11 h-11">
               <Image
              src="/assets/warning.svg"
              width={20}
              height={20}
              alt="Warning"
            />
            </div>
            <div>
              <p className="text-white font-semibold">Smart Sell Settings</p>
              <p className="text-[#6A7A8C] text-sm">Update smart sell settings</p>
            </div>
          </div>
           <Image
              src="/assets/edit-white.svg"
              width={24}
              height={24}
              alt="Warning"
              className="cursor-pointer"
            />
          
        </div>
      </div>
      <p>Toggle instantly update bot behavior.</p>
    </div>
  );
};

export default BotAutomation;
