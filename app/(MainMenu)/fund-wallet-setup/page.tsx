"use client";
import React, { useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import DualRangeSlider from "@/components/ui/DualRangeSlider";
import DashboardActions from "@/components/ui/DashboardActions";
import { Edit, Trash, ArrowLeft } from "lucide-react";
import RoundedGradientCheckbox from "@/components/RoundedGradientCheckbox";
import GradientCheckbox from "@/components/ui/GradientCheckbox";

const FundWalletPage = () => {
  const [fundingMethod, setFundingMethod] = useState<"easy" | "hard" | "mix">("hard");
  const [amount, setAmount] = useState<number>(25000);
  const [sliderValues, setSliderValues] = useState({ min: 3.8, max: 4.4 });

  const [addedWallets, setAddedWallets] = useState([
    { name: "wallet_22x9A", wallets: "10 Wallets", tag: "Main Batch", date: "12 May,2025" },
    { name: "wallet_02x7TG", wallets: "10 Wallets", tag: "Main Batch", date: "12 May,2025" },
    { name: "wallet_5A4k5A", wallets: "10 Wallets", tag: "Main Batch", date: "12 May,2025" },
    { name: "wallet_22x9A", wallets: "10 Wallets", tag: "Main Batch", date: "12 May,2025" },
  ]);

  const [checkedWallets, setCheckedWallets] = useState<boolean[]>(
    new Array(addedWallets.length).fill(false)
  );

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

  return (
    <div className="w-full flex flex-col md:flex-row gap-0 min-h-[00px]">
      {/* Left Column */}
      <div className="flex-1 border border-[#22242D] pb-20 bg-[#101017] flex flex-col gap-8">
        {/* Top Row */}
        <div className="flex justify-between items-center border-b border-[#22242D] p-5">
          <h2 className="text-white text-lg font-semibold">Funding Method</h2>
          <GradientButton
            label="Start Funding"
            onClick={() => console.log("Start Funding Clicked")}
            gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
            hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
            className="h-9 px-6"
          />
        </div>

        {/* Funding Method */}
        <div className="flex flex-col p-5 md:flex-row justify-between items-center gap-4 md:gap-8 w-full">
          <h3 className="w-full md:w-[30%] font-[500] text-[#6A7A8C] text-sm">
            FUNDING METHOD
          </h3>
          <div className="flex gap-6 items-center w-full md:w-[70%]">
            {["easy", "hard", "mix"].map((method) => (
              <div
                key={method}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setFundingMethod(method as any)}
              >
                <RoundedGradientCheckbox
                  checked={fundingMethod === method}
                  onChange={() => setFundingMethod(method as any)}
                />
                <span
                  className={`${
                    fundingMethod === method ? "text-[#8761FF]" : "text-[#6A7A8C]"
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
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="bg-transparent text-white text-lg w-full outline-none"
                placeholder="Enter Amount"
              />
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
            <ArrowLeft size={20} className="text-white" />
            <h2 className="text-white text-lg font-semibold">Funding Method</h2>
          </div>

          {/* Connect Wallet & Send to Address */}
          <div className="flex justify-between gap-4 p-6">
            <div className="flex-1 border border-[#22242D] h-24 flex items-center justify-center cursor-pointer">
              <span className="text-[#6A7A8C]">Connect Wallet</span>
            </div>
            <div className="flex-1 border border-[#22242D] h-24 flex items-center justify-center cursor-pointer">
              <span className="text-[#6A7A8C]">Send to Address</span>
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
                  <div key={index} className={`border-t border-[#22242D] ${bgColor}`}>
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
                        <span className="text-white text-sm">{wallet.name}</span>
                      </div>
                      <span className="text-white text-sm">{wallet.wallets}</span>
                      <span className="text-white text-sm">{wallet.tag}</span>
                      <span className="text-white text-sm">{wallet.date}</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => console.log(`Edit ${wallet.name}`)}
                          className="text-[#8761FF] text-xs flex items-center gap-1"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteWallet(index)}
                          className="text-[#FF4D4D] text-xs flex items-center gap-1"
                        >
                          <Trash size={14} />
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
                        <span className="text-white text-sm font-medium">{wallet.name}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6A7A8C] text-xs">No of Wallet:</span>
                        <span className="text-white text-sm">{wallet.wallets}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6A7A8C] text-xs">Tag:</span>
                        <span className="text-white text-sm">{wallet.tag}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6A7A8C] text-xs">Creation Date:</span>
                        <span className="text-white text-sm">{wallet.date}</span>
                      </div>
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => console.log(`Edit ${wallet.name}`)}
                          className="text-[#8761FF] text-xs flex items-center gap-1"
                        >
                          <Edit size={14} /> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteWallet(index)}
                          className="text-[#FF4D4D] text-xs flex items-center gap-1"
                        >
                          <Trash size={14} /> Delete
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
