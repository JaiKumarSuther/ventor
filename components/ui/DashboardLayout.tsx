"use client";

import React from "react";
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
}) => {
  return (
    <div className="flex flex-col w-full pb-10 bg-background">
      {/* Header */}
      <div className="w-full flex gap-4 flex-row md:items-center justify-between">
        <h2 className="text-foreground text-3xl mb-4 px-4 font-semibold">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
};

export default DashboardLayout;
