import { useState } from 'react';
import { ViewType } from './types/todo';
import { useTodos } from './hooks/useTodos';
import { TodoForm } from './components/todo/TodoForm';
import { TodoFilterComponent } from './components/todo/TodoFilter';
import { GridView } from './components/views/GridView';
import { CalendarView } from './components/views/CalendarView';
import { Button } from './components/ui/Button';

function App() {
  const { todos, filter, setFilter, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodos();
  const [view, setView] = useState<ViewType>('GRID');

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <div className="space-x-2">
            <Button
              variant={view === 'GRID' ? 'primary' : 'secondary'}
              onClick={() => setView('GRID')}
            >
              Grid View
            </Button>
            <Button
              variant={view === 'CALENDAR' ? 'primary' : 'secondary'}
              onClick={() => setView('CALENDAR')}
            >
              Calendar View
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-8">
            <TodoForm onSubmit={addTodo} />
            <TodoFilterComponent filter={filter} onFilterChange={setFilter} />
          </div>

          <div className="md:col-span-3">
            {view === 'GRID' ? (
              <GridView
                todos={todos}
                filter={filter}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={updateTodo}
              />
            ) : (
              <CalendarView
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={updateTodo}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App; 