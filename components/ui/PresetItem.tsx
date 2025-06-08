import React from "react";
import { Edit, Trash2, Play } from "lucide-react";

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
        <Play size={18} color="#E8EAED" className="cursor-pointer" onClick={onPlay} />
        <Edit size={18} color="#E8EAED" className="cursor-pointer" onClick={onEdit} />
        <Trash2 size={18} color="#E8EAED" className="cursor-pointer" onClick={onDelete} />
      </div>
    </div>
  );
};

export default PresetItem;
