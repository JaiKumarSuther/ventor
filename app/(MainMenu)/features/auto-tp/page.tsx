"use client";

import React, { useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import CustomToggleSwitch from "@/components/ui/CustomToggleSwitch";
import { useRouter } from "next/navigation";

export default function AutoTP() {
  
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
    <div className="flex flex-col gap-3 mt-2 px-4 md:px-0 mb-5">
      {/* Token Status Card */}
      <div className="flex items-start lg:items-end flex-col lg:flex-row gap-3 bg-[#FFFFFF05] border border-[#22242D] rounded-md px-4 py-4">
        <div className="flex lg:block gap-2 items-center">
          <h2 className="text-white text-[18px] md:text-lg font-semibold">
            Token Status
          </h2>
          <div className="flex items-center gap-2 text-xs text-[#DF7C00] font-semibold bg-[#1E1E1E] px-3 py-[2px] rounded-sm w-fit">
            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FF0000] via-[#FF6A00] to-[#DF7C00]" />
            Not Deployed
          </div>
        </div>
        <p className="text-xs md:text-sm text-[#6A7A8C] leading-snug">
          Auto TP will activate instantly after token launch. The enabled TP
          levels will be triggered automatically.
        </p>
      </div>

      {/* TP Levels Table */}
      <Card title="TP Levels">
        <div className="rounded-xl overflow-hidden border border-[#22242D] text-white">
          {/* Header */}
          <div className="hidden md:grid grid-cols-4 px-4 py-3 bg-[#101114] text-white text-sm font-medium text-center">
            <div>No.</div>
            <div>MCAP</div>
            <div>Percentage%</div>
            <div>Status</div>
          </div>

          {[1, 2, 3, 4, 5].map((tp, index) => {
            const bgColor = index % 2 === 0 ? "#0D0E12" : "#101114";

            return (
              <div
                key={index}
                className="border-b last:border-b-0 border-[#22242D] px-4 py-3"
                style={{ backgroundColor: bgColor }}
              >
                {/* Desktop */}
                <div className="hidden md:grid grid-cols-4 items-center text-center">
                  <div className="text-sm font-medium">TP {tp}</div>

                  <div>
                    <div className="bg-[#101114] border border-[#22242D] text-[#6A7A8C] text-xs rounded-md px-3 py-1 mx-auto w-max">
                      Not set
                    </div>
                  </div>

                  <div>
                    <div className="bg-[#101114] border border-[#22242D] text-[#6A7A8C] text-xs rounded-md px-3 py-1 mx-auto w-max">
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
                    <span className="text-[#6A7A8C] text-sm">Off</span>
                  </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex flex-col space-y-1 text-sm text-[#6A7A8C]">
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

// Card Component
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="mb-3">
      {title && (
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-white text-2xl font-semibold">{title}</h2>
          <GradientButton
            label="Custom TP"
            className="px-5 py-2"
            onClick={() =>router.push('/custom-tp')}
          />
        </div>
      )}
      {children}
    </div>
  );
}
