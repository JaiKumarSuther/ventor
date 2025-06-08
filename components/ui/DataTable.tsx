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
    <div className="w-full border border-[#22242D] overflow-hidden">
      {/* Desktop/Tablet Table Header - Hidden on mobile */}
      <div className="hidden md:block overflow-x-auto">
        <div className="grid grid-cols-[2.5fr_1fr_1fr_0.5fr] bg-[#101017] px-4 lg:px-6 h-9 text-[#6A7A8C] text-xs font-medium items-center border-b border-[#22242D] min-w-[600px]">
          {headerColumns.map((header, idx) => (
            <span key={idx} className="truncate">{header}</span>
          ))}
        </div>
      </div>

      {/* Table Body */}
      <div className="overflow-y-auto overflow-x-auto md:overflow-x-hidden">
        {rows.map((row, idx) => {
          const bgColor = idx % 2 === 0 ? "" : "bg-[#FFFFFF05]";

          return (
            <div
              key={row.id}
              className={`border-t border-[#22242D] ${bgColor} min-w-full`}
            >
              {/* Desktop/Tablet Layout */}
              <div
                onClick={row.onSelect}
                className="hidden md:block overflow-x-auto cursor-pointer"
              >
                <div className="grid grid-cols-[2.5fr_1fr_1fr_0.5fr] items-center px-4 lg:px-6 h-[46px] min-w-[600px]">
                  {/* Label Column */}
                  <div className="flex items-center gap-2 min-w-0">
                    <GradientCheckbox
                      checked={row.isSelected}
                      onChange={row.onSelect}
                    />

                    <div className="flex items-center min-w-0 flex-1">
                      <span className="text-white text-sm font-medium truncate max-w-[120px] sm:max-w-[150px] lg:max-w-none">
                        {row.label}
                      </span>
                      {row.subLabel && (
                        <span className="text-[#6A7A8C] text-sm ml-1 truncate hidden lg:block">
                          {row.subLabel}
                        </span>
                      )}
                      {row.hasCopy && (
                        <Copy
                          size={14}
                          className="text-[#B4B4B4] ml-2 cursor-pointer flex-shrink-0"
                        />
                      )}
                    </div>
                  </div>

                  {/* Balance */}
                  <div className="flex items-center gap-2 text-white text-sm min-w-0">
                    {row.icon && (
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        {row.icon}
                      </div>
                    )}
                    <span className="truncate">{row.columns[0]}</span>
                  </div>

                  {/* Use */}
                  <div className="text-white text-sm flex items-center pl-2 min-w-0">
                    <span className="truncate">{row.columns[1]}</span>
                  </div>

                  {/* Age */}
                  <div className="text-white text-sm flex items-center pl-2 min-w-0">
                    <span className="truncate">{row.columns[2]}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div
                onClick={row.onSelect}
                className="md:hidden p-3 cursor-pointer"
              >
                {/* First row: Checkbox, Label, SubLabel, Copy */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 pt-0.5">
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
                          <Copy
                            size={12}
                            className="text-[#B4B4B4] cursor-pointer flex-shrink-0"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Second row: Data columns with labels */}
                <div className="ml-8 space-y-2">
                  {/* Balance */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#6A7A8C] text-xs">{headerColumns[1]}:</span>
                    <div className="flex items-center gap-1">
                      {row.icon && (
                        <div className="w-4 h-4 flex items-center justify-center">
                          {row.icon}
                        </div>
                      )}
                      <span className="text-white text-sm">{row.columns[0]}</span>
                    </div>
                  </div>

                  {/* Use */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#6A7A8C] text-xs">{headerColumns[2]}:</span>
                    <span className="text-white text-sm">{row.columns[1]}</span>
                  </div>

                  {/* Age */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#6A7A8C] text-xs">{headerColumns[3]}:</span>
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