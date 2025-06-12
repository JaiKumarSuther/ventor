"use client";
import React from "react";
import GradientCheckbox from "@/components/ui/GradientCheckbox";
import Image from "next/image";

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
    <div className="h-full flex flex-col">
      {/* Desktop/Tablet Table Header - Hidden on mobile */}
      <div className="hidden md:block flex-shrink-0">
        <div className="grid grid-cols-[2.5fr_1fr_1fr_0.5fr] bg-[#101017] px-4 lg:px-6 h-9 text-[#6A7A8C] text-xs font-medium items-center border-b border-[#22242D]">
          {headerColumns.map((header, idx) => (
            <span key={idx} className="truncate">
              {header}
            </span>
          ))}
        </div>
      </div>

      {/* Table Body - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {rows.map((row, idx) => {
          const bgColor = idx % 2 === 0 ? "" : "bg-[#FFFFFF05]";

          return (
            <div
              key={row.id}
              className={`border-b border-[#22242D] last:border-b-0 ${bgColor}`}
            >
              {/* Desktop/Tablet Layout */}
              <div
                onClick={row.onSelect}
                className="hidden md:block cursor-pointer hover:bg-[#1A1A1A] transition-colors"
              >
                <div className="grid grid-cols-[2.5fr_1fr_1fr_0.5fr] items-center px-4 lg:px-6 h-[46px]">
                  {/* Label Column */}
                  <div className="flex items-center gap-2 min-w-0"
                   onClick={(e) => e.stopPropagation()}>
                    <GradientCheckbox
                      checked={row.isSelected}
                      onChange={row.onSelect}
                    />

                    <div className="flex items-center min-w-0 flex-1 gap-2">
                      <span className="text-white text-sm font-medium truncate">
                        {row.label}
                      </span>
                      {row.subLabel && (
                        <span className="text-[#6A7A8C] text-sm truncate hidden lg:block">
                          {row.subLabel}
                        </span>
                      )}
                      {row.hasCopy && (
                        <div className="flex-shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
                          <Image src="/assets/copy.svg" width={16} height={16} alt="copy" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Balance */}
                  <div className="flex items-center gap-2 text-white text-sm min-w-0">
                    <Image
                      src="/assets/salona.svg"
                      width={14}
                      height={14}
                      alt="salona"
                      className="w-3.5 h-3.5 flex-shrink-0"
                    />
                    <span className="truncate">{row.columns[0]}</span>
                  </div>

                  {/* Use */}
                  <div className="text-white text-sm min-w-0">
                    <span className="truncate">{row.columns[1]}</span>
                  </div>

                  {/* Age */}
                  <div className="text-white text-sm min-w-0">
                    <span className="truncate">{row.columns[2]}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div
                onClick={row.onSelect}
                className="md:hidden p-3 cursor-pointer hover:bg-[#1A1A1A] transition-colors"
              >
                {/* First row: Checkbox, Label, SubLabel, Copy */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 pt-0.5"
                  onClick={(e) => e.stopPropagation()}>
                    <GradientCheckbox
                      checked={row.isSelected}
                      onChange={row.onSelect}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white text-sm font-medium truncate flex-1">
                        {row.label}
                      </span>
                    </div>
                    {row.subLabel && (
                      <div className="flex items-center gap-2">
                        <div className="text-[#6A7A8C] text-xs truncate flex-1">
                          {row.subLabel}
                        </div>
                        {row.hasCopy && (
                          <div className="flex-shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
                            <Image src="/assets/copy.svg" width={16} height={16} alt="copy" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Second row: Data columns with labels */}
                <div className="ml-8 space-y-2">
                  {/* Balance */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#6A7A8C] text-xs">
                      {headerColumns[1]}:
                    </span>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/assets/salona.svg"
                        width={12}
                        height={12}
                        alt="salona"
                        className="w-3 h-3 flex-shrink-0"
                      />
                      <span className="text-white text-sm">
                        {row.columns[0]}
                      </span>
                    </div>
                  </div>

                  {/* Use */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#6A7A8C] text-xs">
                      {headerColumns[2]}:
                    </span>
                    <span className="text-white text-sm">{row.columns[1]}</span>
                  </div>

                  {/* Age */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#6A7A8C] text-xs">
                      {headerColumns[3]}:
                    </span>
                    <span className="text-white text-sm">{row.columns[2]}</span>
                  </div>
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