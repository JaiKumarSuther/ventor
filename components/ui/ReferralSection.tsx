"use client";
import React, { useState } from "react";
import { Copy } from "lucide-react";

export default function ReferralSection() {
  const [referralLink] = useState("https://t.me/app/r/ph6r123");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-white text-xl font-semibold">Referral</h2>
      
      <div className="space-y-2">
        <label className="text-[#B4B4B4] text-sm block">Referral Link</label>
        <div className="flex items-center gap-2 p-3 bg-[#101017] border border-[#22242D] rounded-lg">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 bg-transparent text-white text-sm outline-none"
          />
          <button
            onClick={handleCopyLink}
            className="p-2 hover:bg-[#22242D] cursor-pointer rounded-lg transition-colors"
            title="Copy to clipboard"
          >
            <Copy size={16} className="text-[#B4B4B4]" />
          </button>
        </div>
        {copied && (
          <p className="text-[#8761FF] text-xs">Link copied to clipboard!</p>
        )}
      </div>
    </div>
  );
}