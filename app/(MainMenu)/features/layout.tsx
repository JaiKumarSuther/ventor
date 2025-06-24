"use client";

import TabsBar from "@/components/ui/TabsBar";
import React from "react";

interface TabItem {
  label: string;
  route?: string;
  onClick?: () => void;
}

  const defaultTabs: TabItem[] = [
    { label: "Overview", route: "/features/overview" },
    { label: "Swap Manager", route: "/features/swap-manager" },
    { label: "Market Maker", route: "/features/market-maker" },
    { label: "Smart Sell", route: "/features/smart-sell" },
    { label: "Auto TP", route: "/features/auto-tp" },
  ];
  


export default function DashboardModules({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TabsBar tabs={defaultTabs}/>
      <div>

      {children}
      </div>
    </div>
  );
}
