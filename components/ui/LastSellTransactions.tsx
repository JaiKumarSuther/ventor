"use client";
import React from "react";

const transactions = [
  {
    id: "tx_b4692...",
    wallet: "Wallet A",
    amount: "0.38 SOL",
    time: "Jun 25, 14:12 UTC",
    status: "Success",
  },
  {
    id: "tx_c0921...",
    wallet: "Wallet B",
    amount: "0.75 SOL",
    time: "Jun 25, 14:12 UTC",
    status: "Success",
  },
  {
    id: "tx_97f41...",
    wallet: "Wallet F",
    amount: "1.02 SOL",
    time: "Jun 25, 14:12 UTC",
    status: "Failed",
  },
  {
    id: "tx_3a812...",
    wallet: "Wallet D",
    amount: "0.25 SOL",
    time: "Jun 25, 14:12 UTC",
    status: "Success",
  },
];

export default function LastSellTransactions() {
  return (
    <div>
      <h2 className="text-white text-2xl font-semibold mb-4">
        Last Sell Transactions
      </h2>
      <div className="overflow-x-auto bg-[#101114] border border-[#22242D] rounded-xl">
        <div className="min-w-[600px]">
          {/* Table Header */}
          <div className="grid grid-cols-5 pl-10 px-4 py-6 text-white text-sm font-medium">
            <div>Tx ID</div>
            <div>Wallet Name</div>
            <div>Amount (SOL)</div>
            <div>Time</div>
            <div>Status</div>
          </div>

          {/* Table Rows */}
          {transactions.map((tx, i) => (
            <div
              key={i}
              className="grid grid-cols-5 pl-10 px-4 py-6 text-sm border-b border-[#22242D] last:border-none"
              style={{
                backgroundColor: i % 2 === 0 ? "#0D0E12" : "#101114",
              }}
            >
              <div className="text-white">{tx.id}</div>
              <div className="text-[#6A7A8C]">{tx.wallet}</div>
              <div className="text-[#6A7A8C]">{tx.amount}</div>
              <div className="text-[#6A7A8C]">{tx.time}</div>
              <div>
                <span
                  className={`text-sm font-medium px-5 py-1.5 rounded-md ${
                    tx.status === "Success"
                      ? "text-[#00A34F] bg-[#6E6E6E12]"
                      : "text-[#E43021] bg-[#6E6E6E12]"
                  }`}
                >
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
