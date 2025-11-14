
'use client';
import React, { useState } from 'react';
import { Task, Comment, Status } from '@/types';
import { initialTasks, initialComments } from '@/data/mockData';
import { Column } from '@/components/Columns';

export default function BoardPage() {
  // State management
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  // Column definitions
  const columns = [
    { id: '1', title: 'To - Do List', status: 'To-Do List' as Status, color: 'yellow' },
    { id: '2', title: 'In Progress', status: 'In Progress' as Status, color: 'blue' },
    { id: '3', title: 'Not Started', status: 'Not Started' as Status, color: 'orange' },
    { id: '4', title: 'Completed', status: 'Completed' as Status, color: 'green' },
  ];

  // Handle task click to show details
  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  
 
  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (newStatus: Status) => {
    if (draggedTask) {
      // Update task status
      setTasks(tasks.map(task =>
        task.id === draggedTask.id
          ? { ...task, status: newStatus }
          : task
      ));
      setDraggedTask(null);
    }
  };

  // Get tasks for a specific column
  const getTasksByStatus = (status: Status) => {
    return tasks.filter(task => task.status === status);
  };


  return (
    <div>  
          <div className="flex-1 overflow-x-auto overflow-y-hidden py-3">
            <div className="flex gap-4 h-full">
              {columns.map((column) => (
                <Column
                  key={column.id}
                  title={column.title}
                  status={column.status}
                  tasks={getTasksByStatus(column.status)}
                  color={column.color}
                  onTaskClick={handleTaskClick}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                />
              ))}
            </div>
          </div>
    </div>
  );
}