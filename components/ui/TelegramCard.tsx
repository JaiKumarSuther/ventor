"use client";
import React from "react";
import Image from "next/image";

interface TelegramCardProps {
  username: string;
  connected: boolean;
}

const TelegramCard: React.FC<TelegramCardProps> = ({ username, connected }) => {
  return (
    <div className="p-4 rounded-lg border-b border-[#22242D] pb-5 flex items-center gap-4">
      {/* Profile image placeholder */}
      <div className="w-10 h-10 rounded-full overflow-hidden relative">
        <Image
          src="/assets/profile.svg" // Replace with actual path if needed
          alt="Telegram profile"
          fill
          className="object-cover"
          sizes="40px"
        />
      </div>

      {/* Username and connection status */}
      <div className="flex-1">
        <p className="text-white font-semibold">@{username}</p>
        {connected && (
          <p className="text-xs text-[#B4B4B4]">Connected via Telegram</p>
        )}
      </div>
    </div>
  );
};

export default TelegramCard;
