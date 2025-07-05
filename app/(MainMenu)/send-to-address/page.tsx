"use client";

import React, { useState, useEffect } from "react";
import GradientButton from "@/components/ui/GradientButton";
import { useRouter } from "next/navigation";
import { ArrowLeft, Copy } from "lucide-react";

const SendToAddressPage = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(3600); // 1 hour
  const [amount] = useState<number>(100); // 100 SOL
  const [address] = useState<string>("wallet_22x9A...3Fb");
  const [copied, setCopied] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBack = () => router.back();

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
  };

  return (
    <div className="flex flex-col md:pb-12 px-4 rounded-2xl  shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleBack}
          className="text-[#8E8E8E] hover:text-white transition-colors duration-200"
        >
          <ArrowLeft size={28} />
        </button>
        <h2 className="text-white text-2xl font-semibold">Send To Address</h2>
      </div>

      {/* Content Box */}
      <div className="bg-[#101114] border-2 border-[#22242D] rounded-xl p-6 space-y-6 shadow-md">
        {/* Address Row */}
        <div>
          <h3 className="text-sm text-[#A0A0A0] mb-1">Address to Send</h3>
          <div className="flex items-center justify-between bg-[#15161A] px-4 py-3 rounded-lg border border-[#22242D]">
            <p className="text-white font-mono text-sm truncate">{address}</p>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 cursor-pointer text-[#A0A0A0] hover:text-white transition"
              title="Copy address"
            >
              <Copy size={16} />
              <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        </div>

        {/* Amount Row */}
        <div>
          <h3 className="text-sm text-[#A0A0A0] mb-1">Amount to Send</h3>
          <div className="bg-[#15161A] px-4 py-3 rounded-lg border border-[#22242D]">
            <p className="text-white text-base font-medium">{amount} SOL</p>
          </div>
        </div>

        {/* Timer */}
        <div>
          <h3 className="text-sm text-[#A0A0A0] mb-1">Time Remaining</h3>
          <div className="bg-[#15161A] px-4 py-3 rounded-lg border border-[#22242D]">
            <p className="text-white text-base font-semibold">
              {Math.floor(timeRemaining / 60)}:
              {String(timeRemaining % 60).padStart(2, "0")} minutes
            </p>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center ">
          <GradientButton
            label="Confirm Send"
            onClick={() => console.log("Send confirmed")}
            gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
            hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
            className="h-12 px-8 text-lg font-semibold rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SendToAddressPage;
