
'use client';
import React, { useState } from 'react';
import { Task, Status } from '@/types';
import { BoardControls } from '@/components/BoardControls';
import { Column } from '@/components/Columns';
import { TaskDetailModal } from '@/components/TaskDetailModal';
import { useTasks } from '@/hooks/useTasks';
import { useComments } from '@/hooks/useComments';

export default function BoardPage() {
  const { getTasksByStatus, updateTaskStatus } = useTasks();
  const { getCommentsByTaskId, addComment } = useComments();

  // Local UI state
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  // Column definitions with proper typing
  const columns = [
    { id: '1', title: 'To - Do List', status: 'To-Do List' as Status, color: 'yellow' },
    { id: '2', title: 'In Progress', status: 'In Progress' as Status, color: 'blue' },
    { id: '3', title: 'Not Started', status: 'Not Started' as Status, color: 'orange' },
    { id: '4', title: 'Completed', status: 'Completed' as Status, color: 'green' },
  ];

  // Handle task click to show details modal
  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  // Handle adding a new comment (stored in React state)
  const handleAddComment = (taskId: string, text: string) => {
    addComment(taskId, text);
  };

  // Drag and drop handlers - updates React state only
  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allow drop
  };

  const handleDrop = (newStatus: Status) => {
    if (draggedTask) {
      // Update task status in React state
      updateTaskStatus(draggedTask.id, newStatus);
      setDraggedTask(null);
    }
  };
  return (
    <div>  
        <div className="flex-1 flex flex-col overflow-hidden">
          
          <BoardControls onViewDetails={() => console.log('View details clicked')} />
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
           {selectedTask && (
         <TaskDetailModal
          task={selectedTask}
          comments={getCommentsByTaskId(selectedTask.id)}
          onClose={() => setSelectedTask(null)}
          onAddComment={handleAddComment}
        />
      )}
    </div>
  );
}