"use client";
import { Check, X } from "lucide-react";

const checklistItems = [
  { text: "Sell from all project wallets except creator.", status: "fail" },
  { text: "Sell % on Buy > 0", status: "pass" },
  { text: "Stop Holding % > 0", status: "pass" },
  { text: "Min SOL to Activate > 0", status: "pass" },
  { text: "Min MCAP to Activate > 0", status: "pass" },
];

export default function ActivationChecklist() {
  return (
    <div>
      <h2 className="text-white text-2xl font-semibold mb-4">
        Activation Checklist
      </h2>
      <div className="bg-[#FFFFFF05] border border-[#22242D] rounded-xl px-6 py-5">
        <ul className="flex flex-col gap-5">
          {checklistItems.map((item, index) => {
            const isPass = item.status === "pass";
            return (
              <li
                key={index}
                className="flex items-center gap-4 text-sm text-[#6A7A8C]"
              >
                <div
                  className={`w-6 h-6 rounded-sm flex items-center justify-center ${
                    isPass ? "bg-[#2FD271]" : "bg-[#E43021]"
                  }`}
                >
                  {isPass ? (
                    <Check size={16} strokeWidth={3} className="text-[#22242D]" />
                  ) : (
                    <X size={16} strokeWidth={3} className="text-[#22242D]" />
                  )}
                </div>
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
