import React from "react";
import { Search, Bell } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="px-6 py-3 flex items-center justify-between border-b border-b-gray-50">
      <h1 className="text-2xl font-semibold text-white">Tender Tasks</h1>

      <div className="flex-1 max-w-lg mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for Tenders"
            className="w-full bg-white text-gray-900 pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 hover:bg-gray-900 rounded-lg transition-colors">
          <Bell className="w-6 h-6 text-gray-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-semibold hover:bg-pink-600 transition-colors">
          S
        </button>
      </div>
    </header>
  );
};
