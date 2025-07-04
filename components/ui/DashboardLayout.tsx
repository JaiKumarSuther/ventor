"use client";

import React from "react";
// import GradientButton from "@/components/ui/GradientButton";
//   import { useRouter } from "next/navigation";

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
  // buttonLabel = "Fund Wallet",
  // onButtonClick,
}) => {
  // const router = useRouter();

  return (
    <div className="flex flex-col w-full pb-10 bg-background overflow-hidden">
      {/* Header */}
      <div className="w-full flex gap-4 flex-row md:items-center justify-between">
        <h2 className="text-foreground text-3xl mb-4 font-semibold">{title}</h2>

        {/* {buttonLabel && (
          <GradientButton
            label={buttonLabel}
            onClick={onButtonClick || (() => router.push("/fund-wallet"))}
            gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
            hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
            className="w-34 py-2 text-base "
          />
        )} */}
      </div>

      {/* Content */}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;

