import React from "react";
import { Menu, Search, LayoutGrid, TrendingUp, Phone } from "lucide-react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-16 bg-black flex flex-col items-center py-6 gap-6 flex-shrink-0">
      <button className="p-3 hover:bg-gray-900 rounded-lg transition-colors">
        <Menu className="w-6 h-6 text-gray-400" />
      </button>

      <button className="p-3 hover:bg-gray-900 rounded-lg transition-colors">
        <Search className="w-6 h-6 text-gray-400" />
      </button>

      <button className="p-3 bg-orange-600 rounded-lg">
        <LayoutGrid className="w-6 h-6 text-white" />
      </button>

      <button className="p-3 hover:bg-gray-900 rounded-lg transition-colors">
        <TrendingUp className="w-6 h-6 text-gray-400" />
      </button>

      <button className="p-3 hover:bg-gray-900 rounded-lg transition-colors">
        <Phone className="w-6 h-6 text-gray-400" />
      </button>
    </aside>
  );
};
