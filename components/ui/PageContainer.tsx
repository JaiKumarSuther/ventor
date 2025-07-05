// components/PageContainer.tsx
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="bg-[#06070B] px-4 pb-12 md:px-0 w-full">
      {children}
    </div>
  );
}
