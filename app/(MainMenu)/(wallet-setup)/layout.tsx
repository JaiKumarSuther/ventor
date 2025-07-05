// app/(MainMenu)/(wallets)/layout.tsx
"use client";

import React from "react";
import DashboardLayout from "@/components/ui/DashboardLayout";

export default function WalletsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
