import { useState } from 'react';
import Calendar from 'react-calendar';
import { Todo } from '../../types/todo';
import { TodoItem } from '../todo/TodoItem';
import 'react-calendar/dist/Calendar.css';

interface CalendarViewProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, updates: Partial<Todo>) => void;
}

export const CalendarView = ({ todos, onToggle, onDelete, onEdit }: CalendarViewProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const todosForDate = todos.filter(todo => {
    if (!todo.dueDate) return false;
    const todoDate = new Date(todo.dueDate);
    return (
      todoDate.getFullYear() === selectedDate.getFullYear() &&
      todoDate.getMonth() === selectedDate.getMonth() &&
      todoDate.getDate() === selectedDate.getDate()
    );
  });

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Calendar
          onChange={(date: Date) => setSelectedDate(date)}
          value={selectedDate}
          tileContent={({ date }) => {
            const todosForTile = todos.filter(todo => {
              if (!todo.dueDate) return false;
              const todoDate = new Date(todo.dueDate);
              return (
                todoDate.getFullYear() === date.getFullYear() &&
                todoDate.getMonth() === date.getMonth() &&
                todoDate.getDate() === date.getDate()
              );
            });
            return todosForTile.length > 0 ? (
              <div className="text-xs text-blue-500">{todosForTile.length} todos</div>
            ) : null;
          }}
        />
      </div>
      
      <div className="md:w-1/2 space-y-4">
        <h3 className="font-medium text-lg">
          Todos for {selectedDate.toLocaleDateString()}
        </h3>
        {todosForDate.length === 0 ? (
          <p className="text-gray-500">No todos for this date</p>
        ) : (
          todosForDate.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}; 