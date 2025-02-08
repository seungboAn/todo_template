import { useState } from 'react';
import { Priority } from '../../types/todo';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface TodoFormProps {
  onSubmit: (data: {
    title: string;
    priority: Priority;
    dueDate?: string;
    category?: string;
  }) => void;
}

export const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('MEDIUM');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      priority,
      dueDate: dueDate || undefined,
      category: category || undefined
    });
    setTitle('');
    setPriority('MEDIUM');
    setDueDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow">
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Enter todo title"
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Priority
        </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
      </div>

      <Input
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <Input
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
      />

      <Button type="submit" className="w-full">
        Add Todo
      </Button>
    </form>
  );
}; 