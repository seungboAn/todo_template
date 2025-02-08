import React from 'react';
import { Todo, Priority } from '../../types/todo';
import { Button } from '../ui/Button';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, updates: Partial<Todo>) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  const priorityColors = {
    HIGH: 'text-red-600',
    MEDIUM: 'text-yellow-600',
    LOW: 'text-green-600'
  };

  const handleEdit = () => {
    const newTitle = prompt('Enter new title:', todo.title);
    if (newTitle && newTitle.trim() !== todo.title) {
      onEdit(todo.id, { title: newTitle.trim() });
    }
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onEdit(todo.id, { priority: e.target.value as Priority });
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 rounded border-gray-300"
        />
        <div>
          <h3 className={`font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.title}
          </h3>
          <div className="text-sm text-gray-500 space-x-2">
            <select
              value={todo.priority}
              onChange={handlePriorityChange}
              className={`${priorityColors[todo.priority]} bg-transparent border-none`}
            >
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>
            {todo.category && <span>• {todo.category}</span>}
            {todo.dueDate && (
              <span>• Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}; 