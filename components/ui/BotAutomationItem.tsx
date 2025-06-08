import React from "react";
import CustomToggleSwitch from "./CustomToggleSwitch";

interface BotAutomationItemProps {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}

const BotAutomationItem: React.FC<BotAutomationItemProps> = ({
  title,
  description,
  enabled,
  onToggle,
  icon,
}) => {
  return (
    <div className="flex justify-between items-center py-4 rounded-lg">
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center bg-[#101217] border border-[#22242D] rounded-sm w-11 h-11">
          {icon}
        </div>
        <div>
          <p className="text-white font-semibold">{title}</p>
          <p className="text-[#6A7A8C] text-sm">{description}</p>
        </div>
      </div>
      <CustomToggleSwitch
        id={`switch-${title.replace(/\s+/g, "-").toLowerCase()}`}
        checked={enabled}
        onChange={onToggle}
      />
    </div>
  );
};

export default BotAutomationItem;
