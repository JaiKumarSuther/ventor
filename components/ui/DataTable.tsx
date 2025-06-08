"use client";
import React from "react";
import { Copy } from "lucide-react";
import GradientCheckbox from "@/components/ui/GradientCheckbox";

interface DataTableProps {
  headerColumns: string[];
  rows: {
    id: number;
    isSelected: boolean;
    onSelect: () => void;
    label: string;
    subLabel?: string;
    hasCopy?: boolean;
    icon?: React.ReactNode;
    columns: (string | React.ReactNode)[];
  }[];
}

const DataTable: React.FC<DataTableProps> = ({ headerColumns, rows }) => {
  return (
    <div className="w-full border border-[#22242D] overflow-x-auto max-w-full">
      {/* Desktop Table Header - Hidden on mobile */}
      <div className="hidden md:grid md:grid-cols-[2.5fr_1fr_1fr_0.5fr] bg-[#101017] px-6 h-9 text-[#6A7A8C] text-xs font-medium items-center border-b border-[#22242D] min-w-[600px]">
        {headerColumns.map((header, idx) => (
          <span key={idx}>{header}</span>
        ))}
      </div>

      {/* Table Body */}
      <div className="overflow-y-auto flex flex-col">
        {rows.map((row, idx) => {
          const bgColor = idx % 2 === 0 ? "" : "bg-[#FFFFFF05]";

          return (
            <div
              key={row.id}
              className={`border-t border-[#22242D] ${bgColor}`}
            >
              {/* Desktop Layout */}
              <div
                onClick={row.onSelect}
                className="hidden md:grid md:grid-cols-[2.5fr_1fr_1fr_0.5fr] items-center px-6 h-[46px] cursor-pointer min-w-[600px]"
              >
                {/* Label Column */}
                <div className="flex items-center gap-2">
                  <GradientCheckbox
                    checked={row.isSelected}
                    onChange={row.onSelect}
                  />

                  <div className="flex items-center w-[50%]">
                    <span className="text-white text-sm font-medium">
                      {row.label}
                    </span>
                    {row.subLabel && (
                      <span className="text-[#6A7A8C] hidden lg:block text-sm ml-1">
                        {row.subLabel}
                      </span>
                    )}
                  </div>
                  {row.hasCopy && (
                    <Copy
                      size={14}
                      className="text-[#B4B4B4] ml-2 cursor-pointer"
                    />
                  )}
                </div>

                {/* Balance */}
                <div className="flex items-center gap-2 text-white text-sm">
                  {row.icon && (
                    <div className="w-4 h-4 flex items-center justify-center">
                      {row.icon}
                    </div>
                  )}
                  {row.columns[0]}
                </div>

                {/* Use */}
                <div className="text-white text-sm flex items-center pl-2">
                  {row.columns[1]}
                </div>

                {/* Age */}
                <div className="text-white text-sm flex items-center pl-2">
                  {row.columns[2]}
                </div>
              </div>

              {/* Mobile Layout */}
              <div
                onClick={row.onSelect}
                className="md:hidden p-3 cursor-pointer"
              >
                {/* First row: Checkbox, Label, SubLabel, Copy */}
                <div className="flex items-center gap-3 mb-2">
                  <GradientCheckbox
                    checked={row.isSelected}
                    onChange={row.onSelect}
                  />
                  <div className="flex items-center gap-2 flex-1 flex-wrap">
                    <span className="text-white text-sm font-medium">
                      {row.label}
                    </span>
                    {row.subLabel && (
                      <span className="text-[#6A7A8C] text-sm">
                        {row.subLabel}
                      </span>
                    )}
                    {row.hasCopy && (
                      <Copy
                        size={12}
                        className="text-[#B4B4B4] cursor-pointer ml-auto"
                      />
                    )}
                  </div>
                </div>

                {/* Second row: Balance, Use, Age */}
                <div className="flex flex-wrap items-center gap-4 ml-7">
                  {/* Balance */}
                  <div className="flex items-center gap-1">
                    {row.icon && (
                      <div className="w-4 h-4 flex items-center justify-center">
                        {row.icon}
                      </div>
                    )}
                    <span className="text-white text-sm">{row.columns[0]}</span>
                  </div>

                  {/* Use */}
                  <div className="text-white text-sm">{row.columns[1]}</div>

                  {/* Age */}
                  <div className="text-white text-sm">{row.columns[2]}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataTable;
