"use client";

import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MatrixCard from "@/components/ui/MatrixCard";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      {title && (
        <h2 className="text-white text-2xl sm:text-3xl mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

const wallets = [
  {
    address: "wallet_22x9A...3Fb",
    balance: 12.34,
    mcap: "100M",
    tpMode: "Custom",
    sell: 50,
  },
  {
    address: "wallet_22x9A...3Fb",
    balance: 5.67,
    mcap: "N/A",
    tpMode: "Predefined",
    sell: 75,
  },
  {
    address: "wallet_22x9A...3Fb",
    balance: 13.85,
    mcap: "50M",
    tpMode: "Custom",
    sell: 25,
  },
  {
    address: "wallet_22x9A...3Fb",
    balance: 20.0,
    mcap: "50M",
    tpMode: "Predefined",
    sell: 75,
  },
  {
    address: "wallet_22x9A...3Fb",
    balance: 15.48,
    mcap: "100M",
    tpMode: "Custom",
    sell: 50,
  },
];

export default function WalletManagement() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const totalWallets = wallets.length;
  const averageSell = (
    wallets.reduce((sum, w) => sum + w.sell, 0) / totalWallets
  ).toFixed(2);
  const totalExpected = wallets
    .reduce((sum, w) => sum + (w.balance * w.sell) / 100, 0)
    .toFixed(2);

  return (
    <div className="px-4 sm:px-6 md:px-8 py-4">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="text-white mb-10 cursor-pointer hover:text-[#8761FF] flex items-center gap-2"
      >
        <ArrowLeft size={28} />
        <span className="text-base sm:text-2xl font-medium ">Custom TP</span>
      </button>

      {/* Wallet Table */}
      <Card title="Wallet Management">
        <div className="overflow-x-auto rounded-xl border border-[#22242D] text-white text-sm">
          <div className="min-w-[880px]">
            {/* Table Header */}
            <div className="grid grid-cols-[2.2fr_1fr_1fr_1.2fr_1fr_auto] px-6 py-4 bg-[#101114] font-medium text-sm text-left">
              <div>Wallet Address</div>
              <div>Balance (SOL)</div>
              <div>MCAP</div>
              <div>TP Mode</div>
              <div>Sell %</div>
              <div className="text-right">Action</div>
            </div>

            {/* Table Rows */}
            {wallets.map((wallet, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[2.2fr_1fr_1fr_1.2fr_1fr_auto] px-6 py-4 border-b last:border-b-0 border-[#22242D] items-center"
                style={{
                  backgroundColor: idx % 2 === 0 ? "#0D0E12" : "#101114",
                }}
              >
                <div className="truncate text-[#D1D5DB]">{wallet.address}</div>
                <div className="text-[#B8C0CC]">
                  {wallet.balance.toFixed(2)}
                </div>
                <div className="text-[#B8C0CC]">{wallet.mcap}</div>

                {/* Dropdown */}
                <div className="relative w-28 h-10 rounded-md border border-[#22242D] bg-[#101114] text-white focus-within:ring-2 focus-within:ring-[#8761FF] transition duration-150">
                  <select
                    defaultValue="Custom"
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                    className="w-full h-full px-3 pr-8 bg-transparent text-sm appearance-none focus:outline-none cursor-pointer"
                  >
                    <option className="bg-[#0D0E12] text-white" value="Custom">
                      Custom
                    </option>
                    <option
                      className="bg-[#0D0E12] text-white"
                      value="Predefined"
                    >
                      Predefined
                    </option>
                  </select>
                  <div className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-[#6A7A8C]">
                    {isOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                </div>

                <div className="text-[#B8C0CC]">{wallet.sell}%</div>

                <div className="flex justify-end gap-3">
                  <button>
                    <Image
                      src="/assets/edit.svg"
                      alt="edit"
                      width={26}
                      height={26}
                    />
                  </button>
                  <button>
                    <Image
                      src="/assets/remove.svg"
                      alt="delete"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <MatrixCard
          icon="/assets/wallet-card.svg"
          label="Total Wallets Configured"
          value={totalWallets.toString()}
        />
        <MatrixCard
          icon="/assets/live-pnl.svg"
          label="Average Sell"
          value={`${averageSell} SOL`}
        />
        <MatrixCard
          icon="/assets/total-sold.svg"
          label="Total Expected Sold (SOL)"
          value={totalExpected}
        />
      </div>
    </div>
  );
}
