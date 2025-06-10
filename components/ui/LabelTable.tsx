"use client";
import React from "react";

interface LabelTableProps {
  rows: { label: string; content: React.ReactNode }[];
}

const LabelTable: React.FC<LabelTableProps> = ({ rows }) => {
  return (
    <table className="w-full text-left">
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="border-b border-[#22242D]">
            <td className="py-3 px-5 font-[500] text-[#6A7A8C] text-sm w-[40%] align-top">
              {row.label}
            </td>
            <td className="py-3 px-5">{row.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LabelTable;
