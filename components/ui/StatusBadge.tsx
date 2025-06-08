// components/StatusBadge.tsx
import React from "react";

interface StatusBadgeProps {
  status: "Launched" | "Not Launched";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const color = status === "Launched" ? "text-[#00A34F]" : "text-[#E43021]";
  return (
    <span className={`px-2 py-1 text-xs bg-[#6E6E6E12] rounded-sm ${color}`}>
      {status}
    </span>
  );
}
