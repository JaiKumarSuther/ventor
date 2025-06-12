"use client";

import React from "react";
import GradientButton from "@/components/ui/GradientButton";
import TabsBar from "@/components/ui/TabsBar";
import { useRouter, usePathname } from "next/navigation";

interface TabItem {
  label: string;
  route?: string;
  onClick?: () => void;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  customTabs?: TabItem[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title = "Wallets",
  buttonLabel = "Fund Wallet",
  onButtonClick,
  customTabs,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const defaultTabs: TabItem[] = [
    { label: "Overview", route: "/wallets" },
    { label: "Swap Manager", route: "/swap-manager" },
    { label: "Market Maker", route: "/market-maker" },
    { label: "Smart Sell", route: "/smart-sell" },
    { label: "Auto TP", route: "/auto-tp" },
  ];

  const resolvedTabs = (customTabs || defaultTabs).map((tab) => ({
    ...tab,
    active: pathname === tab.route,
    onClick: () => {
      if (tab.route) router.push(tab.route);
      else tab.onClick?.();
    },
  }));

  return (
    <div className="flex flex-col space-y-4 md:p-6 p-4 w-full overflow-hidden bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between flex-shrink-0">
        <div className="md:mb-4">
          <h2 className="text-foreground text-3xl font-semibold mb-6 md:mb-3">{title}</h2>
          <TabsBar tabs={resolvedTabs} />
        </div>
        {buttonLabel && (
          <GradientButton
            label={buttonLabel}
            onClick={onButtonClick || (() => router.push("/fund-wallet"))}
            gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
            hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
            className="w-44 md:w-32 py-2 text-xs md:text-base"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
