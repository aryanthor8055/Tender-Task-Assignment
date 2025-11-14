import { useState, useEffect } from 'react';
import { Comment } from '@/types';
import { initialComments } from '@/data/mockData';

const STORAGE_KEY = 'kanban_comments';

export const useComments = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setComments(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse comments from localStorage', e);
      }
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    }
  }, [comments, isHydrated]);

  const getCommentsByTaskId = (taskId: string): Comment[] => {
    return comments.filter(comment => comment.taskId === taskId);
  };

  const addComment = (taskId: string, text: string, author: string = 'Current User') => {
    const newComment: Comment = {
      id: `c${Date.now()}`,
      taskId,
      author,
      authorAvatar: '👤',
      text,
      timestamp: 'Just now',
    };
    
    setComments(prevComments => [...prevComments, newComment]);
    return newComment;
  };

  const deleteComment = (commentId: string) => {
    setComments(prevComments =>
      prevComments.filter(comment => comment.id !== commentId)
    );
  };

  const updateComment = (commentId: string, text: string) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? { ...comment, text, timestamp: 'Edited just now' }
          : comment
      )
    );
  };

  const getCommentCount = (taskId: string): number => {
    return comments.filter(comment => comment.taskId === taskId).length;
  };

  return {
    comments,
    getCommentsByTaskId,
    addComment,
    deleteComment,
    updateComment,
    getCommentCount,
  };
};