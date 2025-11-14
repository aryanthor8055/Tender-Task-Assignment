import React from 'react';
import { Grip } from 'lucide-react';

interface BoardControlsProps {
  onViewDetails: () => void;
}

export const BoardControls: React.FC<BoardControlsProps> = ({ onViewDetails }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a0a] border-b border-gray-800 rounded-2xl">
      <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full p-1">
        <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white transition-colors">
          List View
        </button>
        <button className="px-6 py-2 border border-amber-300 text-white rounded-full font-medium">
          Board View
        </button>
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={onViewDetails}
          className="px-6 py-2 bg-[#1a1a1a] text-white rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
        >
          View Tender Details
        </button>
        <button className="px-6 py-2 bg-[#1a1a1a] text-white rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Grip className="w-4 h-4" />
          Columns
        </button>
      </div>
    </div>
  );
};