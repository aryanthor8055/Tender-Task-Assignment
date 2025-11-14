import React from "react";
import {
  Calendar,
  Paperclip,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";
import { Task } from "@/types";

interface TaskCardProps {
  task: Task;
  onClick: (task: Task) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500";
      case "Not Started":
        return "bg-orange-500";
      case "To-Do List":
        return "bg-yellow-500";
      case "Completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-500/20 text-red-400";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400";
      case "Low":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div
      onClick={() => onClick(task)}
      className="bg-[#1f1f1f] rounded-lg p-4 cursor-pointer hover:bg-[#252525] transition-all duration-200 hover:shadow-lg hover:shadow-black/30 group"
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={`${getStatusColor(
            task.status
          )} text-white text-xs px-3 py-1 rounded-full flex items-center gap-1`}
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          {task.status}
        </span>
        <button className="p-1 hover:bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <h3 className="text-white font-medium text-base mb-2">{task.title}</h3>

      <p className="text-gray-400 text-sm mb-4">{task.description}</p>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-gray-400 text-sm">Assignee</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-gray-300 text-sm">{task.assignee}</span>
          <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs">
            {task.assigneeAvatar}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{task.dueDate}</span>
        </div>
        <span
          className={`${getPriorityColor(
            task.priority
          )} text-xs px-3 py-1 rounded-full font-medium`}
        >
          {task.priority}
        </span>
      </div>

      <div className="flex items-center gap-4 text-gray-400 text-sm pt-3 border-t border-gray-800">
        <div className="flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4" />
          <span>{task.comments} Comments</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Paperclip className="w-4 h-4" />
          <span>{task.attachments} Attachments</span>
        </div>
      </div>
    </div>
  );
};
