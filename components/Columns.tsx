import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import { Task, Status } from '@/types';
import { TaskCard } from './TaskCard';

interface ColumnProps {
  title: string;
  status: Status;
  tasks: Task[];
  color: string;
  onTaskClick: (task: Task) => void;
  onDragStart: (task: Task) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (status: Status) => void;
}

export const Column: React.FC<ColumnProps> = ({
  title,
  status,
  tasks,
  color,
  onTaskClick,
  onDragStart,
  onDragOver,
  onDrop,
}) => {
  
  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      yellow: 'text-yellow-500',
      blue: 'text-blue-500',
      orange: 'text-orange-500',
      green: 'text-green-500',
    };
    return colors[color] || 'text-gray-500';
  };

  return (
    <div
      className="flex-shrink-0 w-[340px] bg-[#0a0a0a] rounded-xl p-4 flex flex-col"
      onDragOver={onDragOver}
      onDrop={() => onDrop(status)}
    >
    
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`${getColorClass(color)} text-2xl`}>●</span>
          <h2 className="text-white font-semibold text-lg">{title}</h2>
          <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full font-medium">
            {tasks.length}
          </span>
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

 
      <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {tasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={() => onDragStart(task)}
            className="cursor-move"
          >
            <TaskCard task={task} onClick={onTaskClick} />
          </div>
        ))}
      </div>
    </div>
  );
};