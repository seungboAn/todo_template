import { TodoFilter } from '../../types/todo';
import { Input } from '../ui/Input';

interface TodoFilterProps {
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
}

export const TodoFilterComponent = ({ filter, onFilterChange }: TodoFilterProps) => {
  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <Input
        label="Search"
        value={filter.search}
        onChange={(e) => onFilterChange({ ...filter, search: e.target.value })}
        placeholder="Search todos..."
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={filter.completed === undefined ? '' : String(filter.completed)}
          onChange={(e) => {
            const value = e.target.value;
            onFilterChange({
              ...filter,
              completed: value === '' ? undefined : value === 'true'
            });
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All</option>
          <option value="true">Completed</option>
          <option value="false">Active</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Priority
        </label>
        <select
          value={filter.priority || ''}
          onChange={(e) => {
            const value = e.target.value;
            onFilterChange({
              ...filter,
              priority: value || undefined
            });
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
      </div>

      <Input
        label="Category"
        value={filter.category || ''}
        onChange={(e) => onFilterChange({
          ...filter,
          category: e.target.value || undefined
        })}
        placeholder="Filter by category"
      />
    </div>
  );
}; 