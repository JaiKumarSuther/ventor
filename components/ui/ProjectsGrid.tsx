// components/ProjectsGrid.tsx
import React from "react";

interface ProjectsGridProps {
  children: React.ReactNode;
}

export default function ProjectsGrid({ children }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
}
