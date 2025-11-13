"use client";

import { Status } from "@/types";

import { Column } from "@/components/Columns";

export default function BoardPage() {
  
  const columns = [
    {
      id: "1",
      title: "To - Do List",
      status: "To-Do List" as Status,
      color: "yellow",
    },
    {
      id: "2",
      title: "In Progress",
      status: "In Progress" as Status,
      color: "blue",
    },
    {
      id: "3",
      title: "Not Started",
      status: "Not Started" as Status,
      color: "orange",
    },
    {
      id: "4",
      title: "Completed",
      status: "Completed" as Status,
      color: "green",
    },
  ];

  return (
    <div>
      <div className="flex-1 overflow-x-auto overflow-y-hidden py-3">
        <div className="flex gap-4 h-full">
          {columns.map((column) => (
            <Column
              key={column.id}
              title={column.title}
              status={column.status}
              color={column.color}
             
            />
          ))}
        </div>
      </div>
    </div>
  );
}
