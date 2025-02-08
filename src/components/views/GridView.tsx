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
  const filteredTodos = todos.filter(todo => {
    if (filter.search && !todo.title.toLowerCase().includes(filter.search.toLowerCase())) {
      return false;
    }
    if (filter.completed !== undefined && todo.completed !== filter.completed) {
      return false;
    }
    if (filter.priority && todo.priority !== filter.priority) {
      return false;
    }
    if (filter.category && todo.category !== filter.category) {
      return false;
    }
    return true;
  });

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}; 