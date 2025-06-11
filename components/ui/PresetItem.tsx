import React from "react";
import Image from "next/image";

interface PresetItemProps {
  title: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
  onPlay: () => void;
  icon: React.ReactNode;  // Allow passing any icon component here
}

const PresetItem: React.FC<PresetItemProps> = ({
  title,
  description,
  onEdit,
  onDelete,
  onPlay,
  icon
}) => {
  return (
    <div className="flex justify-between items-center py-4 rounded-lg">
      <div className="flex gap-2">
        <div className="flex justify-center items-center bg-[#101217] border border-[#22242D] rounded-sm w-11 h-11">
          {icon}
        </div>
        <div>
          <p className="text-white font-semibold">{title}</p>
          <p className="text-[#6A7A8C] text-sm">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="cursor-pointer" onClick={onEdit}>
          <Image src="/assets/pencil.svg" alt="Edit" width={20} height={20} />
        </div>
        <div className="cursor-pointer" onClick={onPlay}>
          <Image src="/assets/play.svg" alt="Play" width={24} height={24} />
        </div>
        <div className="cursor-pointer" onClick={onDelete}>
          <Image src="/assets/delete.svg" alt="Delete" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default PresetItem;
