import Image from "next/image";
import React from "react";

export default function LifecycleProgress({ progress }: { progress: number }) {
  return (
    <div className="bg-[#0D0E12] border border-[#22242D] rounded-xl p-5">
      {/* Title Row */}
      <div className="flex items-center gap-2 mb-3">
        <Image
          src="/assets/progress.svg"
          width={16}
          height={16}
          alt="Progress Icon"
        />
        <h4 className="text-white text-sm font-medium">Lifecycle Progress</h4>
      </div>

      {/* Progress Info */}
      <div className="text-sm text-[#6A7A8C] mb-3">
        Current completion:{" "}
        <span className="text-[#8761FF] font-semibold">{progress}%</span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-[#1F1F26] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-t from-[#5A43C6] to-[#8761FF] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
