"use client";
import React, { useState, useEffect } from "react";
import GradientButton from "@/components/ui/GradientButton";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // Import the back arrow icon

const SendToAddressPage = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(3600); // Example: 1 hour in seconds
  const [amount, setAmount] = useState<number>(100); // Example amount to send (e.g., 100 SOL)
  const [address, setAddress] = useState<string>("wallet_22x9A...3Fb");

  const router = useRouter();

  // Update the time remaining every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(prev - 1, 0)); // Decrease time by 1 every second
    }, 1000);

    return () => clearInterval(timer); // Clear the interval when the component unmounts
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col bg-[#101017] rounded-2xl p-6">
      <div className="flex items-center justify-between p-4 rounded-xl mb-6 shadow-md">
        <button
          onClick={handleBack}
          className="text-[#8E8E8E] cursor-pointer hover:text-white transition-colors duration-200"
        >
          <ArrowLeft size={30} color="white" /> {/* Use the Lucide ArrowLeft icon */}
        </button>
        <h2 className="text-white text-xl font-semibold">Send To Address</h2>
      </div>

      <div className="bg-[#101114] h-full border border-[#22242D] rounded-xl p-8 shadow-lg">
        <div className="mb-6">
          <h3 className="text-lg text-[#A0A0A0] mb-2">Address to Send</h3>
          <p className="text-white text-lg font-medium">{address}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg text-[#A0A0A0] mb-2">Amount to Send</h3>
          <p className="text-white text-lg font-medium">{amount} SOL</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg text-[#A0A0A0] mb-2">Time Remaining</h3>
          <p className="text-white text-lg font-semibold">
            {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, "0")} minutes
          </p>
        </div>

        <div className="flex justify-center mt-8">
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
