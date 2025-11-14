import { useState, useEffect } from 'react';
import { Task, Status } from '@/types';
import { initialTasks } from '@/data/mockData';

const STORAGE_KEY = 'kanban_tasks';

export const useTasks = () => {
  // Always initialize with initialTasks for SSR
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage after hydration
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTasks(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse tasks from localStorage', e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage whenever tasks change (but only after hydration)
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, isHydrated]);
  
  const getTasksByStatus = (status: Status): Task[] => {
    return tasks.filter(task => task.status === status);
  };

  const updateTaskStatus = (taskId: string, newStatus: Status) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, ...updates } : task
      )
    );
  };

  const addTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const getTaskById = (taskId: string): Task | undefined => {
    return tasks.find(task => task.id === taskId);
  };

  return {
    tasks,
    getTasksByStatus,
    updateTaskStatus,
    updateTask,
    addTask,
    deleteTask,
    getTaskById,
  };
};