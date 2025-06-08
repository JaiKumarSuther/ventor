// components/PageContainer.tsx
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="bg-[#06070B] w-full">
      {children}
    </div>
  );
}
