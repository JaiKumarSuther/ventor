"use client";
import React, { useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import DualRangeSlider from "@/components/ui/DualRangeSlider";
import DashboardActions from "@/components/ui/DashboardActions";
import { ArrowLeft } from "lucide-react";

import RoundedGradientCheckbox from "@/components/ui/RoundedGradientCheckbox";
import GradientCheckbox from "@/components/ui/GradientCheckbox";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FundWalletPage = () => {
  // Define the type for the funding method state more strictly
  const [fundingMethod, setFundingMethod] = useState<"easy" | "hard" | "mix">(
    "hard"
  );
  const [amount, setAmount] = useState<number>(0);
  const [sliderValues, setSliderValues] = useState({ min: 3.8, max: 4.4 });

  const [addedWallets, setAddedWallets] = useState([
    {
      name: "wallet_22x9A",
      wallets: "10 Wallets",
      tag: "Main Batch",
      date: "12 May,2025",
    },
    {
      name: "wallet_02x7TG",
      wallets: "10 Wallets",
      tag: "Main Batch",
      date: "12 May,2025",
    },
    {
      name: "wallet_5A4k5A",
      wallets: "10 Wallets",
      tag: "Main Batch",
      date: "12 May,2025",
    },
    {
      name: "wallet_22x9A",
      wallets: "10 Wallets",
      tag: "Main Batch",
      date: "12 May,2025",
    },
  ]);

  const [checkedWallets, setCheckedWallets] = useState<boolean[]>(
    new Array(addedWallets.length).fill(false)
  );

  // Fix the type of `method` parameter in handleFundingMethodChange
  const handleFundingMethodChange = (method: "easy" | "hard" | "mix") => {
    setFundingMethod(method);
  };

  const handleDualSliderChange = (minValue: number, maxValue: number) => {
    setSliderValues({ min: minValue, max: maxValue });
  };

  const handleDeleteWallet = (index: number) => {
    const updatedWallets = [...addedWallets];
    updatedWallets.splice(index, 1);
    setAddedWallets(updatedWallets);

    const updatedChecked = [...checkedWallets];
    updatedChecked.splice(index, 1);
    setCheckedWallets(updatedChecked);
  };
  const router = useRouter();
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/wallets"); // fallback
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-0 min-h-[800px]">
      {/* Left Column */}
      <div className="flex-1 border border-[#22242D] pb-20 bg-[#101017] flex flex-col gap-8">
        {/* Top Row */}
        <div className="flex justify-between items-center border-b border-[#22242D] p-3 md:p-5">
          <h2 className="text-white text-sm md:text-lg font-semibold">Funding Method</h2>
          <GradientButton
            label="Start Funding"
            onClick={() => console.log("Start Funding Clicked")}
            gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
            hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
            className="h-9 md:h-9 px-3 md:px-6"
          />
        </div>

        {/* Funding Method */}
        <div className="flex flex-col p-5 md:flex-row justify-between items-center gap-0 md:gap-0 w-full">
          <h3 className="w-full md:w-[30%] font-[500] text-[#6A7A8C] text-sm">
            FUNDING METHOD
          </h3>
          <div className="flex justify-between items-center w-full md:w-[64%]">
            {["easy", "hard", "mix"].map((method) => (
              <div
                key={method}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  handleFundingMethodChange(method as "easy" | "hard" | "mix")
                }
              >
                <RoundedGradientCheckbox
                  checked={fundingMethod === method}
                  onChange={() =>
                    handleFundingMethodChange(method as "easy" | "hard" | "mix")
                  }
                />
                <span
                  className={`${
                    fundingMethod === method
                      ? "text-[#8761FF]"
                      : "text-[#6A7A8C]"
                  } text-sm`}
                >
                  {method === "easy" && "Easy Disperse"}
                  {method === "hard" && "Hard Disperse"}
                  {method === "mix" && "Mixer"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Funding Amount and Funding Range */}
        <div className="flex flex-col w-full gap-6 px-5">
          {/* Total Funding Amount */}
          <div className="flex justify-between gap-2">
            <h1 className="font-[500] w-[55%] text-[#6A7A8C] text-sm">
              TOTAL FUNDING AMOUNT
            </h1>
            <div className="bg-[#101114] w-full border border-[#22242D] rounded-lg flex justify-between items-center px-5 py-2 h-[72px]">
              <input
                type="text"
                value={amount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*\.?\d*$/.test(value)) {
                    setAmount(value === "" ? 0 : Number(value));
                  }
                }}
                className="bg-transparent text-white text-lg w-full outline-none appearance-none"
                placeholder="Enter Amount"
              />

              <span className="text-white text-lg font-medium pl-3 whitespace-nowrap">
                SOL
              </span>
            </div>
          </div>

          {/* Funding Range */}
          <div className="flex justify-between gap-2">
            <h1 className="font-[500] w-[55%] text-[#6A7A8C] text-sm">
              FUNDING RANGE
            </h1>
            <div className="pt-4 w-full">
              <DualRangeSlider
                min={3.0}
                average={4.1}
                max={5.0}
                initialMinValue={sliderValues.min}
                initialMaxValue={sliderValues.max}
                onChange={handleDualSliderChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 border border-[#22242D] bg-[#101017] flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          {/* Top Bar */}
          <div className="flex items-center gap-2 border-b border-[#22242D] p-6">
            <button onClick={handleBack} className="cursor-pointer">
              <ArrowLeft size={20} className="text-white" />
            </button>
            <h2 className="text-white text-lg font-semibold">Funding Method</h2>
          </div>

          {/* Connect Wallet & Send to Address */}

          <div className="flex justify-between gap-3 p-3 md:p-6">
            <div className="flex-1 bg-[#101114] rounded-xl border border-[#22242D] h-24 flex gap-1 flex-col items-center justify-center cursor-pointer">
              <Image
                src="/assets/fund-wallet.svg"
                width={28}
                height={28}
                alt="wallet"
              />
              <span className="text-[#6A7A8C] text-sm">Connect Wallet</span>
            </div>
            <div
              className="flex-1 bg-[#101114] rounded-xl border border-[#22242D] h-24 flex gap-1 flex-col items-center justify-center cursor-pointer"
              onClick={() => router.push("/send-to-address")} // Navigate to SendToAddressPage
            >
              <Image
                src="/assets/send-address.svg"
                width={28}
                height={28}
                alt="wallet"
              />
              <span className="text-[#6A7A8C] text-sm">Send to Address</span>
            </div>
          </div>

          {/* Added Wallets */}
          <div>
            <h3 className="text-white px-6 text-sm mb-2">Added Wallets</h3>
            {/* Desktop/Tablet Header */}
            <div className="hidden md:block overflow-x-auto border-t border-[#22242D]">
              <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] bg-[#101017] px-4 md:px-6 h-12 text-[#6A7A8C] text-xs font-medium items-center border-b border-[#22242D] min-w-[600px]">
                <span>Wallet Name</span>
                <span>No of Wallet</span>
                <span>Tag</span>
                <span>Creation Date</span>
                <span>Action</span>
              </div>
            </div>

            {/* Table Body */}
            <div className="overflow-y-auto overflow-x-auto md:overflow-x-hidden">
              {addedWallets.map((wallet, index) => {
                const bgColor = index % 2 === 0 ? "" : "bg-[#FFFFFF05]";

                return (
                  <div
                    key={index}
                    className={`border-t border-[#22242D] ${bgColor} cursor-pointer`}
                    onClick={() => {
                      const updated = [...checkedWallets];
                      updated[index] = !updated[index];
                      setCheckedWallets(updated);
                    }}
                  >
                    {/* Desktop/Tablet Row */}
                    <div className="hidden md:grid grid-cols-[2.5fr_1fr_1fr_1fr_0.5fr] items-center px-4 md:px-6 h-[46px] min-w-[600px]">
                      <div className="flex items-center gap-2">
                        <GradientCheckbox
                          checked={checkedWallets[index]}
                          onChange={() => {
                            const updated = [...checkedWallets];
                            updated[index] = !updated[index];
                            setCheckedWallets(updated);
                          }}
                        />
                        <span className="text-white text-sm">
                          {wallet.name}
                        </span>
                      </div>
                      <span className="text-white text-sm">
                        {wallet.wallets}
                      </span>
                      <span className="text-white text-sm">{wallet.tag}</span>
                      <span className="text-white text-sm">{wallet.date}</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => console.log(`Edit ${wallet.name}`)}
                          className="text-[#8761FF] cursor-pointer text-xs flex items-center gap-1"
                        >
                          <Image
                            src="/assets/edit.svg"
                            width={20}
                            height={20}
                            alt="wallet"
                          />
                        </button>
                        <button
                          onClick={() => handleDeleteWallet(index)}
                          className="text-xs flex items-center cursor-pointer gap-1"
                        >
                          <Image
                            src="/assets/remove.svg"
                            width={14}
                            height={14}
                            alt="wallet"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Mobile Row */}
                    <div className="md:hidden p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <GradientCheckbox
                          checked={checkedWallets[index]}
                          onChange={() => {
                            const updated = [...checkedWallets];
                            updated[index] = !updated[index];
                            setCheckedWallets(updated);
                          }}
                        />
                        <span className="text-white text-sm font-medium">
                          {wallet.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6A7A8C] text-xs">
                          No of Wallet:
                        </span>
                        <span className="text-white text-sm">
                          {wallet.wallets}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6A7A8C] text-xs">Tag:</span>
                        <span className="text-white text-sm">{wallet.tag}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6A7A8C] text-xs">
                          Creation Date:
                        </span>
                        <span className="text-white text-sm">
                          {wallet.date}
                        </span>
                      </div>
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => console.log(`Edit ${wallet.name}`)}
                          className="text-[#8761FF] text-xs flex items-center gap-1"
                        >
                          <Image
                            src="/assets/edit.svg"
                            width={14}
                            height={14}
                            alt="wallet"
                          />{" "}
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteWallet(index)}
                          className="text-xs text-[#8761FF] flex items-center gap-1"
                        >
                          <Image
                            src="/assets/remove.svg"
                            width={12}
                            height={12}
                            alt="wallet"
                          />{" "}
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end p-4">
          <DashboardActions
            onFirstAction={() => console.log("Back Clicked")}
            onSecondAction={() => console.log("Done Clicked")}
            firstLabel="Back"
            secondLabel="Done"
          />
        </div>
      </div>
    </div>
  );
};

export default FundWalletPage;
