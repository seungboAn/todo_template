import React from 'react';
import { Todo, TodoFilter } from '../../types/todo';
import { TodoItem } from '../todo/TodoItem';

interface GridViewProps {
  todos: Todo[];
  filter: TodoFilter;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, updates: Partial<Todo>) => void;
}

export const GridView = ({ todos, filter, onToggle, onDelete, onEdit }: GridViewProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
      {todos.length === 0 && (
        <div className="col-span-full text-center text-gray-500">
          No todos found
        </div>
      )}
    </div>
  );
}; 