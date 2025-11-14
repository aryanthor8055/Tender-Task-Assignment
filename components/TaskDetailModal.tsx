import React, { useState } from 'react';
import { X, Calendar, Paperclip, MessageSquare, Send } from 'lucide-react';
import { Task, Comment } from '@/types';

interface TaskDetailModalProps {
  task: Task;
  comments: Comment[];
  onClose: () => void;
  onAddComment: (taskId: string, text: string) => void;
}

export const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  comments,
  onClose,
  onAddComment,
}) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment(task.id, commentText);
      setCommentText('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-500';
      case 'Not Started':
        return 'bg-orange-500';
      case 'To-Do List':
        return 'bg-yellow-500';
      case 'Completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/20 text-red-400';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Low':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
     
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-semibold text-white">{task.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
          <div className="flex items-center gap-3">
            <span className={`${getStatusColor(task.status)} text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2`}>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              {task.status}
            </span>
            <span className={`${getPriorityColor(task.priority)} text-sm px-4 py-1.5 rounded-full font-medium`}>
              {task.priority} Priority
            </span>
          </div>

        
          <div>
            <h3 className="text-white font-medium mb-2">Description</h3>
            <p className="text-gray-400">{task.description}</p>
          </div>

      
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-gray-500 text-sm mb-2">Assignee</h4>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  {task.assigneeAvatar}
                </div>
                <span className="text-white">{task.assignee}</span>
              </div>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm mb-2">Due Date</h4>
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4" />
                <span>{task.dueDate}</span>
              </div>
            </div>
          </div>

       
          <div>
            <h4 className="text-gray-500 text-sm mb-2 flex items-center gap-2">
              <Paperclip className="w-4 h-4" />
              Attachments ({task.attachments})
            </h4>
            <div className="text-gray-400 text-sm">No attachments to display</div>
          </div>

         
          <div>
            <h4 className="text-white font-medium mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Comments ({comments.length})
            </h4>
            
          
            <div className="space-y-4 mb-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {comment.authorAvatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-medium text-sm">{comment.author}</span>
                      <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

          
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 bg-[#0a0a0a] text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};