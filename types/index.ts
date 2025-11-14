export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Not Started' | 'To-Do List' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  assigneeAvatar: string;
  priority: Priority;
  dueDate: string;
  status: Status;
  comments: number;
  attachments: number;
}

export interface Comment {
  id: string;
  taskId: string;
  author: string;
  authorAvatar: string;
  text: string;
  timestamp: string;
}

export interface Column {
  id: string;
  title: string;
  status: Status;
  color: string;
  count: number;
}