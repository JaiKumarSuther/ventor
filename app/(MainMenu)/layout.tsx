// components/layout/Layout.tsx
import React from "react";
import FooterStatusBar from "@/components/ui/FooterStatusBar";
import Header from "@/components/ui/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#06070B] text-white">
      <Header />
      <main className="w-full px-5 py-10 md:px-10 md:py-10 mb-20">
        {children}
      </main>
      <FooterStatusBar />
    </div>
  );
};

export default Layout;
