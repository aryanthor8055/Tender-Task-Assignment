import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import {  Status } from "@/types";

interface ColumnProps {
  title: string;
  status: Status;
  color: string;
}

export const Column: React.FC<ColumnProps> = ({ title, color }) => {
  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      yellow: "text-yellow-500",
      blue: "text-blue-500",
      orange: "text-orange-500",
      green: "text-green-500",
    };
    return colors[color] || "text-gray-500";
  };

  return (
    <div className="flex-shrink-0 w-[360px] bg-[#0a0a0a] rounded-xl p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`${getColorClass(color)} text-2xl`}>●</span>
          <h2 className="text-white font-semibold text-lg">{title}</h2>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-gray-800 rounded transition-colors">
            <Plus className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-1.5 hover:bg-gray-800 rounded transition-colors">
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
