"use client";

import React, { useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import CustomToggleSwitch from "@/components/ui/CustomToggleSwitch";
import { useRouter } from "next/navigation";

export default function AutoTP() {
  const router = useRouter();
  const [tpStates, setTpStates] = useState({
    tp1: false,
    tp2: false,
    tp3: false,
    tp4: false,
    tp5: false,
  });

  const handleTpToggle = (tp: keyof typeof tpStates) => {
    setTpStates((prev) => ({
      ...prev,
      [tp]: !prev[tp],
    }));
  };

  


  return (
    <div className="space-y-8 min-h-screen">
      {/* Bottom Button */}
      <div className="flex justify-end">
        <GradientButton
          label="Custom TP"
          className="px-6 py-2"
          onClick={() => router.push('/custom-tp')}
        />
      </div>
      {/* Token Status Card */}
      <div className="bg-[#FFFFFF05] border border-[#22242D] rounded-md px-4 py-5">
        <h2 className="text-white text-[18px] md:text-lg font-semibold mb-3">
          Token Status
        </h2>
        <div className="flex items-center gap-3">
          {/* Status Badge */}
          <div className="flex items-center gap-2 text-xs text-[#DF7C00] font-semibold bg-[#1E1E1E] px-3 py-1 rounded-sm w-fit">
            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FF0000] via-[#FF6A00] to-[#DF7C00]" />
            Not Deployed
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-[#6A7A8C]">
            Auto TP will activate instantly after token launch. The enabled TP
            levels will be triggered automatically.
          </p>
        </div>
      </div>

      {/* TP Rows */}
      {/* <Card title="">
        <div className="rounded-xl overflow-hidden border border-[#22242D]">
          {[1, 2, 3, 4, 5].map((tp, index) => {
            const bgColor = index % 2 === 0 ? "#0D0E12" : "#101114";

            return (
              <div
                key={tp}
                style={{ backgroundColor: bgColor }}
                className="w-full border-b last:border-b-0 border-[#22242D]"
              >
                <div className="flex justify-between items-center h-14 px-4"> */}
                  {/* TP Label */}
                  {/* <div className="text-white text-sm md:text-base font-medium">
                    TP {tp}
                  </div> */}

                  {/* MCAP = Not set */}
                  {/* <div className="text-[#6A7A8C] text-sm md:text-base">
                    MCAP = Not set
                  </div> */}

                  {/* % = Not set */}
                  {/* <div className="text-[#8761FF] text-sm md:text-base">
                    % = Not set
                  </div> */}

                  {/* Status Toggle */}
                  {/* <div>
                    <div className="text-xs text-[#FF4D4D] font-semibold bg-[#6E6E6E12] px-3 py-1 rounded-[4px] w-fit flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FF0000] via-[#FF4D4D] to-[#FF7B7B]" />
                      OFF
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card> */}

      {/* Auto TP Rules */}
      {/* <div className="bg-[#101017] border border-[#22242D] rounded-md p-5">
        <div className="flex items-center justify-between mb-4"> */}
          {/* Icon and Title */}
          {/* <div className="flex justify-center w-13 h-13 rounded-md bg-[#FFFFFF05] border border-[#FFFFFF12] items-center gap-3">
            <Image
              src="/assets/exclamation.svg"
              width={30}
              height={30}
              alt="Exclamation"
            />
          </div>
        </div> */}

        {/* Description */}
        {/* <p className="text-xs md:text-sm text-[#8761FF] mb-2">
          How auto TP works
        </p>
        <span className="text-white font-semibold text-lg mb-4 block">
          Automatic Take Profit
        </span> */}

        {/* Additional Information */}
        {/* <div className="text-xs md:text-sm text-[#6A7A8C]">
          <ul className="list-disc pl-5 space-y-2">
            <li>Sell from all project wallets except creator.</li>
            <li>Creator can set custom TP.</li>
            <li>
              Example if MCAP hits $1M, sell 10% of wallets. Formulas: Sell
              Amount = Wallet Balance * % to Sell
            </li>
          </ul>
        </div>
      </div> */}

      {/* TP Levels Table */}
      <Card title="TP Levels">
  <div className="rounded-xl overflow-hidden border border-[#22242D] text-white">
    {/* Header (hidden on small screens) */}
    <div className="hidden md:grid grid-cols-4 px-4 py-4 bg-[#101114] text-white text-sm md:text-base font-medium text-center">
      <div>No.</div>
      <div>MCAP</div>
      <div>Percentage%</div>
      <div>Status</div>
    </div>

    {[1, 2, 3, 2, 3].map((tp, index) => {
      const bgColor = index % 2 === 0 ? "#0D0E12" : "#101114";

      return (
        <div
          key={index}
          className="border-b last:border-b-0 border-[#22242D] px-4 py-4"
          style={{ backgroundColor: bgColor }}
        >
          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-4 items-center text-center">
            <div className="text-sm md:text-base font-medium">TP {tp}</div>

            <div>
              <div className="bg-[#101114] border border-[#22242D] text-[#6A7A8C] text-xs md:text-sm rounded-md px-4 py-1 mx-auto w-max">
                Not set
              </div>
            </div>

            <div>
              <div className="bg-[#101114] border border-[#22242D] text-[#6A7A8C] text-xs md:text-sm rounded-md px-4 py-1 mx-auto w-max">
                Not set
              </div>
            </div>

            <div className="flex justify-center items-center gap-1">
              <CustomToggleSwitch
                id={`tp-${tp}-status`}
                checked={tpStates[`tp${tp}` as keyof typeof tpStates]}
                onChange={() =>
                  handleTpToggle(`tp${tp}` as keyof typeof tpStates)
                }
              />
              <span className="text-[#6A7A8C] text-sm md:text-base">Off</span>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col space-y-2 text-sm text-[#6A7A8C]">
            <div className="flex justify-between">
              <span className="font-medium text-white">No.</span>
              <span className="font-medium text-white">TP {tp}</span>
            </div>
            <div className="flex justify-between">
              <span>MCAP</span>
              <div className="bg-[#101114] border border-[#22242D] rounded-md px-3 py-1">
                Not set
              </div>
            </div>
            <div className="flex justify-between">
              <span>Percentage%</span>
              <div className="bg-[#101114] border border-[#22242D] rounded-md px-3 py-1">
                Not set
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Status</span>
              <div className="flex items-center gap-1">
                <CustomToggleSwitch
                  id={`tp-${tp}-status-sm`}
                  checked={tpStates[`tp${tp}` as keyof typeof tpStates]}
                  onChange={() =>
                    handleTpToggle(`tp${tp}` as keyof typeof tpStates)
                  }
                />
                <span className="text-[#6A7A8C]">Off</span>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</Card>

 
    </div>
  );
}

// --------------- Reusable Card Component -------------------
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      {title && (
        <h2 className="text-white text-3xl py-3 font-semibold">{title}</h2>
      )}
      {children}
    </div>
  );
}
